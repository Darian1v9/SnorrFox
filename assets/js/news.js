/* Revierreise – News-Seite: Filter, Leitartikel, Kacheln, Lese-Ansicht */
(function () {
  var U = RR.util, el = U.el;
  var lang = U.getLang();
  var cat = 'all';
  var T = function (k, v) { return U.t(lang, k, v); };
  var grid = document.getElementById('newsGrid');
  var lead = document.getElementById('newsLead');
  var filters = document.getElementById('newsFilters');
  var dialog = document.getElementById('article');
  var dlgBody = document.getElementById('articleBody');

  function monthYear(iso) {
    var d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString(lang === 'en' ? 'en-GB' : 'de-DE', { month: 'long', year: 'numeric' });
  }
  function catOf(id) { return RR.NEWS_CATS.filter(function (c) { return c.id === id; })[0]; }
  function catBadge(n) {
    var c = catOf(n.cat);
    return el('span', { class: 'news-cat c-' + n.cat }, c.icon && RR.icon(c.icon, 14), lang === 'en' ? c.en : c.de);
  }
  function meta(n) {
    return el('span', { class: 'news-meta' }, monthYear(n.date) + ' · ' + T('newsMin', { n: n.min }));
  }
  function sorted() {
    return RR.NEWS.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  }

  function card(n, big) {
    var t = n[lang] || n.de;
    return el('article', { class: 'news-card reveal' + (big ? ' big' : ''), tabindex: '0', role: 'link', 'aria-label': t.title,
      onclick: function () { open(n.id); }, onkeydown: function (e) { if (e.key === 'Enter') open(n.id); } },
      el('div', { class: 'media news-media' }, U.photo(n.img, '', big ? '(max-width: 900px) 100vw, 760px' : '(max-width: 700px) 100vw, 400px', big ? { loading: 'eager' } : null), catBadge(n)),
      el('div', { class: 'news-body' },
        meta(n),
        el(big ? 'h2' : 'h3', null, t.title),
        el('p', null, t.teaser),
        el('span', { class: 'news-more' }, T('newsRead'), ' →')));
  }

  function renderFilters() {
    U.replace(filters, RR.NEWS_CATS.map(function (c) {
      var count = c.id === 'all' ? RR.NEWS.length : RR.NEWS.filter(function (n) { return n.cat === c.id; }).length;
      if (!count) return null;
      return el('button', { type: 'button', class: 'news-filter' + (cat === c.id ? ' active' : ''), 'aria-pressed': String(cat === c.id),
        onclick: function () { cat = c.id; render(); } },
        c.icon && RR.icon(c.icon, 16), lang === 'en' ? c.en : c.de, el('em', null, String(count)));
    }));
  }

  function render() {
    renderFilters();
    var list = sorted().filter(function (n) { return cat === 'all' || n.cat === cat; });
    var featured = cat === 'all' ? list.filter(function (n) { return n.featured; })[0] : null;
    if (!featured) featured = list[0];
    U.replace(lead, featured ? card(featured, true) : null);
    U.replace(grid, list.filter(function (n) { return n !== featured; }).map(function (n) { return card(n, false); }));
    if (RR.motion) RR.motion.scan(document.getElementById('content'));
  }

  /* Lese-Ansicht als Dialog, mit eigener Adresse (#beitrag) zum Teilen */
  function open(id, fromHash) {
    var n = RR.NEWS.filter(function (x) { return x.id === id; })[0];
    if (!n) return;
    var t = n[lang] || n.de;
    U.replace(dlgBody,
      el('div', { class: 'art-hero' }, U.photo(n.img, '', '(max-width: 900px) 100vw, 860px', { loading: 'eager' }),
        el('button', { type: 'button', class: 'art-close', 'aria-label': T('close'), onclick: close }, '×')),
      el('div', { class: 'art-inner' },
        el('div', { class: 'art-top' }, catBadge(n), meta(n)),
        el('h2', null, t.title),
        el('p', { class: 'art-teaser' }, t.teaser),
        t.body.map(function (p) { return el('p', null, p); }),
        el('div', { class: 'art-tip' }, RR.icon('rvCheck', 22), el('p', null, t.tip)),
        n.sources.length ? el('div', { class: 'art-sources' },
          el('strong', null, T('newsSources')),
          el('ul', null, n.sources.map(function (s) { return el('li', null, el('a', { href: s[1], target: '_blank', rel: 'noopener' }, s[0], ' ↗')); }))) : null,
        el('p', { class: 'art-note' }, T('newsNote')),
        el('a', { class: 'btn', href: 'index.html?lang=' + lang + '#suche' }, T('newsCta'))));
    if (!dialog.open) { if (dialog.showModal) dialog.showModal(); else dialog.setAttribute('open', ''); }
    dialog.scrollTop = 0;
    if (!fromHash && location.hash !== '#' + id) history.pushState(null, '', '#' + id);
  }
  function close() {
    if (dialog.open) dialog.close();
  }
  dialog.addEventListener('close', function () {
    if (location.hash) history.pushState(null, '', location.pathname + location.search);
  });
  dialog.addEventListener('click', function (e) { if (e.target === dialog) close(); });
  window.addEventListener('popstate', function () {
    var id = location.hash.slice(1);
    if (id) open(id, true); else if (dialog.open) dialog.close();
  });

  function setLang(l) {
    lang = l;
    U.applyStatic(lang, setLang);
    var d = new Date(RR.NEWS_UPDATED + 'T12:00:00');
    document.getElementById('newsUpdated').textContent = T('newsUpdated', { d: d.toLocaleDateString(lang === 'en' ? 'en-GB' : 'de-DE') });
    render();
    if (dialog.open && location.hash) open(location.hash.slice(1), true);
  }
  setLang(lang);
  if (location.hash) open(location.hash.slice(1), true);
})();
