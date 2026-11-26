/* Revierreise – Seiten „Für Reviere“ und „So funktioniert's“ */
(function () {
  var U = RR.util, el = U.el;
  var lang = U.getLang();
  var T = function (k, v) { return U.t(lang, k, v); };
  var SPECIES = ['Schwarzwild', 'Rotwild', 'Damwild', 'Rehwild', 'Niederwild', 'Fuchs'];
  var METHODS = ['Drückjagd', 'Ansitzjagd', 'Pirschjagd', 'Treibjagd'];
  var form = document.getElementById('partnerForm');
  var chosen = { species: {}, methods: {} };

  /* Icons aus data-icon="name" einsetzen */
  function icons() {
    document.querySelectorAll('[data-icon]').forEach(function (n) {
      if (n.querySelector('svg')) return;
      var i = RR.icon(n.getAttribute('data-icon'), +n.getAttribute('data-icon-size') || 22);
      if (i) n.insertBefore(i, n.firstChild);
    });
  }

  /* Wildarten / Jagdarten als ankreuzbare Chips */
  function chips(box, list, key) {
    U.replace(box, list.map(function (w) {
      var id = key + '-' + w;
      return el('label', { class: 'chk pick', for: id },
        el('input', { type: 'checkbox', id: id, value: w, checked: !!chosen[key][w],
          onchange: function (e) { chosen[key][w] = e.target.checked; } }),
        RR.ICONS[w] ? RR.icon(w, 18) : null,
        el('span', null, U.term(lang, w)));
    }));
  }

  function setLang(l) {
    lang = l;
    U.applyStatic(lang, setLang);
    document.querySelectorAll('[data-i18n-ph]').forEach(function (n) { n.setAttribute('placeholder', T(n.getAttribute('data-i18n-ph'))); });
    var t = document.body.getAttribute('data-title');
    if (t) document.title = T(t);
    document.querySelectorAll('[data-contact-mail]').forEach(function (a) {
      a.textContent = RR.CONFIG.contactEmail;
      a.setAttribute('href', 'mailto:' + RR.CONFIG.contactEmail);
    });
    if (form) {
      chips(document.getElementById('pfSpeciesBox'), SPECIES, 'species');
      chips(document.getElementById('pfMethodsBox'), METHODS, 'methods');
    }
    icons();
  }

  /* Formular: Anfrage im E-Mail-Programm vorbereiten (es wird nichts automatisch verschickt) */
  if (form) {
    var msg = document.getElementById('pfStatus');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var pick = function (key) { return Object.keys(chosen[key]).filter(function (k) { return chosen[key][k]; }); };
      var sp = pick('species'), me = pick('methods');
      if (!sp.length || !me.length) {
        msg.className = 'form-status warn'; msg.textContent = T('pfPick');
        return;
      }
      var f = form.elements, sel = function (s) { return s.options[s.selectedIndex].text; };
      var lines = [
        T('pfArea') + ': ' + f.area.value,
        T('pfContact') + ': ' + f.contact.value,
        T('pfEmail') + ': ' + f.email.value,
        T('pfPhone') + ': ' + (f.phone.value || '–'),
        T('pfCountry') + ': ' + sel(f.country),
        T('pfRegion') + ': ' + f.region.value,
        T('pfSize') + ': ' + (f.size.value || '–'),
        T('pfStay') + ': ' + sel(f.stay),
        T('pfSpecies') + ': ' + sp.join(', '),
        T('pfMethods') + ': ' + me.join(', '),
        '', f.msg.value
      ];
      location.href = 'mailto:' + RR.CONFIG.contactEmail +
        '?subject=' + encodeURIComponent(T('pfSubject', { n: f.area.value })) +
        '&body=' + encodeURIComponent(lines.join('\n'));
      msg.className = 'form-status ok'; msg.textContent = T('pfSent');
    });
  }

  setLang(lang);
})();
