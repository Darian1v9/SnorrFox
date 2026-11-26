/* Startseite: Filter, Empfehlungen, Angebotsliste */
(function () {
  var U = RR.util;

  /* Reine Filterlogik – unabhängig vom DOM, damit sie testbar und später wiederverwendbar ist */
  RR.filterOffers = function (f) {
    var h = Number(f.h) || 1;
    return RR.OFFERS.filter(function (o) {
      return h <= o.capacity &&
        (!f.land || o.land === f.land) &&
        (!f.wild || o.wild.indexOf(f.wild) > -1) &&
        (!f.art || o.art === f.art) &&
        (!f.trophy || (f.trophy === 'ohne' ? o.kahl : o.trophyMax >= Number(f.trophy))) &&
        (!f.instant || o.instant) &&
        (!f.stay || o.lodging.length > 0 || !!o.stays) &&
        (!f.travel || o.travel.some(function (t) { return t.price > 0; })) &&
        (!f.from || o.end >= f.from) &&
        (!f.to || o.start <= f.to);
    });
  };

  if (typeof document === 'undefined' || !document.getElementById('search')) return;

  var lang = U.getLang();
  var el = U.el;
  var form = document.getElementById('search');
  var T = function (k, v) { return U.t(lang, k, v); };

  function uniq(key) {
    var seen = [];
    RR.OFFERS.forEach(function (o) { [].concat(o[key]).forEach(function (v) { if (seen.indexOf(v) < 0) seen.push(v); }); });
    return seen;
  }

  function fillSelects() {
    var keep = readForm();
    function opts(select, list) {
      U.replace(select, list.map(function (p) { return el('option', { value: p[0] }, p[1]); }));
    }
    var terms = function (key) { return uniq(key).map(function (v) { return [v, U.term(lang, v)]; }); };
    opts(form.land, [['', T('allCountries')]].concat(terms('land')));
    opts(form.wild, [['', T('allSpecies')]].concat(terms('wild')));
    opts(form.art, [['', T('allMethods')]].concat(terms('art')));
    opts(form.h, [1, 2, 3, 4, 5, 6, 8, 10].map(function (n) { return [String(n), T('huntersN', { n: n })]; }).concat([['12', T('huntersMax')]]));
    opts(form.g, [['0', T('guestsNone')], ['1', T('guestsN', { n: 1 })], ['2', T('guestsN', { n: 2 })], ['3', T('guestsN', { n: 3 })], ['4', T('guestsMax')]]);
    opts(form.trophy, [['', T('allClasses')], ['ohne', T('noTrophy')], ['1', T('bronze')], ['2', T('silver')], ['3', T('gold')]]);
    writeForm(keep);
  }

  function readForm() {
    return {
      from: form.from.value, to: form.to.value, land: form.land.value, wild: form.wild.value, art: form.art.value,
      h: form.h.value || '1', g: form.g.value || '0', trophy: form.trophy.value,
      instant: form.instant.checked, stay: form.stay.checked, travel: form.travel.checked
    };
  }
  function writeForm(f) {
    ['from', 'to', 'land', 'wild', 'art', 'h', 'g', 'trophy'].forEach(function (k) { if (f[k] !== undefined) form[k].value = f[k]; });
    if (!form.h.value) form.h.value = '1';
    if (!form.g.value) form.g.value = '0';
    ['instant', 'stay', 'travel'].forEach(function (k) { form[k].checked = !!f[k]; });
  }

  function link(o, f) { return 'angebot.html?id=' + encodeURIComponent(o.id) + '&h=' + (Number(f.h) || 1) + '&g=' + (Number(f.g) || 0) + '&lang=' + lang; }
  function img(o, sizes) { return el('div', { class: 'media' }, U.photo(o.img, o.alt, sizes)); }

  function speciesTiles(f) {
    return RR.SPECIES.map(function (sp) {
      var n = RR.OFFERS.filter(function (o) { return o.wild.indexOf(sp.wild) > -1; }).length;
      var active = f.wild === sp.wild;
      return el('button', {
        type: 'button', class: 'species-tile reveal', 'aria-pressed': String(active),
        onclick: function () {
          form.wild.value = active ? '' : sp.wild;
          render();
          if (!active) document.getElementById('h-all').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      },
        U.photo(sp.img, sp.alt, '(max-width: 700px) 50vw, 240px'),
        el('span', { class: 'cap' },
          el('span', { class: 'name' }, RR.icon(sp.wild, 22), U.term(lang, sp.wild)),
          el('span', { class: 'cnt' }, n === 0 ? T('speciesNone') : n === 1 ? T('species1') : T('speciesN', { n: n }))));
    });
  }

  function trophyText(o) {
    var parts = [];
    if (o.trophyMax > 0) parts.push(T('trophyUpTo', { m: T('medal')[o.trophyMax] }));
    if (o.kahl) parts.push(o.trophyMax > 0 ? T('trophyAlso') : T('trophyNone'));
    return parts.join(' · ');
  }

  function recCard(o, f) {
    var media = img(o, '(max-width: 700px) 100vw, 400px');
    media.appendChild(el('span', { class: 'badge' }, o.recommended.why));
    return el('a', { class: 'rec-card tilt reveal', href: link(o, f) }, el('span', { class: 'spot', 'aria-hidden': 'true' }), media,
      el('div', { class: 'rec-body' },
        el('span', { class: 'where' }, U.term(lang, o.land) + ' · ' + o.region + ' · ' + U.term(lang, o.art)),
        el('h3', null, o.title),
        el('span', { class: 'text' }, o.recommended.text),
        el('div', { class: 'rec-foot' },
          el('span', null, T('fromWord') + ' ', el('strong', null, U.eur(o.base)), ' ' + T('perHunter')),
          el('span', { class: 'go' }, T('configure') + ' →'))));
  }

  function offerRow(o, f) {
    var h = Number(f.h) || 1, g = Number(f.g) || 0;
    var hasTravel = o.travel.some(function (t) { return t.price > 0; });
    return el('article', { class: 'offer reveal' }, img(o, '(max-width: 700px) 100vw, 300px'),
      el('div', { class: 'offer-body' },
        el('span', { class: 'where' }, U.term(lang, o.land) + ' · ' + o.region),
        el('h3', null, o.title),
        el('span', { class: 'meta' }, U.term(lang, o.art) + ' · ' + o.days + ' ' + (lang === 'en' ? 'hunting days' : 'Jagdtage') + ' · ' + T('season') + ' ' + o.saison + ' · ' + T('upTo', { n: o.capacity })),
        el('span', { class: 'meta' }, el('strong', null, T('trophyLbl')), ' ' + trophyText(o)),
        el('div', { class: 'chip-list' }, o.wild.map(function (w) { return el('span', { class: 'chip species-chip', title: U.term(lang, w) }, RR.icon(w), U.term(lang, w)); })),
        el('div', { class: 'flags' },
          o.instant ? el('span', { class: 'flag-ok' }, '● ' + T('available')) : el('span', { class: 'flag-req' }, '● ' + T('onRequest')),
          o.rental && el('span', null, '✓ ' + T('rentalOk')),
          (o.lodging.length || o.stays) && el('span', null, '✓ ' + T('stayOk')),
          hasTravel && el('span', null, '✓ ' + T('travelOk')))),
      el('div', { class: 'offer-price' },
        el('div', { style: 'display:flex;flex-direction:column;gap:2px' },
          el('span', { class: 'price-lbl' }, T('basePrice')),
          el('span', { class: 'price-big' }, U.eur(o.base)),
          el('span', { class: 'price-lbl' }, T('perHunter')),
          el('span', { class: 'price-lbl', style: 'color:var(--ink-2);margin-top:6px' }, T('typical', { v: o.est })),
          (h > 1 || g > 0) && el('span', { class: 'group-price' }, T('groupPrice', {
            h: h, g: g ? T('guestsShort', { n: g }) : '', v: U.eur(o.base * h + RR.SHARED.guestFee * g) }))),
        el('a', { class: 'btn', href: link(o, f), 'data-magnetic': '' }, T('configure'))));
  }

  function marquee() {
    var items = [];
    RR.SPECIES.forEach(function (sp) { items.push(el('span', { class: 'mq-item' }, RR.icon(sp.wild, 22), U.term(lang, sp.wild))); });
    uniq('art').forEach(function (a) { items.push(el('span', { class: 'mq-item' }, U.term(lang, a))); });
    uniq('land').forEach(function (l) { items.push(el('span', { class: 'mq-item' }, U.term(lang, l))); });
    var half = function () { return el('span', { class: 'mq-half' }, items.map(function (n) { return n.cloneNode(true); })); };
    U.replace(document.getElementById('marquee'), half(), half());
  }

  function stats() {
    var data = [
      [RR.OFFERS.length, '', T('statOffers')],
      [uniq('land').length, '', T('statCountries')],
      [uniq('wild').length, '', T('statSpecies')],
      [0, ' €', T('statPrepay')]
    ];
    U.replace(document.getElementById('stats'), data.map(function (d) {
      return el('div', { class: 'stat reveal' },
        el('span', { class: 'stat-num', 'data-target': String(d[0]), 'data-suffix': d[1] }, '0' + d[1]),
        el('span', { class: 'stat-label' }, d[2]));
    }));
  }

  function render() {
    var f = readForm();
    U.replace(document.getElementById('species'), speciesTiles(f));
    U.replace(document.getElementById('recs'), RR.OFFERS.filter(function (o) { return o.recommended; }).map(function (o) { return recCard(o, f); }));

    var res = RR.filterOffers(f);
    document.getElementById('count').textContent = res.length === 1 ? T('found1') : T('foundN', { n: res.length });
    var list = document.getElementById('results');
    if (!res.length) {
      U.replace(list, el('div', { class: 'empty' },
        el('p', null, el('strong', null, T('emptyTitle'))),
        el('p', null, T('emptyText')),
        el('button', { type: 'button', class: 'btn outline', onclick: function () { form.reset(); } }, T('reset'))));
      if (RR.motion) RR.motion.scan();
      return;
    }
    U.replace(list, res.map(function (o) { return offerRow(o, f); }));
    if (RR.motion) RR.motion.scan();
  }

  function setLang(l) {
    lang = l; U.applyStatic(lang, setLang); fillSelects();
    if (RR.motion) RR.motion.rotator(document.getElementById('rotator'), T('h1words'));
    marquee(); stats(); render();
  }

  form.addEventListener('input', render);
  form.addEventListener('change', render);
  form.addEventListener('reset', function () { setTimeout(function () { form.h.value = '1'; form.g.value = '0'; render(); }, 0); });
  setLang(lang);
})();
