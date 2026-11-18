/*
 * Preisberechnung für den Baukasten – reine Logik ohne DOM.
 * Lässt sich 1:1 in ein Framework oder auf einen Server übernehmen.
 */
window.RR = window.RR || {};

RR.pricing = (function () {
  function find(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  /* Startzustand für ein Angebot */
  function initialState(o, h, g) {
    var firstFree = o.termine.filter(function (t) { return t.free > 0; })[0] || o.termine[0];
    var trophy = {};
    o.trophies.forEach(function (sp) { trophy[sp] = RR.TROPHY[sp].classes[0].id; });
    return {
      termin: firstFree.id,
      h: Math.min(Math.max(1, h || 1), o.capacity),
      g: Math.min(Math.max(0, g || 0), 10),
      trophy: trophy,
      weapon: 'eigen',
      guide: 'nein',
      lodging: 'none',
      stay: '',
      travel: o.travel[0].id,
      prep: 'none'
    };
  }

  /* Externe Unterkünfte mit Verfügbarkeit und Preis für Termin + Gruppe */
  function stays(o, s) {
    if (!o.stays) return [];
    var persons = s.h + s.g;
    return RR.STAYS[o.stays].map(function (st) {
      var units = Math.ceil(persons / st.cap);
      var left = st.left[s.termin] || 0;
      return {
        stay: st, units: units, left: left,
        available: left >= units,
        few: left >= units && left - units <= 1,
        total: units * st.night * o.nights
      };
    });
  }

  function trophyCount(o, s) {
    var n = 0;
    o.trophies.forEach(function (sp) { if (s.trophy[sp] && s.trophy[sp] !== 'none') n++; });
    return n * s.h;
  }

  /* Gesamtrechnung. lines: [{key, label, sub, amount, variable}] – Texte werden in der Oberfläche übersetzt */
  function calc(o, s) {
    var persons = s.h + s.g;
    var lines = [];
    var add = function (key, amount, variable, extra) {
      lines.push(Object.assign({ key: key, amount: amount, variable: !!variable }, extra || {}));
    };
    var termin = find(o.termine, s.termin) || o.termine[0];

    add('base', o.base * s.h, false, { qty: s.h, unit: o.base });
    if (s.g) add('guests', RR.SHARED.guestFee * s.g, false, { qty: s.g, unit: RR.SHARED.guestFee });

    var w = find(RR.SHARED.weapon, s.weapon);
    if (w && w.perDay) add('weapon', w.perDay * o.days * s.h, false, { qty: s.h, unit: w.perDay * o.days });
    var gd = find(RR.SHARED.guide, s.guide);
    if (gd && gd.perDay) add('guide', gd.perDay * o.days * s.h, false, { qty: s.h, unit: gd.perDay * o.days });

    var lodge = find(o.lodging, s.lodging);
    if (lodge) add('lodging', lodge.perNight * o.nights * persons, false, { qty: persons, unit: lodge.perNight * o.nights, item: lodge });

    var chosenStay = null;
    if (s.lodging === 'extern' && s.stay) {
      stays(o, s).forEach(function (x) { if (x.stay.id === s.stay && x.available) chosenStay = x; });
      if (chosenStay) add('stay', chosenStay.total, false, { item: chosenStay, selfBook: true });
    }

    var tr = find(o.travel, s.travel);
    if (tr && tr.price) add('travel', tr.price * persons, false, { qty: persons, unit: tr.price, item: tr });

    var tc = trophyCount(o, s);
    var prep = find(RR.SHARED.trophyPrep, s.prep);
    if (prep && prep.price && tc) add('prep', prep.price * tc, false, { qty: tc, unit: prep.price, item: prep });

    o.trophies.forEach(function (sp) {
      var cls = find(RR.TROPHY[sp].classes, s.trophy[sp]);
      if (cls && cls.price) add('trophy', cls.price * s.h, true, { qty: s.h, unit: cls.price, item: cls, species: sp });
    });

    var fix = 0, vari = 0;
    lines.forEach(function (l) { if (l.variable) vari += l.amount; else fix += l.amount; });
    return {
      lines: lines, fix: fix, variable: vari, total: fix + vari,
      perHunter: (fix + vari) / s.h,
      trophyCount: tc,
      termin: termin,
      overCapacity: s.h > termin.free,
      chosenStay: chosenStay
    };
  }

  /* Empfohlene Zusammenstellung auf den Zustand anwenden */
  function applyRecommended(o, s) {
    var r = RR.RECOMMENDED_SETUP[o.id] || RR.RECOMMENDED_SETUP.default;
    var n = Object.assign({}, s, { trophy: Object.assign({}, s.trophy) });
    if (r.trophy) Object.keys(r.trophy).forEach(function (sp) { if (o.trophies.indexOf(sp) > -1) n.trophy[sp] = r.trophy[sp]; });
    ['weapon', 'guide', 'prep'].forEach(function (k) { if (r[k]) n[k] = r[k]; });
    if (r.weapon === 'leih' && !o.rental) n.weapon = 'eigen';
    if (r.lodging && (find(o.lodging, r.lodging) || r.lodging === 'none')) n.lodging = r.lodging;
    if (r.travel && find(o.travel, r.travel)) n.travel = r.travel;
    n.stay = '';
    return n;
  }

  return { initialState: initialState, stays: stays, calc: calc, applyRecommended: applyRecommended, trophyCount: trophyCount, find: find };
})();
