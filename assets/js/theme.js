/* Revierreise – Hell / Dunkel
   Wird im <head> geladen, damit die Seite nicht kurz hell aufblitzt.
   Ohne gespeicherte Wahl folgt die Seite der Einstellung des Geräts. */
(function () {
  var KEY = 'rr-theme', root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function current() { return saved() || (mq && mq.matches ? 'dark' : 'light'); }
  function apply(t) {
    root.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#0B1410' : '#1E3527');
    var b = document.querySelector('.theme-toggle');
    if (b) {
      var en = (root.getAttribute('lang') || 'de') === 'en';
      var label = t === 'dark' ? (en ? 'Switch to light mode' : 'Zum hellen Modus wechseln') : (en ? 'Switch to dark mode' : 'Zum dunklen Modus wechseln');
      b.setAttribute('aria-label', label); b.title = label;
      b.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    }
  }
  apply(current());
  if (mq && mq.addEventListener) mq.addEventListener('change', function () { if (!saved()) apply(current()); });

  function icon(cls, paths) {
    var NS = 'http://www.w3.org/2000/svg', s = document.createElementNS(NS, 'svg');
    s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('fill', 'none'); s.setAttribute('stroke', 'currentColor');
    s.setAttribute('stroke-width', '2'); s.setAttribute('stroke-linecap', 'round'); s.setAttribute('class', cls); s.setAttribute('aria-hidden', 'true');
    paths.forEach(function (d) { var p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); s.appendChild(p); });
    return s;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var anchor = document.querySelector('.site-header .lang-switch');
    if (!anchor) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'theme-toggle';
    var knob = document.createElement('span'); knob.className = 'knob';
    knob.appendChild(icon('sun', ['M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4']));
    knob.appendChild(icon('moon', ['M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z']));
    b.appendChild(knob);
    b.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      root.classList.add('theme-anim');
      apply(next);
      setTimeout(function () { root.classList.remove('theme-anim'); }, 500);
    });
    anchor.parentNode.insertBefore(b, anchor.nextSibling);
    apply(current());
    /* Beschriftung bei Sprachwechsel mitziehen */
    new MutationObserver(function () { apply(root.getAttribute('data-theme')); }).observe(root, { attributes: true, attributeFilter: ['lang'] });
  });
})();
