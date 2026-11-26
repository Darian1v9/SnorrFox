/* Revierreise – "Gut zu wissen für deine Reise" auf der Angebotsseite
   Reiter: Vor der Reise · Packliste (je Jagdart, abhakbar) · Regeln im Land · Im Revier */
window.RR = window.RR || {};

RR.travel = (function () {
  function store(key, val) {
    try { if (val === undefined) return JSON.parse(localStorage.getItem(key) || '{}'); localStorage.setItem(key, JSON.stringify(val)); } catch (e) { return {}; }
  }

  function section(o, lang, T) {
    var U = RR.util, el = U.el;
    var country = RR.COUNTRY[o.land], cInfo = country && (country[lang] || country.de);
    var gear = RR.GEAR[o.art], gList = gear && (gear[lang] || gear.de);
    var prep = RR.TRIP_PREP[lang] || RR.TRIP_PREP.de;
    var landName = U.term(lang, o.land), artName = U.term(lang, o.art);

    /* Packliste mit Haken, im Browser gemerkt */
    var key = 'rr-pack-' + o.id, done = store(key);
    var progress = el('span', { class: 'pack-progress' });
    function updateProgress() {
      var n = gList ? gList.filter(function (_, i) { return done[i]; }).length : 0;
      progress.textContent = T('packDone', { n: n, m: gList ? gList.length : 0 });
    }
    var pack = gList ? el('ul', { class: 'pack-list' }, gList.map(function (g, i) {
      var id = 'pk-' + o.id + '-' + i;
      return el('li', null, el('input', { type: 'checkbox', id: id, checked: !!done[i], onchange: function (e) { done[i] = e.target.checked; store(key, done); updateProgress(); } }),
        el('label', { for: id }, g));
    })) : null;
    updateProgress();

    var panels = [
      { id: 'prep', icon: 'rvDoc', label: T('tiPrep'), body: el('div', { class: 'ti-grid' }, prep.map(function (p) {
        return el('div', { class: 'ti-card' }, el('strong', null, p[0]), el('p', null, p[1]));
      })) },
      gList && { id: 'gear', icon: o.art, label: T('tiGear', { a: artName }), body: el('div', { class: 'ti-pack' },
        el('div', { class: 'ti-pack-head' }, el('p', { class: 'muted' }, T('tiGearSub', { a: artName })), progress), pack) },
      cInfo && { id: 'land', flag: o.land, label: T('tiLand', { l: landName }), body: el('div', { class: 'ti-land' },
        el('p', { class: 'ti-intro' }, cInfo.intro),
        el('ul', { class: 'ti-rules' }, cInfo.rules.map(function (r) { return el('li', null, RR.icon('rvCheck', 18), el('span', null, r)); })),
        el('div', { class: 'ti-know' }, cInfo.know.map(function (k) { return el('span', { class: 'chip' }, k); })),
        country.sources.length && el('p', { class: 'ti-src' }, T('newsSources') + ': ',
          country.sources.map(function (s, i) { return [i ? ' · ' : '', el('a', { href: s[1], target: '_blank', rel: 'noopener' }, s[0] + ' ↗')]; })),
        el('p', { class: 'ti-note' }, T('tiNote'))) },
      { id: 'site', icon: 'rvShield', label: T('tiSite'), body: el('div', { class: 'ti-grid' }, RR.KNOW.map(function (k) {
        var t = U.pick(k, lang);
        return el('div', { class: 'ti-card' }, RR.icon(k.icon, 22), el('strong', null, t[0]), el('p', null, t[1]));
      })) }
    ].filter(Boolean);

    var tabs = el('div', { class: 'ti-tabs', role: 'tablist' });
    var body = el('div', { class: 'ti-body' });
    var buttons = panels.map(function (p, i) {
      var b = el('button', { type: 'button', role: 'tab', class: 'ti-tab', id: 'tab-' + p.id, 'aria-controls': 'panel-' + p.id,
        onclick: function () { show(i); },
        onkeydown: function (e) {
          if (e.key === 'ArrowRight') { show((i + 1) % panels.length, true); e.preventDefault(); }
          if (e.key === 'ArrowLeft') { show((i - 1 + panels.length) % panels.length, true); e.preventDefault(); }
        } },
        p.flag ? RR.flag(p.flag, 20) : RR.icon(p.icon, 18), p.label);
      tabs.appendChild(b);
      return b;
    });
    function show(i, focus) {
      buttons.forEach(function (b, j) { b.setAttribute('aria-selected', String(i === j)); b.tabIndex = i === j ? 0 : -1; b.classList.toggle('active', i === j); });
      U.replace(body, el('div', { class: 'ti-panel', role: 'tabpanel', id: 'panel-' + panels[i].id, 'aria-labelledby': 'tab-' + panels[i].id }, panels[i].body));
      if (focus) buttons[i].focus();
    }
    show(0);

    return el('section', { class: 'travel-info reveal' },
      el('div', { class: 'ti-head' },
        el('p', { class: 'kicker' }, T('tiKicker')),
        el('h2', null, T('tiTitle', { l: landName })),
        el('p', { class: 'muted' }, T('tiSub'))),
      tabs, body,
      el('a', { class: 'ti-faq', href: 'faq.html?lang=' + lang }, T('tiFaq')));
  }

  return { section: section };
})();
