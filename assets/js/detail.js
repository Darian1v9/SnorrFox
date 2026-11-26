/* Angebotsseite: Baukasten mit Live-Preis */
(function () {
  var U = RR.util, P = RR.pricing, el = U.el;
  var params = new URLSearchParams(location.search);
  var lang = U.getLang();
  var offer = RR.OFFERS.filter(function (o) { return o.id === params.get('id'); })[0] || null;
  var state = offer ? P.initialState(offer, Number(params.get('h')) || 1, Number(params.get('g')) || 0) : null;
  var content = document.getElementById('content');
  var T = function (k, v) { return U.t(lang, k, v); };
  var L = function (obj) { return U.pick(obj, lang); }; // [Titel, Untertitel] in der aktuellen Sprache

  function set(patch) { state = Object.assign({}, state, patch); render(); }
  function setTrophy(sp, id) { var t = Object.assign({}, state.trophy); t[sp] = id; set({ trophy: t }); }

  /* ---------- Bausteine ---------- */
  function option(fid, label, sub, price, selected, disabled, onPick) {
    return el('button', { type: 'button', class: 'opt', 'data-fid': fid, 'aria-pressed': String(!!selected), disabled: disabled, onclick: onPick },
      el('span', { class: 'row' }, el('span', { class: 'lbl' }, label), el('span', { class: 'pr' }, price)),
      sub && el('span', { class: 'sub' }, sub));
  }
  function card(num, title, hint) {
    var body = el('section', { class: 'card' },
      el('div', { class: 'card-head' }, el('span', { class: 'num', 'aria-hidden': 'true' }, String(num)),
        el('div', null, el('h2', null, title), hint && el('p', null, hint))));
    for (var i = 3; i < arguments.length; i++) U.append(body, arguments[i]);
    return body;
  }
  function counter(fid, label, sub, value, min, max, lessLbl, moreLbl, key) {
    return el('div', { class: 'counter' },
      el('div', null, el('span', { class: 'lbl' }, label), el('span', { class: 'sub' }, sub)),
      el('div', { class: 'ctl' },
        el('button', { type: 'button', class: 'round', 'data-fid': fid + '-', 'aria-label': lessLbl, disabled: value <= min, onclick: function () { var p = {}; p[key] = Math.max(min, value - 1); set(p); } }, '−'),
        el('span', { class: 'val', 'aria-live': 'polite' }, String(value)),
        el('button', { type: 'button', class: 'round', 'data-fid': fid + '+', 'aria-label': moreLbl, disabled: value >= max, onclick: function () { var p = {}; p[key] = Math.min(max, value + 1); set(p); } }, '+')));
  }

  function staysBlock(o) {
    var persons = state.h + state.g;
    return el('div', { class: 'stays' },
      el('div', { class: 'stays-head' }, el('h3', null, T('staysTitle')), el('span', null, T('staysSource'))),
      el('p', { class: 'intro' }, T('staysText')),
      P.stays(o, state).map(function (x) {
        var st = x.stay, sel = state.stay === st.id && x.available;
        var av = !x.available ? (x.left === 0 ? T('availNone') : T('availTooSmall', { n: persons })) : (x.few ? T('availFew', { n: x.left }) : T('availOk'));
        return el('div', { class: 'stay' + (sel ? ' sel' : '') + (!x.available ? ' dis' : '') },
          el('button', { type: 'button', class: 'stay-pick', 'data-fid': 'stay-' + st.id, 'aria-pressed': String(sel), disabled: !x.available, onclick: function () { set({ stay: st.id }); } },
            el('span', { class: 'name' }, st.name),
            el('span', { class: 'm' }, L(st.type) + ' · ' + T('kmTo', { n: st.km }) + ' · ' + L(st.unit)),
            el('span', { class: !x.available ? 'av-no' : (x.few ? 'av-few' : 'av-ok') }, '● ' + av)),
          el('div', { class: 'stay-price' },
            el('span', { class: 'pn' }, T('perNight', { v: U.eur(st.night) })),
            el('span', { class: 'tot' }, U.eur(x.total)),
            el('span', { class: 'u' }, T('nightsUnits', { u: x.units, unit: L(st.unit), n: o.nights })),
            el('a', { href: st.url, target: '_blank', rel: 'noopener' }, T('viewStay'))));
      }));
  }

  function config(o, r) {
    var n = 0, persons = state.h + state.g;
    var cards = [];

    cards.push(card(++n, T('stepDate'), o.includes,
      el('div', { class: 'options' }, o.termine.map(function (t) {
        return option('t-' + t.id, t.label, t.sub + ' · ' + (t.free ? T('freeOf', { n: t.free }) : T('soldOut')),
          t.free ? U.eur(o.base) + ' ' + T('perHunterShort') : '', state.termin === t.id, !t.free, function () { set({ termin: t.id }); });
      }))));

    cards.push(card(++n, T('stepPeople'), T('stepPeopleHint'),
      el('div', { class: 'people' },
        counter('h', T('hunters'), T('hunterSub'), state.h, 1, o.capacity, T('lessHunter'), T('moreHunter'), 'h'),
        counter('g', T('guests'), T('guestSub', { v: U.eur(RR.SHARED.guestFee) }), state.g, 0, 10, T('lessGuest'), T('moreGuest'), 'g')),
      r.overCapacity && el('p', { class: 'warn', role: 'status' }, T('notEnough', { n: r.termin.free }))));

    o.trophies.forEach(function (sp) {
      var def = RR.TROPHY[sp];
      var chosen = P.find(def.classes, state.trophy[sp]);
      var shot = chosen && chosen.id !== 'none';
      var prepSel = (state.prep || {})[sp] || 'none';
      cards.push(card(++n, T('stepTrophy', { s: L(def) }), T('stepTrophyHint', { note: L(def.note) }),
        el('div', { class: 'options' }, def.classes.map(function (c) {
          return option('tr-' + sp + '-' + c.id, L(c)[0], c.price ? L(c)[1] + ' · ' + T('range', { a: U.eur(c.min), b: U.eur(c.max) }) : L(c)[1],
            c.price ? T('approx', { v: U.eur(c.price) }) : '0 €', state.trophy[sp] === c.id, false, function () { setTrophy(sp, c.id); });
        })),
        shot && el('div', { class: 'prep-box' },
          el('div', { class: 'prep-head' },
            el('span', { class: 'prep-arrow', 'aria-hidden': 'true' }, '↳'),
            el('div', null,
              el('h3', null, T('prepFor', { s: L(chosen)[0] })),
              el('p', null, T('prepHint')))),
          el('div', { class: 'options compact' }, RR.PREP[sp].map(function (p) {
            return option('pp-' + sp + '-' + p.id, L(p)[0],
              p.price ? L(p)[1] + ' · ' + T('range', { a: U.eur(p.min), b: U.eur(p.max) }) : L(p)[1],
              p.price ? T('approxPlus', { v: U.eur(p.price) }) : '0 €', prepSel === p.id, false,
              function () { var x = Object.assign({}, state.prep); x[sp] = p.id; set({ prep: x }); });
          })))));
    });

    cards.push(card(++n, T('stepWeapon'), T('stepWeaponHint'),
      el('div', { class: 'options' }, RR.SHARED.weapon.map(function (w) {
        var na = w.id === 'leih' && !o.rental;
        var sub = na ? T('rentalNA') : L(w)[1] + (w.perDay ? ' · ' + T('perDayNote', { v: U.eur(w.perDay) }) : '');
        return option('w-' + w.id, L(w)[0], sub, w.perDay ? T('plusPH', { v: U.eur(w.perDay * o.days) }) : T('inclusive'),
          state.weapon === w.id, na, function () { set({ weapon: w.id }); });
      }))));

    cards.push(card(++n, T('stepGuide'), T('stepGuideHint'),
      el('div', { class: 'options' }, RR.SHARED.guide.map(function (gd) {
        return option('gd-' + gd.id, L(gd)[0], L(gd)[1] + (gd.perDay ? ' · ' + T('perDayNote', { v: U.eur(gd.perDay) }) : ''),
          gd.perDay ? T('plusPH', { v: U.eur(gd.perDay * o.days) }) : T('inclusive'), state.guide === gd.id, false, function () { set({ guide: gd.id }); });
      }))));

    var lodgingOpts = [option('l-none', T('lodgingNone')[0], T('lodgingNone')[1], T('inclusive'), state.lodging === 'none', false, function () { set({ lodging: 'none' }); })]
      .concat(o.lodging.map(function (l) {
        return option('l-' + l.id, L(l)[0], L(l)[1] + ' · ' + o.nights + ' × ' + U.eur(l.perNight), T('plusPP', { v: U.eur(l.perNight * o.nights) }),
          state.lodging === l.id, false, function () { set({ lodging: l.id }); });
      }));
    if (o.stays) {
      var min = Math.min.apply(null, RR.STAYS[o.stays].map(function (s) { return s.night; }));
      lodgingOpts.push(option('l-extern', T('lodgingExt')[0], T('lodgingExt')[1], T('fromNight', { v: U.eur(min) }),
        state.lodging === 'extern', false, function () { set({ lodging: 'extern' }); }));
    }
    var ext = state.lodging === 'extern';
    cards.push(card(++n, T('stepLodging'), T('stepLodgingHint', { n: persons }),
      el('div', { class: 'options' }, lodgingOpts),
      ext && staysBlock(o),
      ext && !r.chosenStay && el('p', { class: 'warn', role: 'status' }, T('pickStay'))));

    cards.push(card(++n, T('stepTravel'), T('stepTravelHint', { n: persons }),
      el('div', { class: 'options' }, o.travel.map(function (t) {
        return option('tv-' + t.id, L(t)[0], L(t)[1], t.price ? T('plusPP', { v: U.eur(t.price) }) : T('inclusive'),
          state.travel === t.id, false, function () { set({ travel: t.id }); });
      }))));

    return el('div', { class: 'config' },
      el('div', { class: 'rec-box' },
        el('div', { class: 'txt' }, el('span', { class: 'eyebrow' }, T('recBox')), el('span', null, T('recBoxText'))),
        el('div', { class: 'actions' },
          el('button', { type: 'button', class: 'btn dark', 'data-fid': 'rec', onclick: function () { state = P.applyRecommended(o, state); render(); } }, T('applyRec')),
          el('button', { type: 'button', class: 'btn outline', 'data-fid': 'reset', onclick: function () { state = P.initialState(o, state.h, state.g); render(); } }, T('resetAll')))),
      cards);
  }

  function lineText(o, l, r) {
    var x = '';
    switch (l.key) {
      case 'base': return [T('lineBase'), l.qty + ' × ' + U.eur(l.unit) + ' · ' + r.termin.label];
      case 'guests': return [T('lineGuests'), l.qty + ' × ' + U.eur(l.unit)];
      case 'weapon': return [T('lineWeapon'), l.qty + ' × ' + U.eur(l.unit)];
      case 'guide': return [T('lineGuide'), l.qty + ' × ' + U.eur(l.unit)];
      case 'lodging': case 'travel': return [L(l.item)[0], l.qty + ' × ' + U.eur(l.unit)];
      case 'prep': return ['+ ' + L(l.item)[0] + ' (' + L(RR.TROPHY[l.species]) + ')', l.qty + ' × ' + T('approx', { v: U.eur(l.unit) }) + ' · ' + T('range', { a: U.eur(l.min), b: U.eur(l.max) })];
      case 'stay': return [l.item.stay.name, T('selfBookSub') + ' · ' + T('nightsUnits', { u: l.item.units, unit: L(l.item.stay.unit), n: o.nights })];
      case 'trophy': return [L(l.item)[0], l.qty + ' × ' + T('approx', { v: U.eur(l.unit) }) + ' · ' + T('range', { a: U.eur(l.min), b: U.eur(l.max) })];
    }
    return [l.key, x];
  }

  function sumGroup(title, lines, sum, range, o, r, cls) {
    return el('div', { class: 'sum-group' + (cls ? ' ' + cls : '') },
      el('div', { class: 'sum-head' }, el('span', null, title), el('strong', null, sum)),
      range && el('div', { class: 'sum-range' }, range),
      el('div', { class: 'lines' }, lines.map(function (l) {
        var tx = lineText(o, l, r);
        return el('div', { class: 'line' + (l.key === 'prep' ? ' sub-line' : '') },
          el('span', { class: 'l' }, tx[0], el('small', null, tx[1])), el('span', { class: 'a' }, U.eur(l.amount)));
      })));
  }

  function summary(o, r) {
    return el('aside', { class: 'summary', 'aria-label': T('sumTitle') },
      el('div', { class: 'head' }, el('h2', null, T('sumTitle')),
        el('span', null, r.termin.label + ' · ' + T('huntersN', { n: state.h }) + (state.g ? T('guestsShort', { n: state.g }) : ''))),
      sumGroup(T('fixHead'), r.lines.filter(function (l) { return !l.variable; }), U.eur(r.fix), null, o, r),
      r.variable > 0 && sumGroup(T('varHead'), r.lines.filter(function (l) { return l.variable; }), T('approx', { v: U.eur(r.variable) }),
        T('range', { a: U.eur(r.variableMin), b: U.eur(r.variableMax) }), o, r, 'var'),
      el('div', { class: 'total' },
        el('span', { class: 't1' }, T('total')),
        el('span', { class: 't2', 'aria-live': 'polite' }, (r.variable > 0 ? T('approxShort') + ' ' : '') + U.eur(r.total)),
        r.variable > 0 && el('span', { class: 't-range' }, T('totalRange', { a: U.eur(r.totalMin), b: U.eur(r.totalMax) })),
        el('span', { class: 't3' }, T('perHunterTotal', { v: U.eur(r.perHunter) }) + (state.g ? T('guestsIncluded') : ''))),
      r.chosenStay && el('p', { class: 'warn' }, T('selfBookNote', { name: r.chosenStay.stay.name })),
      el('button', { type: 'button', class: 'btn', 'data-fid': 'enquire', 'data-magnetic': '', disabled: r.overCapacity, onclick: openEnquiry }, T('enquire')),
      el('p', { class: 'small' }, T('noPrepay')),
      el('div', { class: 'needs' },
        el('strong', null, T('needTitle')),
        el('span', null, '✓ ' + T('needLicense')),
        el('span', null, '✓ ' + T('needInsurance')),
        el('span', null, '✓ ' + (state.weapon === 'eigen' ? T('needPass') : T('needNoPass'))),
        o.art === 'Drückjagd' && el('span', null, '✓ ' + T('needShooting'))));
  }

  /* ---------- Anfrage per E-Mail-Programm ---------- */
  var dialog = document.getElementById('enquiry');
  function openEnquiry() { if (dialog.showModal) dialog.showModal(); else dialog.setAttribute('open', ''); }
  document.getElementById('enq-cancel').addEventListener('click', function () { dialog.close(); });
  document.getElementById('enq-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, r = P.calc(offer, state);
    var lines = [
      offer.title + ' (' + offer.land + ', ' + offer.region + ')',
      r.termin.label + ' · ' + T('huntersN', { n: state.h }) + (state.g ? T('guestsShort', { n: state.g }) : ''),
      ''
    ].concat(r.lines.map(function (l) { var tx = lineText(offer, l, r); return '- ' + tx[0] + ' (' + tx[1] + '): ' + U.eur(l.amount); }))
      .concat(['', T('total') + ': ' + U.eur(r.total), '', f.name.value, f.email.value, f.phone.value, '', f.msg.value]);
    location.href = 'mailto:' + RR.CONFIG.contactEmail +
      '?subject=' + encodeURIComponent(T('mailSubject', { t: offer.title })) +
      '&body=' + encodeURIComponent(lines.join('\n'));
    dialog.close();
  });

  /* ---------- Bildergalerie: läuft automatisch durch ---------- */
  var cache = { lang: null, gallery: null, map: null, mapApi: null };
  function gallery(o) {
    var idx = 0, timer = null, DELAY = 4500;
    var slides = o.gallery.map(function (g, i) {
      return el('div', { class: 'slide' + (i === 0 ? ' active' : '') },
        U.photo(g[0], g[1], '(max-width: 900px) 100vw, 1100px', i === 0 ? { loading: 'eager', fetchpriority: 'high' } : null));
    });
    var thumbs = o.gallery.map(function (g, i) {
      return el('button', { type: 'button', class: 'thumb' + (i === 0 ? ' active' : ''), 'aria-label': T('galShow', { n: i + 1 }), onclick: function () { go(i, true); } },
        U.photo(g[0], '', '120px', { loading: 'lazy' }));
    });
    var bar = el('span', { class: 'car-bar' });
    var root = el('div', { class: 'carousel reveal', tabindex: '0', 'aria-roledescription': 'carousel' },
      el('div', { class: 'car-stage' }, slides,
        el('button', { type: 'button', class: 'car-nav prev', 'aria-label': T('galPrev'), onclick: function () { go(idx - 1, true); } }, '‹'),
        el('button', { type: 'button', class: 'car-nav next', 'aria-label': T('galNext'), onclick: function () { go(idx + 1, true); } }, '›'),
        el('span', { class: 'car-count' }, '1 / ' + slides.length),
        el('span', { class: 'car-progress' }, bar)),
      el('div', { class: 'car-thumbs' }, thumbs));
    var count = root.querySelector('.car-count');
    function go(n, user) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('active', i === idx); });
      thumbs.forEach(function (t, i) { t.classList.toggle('active', i === idx); });
      count.textContent = (idx + 1) + ' / ' + slides.length;
      if (user) start();
    }
    function start() {
      clearInterval(timer);
      bar.classList.remove('run'); void bar.offsetWidth; bar.classList.add('run');
      bar.style.animationDuration = DELAY + 'ms';
      timer = setInterval(function () { go(idx + 1); bar.classList.remove('run'); void bar.offsetWidth; bar.classList.add('run'); }, DELAY);
    }
    function stop() { clearInterval(timer); timer = null; bar.classList.remove('run'); }
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', function (e) { if (!root.contains(e.relatedTarget)) start(); });
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { go(idx - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { go(idx + 1); e.preventDefault(); }
    });
    var sx = null;
    root.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') sx = e.clientX; });
    root.addEventListener('pointerup', function (e) {
      if (sx == null) return;
      var dx = e.clientX - sx; sx = null;
      if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1), true);
    });
    root._stop = stop;
    if (slides.length > 1) start(); else root.classList.add('single');
    return root;
  }

  /* ---------- Karte: Lage & Anreise ---------- */
  function mapSection(o) {
    var g = RR.GEO && RR.GEO[o.id];
    if (!g || !RR.map) return null;
    var air = g.air ? { lat: g.air.lat, lng: g.air.lng, code: g.air.code, label: lang === 'en' ? g.air.en : g.air.de } : null;
    var api = RR.map.create({
      revier: { lat: g.lat, lng: g.lng, label: o.title },
      areaHa: g.ha, airport: air, icon: RR.icon(o.wild[0], 18), ariaLabel: T('mapAria'),
      labels: { in: T('mapIn'), out: T('mapOut'), revier: T('mapRevier'), travel: T('mapTravel'), full: T('mapFull'), air: T('mapAir'), hint: T('mapHint'), attrib: T('mapAttrib') }
    });
    cache.mapApi = api;
    var nf = new Intl.NumberFormat(lang === 'en' ? 'en-GB' : 'de-DE');
    var fact = function (k, v) { return el('div', { class: 'map-fact' }, el('span', null, T(k)), el('strong', null, v)); };
    return el('section', { class: 'map-section reveal' },
      el('div', { class: 'map-info' },
        el('p', { class: 'kicker' }, T('mapKicker')),
        el('h2', null, T('mapTitle')),
        el('p', { class: 'muted' }, T('mapSub')),
        el('div', { class: 'map-facts' },
          fact('mapRegion', U.term(lang, o.land) + ' · ' + o.region),
          fact('mapArea', 'ca. ' + nf.format(g.ha) + ' ha'),
          air && fact('mapAirport', air.code + ' · ' + air.label),
          air && fact('mapDist', '≈ ' + Math.round(RR.map.km(g, air)) + ' km'))),
      api.el);
  }

  /* ---------- Seite zeichnen ---------- */
  var firstRender = true;
  function render() {
    var intro = firstRender ? ' reveal' : '';
    firstRender = false;
    var active = document.activeElement && document.activeElement.getAttribute('data-fid');
    if (!offer) { U.replace(content, el('p', { class: 'empty' }, T('notFound'))); return; }
    document.title = 'Revierreise – ' + offer.title;
    var r = P.calc(offer, state);
    if (cache.lang !== lang) { if (cache.gallery) cache.gallery._stop(); cache.lang = lang; cache.gallery = gallery(offer); cache.map = mapSection(offer); cache.reviews = RR.reviews ? RR.reviews.section(offer, lang, T) : null; }
    U.replace(content,
      el('div', { class: 'detail-head' + intro },
        el('span', { class: 'where' }, RR.flag(offer.land, 20), U.term(lang, offer.land) + ' · ' + offer.region),
        el('h1', null, offer.title + ' – ' + offer.days + ' ' + (lang === 'en' ? 'hunting days' : 'Jagdtage')),
        el('div', { class: 'chip-list', style: 'align-items:center' },
          el('span', { class: 'chip strong species-chip' }, RR.icon(offer.art, 18), U.term(lang, offer.art)),
          offer.wild.map(function (w) { return el('span', { class: 'chip species-chip' }, RR.icon(w), U.term(lang, w)); }),
          offer.instant ? el('span', { class: 'flag-ok', style: 'font-size:13px;font-weight:600;margin-left:6px' }, '● ' + T('available'))
            : el('span', { class: 'flag-req', style: 'font-size:13px;font-weight:600;margin-left:6px' }, '● ' + T('onRequest')),
          el('span', { style: 'font-size:13px;font-weight:600;color:var(--ink-2)' }, '✓ ' + T('verified')))),
      cache.gallery,
      el('div', { class: 'layout' + intro }, config(offer, r), summary(offer, r)),
      cache.map,
      cache.reviews);
    if (cache.mapApi) requestAnimationFrame(cache.mapApi.refresh);
    var totalEl = content.querySelector('.total .t2');
    if (totalEl && RR.motion) RR.motion.tween(totalEl, 'total', r.total, function (v) { return (r.variable > 0 ? T('approxShort') + ' ' : '') + U.eur(v); });
    if (RR.motion) RR.motion.scan(content);
    if (active) { var again = content.querySelector('[data-fid="' + active + '"]'); if (again && !again.disabled) again.focus(); }
  }

  function setLang(l) {
    lang = l;
    U.applyStatic(lang, setLang);
    document.getElementById('back').setAttribute('href', 'index.html?lang=' + lang);
    render();
  }
  setLang(lang);
})();
