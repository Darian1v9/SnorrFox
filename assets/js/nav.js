/* Menü: aktuelle Seite markieren und auf dem Handy ein aufklappbares Menü anbieten */
(function () {
  var header = document.querySelector('.site-header');
  var nav = header && header.querySelector('.main-nav');
  if (!nav) return;

  /* Aktuelle Seite markieren (Angebotsseiten gehören zu „Jagden finden“) */
  var file = location.pathname.split('/').pop() || 'index.html';
  if (file === 'angebot.html') file = 'index.html';
  var marked = false;
  nav.querySelectorAll('a').forEach(function (a) {
    var target = (a.getAttribute('href') || '').split('#')[0] || 'index.html';
    var hit = !marked && target === file;
    if (hit) { a.setAttribute('aria-current', 'page'); marked = true; }
    else a.removeAttribute('aria-current');
  });

  /* Menü-Knopf fürs Handy (drei Striche) */
  nav.id = nav.id || 'mainNav';
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', nav.id);
  btn.setAttribute('data-i18n-aria', 'navMenu');
  btn.setAttribute('aria-label', 'Menü');
  for (var i = 0; i < 3; i++) btn.appendChild(document.createElement('span'));
  header.querySelector('.wrap').appendChild(btn);

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', String(open));
  }
  btn.addEventListener('click', function () { setOpen(!header.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();
