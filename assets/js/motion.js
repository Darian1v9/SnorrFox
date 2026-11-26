/* Bewegung & Effekte – angelehnt an moderne Agentur-Seiten, mit Jagd-Charakter.
 * Respektiert "Bewegung reduzieren" im Betriebssystem: dann bleibt alles ruhig. */
window.RR = window.RR || {};

RR.motion = (function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var io = null, countIO = null;

  if ('IntersectionObserver' in window && !reduce) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var t = e.target; t.classList.add('visible'); io.unobserve(t);
          setTimeout(function () { t.style.transitionDelay = ''; t.classList.add('settled'); }, 1400);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { countUp(e.target); countIO.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
  }

  /* ---------- Zahlen hochzählen ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-target')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = target.toLocaleString('de-DE') + suffix; return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e).toLocaleString('de-DE') + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Karten kippen + Lichtfleck ---------- */
  function bindTilt(el) {
    el.setAttribute('data-tilt', '1');
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.style.transform = 'perspective(900px) rotateY(' + (px - 0.5) * 7 + 'deg) rotateX(' + (0.5 - py) * 7 + 'deg) translateY(-4px)';
      el.style.setProperty('--mx', px * 100 + '%');
      el.style.setProperty('--my', py * 100 + '%');
    });
    el.addEventListener('mouseleave', function () { el.style.transform = ''; });
  }

  /* ---------- Magnetische Buttons ---------- */
  function bindMagnet(el) {
    el.setAttribute('data-mag', '1');
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * 0.25 + 'px,' + (e.clientY - r.top - r.height / 2) * 0.35 + 'px)';
    });
    el.addEventListener('mouseleave', function () { el.style.transform = ''; });
  }

  /* Neue Elemente (auch nachträglich gerenderte) einhängen */
  function scan(root) {
    root = root || document;
    root.querySelectorAll('.stagger').forEach(function (group) {
      [].slice.call(group.children).forEach(function (child, i) {
        if (child.classList.contains('reveal')) child.style.transitionDelay = Math.min(i, 8) * 70 + 'ms';
      });
    });
    root.querySelectorAll('.reveal:not([data-rv])').forEach(function (el) {
      el.setAttribute('data-rv', '1');
      if (io) io.observe(el); else el.classList.add('visible');
    });
    root.querySelectorAll('[data-target]:not([data-cnt])').forEach(function (el) {
      el.setAttribute('data-cnt', '1');
      if (countIO) countIO.observe(el); else countUp(el);
    });
    if (hover && !reduce) {
      root.querySelectorAll('.tilt:not([data-tilt])').forEach(bindTilt);
      root.querySelectorAll('[data-magnetic]:not([data-mag])').forEach(bindMagnet);
    }
  }

  /* ---------- Wechselnde Worte in der Überschrift ---------- */
  var rotTimer = null;
  function rotator(container, words) {
    if (!container) return;
    clearInterval(rotTimer);
    while (container.firstChild) container.removeChild(container.firstChild);
    var spans = words.map(function (w, i) {
      var s = document.createElement('span');
      s.className = 'word' + (i === 0 ? ' active' : '');
      s.textContent = w;
      container.appendChild(s);
      return s;
    });
    if (reduce || spans.length < 2) return;
    var i = 0;
    rotTimer = setInterval(function () {
      spans[i].classList.remove('active');
      i = (i + 1) % spans.length;
      spans[i].classList.add('active');
    }, 2600);
  }

  /* ---------- Gesamtpreis weich zum neuen Wert zählen ---------- */
  var lastValue = {};
  function tween(el, key, to, format) {
    var from = lastValue[key];
    lastValue[key] = to;
    if (reduce || from === undefined || from === to) { el.textContent = format(to); return; }
    var start = null, dur = 550;
    el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = format(from + (to - from) * e);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Scroll: Kopfzeile, Fortschritt, Parallax ---------- */
  function initScroll() {
    var bar = document.createElement('div');
    bar.id = 'scrollProgress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    var header = document.querySelector('.site-header');
    var heroBg = document.querySelector('.hero-bg');
    var bands = [].slice.call(document.querySelectorAll('.band-bg'));
    var ticking = false;
    function update() {
      ticking = false;
      var y = window.scrollY || window.pageYOffset;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
      if (header) header.classList.toggle('shrink', y > 24);
      if (reduce) return;
      if (heroBg && y < window.innerHeight * 1.2) heroBg.style.translate = '0 ' + (y * 0.3).toFixed(1) + 'px';
      bands.forEach(function (b) {
        var r = b.parentNode.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          var c = (r.top + r.height / 2 - window.innerHeight / 2) * -0.15;
          b.style.translate = '0 ' + c.toFixed(1) + 'px';
        }
      });
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ---------- Cursor: Zielfernrohr-Ring ---------- */
  function initCursor() {
    if (!hover || reduce) return;
    var ring = document.createElement('div');
    ring.className = 'cursor-scope';
    ring.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ring);
    var cx = -100, cy = -100, tx = cx, ty = cy, shown = false;
    window.addEventListener('mousemove', function (e) {
      tx = e.clientX; ty = e.clientY;
      if (!shown) { shown = true; cx = tx; cy = ty; ring.classList.add('on'); }
      var t = e.target.closest && e.target.closest('a, button, .species-tile, .rec-card, .opt, select, input, label');
      ring.classList.toggle('big', !!t);
    }, { passive: true });
    document.addEventListener('mouseleave', function () { ring.classList.remove('on'); shown = false; });
    (function loop() {
      cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
      ring.style.transform = 'translate(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px)';
      requestAnimationFrame(loop);
    })();
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.classList.add('js-motion');
    initScroll();
    initCursor();
    scan();
  });

  return { scan: scan, rotator: rotator, tween: tween, reduce: reduce };
})();
