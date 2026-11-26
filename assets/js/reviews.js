/* Revierreise – Bewertungen & "Was du wissen solltest" je Angebot
   ACHTUNG: Die Bewertungen hier sind BEISPIELDATEN für den Entwurf und werden auf der Seite
   auch so gekennzeichnet. Vor dem Start durch echte Bewertungen echter Gäste ersetzen. */
window.RR = window.RR || {};

RR.REVIEW_CATS = [
  { id: 'revier', icon: 'rvRevier', de: 'Revier & Wildbestand', en: 'Area & game stock' },
  { id: 'guide', icon: 'rvGuide', de: 'Jagdführung', en: 'Guiding' },
  { id: 'stay', icon: 'rvStay', de: 'Unterkunft & Küche', en: 'Lodging & food' },
  { id: 'orga', icon: 'rvOrga', de: 'Organisation', en: 'Organisation' },
  { id: 'comm', icon: 'rvComm', de: 'Kommunikation', en: 'Communication' },
  { id: 'value', icon: 'rvValue', de: 'Preis-Leistung', en: 'Value' }
];

/* je Angebot: Anzahl, Verteilung 5..1 Sterne, Kategorien, Erwähnungen, ausgewählte Bewertungen */
RR.REVIEWS = {
  o1: { count: 38, dist: [31, 5, 2, 0, 0], cats: [4.9, 4.8, 4.6, 4.9, 4.7, 4.7],
    mentions: [['Schwarzwild', 'Rotten', 'Sounders', 24], ['rvGuide', 'Ansteller', 'Drive leaders', 17], ['rvStay', 'Hütte', 'Lodge', 15], ['rvOrga', 'Ablauf', 'Organisation', 12], ['Rotwild', 'Rotwild', 'Red deer', 9]],
    items: [
      { n: 'Thomas', from: ['Aus Niederbayern', 'From Lower Bavaria'], when: [2, 'w'], s: 5,
        de: 'Drei Treiben am Tag, jedes Mal Anlauf. Die Stände waren gut eingewiesen, die Hundeführer wussten genau, was sie tun. Am Abend Streckelegen mit Bläsern – das hat mich wirklich überrascht.',
        en: 'Three drives a day and game moving on every one. Stands were well briefed and the dog handlers knew exactly what they were doing. Evening parade of the bag with horn players – a real surprise.' },
      { n: 'Jens', from: ['Aus dem Emsland', 'From Emsland'], when: [1, 'm'], s: 5,
        de: 'Wir waren zu sechst. Preis vorher klar, keine Überraschungen bei der Abrechnung. Die Hütte ist einfach, aber warm und sauber.',
        en: 'We were a group of six. Price was clear upfront, no surprises on the bill. The lodge is simple but warm and clean.' },
      { n: 'Sabine', from: ['Aus Brandenburg', 'From Brandenburg'], when: [2, 'm'], s: 4,
        de: 'Schöne Jagd, mein erster Keiler. Einziger Punkt: Die Anfahrt über die letzten Kilometer Waldweg ist mit tiefem Auto nichts.',
        en: 'Great hunt, my first boar. Only point: the last few kilometres of forest track are no fun with a low car.' },
      { n: 'Markus', from: ['Aus Hessen', 'From Hesse'], when: [3, 'm'], s: 5,
        de: 'Sehr gute Kommunikation auf Deutsch, vom ersten Anruf bis zur Abholung der Trophäe.',
        en: 'Very good communication in German, from the first call to collecting the trophy.' }
    ] },
  o2: { count: 21, dist: [18, 2, 1, 0, 0], cats: [4.9, 5.0, 4.7, 4.8, 4.9, 4.6],
    mentions: [['rvGuide', 'Jagdführer', 'Guide', 16], ['Rehwild', 'Böcke', 'Roebucks', 14], ['rvStay', 'Frühstück', 'Breakfast', 7], ['rvRevier', 'Landschaft', 'Landscape', 11]],
    items: [
      { n: 'Peter', from: ['Aus Oberschwaben', 'From Upper Swabia'], when: [3, 'w'], s: 5,
        de: 'Mein Jagdführer Marek hat jeden Bock vorher genau angesprochen und mir Zeit gelassen. Am zweiten Morgen hat es gepasst – ein ungerader Sechser.',
        en: 'My guide Marek judged every buck carefully and gave me time. On the second morning it worked out – an uneven six-pointer.' },
      { n: 'Claudia', from: ['Aus Sachsen', 'From Saxony'], when: [1, 'm'], s: 5,
        de: 'Masuren im Mai ist einfach traumhaft. Pirsch am See bei Sonnenaufgang, abends Fisch aus dem Ort.',
        en: 'Masuria in May is simply beautiful. Stalking by the lake at sunrise, local fish in the evening.' },
      { n: 'Frank', from: ['Aus Westfalen', 'From Westphalia'], when: [4, 'm'], s: 4,
        de: 'Gute Jagd, ehrliche Beratung. Die Leihwaffe war in Ordnung, beim nächsten Mal nehme ich aber meine eigene mit.',
        en: 'Good hunt, honest advice. The rental rifle was fine, but next time I will bring my own.' },
      { n: 'Andreas', from: ['Aus Tirol', 'From Tyrol'], when: [5, 'm'], s: 5,
        de: 'Alles wie beschrieben. Grundpreis plus Trophäe – genau so abgerechnet.',
        en: 'Everything as described. Base price plus trophy – billed exactly like that.' }
    ] },
  o3: { count: 44, dist: [34, 8, 2, 0, 0], cats: [4.8, 4.7, 4.5, 4.8, 4.6, 4.9],
    mentions: [['rvValue', 'Pauschale', 'Flat rate', 22], ['Schwarzwild', 'Strecke', 'Bag', 19], ['rvStay', 'Küche', 'Cooking', 13], ['rvOrga', 'Ablauf', 'Organisation', 10]],
    items: [
      { n: 'Stefan', from: ['Aus Franken', 'From Franconia'], when: [2, 'w'], s: 5,
        de: 'Pauschale heißt hier wirklich Pauschale. Wir haben gut Strecke gemacht und nichts nachgezahlt.',
        en: 'Flat rate really means flat rate here. We had a good bag and paid nothing extra.' },
      { n: 'Lukas', from: ['Aus Oberösterreich', 'From Upper Austria'], when: [1, 'm'], s: 5,
        de: 'Gulasch am Feuer nach dem letzten Treiben, dazu ein Wein aus der Gegend. Sehr herzliche Leute.',
        en: 'Goulash over the fire after the last drive, with a local wine. Very warm-hearted people.' },
      { n: 'Martin', from: ['Aus dem Allgäu', 'From the Allgäu'], when: [2, 'm'], s: 4,
        de: 'Hügeliges Gelände, man sollte halbwegs fit sein. Ansonsten top organisiert.',
        en: 'Hilly terrain, you should be reasonably fit. Otherwise very well organised.' },
      { n: 'Heike', from: ['Aus Thüringen', 'From Thuringia'], when: [3, 'm'], s: 5,
        de: 'Als einzige Frau in der Gruppe habe ich mich sehr wohlgefühlt. Gerne wieder.',
        en: 'As the only woman in the group I felt very welcome. Would go again.' }
    ] },
  o4: { count: 17, dist: [15, 2, 0, 0, 0], cats: [5.0, 4.9, 4.8, 4.8, 4.8, 4.5],
    mentions: [['Rotwild', 'Brunft', 'Rut', 14], ['rvGuide', 'Berufsjäger', 'Professional hunter', 12], ['rvStay', 'Jagdhaus', 'Hunting lodge', 8]],
    items: [
      { n: 'Wolfgang', from: ['Aus dem Schwarzwald', 'From the Black Forest'], when: [2, 'm'], s: 5,
        de: 'Brunft in Somogy – die Hirsche haben die ganze Nacht gemeldet. Der Berufsjäger kannte jeden Hirsch im Revier.',
        en: 'The rut in Somogy – stags roaring all night. The professional hunter knew every stag in the area.' },
      { n: 'Christian', from: ['Aus Bayern', 'From Bavaria'], when: [2, 'm'], s: 5,
        de: 'Teuer, aber die Spanne für die Trophäe war realistisch. Mein Hirsch lag am oberen Ende – so war es vorher auch erklärt.',
        en: 'Expensive, but the trophy range was realistic. My stag was at the upper end – exactly as explained beforehand.' },
      { n: 'Georg', from: ['Aus Südtirol', 'From South Tyrol'], when: [3, 'm'], s: 4,
        de: 'Großartiges Erlebnis. Das Jagdhaus könnte etwas Renovierung vertragen.',
        en: 'A great experience. The hunting lodge could do with some renovation.' }
    ] },
  o5: { count: 26, dist: [20, 5, 1, 0, 0], cats: [4.7, 4.8, 4.5, 4.7, 4.8, 4.8],
    mentions: [['Damwild', 'Damwild', 'Fallow deer', 15], ['Schwarzwild', 'Sauen', 'Boar', 13], ['rvValue', 'Preis', 'Price', 11], ['rvClock', 'Kurze Anreise', 'Short trip', 9]],
    items: [
      { n: 'Dirk', from: ['Aus Berlin', 'From Berlin'], when: [1, 'w'], s: 5,
        de: 'Eine gute Stunde ab Berlin, perfekt fürs Wochenende. Damwild und Sauen auf einer Jagd.',
        en: 'Just over an hour from Berlin, perfect for a weekend. Fallow deer and boar on the same hunt.' },
      { n: 'Ralf', from: ['Aus Hamburg', 'From Hamburg'], when: [1, 'm'], s: 5,
        de: 'Fairer Preis, gute Stände, ordentlich Anlauf beim zweiten Treiben.',
        en: 'Fair price, good stands, plenty of game in the second drive.' },
      { n: 'Tobias', from: ['Aus Niedersachsen', 'From Lower Saxony'], when: [3, 'm'], s: 4,
        de: 'Ich hatte Pech mit meinem Stand, aber so ist Drückjagd. Organisation und Essen waren gut.',
        en: 'No luck on my stand, but that is driven hunting. Organisation and food were good.' }
    ] },
  o6: { count: 12, dist: [9, 3, 0, 0, 0], cats: [4.6, 4.8, 4.7, 4.8, 4.9, 4.8],
    mentions: [['Ansitzjagd', 'Hochsitze', 'High seats', 8], ['rvComm', 'Deutsch', 'German', 6], ['rvStay', 'Pension', 'Guesthouse', 5]],
    items: [
      { n: 'Michael', from: ['Aus Niederbayern', 'From Lower Bavaria'], when: [2, 'w'], s: 5,
        de: 'Ruhige Ansitze, gute Kanzeln. Am dritten Abend kam die Bache mit Frischlingen – Überläufer erlegt.',
        en: 'Quiet sits in good high seats. On the third evening the sow came with piglets – took a yearling.' },
      { n: 'Bernd', from: ['Aus Sachsen', 'From Saxony'], when: [2, 'm'], s: 4,
        de: 'Man braucht Geduld, dafür ist es entspannt. Der Revierleiter spricht gut Deutsch.',
        en: 'It takes patience but it is relaxed. The head keeper speaks good German.' },
      { n: 'Simon', from: ['Aus Oberösterreich', 'From Upper Austria'], when: [4, 'm'], s: 5,
        de: 'Nah an der Grenze, schnell erreicht. Gute Mischung aus Jagd und Ruhe.',
        en: 'Close to the border, quick to reach. A good mix of hunting and rest.' }
    ] },
  o7: { count: 19, dist: [15, 3, 1, 0, 0], cats: [4.7, 4.6, 4.7, 4.8, 4.6, 4.9],
    mentions: [['Niederwild', 'Hasen', 'Hares', 12], ['rvValue', 'Preis-Leistung', 'Value', 10], ['rvStay', 'Gasthof', 'Inn', 7]],
    items: [
      { n: 'Klaus', from: ['Aus Württemberg', 'From Württemberg'], when: [3, 'w'], s: 5,
        de: 'Klassische Treibjagd wie früher. Viele Hasen, gute Treiber, abends Wildgulasch.',
        en: 'A classic driven hunt like in the old days. Lots of hares, good beaters, game goulash in the evening.' },
      { n: 'Uwe', from: ['Aus dem Rheinland', 'From the Rhineland'], when: [2, 'm'], s: 4,
        de: 'Gut für Gruppen. Die Flinten-Leihwaffen waren etwas abgenutzt, haben aber funktioniert.',
        en: 'Good for groups. The rental shotguns were a bit worn but worked fine.' },
      { n: 'Petra', from: ['Aus Österreich', 'From Austria'], when: [3, 'm'], s: 5,
        de: 'Netter Gasthof, kurze Wege, herzliche Gastgeber.',
        en: 'Nice inn, short distances, warm hosts.' }
    ] }
};

/* Was du wissen solltest – gilt für alle Angebote (je Revier anpassbar) */
RR.KNOW = [
  { icon: 'rvClock', de: ['Anreise & Abreise', 'Anreise am Vortag bis 18 Uhr, Begrüßung und Einweisung am Abend. Abreise nach dem letzten Jagdtag.'],
    en: ['Arrival & departure', 'Arrive the day before by 6 pm, welcome and briefing in the evening. Leave after the last hunting day.'] },
  { icon: 'rvCheck', de: ['Voraussetzungen', 'Gültiger Jagdschein und Jagdhaftpflicht mit Auslandsdeckung. Mit eigener Waffe zusätzlich der Europäische Feuerwaffenpass.'],
    en: ['Requirements', 'Valid hunting licence and liability insurance covering hunting abroad. With your own rifle, also the European Firearms Pass.'] },
  { icon: 'rvDoc', de: ['Revierregeln', 'Freigabe und Schussregeln werden bei der Einweisung erklärt. Was freigegeben ist, steht vor der Jagd fest.'],
    en: ['Area rules', 'What you may shoot and the shooting rules are explained at the briefing and fixed before the hunt.'] },
  { icon: 'rvShield', de: ['Sicherheit', 'Bei Drück- und Treibjagden ist Signalkleidung Pflicht (Weste oder Hutband in Orange).'],
    en: ['Safety', 'High-visibility clothing (orange vest or hat band) is mandatory on driven hunts.'] },
  { icon: 'rvOrga', de: ['Stornierung', 'Kostenlos bis 30 Tage vor Jagdbeginn. Genaue Bedingungen stehen im Angebot des Reviers.'],
    en: ['Cancellation', 'Free of charge up to 30 days before the hunt. Exact terms are in the area\'s offer.'] }
];

RR.reviews = (function () {
  var COLORS = ['#2E5E45', '#B8430F', '#6B5B3E', '#3E5C76', '#7A4E2D', '#4F6B3A'];

  function stars(n, size) {
    var s = '';
    for (var i = 0; i < 5; i++) s += i < n ? '★' : '☆';
    return s;
  }

  function section(o, lang, T) {
    var U = RR.util, el = U.el, data = RR.REVIEWS[o.id];
    var know = el('div', { class: 'know' },
      el('h2', null, T('knowTitle')),
      el('div', { class: 'know-grid' }, RR.KNOW.map(function (k) {
        var t = U.pick(k, lang);
        return el('div', { class: 'know-item' }, RR.icon(k.icon, 26), el('strong', null, t[0]), el('p', null, t[1]));
      })));
    if (!data) return null;

    var nf = function (v) { return v.toFixed(lang === 'en' ? 2 : 2).replace('.', lang === 'en' ? '.' : ','); };
    var total = data.dist.reduce(function (a, b) { return a + b; }, 0);
    var avg = data.dist.reduce(function (a, b, i) { return a + b * (5 - i); }, 0) / total;
    var max = Math.max.apply(null, data.dist);

    var dist = el('div', { class: 'rv-dist' },
      el('span', { class: 'rv-cat-name' }, T('rvOverall')),
      data.dist.map(function (c, i) {
        return el('div', { class: 'rv-bar-row' }, el('span', null, String(5 - i)),
          el('span', { class: 'rv-bar' }, el('span', { class: 'rv-fill', style: 'width:' + Math.round(c / max * 100) + '%' })));
      }));
    var cats = RR.REVIEW_CATS.map(function (c, i) {
      return el('div', { class: 'rv-cat' },
        el('span', { class: 'rv-cat-name' }, lang === 'en' ? c.en : c.de),
        el('strong', null, data.cats[i].toFixed(1).replace('.', lang === 'en' ? '.' : ',')),
        RR.icon(c.icon, 24));
    });

    var chipsRow = el('div', { class: 'rv-chips' }, data.mentions.map(function (m) {
      return el('span', { class: 'rv-chip' }, RR.icon(m[0], 18), lang === 'en' ? m[2] : m[1], el('em', null, String(m[3])));
    }));
    var scroller = el('div', { class: 'rv-chip-wrap' }, chipsRow,
      el('button', { type: 'button', class: 'rv-chip-next', 'aria-label': T('rvMore'), onclick: function () { chipsRow.scrollBy({ left: 220, behavior: 'smooth' }); } }, '›'));

    var cards = data.items.map(function (r, i) {
      var text = el('p', { class: 'rv-text' }, lang === 'en' ? r.en : r.de);
      var more = el('button', { type: 'button', class: 'rv-more', onclick: function () {
        var open = text.classList.toggle('open'); more.textContent = open ? T('rvLess') : T('rvMore');
      } }, T('rvMore'));
      var when = T(r.when[1] === 'w' ? (r.when[0] === 1 ? 'rvWeek1' : 'rvWeeks') : (r.when[0] === 1 ? 'rvMonth1' : 'rvMonths'), { n: r.when[0] });
      return el('article', { class: 'rv-card reveal' },
        el('div', { class: 'rv-who' },
          el('span', { class: 'rv-avatar', style: 'background:' + COLORS[(r.n.charCodeAt(0) + i) % COLORS.length] }, r.n.charAt(0)),
          el('div', null, el('strong', null, r.n), el('span', null, U.pick({ de: r.from[0], en: r.from[1] }, lang)))),
        el('div', { class: 'rv-meta' }, el('span', { class: 'rv-stars', 'aria-label': r.s + '/5' }, stars(r.s)), ' · ' + when + ' · ' + U.term(lang, o.art)),
        text, more);
    });

    var sec = el('section', { class: 'reviews reveal' },
      el('div', { class: 'rv-head' },
        el('h2', null, el('span', { class: 'rv-star' }, '★'), ' ' + nf(avg) + ' · ' + T('rvCount', { n: data.count })),
        el('span', { class: 'rv-sample' }, T('rvSample'))),
      el('p', { class: 'muted rv-note' }, T('rvNote')),
      el('div', { class: 'rv-cats' }, dist, cats),
      el('h3', { class: 'rv-sub' }, T('rvMention')),
      scroller,
      el('div', { class: 'rv-grid' }, cards),
      null);
    /* "Mehr anzeigen" nur zeigen, wenn der Text wirklich abgeschnitten ist */
    requestAnimationFrame(function () {
      [].forEach.call(sec.querySelectorAll('.rv-card'), function (c) {
        var t = c.querySelector('.rv-text'), b = c.querySelector('.rv-more');
        if (t.scrollHeight <= t.clientHeight + 2) b.style.display = 'none';
      });
    });
    return sec;
  }

  return { section: section };
})();
