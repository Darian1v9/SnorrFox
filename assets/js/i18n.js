/* Oberflächentexte Deutsch / Englisch. Angebotsinhalte stehen in data.js. */
window.RR = window.RR || {};

RR.I18N = {
  de: {
    navLabel: 'Hauptnavigation', navFind: 'Jagden finden', navHow: "So funktioniert's", navPartners: 'Für Reviere', login: 'Anmelden', langLabel: 'Sprache',
    kicker: 'Auslandsjagd in Osteuropa · auf Deutsch',
    h1: 'Deine Jagdreise – Baustein für Baustein, mit klarem Gesamtpreis.',
    lead: 'Revier, Wildart und Jagdart wählen. Unterkunft, Anreise, Leihwaffe oder Präparator nur dazunehmen, wenn du sie wirklich brauchst.',
    searchLabel: 'Jagdreisen suchen',
    h1a: 'Deine Jagdreise –', h1b: 'Baustein für Baustein,',
    h1words: ['mit klarem Gesamtpreis.', 'ohne Pauschalzwang.', 'mit Leihwaffe vor Ort.', 'auf Deutsch betreut.'],
    statOffers: 'Jagdangebote', statCountries: 'Länder in Osteuropa', statSpecies: 'Wildarten', statPrepay: 'Vorauszahlung an uns',
    from: 'Von', to: 'Bis', country: 'Land', species: 'Wildart', method: 'Jagdart', hunters: 'Jäger', guests: 'Begleitpersonen', trophy: 'Trophäenklasse',
    allCountries: 'Alle Länder', allSpecies: 'Alle Wildarten', allMethods: 'Alle Jagdarten', allClasses: 'Alle Klassen',
    noTrophy: 'Ohne Trophäe (Kahlwild, Sauen)', bronze: 'ab Bronze (CIC)', silver: 'ab Silber (CIC)', gold: 'Gold (CIC)',
    huntersN: '{n} Jäger', huntersMax: '12 Jäger und mehr', guestsNone: 'Keine', guestsN: '{n} Person(en)', guestsMax: '4 Personen und mehr',
    instant: 'Direkt verfügbar', withStay: 'Mit Unterkunft', withTravel: 'Mit Anreise', reset: 'Filter zurücksetzen',
    recTitle: 'Unsere Empfehlungen', recSub: 'Von uns geprüft und für deutsche Jäger zusammengestellt.',
    fromWord: 'ab', perHunter: 'pro Jäger', configure: 'Zusammenstellen',
    allTitle: 'Alle Angebote', found1: '1 Angebot gefunden', foundN: '{n} Angebote gefunden',
    emptyTitle: 'Keine Jagd passt zu allen Filtern.', emptyText: 'Lockere Zeitraum oder Wildart – oder lass dir ein Angebot von uns zusammenstellen.',
    basePrice: 'Grundpreis ab', typical: 'Typisch gesamt: {v} p. J.', upTo: 'bis {n} Jäger', season: 'Saison',
    groupPrice: 'Deine Gruppe ({h} Jäger{g}): ab {v}', guestsShort: ' + {n} Begl.',
    available: 'Direkt verfügbar', onRequest: 'Auf Anfrage', rentalOk: 'Leihwaffe möglich', stayOk: 'Unterkunft buchbar', travelOk: 'Anreise buchbar',
    trophyLbl: 'Trophäen:', trophyUpTo: 'bis {m} wählbar', trophyAlso: 'auch ohne Trophäe buchbar', trophyNone: 'keine Trophäenträger, nur Strecke',
    medal: ['', 'Bronze', 'Silber', 'Gold'],
    s1t: 'Jagd finden', s1p: 'Nach Zeitraum, Land, Wildart und Jagdart filtern – Drückjagden haben ihre eigene Kategorie.',
    s2t: 'Bausteine wählen', s2p: 'Trophäenklasse, eigene Waffe oder Leihwaffe, Jagdführung, Unterkunft, Anreise, Präparator – der Preis rechnet live mit.',
    s3t: 'Unverbindlich anfragen', s3p: 'Wir klären alles mit dem Revier. Du buchst und bezahlst direkt beim Anbieter – keine Vorauszahlung an uns.',
    speciesTitle: 'Wildarten entdecken', speciesSub: 'Wähle deine Wildart – wir zeigen dir passende Reviere.', speciesN: '{n} Angebote', species1: '1 Angebot', speciesNone: 'bald verfügbar',
    bandTitle: 'Die Drückjagdsaison wartet nicht.', bandText: 'Die besten Termine in Polen und Ungarn sind oft Monate vorher vergeben. Stell dir jetzt deine Jagd zusammen – unverbindlich und ohne Vorauszahlung.', bandCta: 'Jetzt Jagd finden', allPhotos: 'Alle Fotos',
    footer: 'Entwurf · alle Angebote und Preise sind Beispieldaten', listArea: 'Revier eintragen',

    back: 'Zurück zur Suche', verified: 'Geprüftes Revier', recBox: 'Unsere Empfehlung', applyRec: 'Empfehlung übernehmen', resetAll: 'Zurücksetzen',
    recBoxText: 'Unsere Empfehlung für dieses Angebot – mit einem Klick übernehmen und danach frei anpassen.',
    stepDate: 'Termin wählen', stepPeople: 'Wer kommt mit?', stepPeopleHint: 'Bucht ihr als Gruppe, stehen eure Stände nach Möglichkeit nebeneinander.',
    hunterSub: 'mit gültigem Jagdschein', guestSub: 'jagen nicht mit · {v} p. P.',
    lessHunter: 'Einen Jäger weniger', moreHunter: 'Einen Jäger mehr', lessGuest: 'Eine Begleitperson weniger', moreGuest: 'Eine Begleitperson mehr',
    freeOf: '{n} Plätze frei', soldOut: 'Ausgebucht · Warteliste möglich', perHunterShort: 'p. J.',
    notEnough: 'Für den gewählten Termin sind nur noch {n} Plätze frei. Bitte weniger Jäger oder einen anderen Termin wählen.',
    stepTrophy: '{s} – welche Klasse planst du ein?',
    stepTrophyHint: 'Abrechnung nach {note} laut Preisliste des Reviers – nur bei Erlegung. Wir rechnen mit 1 Stück je Jäger. Darunter wählst du, was mit der Trophäe passieren soll.',
    range: '{a}–{b}', approxPlus: '+ ca. {v}', approxShort: 'ca.',
    prepFor: '+ Trophäe & Präparat für deinen {s}', prepHint: 'Nur fällig, wenn du erlegst. Schätzung je Stück, mit üblicher Spanne.',
    fixHead: 'Fest gebucht', varHead: 'Nur bei Erlegung', totalRange: 'Spanne: {a} bis {b} – je nach Strecke und Trophäe',
    rentalNA: 'Bei diesem Revier nicht möglich', stepWeapon: 'Waffe', stepWeaponHint: 'Mit Leihwaffe brauchst du keinen Feuerwaffenpass und sparst dir den Papierkram.',
    stepGuide: 'Geführte Jagd', stepGuideHint: 'Ein eigener Jagdführer lohnt sich vor allem bei der ersten Jagd im Ausland.',
    stepLodging: 'Unterkunft', stepLodgingHint: 'Gilt für alle {n} Personen deiner Gruppe. Entweder direkt über das Revier oder in einer Unterkunft aus unserer Auswahl in der Nähe.',
    lodgingNone: ['Keine Unterkunft', 'Ich organisiere komplett selbst'], lodgingExt: ['Hotel oder Ferienwohnung', 'Unsere Auswahl in der Nähe · du buchst selbst'],
    staysTitle: 'Unterkünfte in der Nähe des Reviers', staysSource: 'Live-Preise über Booking.com · derzeit Beispieldaten',
    staysText: 'Von uns ausgewählt, weil sie nah am Treffpunkt liegen und Jäger willkommen sind. Preise und Verfügbarkeit gelten für deinen Termin und deine Gruppe. Gebucht wird direkt beim Anbieter.',
    kmTo: '{n} km zum Treffpunkt', perNight: '{v} pro Nacht', nightsUnits: '{u} × {unit} · {n} Nächte', viewStay: 'Beim Anbieter ansehen ↗',
    availOk: 'Verfügbar', availFew: 'Nur noch {n} frei', availNone: 'Ausgebucht für deinen Termin', availTooSmall: 'Nicht genug frei für {n} Personen',
    pickStay: 'Wähle eine Unterkunft aus der Liste, damit wir sie im Gesamtpreis berücksichtigen können.',
    stepTravel: 'Anreise', stepTravelHint: 'Gilt für alle {n} Personen deiner Gruppe.',
    stepPrep: 'Trophäe & Präparator', stepPrepHint: 'Preis je Trophäe. Gerechnet mit {n} Trophäe(n).', stepPrepNone: 'Wähle oben eine Trophäenklasse, um Präparation dazuzubuchen.',
    inclusive: 'inklusive', free: 'kostenlos', plusPP: '+{v} p. P.', plusPH: '+{v} je Jäger', plusPT: '+{v} je Trophäe', approx: 'ca. {v}', perDayNote: '{v} pro Tag', fromNight: 'ab {v} / Nacht',
    sumTitle: 'Deine Zusammenstellung', fix: 'Fixkosten', variable: 'Nur bei Erlegung (geschätzt)', total: 'Geschätzter Gesamtpreis',
    perHunterTotal: 'ca. {v} pro Jäger', guestsIncluded: ' (Begleitpersonen anteilig eingerechnet)',
    lineBase: 'Grundpaket', lineGuests: 'Begleitpersonen', lineWeapon: 'Leihwaffe', lineGuide: 'Persönlicher Jagdführer', onlyIfShot: 'nur bei Erlegung',
    selfBookSub: 'Selbst zu buchen', selfBookNote: '{name} buchst du selbst über den Link bei der Unterkunft. Wir zeigen den Preis hier nur zum Planen.',
    enquire: 'Unverbindlich anfragen', noPrepay: 'Keine Vorauszahlung an uns. Du buchst und bezahlst direkt beim Revier. Abschussgebühren richten sich nach der tatsächlichen Strecke und Trophäenvermessung.',
    needTitle: 'Das brauchst du für diese Reise', needLicense: 'Gültiger Jagdschein', needInsurance: 'Jagdhaftpflichtversicherung',
    needPass: 'Europäischer Feuerwaffenpass (Bearbeitung kann Monate dauern)', needNoPass: 'Keine Waffendokumente – Leihwaffe vor Ort', needShooting: 'Schießnachweis auf bewegtes Ziel (Drückjagd)',
    formTitle: 'Unverbindliche Anfrage', formIntro: 'Wir prüfen Termin und Verfügbarkeit beim Revier und melden uns innerhalb von 48 Stunden.',
    fName: 'Name', fEmail: 'E-Mail', fPhone: 'Telefon (optional)', fMsg: 'Nachricht (optional)', fSend: 'Anfrage per E-Mail senden', fCancel: 'Abbrechen',
    fHint: 'Dein E-Mail-Programm öffnet sich mit allen Angaben. Es wird nichts automatisch verschickt.',
    notFound: 'Dieses Angebot gibt es nicht (mehr).', mailSubject: 'Anfrage: {t}',
    mapKicker: 'Lage & Anreise', mapTitle: 'Wo du jagst', mapSub: 'Ungefähre Lage des Reviers – die genaue Anfahrt bekommst du mit der Buchungsbestätigung.',
    mapArea: 'Reviergröße', mapAirport: 'Nächster Flughafen', mapDist: 'Luftlinie zum Revier', mapRegion: 'Region',
    mapIn: 'Hineinzoomen', mapOut: 'Herauszoomen', mapRevier: 'Revier', mapTravel: 'Anreise', mapFull: 'Vollbild', mapAir: 'Luftlinie',
    mapHint: 'Zum Zoomen in die Karte klicken – oder Strg + Mausrad', mapAttrib: '© OpenStreetMap-Mitwirkende © CARTO', mapAria: 'Karte des Reviers',
    galPrev: 'Vorheriges Bild', galNext: 'Nächstes Bild', galShow: 'Bild {n} zeigen',
    rvCount: '{n} Bewertungen', rvSample: 'Beispieldaten im Entwurf', rvNote: 'Nur Jäger, die über Revierreise gebucht und gejagt haben, können eine Bewertung abgeben.',
    rvOverall: 'Gesamtbewertung', rvMention: 'Jäger erwähnen', rvMore: 'Mehr anzeigen', rvLess: 'Weniger anzeigen',
    rvWeek1: 'vor 1 Woche', rvWeeks: 'vor {n} Wochen', rvMonth1: 'vor 1 Monat', rvMonths: 'vor {n} Monaten', knowTitle: 'Was du wissen solltest'
  },
  en: {
    navLabel: 'Main navigation', navFind: 'Find hunts', navHow: 'How it works', navPartners: 'For outfitters', login: 'Sign in', langLabel: 'Language',
    kicker: 'Hunting trips in Eastern Europe',
    h1: 'Your hunting trip – built step by step, with a clear total price.',
    lead: 'Pick the area, species and hunting method. Add accommodation, travel, a rental rifle or taxidermy only if you really need them.',
    searchLabel: 'Search hunting trips',
    h1a: 'Your hunting trip –', h1b: 'built step by step,',
    h1words: ['with a clear total price.', 'no package deals.', 'with rental rifles on site.', 'with personal support.'],
    statOffers: 'Hunting offers', statCountries: 'Countries in Eastern Europe', statSpecies: 'Game species', statPrepay: 'Prepayment to us',
    from: 'From', to: 'To', country: 'Country', species: 'Species', method: 'Hunting method', hunters: 'Hunters', guests: 'Non-hunting guests', trophy: 'Trophy class',
    allCountries: 'All countries', allSpecies: 'All species', allMethods: 'All methods', allClasses: 'All classes',
    noTrophy: 'No trophy (antlerless, boar)', bronze: 'Bronze or better (CIC)', silver: 'Silver or better (CIC)', gold: 'Gold (CIC)',
    huntersN: '{n} hunter(s)', huntersMax: '12 hunters or more', guestsNone: 'None', guestsN: '{n} person(s)', guestsMax: '4 people or more',
    instant: 'Available now', withStay: 'With accommodation', withTravel: 'With travel', reset: 'Reset filters',
    recTitle: 'Our recommendations', recSub: 'Vetted by us and put together for you.',
    fromWord: 'from', perHunter: 'per hunter', configure: 'Configure',
    allTitle: 'All hunts', found1: '1 hunt found', foundN: '{n} hunts found',
    emptyTitle: 'No hunt matches all filters.', emptyText: 'Widen the dates or species – or let us put an offer together for you.',
    basePrice: 'Base price from', typical: 'Typical total: {v} per hunter', upTo: 'up to {n} hunters', season: 'Season',
    groupPrice: 'Your group ({h} hunters{g}): from {v}', guestsShort: ' + {n} guests',
    available: 'Available now', onRequest: 'On request', rentalOk: 'Rental rifle available', stayOk: 'Accommodation bookable', travelOk: 'Travel bookable',
    trophyLbl: 'Trophies:', trophyUpTo: 'up to {m}', trophyAlso: 'also bookable without trophy', trophyNone: 'no trophy animals, bag only',
    medal: ['', 'Bronze', 'Silver', 'Gold'],
    s1t: 'Find a hunt', s1p: 'Filter by dates, country, species and method – driven hunts have their own category.',
    s2t: 'Choose your options', s2p: 'Trophy class, own or rental rifle, guide, accommodation, travel, taxidermy – the price updates live.',
    s3t: 'Send a free enquiry', s3p: 'We sort everything out with the outfitter. You book and pay the outfitter directly – no prepayment to us.',
    speciesTitle: 'Explore by species', speciesSub: 'Pick your game – we show you matching hunting areas.', speciesN: '{n} hunts', species1: '1 hunt', speciesNone: 'coming soon',
    bandTitle: "Driven-hunt season won't wait.", bandText: 'The best dates in Poland and Hungary are often taken months ahead. Put your hunt together now – free enquiry, no prepayment.', bandCta: 'Find your hunt', allPhotos: 'All photos',
    footer: 'Draft · all hunts and prices are sample data', listArea: 'List your hunting area',

    back: 'Back to search', verified: 'Verified area', recBox: 'Our recommendation', applyRec: 'Use recommendation', resetAll: 'Reset',
    recBoxText: 'Our recommended setup for this hunt – apply it with one click, then adjust freely.',
    stepDate: 'Choose a date', stepPeople: 'Who is coming?', stepPeopleHint: 'If you book as a group, we try to place your stands next to each other.',
    hunterSub: 'with a valid hunting licence', guestSub: 'not hunting · {v} per person',
    lessHunter: 'One hunter less', moreHunter: 'One hunter more', lessGuest: 'One guest less', moreGuest: 'One guest more',
    freeOf: '{n} places left', soldOut: 'Sold out · waiting list possible', perHunterShort: 'per hunter',
    notEnough: 'Only {n} places are left on this date. Please choose fewer hunters or another date.',
    stepTrophy: '{s} – which class do you plan for?',
    stepTrophyHint: 'Charged by {note} according to the area price list – only if shot. We assume 1 animal per hunter. Below you choose what happens with the trophy.',
    range: '{a}–{b}', approxPlus: '+ approx. {v}', approxShort: 'approx.',
    prepFor: '+ Trophy & taxidermy for your {s}', prepHint: 'Only due if you shoot. Estimate per animal, with the usual range.',
    fixHead: 'Booked', varHead: 'Only if shot', totalRange: 'Range: {a} to {b} – depending on bag and trophy',
    rentalNA: 'Not available in this area', stepWeapon: 'Rifle', stepWeaponHint: 'With a rental rifle you need no firearms pass and skip the paperwork.',
    stepGuide: 'Guided hunt', stepGuideHint: 'A personal guide is especially worth it on your first hunt abroad.',
    stepLodging: 'Accommodation', stepLodgingHint: 'Applies to all {n} people in your group. Either through the hunting area or a place from our selection nearby.',
    lodgingNone: ['No accommodation', 'I organise everything myself'], lodgingExt: ['Hotel or holiday flat', 'Our selection nearby · you book yourself'],
    staysTitle: 'Places to stay near the hunting area', staysSource: 'Live prices via Booking.com · currently sample data',
    staysText: 'Selected by us because they are close to the meeting point and welcome hunters. Prices and availability apply to your date and group. You book directly with the provider.',
    kmTo: '{n} km to meeting point', perNight: '{v} per night', nightsUnits: '{u} × {unit} · {n} nights', viewStay: 'View with provider ↗',
    availOk: 'Available', availFew: 'Only {n} left', availNone: 'Sold out for your date', availTooSmall: 'Not enough space for {n} people',
    pickStay: 'Pick a place from the list so we can include it in the total price.',
    stepTravel: 'Travel', stepTravelHint: 'Applies to all {n} people in your group.',
    stepPrep: 'Trophy & taxidermy', stepPrepHint: 'Price per trophy. Calculated for {n} trophy/trophies.', stepPrepNone: 'Choose a trophy class above to add taxidermy.',
    inclusive: 'included', free: 'free', plusPP: '+{v} per person', plusPH: '+{v} per hunter', plusPT: '+{v} per trophy', approx: 'approx. {v}', perDayNote: '{v} per day', fromNight: 'from {v} / night',
    sumTitle: 'Your setup', fix: 'Fixed costs', variable: 'Only if shot (estimate)', total: 'Estimated total price',
    perHunterTotal: 'approx. {v} per hunter', guestsIncluded: ' (guests included proportionally)',
    lineBase: 'Base package', lineGuests: 'Non-hunting guests', lineWeapon: 'Rental rifle', lineGuide: 'Personal guide', onlyIfShot: 'only if shot',
    selfBookSub: 'Book yourself', selfBookNote: 'You book {name} yourself via the link. We only show the price here for planning.',
    enquire: 'Send free enquiry', noPrepay: 'No prepayment to us. You book and pay the hunting area directly. Trophy fees depend on the actual bag and trophy measurement.',
    needTitle: 'What you need for this trip', needLicense: 'Valid hunting licence', needInsurance: 'Hunting liability insurance',
    needPass: 'European Firearms Pass (processing can take months)', needNoPass: 'No firearm documents – rental rifle on site', needShooting: 'Moving-target shooting certificate (driven hunts)',
    formTitle: 'Free enquiry', formIntro: 'We check date and availability with the hunting area and get back to you within 48 hours.',
    fName: 'Name', fEmail: 'Email', fPhone: 'Phone (optional)', fMsg: 'Message (optional)', fSend: 'Send enquiry by email', fCancel: 'Cancel',
    fHint: 'Your email app opens with all details. Nothing is sent automatically.',
    notFound: 'This hunt does not exist (anymore).', mailSubject: 'Enquiry: {t}',
    mapKicker: 'Location & travel', mapTitle: 'Where you hunt', mapSub: 'Approximate location of the hunting area – exact directions come with your booking confirmation.',
    mapArea: 'Area size', mapAirport: 'Nearest airport', mapDist: 'Straight-line distance', mapRegion: 'Region',
    mapIn: 'Zoom in', mapOut: 'Zoom out', mapRevier: 'Hunting area', mapTravel: 'Travel', mapFull: 'Full screen', mapAir: 'as the crow flies',
    mapHint: 'Click the map to zoom – or Ctrl + scroll', mapAttrib: '© OpenStreetMap contributors © CARTO', mapAria: 'Map of the hunting area',
    galPrev: 'Previous photo', galNext: 'Next photo', galShow: 'Show photo {n}',
    rvCount: '{n} reviews', rvSample: 'Sample data in this draft', rvNote: 'Only hunters who booked and hunted via Revierreise can leave a review.',
    rvOverall: 'Overall rating', rvMention: 'Hunters mention', rvMore: 'Show more', rvLess: 'Show less',
    rvWeek1: '1 week ago', rvWeeks: '{n} weeks ago', rvMonth1: '1 month ago', rvMonths: '{n} months ago', knowTitle: 'Good to know'
  }
};

/* Englische Anzeigenamen für Länder, Wildarten und Jagdarten (Datenwerte bleiben deutsch) */
RR.TERMS_EN = {
  'Polen': 'Poland', 'Ungarn': 'Hungary', 'Tschechien': 'Czech Republic',
  'Schwarzwild': 'Wild boar', 'Rotwild': 'Red deer', 'Damwild': 'Fallow deer', 'Rehwild': 'Roe deer', 'Niederwild': 'Small game', 'Fuchs': 'Fox',
  'Drückjagd': 'Driven hunt', 'Treibjagd': 'Small-game drive', 'Pirschjagd': 'Stalking', 'Ansitzjagd': 'Stand hunting'
};

/* Hilfsfunktionen, die beide Seiten nutzen */
RR.util = {
  getLang: function () {
    var p = new URLSearchParams(location.search).get('lang');
    if (p === 'de' || p === 'en') return p;
    try { var s = localStorage.getItem('rr-lang'); if (s === 'de' || s === 'en') return s; } catch (e) {}
    return 'de';
  },
  saveLang: function (l) { try { localStorage.setItem('rr-lang', l); } catch (e) {} },
  t: function (lang, key, vars) {
    var s = (RR.I18N[lang] && RR.I18N[lang][key]);
    if (s === undefined) s = RR.I18N.de[key];
    if (typeof s !== 'string') return s;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  },
  eur: function (n) { return Math.round(n).toLocaleString('de-DE') + ' €'; },
  esc: function (v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  },
  pick: function (obj, lang) { return obj[lang] || obj.de; },
  /* Sicherer DOM-Baukasten: el('div', {class: 'x'}, 'Text', el('span', null, '…')) – Texte werden nie als HTML gelesen */
  el: function (tag, attrs) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'class') node.className = v;
      else if (k === 'style') node.setAttribute('style', v);
      else if (k.indexOf('on') === 0 && typeof v === 'function') node.addEventListener(k.slice(2), v);
      else if (k === 'disabled' || k === 'checked') node[k] = !!v;
      else node.setAttribute(k, v === true ? '' : String(v));
    });
    for (var i = 2; i < arguments.length; i++) RR.util.append(node, arguments[i]);
    return node;
  },
  append: function (node, child) {
    if (child === null || child === undefined || child === false || child === '') return;
    if (Array.isArray(child)) { child.forEach(function (c) { RR.util.append(node, c); }); return; }
    node.appendChild(typeof child === 'object' ? child : document.createTextNode(String(child)));
  },
  replace: function (node) {
    while (node.firstChild) node.removeChild(node.firstChild);
    for (var i = 1; i < arguments.length; i++) RR.util.append(node, arguments[i]);
  },
  /* Foto mit zwei Größen (800/1600 px), der Browser lädt die passende */
  photo: function (name, alt, sizes, attrs) {
    var base = RR.PHOTO_DIR + name;
    return RR.util.el('img', Object.assign({
      src: base + '-800.jpg',
      srcset: base + '-800.jpg 800w, ' + base + '-1600.jpg 1600w',
      sizes: sizes || '(max-width: 700px) 100vw, 50vw',
      alt: alt, loading: 'lazy', decoding: 'async'
    }, attrs || {}));
  },
  term: function (lang, word) { return lang === 'en' ? (RR.TERMS_EN[word] || word) : word; },
  /* Statische Texte mit data-i18n="key" füllen, Sprachumschalter verdrahten */
  applyStatic: function (lang, onChange) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = RR.util.t(lang, el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', RR.util.t(lang, el.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
      b.onclick = function () { RR.util.saveLang(b.dataset.lang); onChange(b.dataset.lang); };
    });
  }
};
