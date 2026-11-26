/* Revierreise – eigene, leichte Karte (ohne Bibliothek)
   Kacheln: CARTO Voyager (Daten © OpenStreetMap-Mitwirkende).
   Kann: ziehen, zoomen (Knöpfe, Doppelklick, Mausrad nach Klick, zwei Finger),
   Revier-Fläche, Flughafen mit Anreiselinie, Vollbild. */
window.RR = window.RR || {};

RR.map = (function () {
  var TILE = 256, MIN_Z = 3, MAX_Z = 16;
  var SVGNS = 'http://www.w3.org/2000/svg';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var retina = (window.devicePixelRatio || 1) > 1.4 ? '@2x' : '';

  function project(lat, lng, z) {
    var s = TILE * Math.pow(2, z), sin = Math.sin(lat * Math.PI / 180);
    return { x: (lng + 180) / 360 * s, y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * s };
  }
  function unproject(x, y, z) {
    var s = TILE * Math.pow(2, z), n = Math.PI - 2 * Math.PI * y / s;
    return { lat: 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))), lng: x / s * 360 - 180 };
  }
  function km(a, b) {
    var R = 6371, dLat = (b.lat - a.lat) * Math.PI / 180, dLng = (b.lng - a.lng) * Math.PI / 180;
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function node(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; }
  function svg(tag, attrs) { var n = document.createElementNS(SVGNS, tag); for (var k in attrs) n.setAttribute(k, attrs[k]); return n; }

  /* opts: { revier:{lat,lng,label}, areaHa, airport:{lat,lng,code,label}, labels:{in,out,revier,travel,full,hint,attrib} } */
  function create(opts) {
    var L = opts.labels;
    var root = node('div', 'rr-map');
    var stage = node('div', 'rr-map-stage');
    var tiles = node('div', 'rr-map-tiles');
    var over = svg('svg', { class: 'rr-map-over' });
    var pins = node('div', 'rr-map-pins');
    stage.appendChild(tiles); stage.appendChild(over); stage.appendChild(pins);
    root.appendChild(stage);
    root.tabIndex = 0;
    root.setAttribute('role', 'application');
    root.setAttribute('aria-label', opts.ariaLabel || 'Karte');

    var z = 9, center = { lat: opts.revier.lat, lng: opts.revier.lng }, w = 0, h = 0, wheelOn = false;

    /* Stecknadeln */
    var pinRevier = node('div', 'rr-pin revier');
    pinRevier.appendChild(node('span', 'pulse'));
    var dot = node('span', 'dot');
    if (opts.icon) dot.appendChild(opts.icon);
    pinRevier.appendChild(dot);
    pinRevier.appendChild(node('span', 'tag', opts.revier.label));
    pins.appendChild(pinRevier);
    var pinAir = null, distTag = null;
    if (opts.airport) {
      pinAir = node('div', 'rr-pin air');
      var ad = node('span', 'dot');
      var plane = svg('svg', { viewBox: '0 0 24 24', width: '14', height: '14', 'aria-hidden': 'true' });
      plane.appendChild(svg('path', { d: 'M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z', fill: 'currentColor' }));
      ad.appendChild(plane);
      pinAir.appendChild(ad);
      pinAir.appendChild(node('span', 'tag', opts.airport.code + ' · ' + opts.airport.label));
      pins.appendChild(pinAir);
      distTag = node('div', 'rr-dist', '≈ ' + Math.round(km(opts.revier, opts.airport)) + ' km ' + L.air);
      pins.appendChild(distTag);
    }

    /* Bedienung */
    var ui = node('div', 'rr-map-ui');
    function btn(label, title, fn, cls) {
      var b = node('button', 'rr-map-btn' + (cls ? ' ' + cls : ''), label);
      b.type = 'button'; b.title = title; b.setAttribute('aria-label', title);
      b.addEventListener('click', function (e) { e.stopPropagation(); fn(); });
      return b;
    }
    var zoomBox = node('div', 'rr-map-zoom');
    zoomBox.appendChild(btn('+', L.in, function () { zoomAt(z + 1); }));
    zoomBox.appendChild(btn('−', L.out, function () { zoomAt(z - 1); }));
    ui.appendChild(zoomBox);
    var views = node('div', 'rr-map-views');
    var vRev = btn(L.revier, L.revier, function () { focusRevier(); setView(vRev); }, 'pill active');
    views.appendChild(vRev);
    if (opts.airport) {
      var vTr = btn(L.travel, L.travel, function () { fitAll(); setView(vTr); }, 'pill');
      views.appendChild(vTr);
    }
    views.appendChild(btn('⤢', L.full, toggleFull, 'pill icon'));
    ui.appendChild(views);
    function setView(b) { [].forEach.call(views.querySelectorAll('.pill'), function (x) { x.classList.toggle('active', x === b); }); }
    root.appendChild(ui);
    var hint = node('div', 'rr-map-hint', L.hint);
    root.appendChild(hint);
    var attrib = node('div', 'rr-map-attrib', L.attrib);
    root.appendChild(attrib);
    var zoomLbl = node('div', 'rr-map-zlvl');
    root.appendChild(zoomLbl);

    /* Zeichnen */
    var tileCache = {};
    function draw() {
      w = stage.clientWidth; h = stage.clientHeight;
      if (!w || !h) return;
      var c = project(center.lat, center.lng, z), ox = c.x - w / 2, oy = c.y - h / 2;
      var n = Math.pow(2, z), seen = {};
      var x0 = Math.floor(ox / TILE), x1 = Math.floor((ox + w) / TILE), y0 = Math.max(0, Math.floor(oy / TILE)), y1 = Math.min(n - 1, Math.floor((oy + h) / TILE));
      for (var tx = x0; tx <= x1; tx++) for (var ty = y0; ty <= y1; ty++) {
        var wx = ((tx % n) + n) % n, key = z + '/' + wx + '/' + ty, img = tileCache[key];
        if (!img) {
          img = document.createElement('img');
          img.alt = ''; img.draggable = false; img.className = 'rr-tile';
          img.onload = function () { this.classList.add('in'); };
          img.src = 'https://' + 'abcd'[(wx + ty) % 4] + '.basemaps.cartocdn.com/rastertiles/voyager/' + key + retina + '.png';
          tileCache[key] = img;
        }
        img.style.transform = 'translate(' + Math.round(tx * TILE - ox) + 'px,' + Math.round(ty * TILE - oy) + 'px)';
        seen[key] = 1;
        if (img.parentNode !== tiles) tiles.appendChild(img);
      }
      [].slice.call(tiles.children).forEach(function (t) {
        var k = Object.keys(tileCache).find(function (q) { return tileCache[q] === t; });
        if (!seen[k]) tiles.removeChild(t);
      });
      tiles.style.transform = '';

      /* Overlay */
      while (over.firstChild) over.removeChild(over.firstChild);
      over.setAttribute('width', w); over.setAttribute('height', h);
      var defs = svg('defs', {});
      var grad = svg('radialGradient', { id: 'rrArea' });
      grad.appendChild(svg('stop', { offset: '0%', 'stop-color': '#B8430F', 'stop-opacity': '.30' }));
      grad.appendChild(svg('stop', { offset: '100%', 'stop-color': '#B8430F', 'stop-opacity': '.06' }));
      defs.appendChild(grad); over.appendChild(defs);
      var rp = project(opts.revier.lat, opts.revier.lng, z), rx = rp.x - ox, ry = rp.y - oy;
      var mpp = 156543.03 * Math.cos(opts.revier.lat * Math.PI / 180) / n;
      var radius = Math.sqrt((opts.areaHa || 1000) * 10000 / Math.PI) / mpp;
      over.appendChild(svg('circle', { cx: rx, cy: ry, r: Math.max(radius, 10), fill: 'url(#rrArea)', stroke: '#B8430F', 'stroke-width': '2', 'stroke-dasharray': '6 5', class: 'rr-area' }));
      pinRevier.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      if (opts.airport) {
        var ap = project(opts.airport.lat, opts.airport.lng, z), axx = ap.x - ox, ayy = ap.y - oy;
        var mx = (rx + axx) / 2, my = (ry + ayy) / 2, dx = axx - rx, dy = ayy - ry, len = Math.sqrt(dx * dx + dy * dy) || 1;
        var cx2 = mx - dy / len * len * 0.18, cy2 = my + dx / len * len * 0.18; /* leichte Kurve */
        over.appendChild(svg('path', { d: 'M' + axx + ',' + ayy + ' Q' + cx2 + ',' + cy2 + ' ' + rx + ',' + ry, fill: 'none', stroke: '#1F3A2B', 'stroke-width': '2.5', 'stroke-dasharray': '2 7', 'stroke-linecap': 'round', class: 'rr-route' }));
        pinAir.style.transform = 'translate(' + axx + 'px,' + ayy + 'px)';
        distTag.style.transform = 'translate(' + (0.25 * axx + 0.5 * cx2 + 0.25 * rx) + 'px,' + (0.25 * ayy + 0.5 * cy2 + 0.25 * ry) + 'px)';
      }
      zoomLbl.textContent = 'Zoom ' + z;
    }

    function clampZ(v) { return Math.max(MIN_Z, Math.min(MAX_Z, v)); }
    /* Zoomen um einen Punkt (Pixel im Kartenfeld), mit kurzer Skalier-Animation */
    function zoomAt(nz, px, py) {
      nz = clampZ(nz);
      if (nz === z) return;
      if (px == null) { px = w / 2; py = h / 2; }
      var c = project(center.lat, center.lng, z);
      var wx = c.x - w / 2 + px, wy = c.y - h / 2 + py;
      var f = Math.pow(2, nz - z);
      var nc = { x: wx * f - (px - w / 2), y: wy * f - (py - h / 2) };
      var after = function () { z = nz; center = unproject(nc.x, nc.y, nz); stage.classList.remove('zooming'); draw(); };
      if (reduce) return after();
      stage.classList.add('zooming');
      stage.style.transformOrigin = px + 'px ' + py + 'px';
      stage.style.transform = 'scale(' + f + ')';
      setTimeout(function () { stage.style.transform = ''; after(); }, 260);
    }
    function panBy(dx, dy) {
      var c = project(center.lat, center.lng, z);
      center = unproject(c.x - dx, c.y - dy, z);
      draw();
    }
    function fitAll() {
      if (!opts.airport) return focusRevier();
      var pad = 90;
      for (var t = MAX_Z; t >= MIN_Z; t--) {
        var a = project(opts.revier.lat, opts.revier.lng, t), b = project(opts.airport.lat, opts.airport.lng, t);
        if (Math.abs(a.x - b.x) < w - pad * 2 && Math.abs(a.y - b.y) < h - pad * 2) { z = t; break; }
      }
      var m = project(opts.revier.lat, opts.revier.lng, z), n2 = project(opts.airport.lat, opts.airport.lng, z);
      center = unproject((m.x + n2.x) / 2, (m.y + n2.y) / 2, z);
      draw();
    }
    function focusRevier() {
      var r = Math.sqrt((opts.areaHa || 1000) * 10000 / Math.PI);
      for (var t = MAX_Z; t >= MIN_Z; t--) {
        var mpp = 156543.03 * Math.cos(opts.revier.lat * Math.PI / 180) / Math.pow(2, t);
        if (r / mpp * 2 < Math.min(w, h) * 0.55) { z = t; break; }
      }
      center = { lat: opts.revier.lat, lng: opts.revier.lng };
      draw();
    }
    function toggleFull() {
      root.classList.toggle('full');
      document.body.classList.toggle('rr-map-lock', root.classList.contains('full'));
      setTimeout(draw, 30);
    }

    /* Ziehen und zwei-Finger-Zoom */
    var pointers = {}, last = null, pinchStart = 0;
    stage.addEventListener('pointerdown', function (e) {
      if (e.target.closest('.rr-pin')) return;
      stage.setPointerCapture(e.pointerId);
      pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      last = { x: e.clientX, y: e.clientY };
      root.classList.add('grabbing');
      var ids = Object.keys(pointers);
      if (ids.length === 2) { var a = pointers[ids[0]], b = pointers[ids[1]]; pinchStart = Math.hypot(a.x - b.x, a.y - b.y); }
    });
    stage.addEventListener('pointermove', function (e) {
      if (!pointers[e.pointerId]) return;
      pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(pointers);
      if (ids.length === 2) {
        var a = pointers[ids[0]], b = pointers[ids[1]], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinchStart && Math.abs(Math.log2(d / pinchStart)) > 0.6) {
          var r = stage.getBoundingClientRect();
          zoomAt(z + (d > pinchStart ? 1 : -1), (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
          pinchStart = d;
        }
        return;
      }
      panBy(e.clientX - last.x, e.clientY - last.y);
      last = { x: e.clientX, y: e.clientY };
    });
    function up(e) {
      delete pointers[e.pointerId];
      var ids = Object.keys(pointers);
      if (ids.length) last = pointers[ids[0]]; else root.classList.remove('grabbing');
      pinchStart = 0;
    }
    stage.addEventListener('pointerup', up);
    stage.addEventListener('pointercancel', up);
    stage.addEventListener('dblclick', function (e) {
      var r = stage.getBoundingClientRect();
      zoomAt(z + (e.shiftKey ? -1 : 1), e.clientX - r.left, e.clientY - r.top);
    });

    /* Mausrad erst nach einem Klick in die Karte – sonst scrollt die Seite normal weiter */
    var wheelAcc = 0, wheelLock = false;
    root.addEventListener('click', function () { wheelOn = true; root.classList.add('active'); });
    root.addEventListener('mouseleave', function () { wheelOn = false; root.classList.remove('active'); });
    root.addEventListener('wheel', function (e) {
      if (!wheelOn && !e.ctrlKey && !root.classList.contains('full')) { root.classList.add('show-hint'); clearTimeout(root._h); root._h = setTimeout(function () { root.classList.remove('show-hint'); }, 1300); return; }
      e.preventDefault();
      if (wheelLock) return;
      wheelAcc += e.deltaY;
      if (Math.abs(wheelAcc) > 40) {
        var r = stage.getBoundingClientRect();
        zoomAt(z + (wheelAcc < 0 ? 1 : -1), e.clientX - r.left, e.clientY - r.top);
        wheelAcc = 0; wheelLock = true; setTimeout(function () { wheelLock = false; }, 300);
      }
    }, { passive: false });

    /* Tastatur */
    root.addEventListener('keydown', function (e) {
      var k = e.key;
      if (k === '+' || k === '=') zoomAt(z + 1);
      else if (k === '-') zoomAt(z - 1);
      else if (k === 'ArrowLeft') panBy(80, 0);
      else if (k === 'ArrowRight') panBy(-80, 0);
      else if (k === 'ArrowUp') panBy(0, 80);
      else if (k === 'ArrowDown') panBy(0, -80);
      else if (k === 'Escape' && root.classList.contains('full')) toggleFull();
      else return;
      e.preventDefault();
    });

    var started = false;
    function refresh() {
      if (!stage.clientWidth) return;
      if (!started) { started = true; focusRevier(); } else draw();
    }
    if (window.ResizeObserver) new ResizeObserver(refresh).observe(stage);
    window.addEventListener('resize', refresh);

    return { el: root, refresh: refresh, zoomIn: function () { zoomAt(z + 1); }, zoomOut: function () { zoomAt(z - 1); }, getZoom: function () { return z; }, km: km };
  }

  return { create: create, km: km };
})();
