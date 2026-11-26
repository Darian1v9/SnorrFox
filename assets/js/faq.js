/* Revierreise – FAQ: Suche, Themen, Akkordeon */
(function () {
  var U = RR.util, el = U.el;
  var lang = U.getLang(), cat = 'all', query = '';
  var T = function (k, v) { return U.t(lang, k, v); };
  var list = document.getElementById('faqList');
  var chips = document.getElementById('faqCats');
  var search = document.getElementById('faqSearch');
  var count = document.getElementById('faqCount');

  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  /* Treffer im Text markieren – sicher über DOM-Knoten */
  function mark(text) {
    if (!query) return text;
    var out = [], n = norm(text), q = norm(query), i = 0, at;
    while ((at = n.indexOf(q, i)) !== -1) {
      if (at > i) out.push(text.slice(i, at));
      out.push(el('mark', null, text.slice(at, at + q.length)));
      i = at + q.length;
    }
    out.push(text.slice(i));
    return out;
  }

  function item(f, idx) {
    var t = f[lang] || f.de, c = RR.FAQ_CATS.filter(function (x) { return x.id === f.cat; })[0];
    var d = el('details', { class: 'faq-item reveal', id: 'q' + idx },
      el('summary', null,
        el('span', { class: 'faq-ico' }, RR.icon(c.icon, 18)),
        el('span', { class: 'faq-q' }, mark(t[0])),
        el('span', { class: 'faq-plus', 'aria-hidden': 'true' })),
      el('div', { class: 'faq-a' }, el('p', null, mark(t[1]))));
    return d;
  }

  function render() {
    U.replace(chips, [{ id: 'all', de: 'Alle', en: 'All' }].concat(RR.FAQ_CATS).map(function (c) {
      return el('button', { type: 'button', class: 'news-filter' + (cat === c.id ? ' active' : ''), 'aria-pressed': String(cat === c.id),
        onclick: function () { cat = c.id; render(); } }, c.icon && RR.icon(c.icon, 16), lang === 'en' ? c.en : c.de);
    }));
    var q = norm(query);
    var hits = RR.FAQ.map(function (f, i) { return { f: f, i: i }; }).filter(function (x) {
      var t = x.f[lang] || x.f.de;
      return (cat === 'all' || x.f.cat === cat) && (!q || norm(t[0] + ' ' + t[1]).indexOf(q) !== -1);
    });
    count.textContent = T('faqCount', { n: hits.length });
    var groups = RR.FAQ_CATS.map(function (c) {
      var g = hits.filter(function (x) { return x.f.cat === c.id; });
      if (!g.length) return null;
      return el('section', { class: 'faq-group' },
        el('h2', { class: 'faq-group-title reveal' }, RR.icon(c.icon, 22), lang === 'en' ? c.en : c.de),
        g.map(function (x) { var d = item(x.f, x.i); if (q) d.open = true; return d; }));
    });
    U.replace(list, hits.length ? groups : el('p', { class: 'faq-empty' }, T('faqNone')));
    if (RR.motion) RR.motion.scan(list);
  }

  search.addEventListener('input', function () { query = search.value.trim(); render(); });
  document.getElementById('faqToggle').addEventListener('click', function () {
    var all = list.querySelectorAll('details'), open = [].some.call(all, function (d) { return !d.open; });
    [].forEach.call(all, function (d) { d.open = open; });
  });

  function setLang(l) {
    lang = l;
    U.applyStatic(lang, setLang);
    search.setAttribute('placeholder', T('faqSearchPh'));
    render();
  }
  setLang(lang);
  if (location.hash) { var t = document.querySelector(location.hash); if (t && t.tagName === 'DETAILS') { t.open = true; t.scrollIntoView(); } }
})();
