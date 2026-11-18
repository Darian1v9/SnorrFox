/*
 * Revierreise – Inhalte und Preise
 * ---------------------------------
 * Alle Angebote, Preise, Optionen und Texte stehen hier, getrennt vom Seitenaufbau.
 * Beim späteren Umstieg auf ein Framework (z. B. Next.js) kann diese Datei fast
 * unverändert als Datenquelle oder Datenbank-Seed übernommen werden.
 *
 * WICHTIG: Alle Angebote, Kapazitäten und Preise sind BEISPIELDATEN.
 */
window.RR = window.RR || {};

RR.CONFIG = {
  brand: 'Revierreise',
  // Hier eure echte Adresse eintragen – Anfragen werden per E-Mail-Programm vorbereitet.
  contactEmail: 'anfrage@example.com',
  locale: { de: 'de-DE', en: 'en-GB' }
};

/* ---------- Bausteine, die für alle Angebote gleich sind ---------- */
RR.SHARED = {
  guestFee: 150, // Begleitperson (jagt nicht mit), pauschal pro Reise
  weapon: [
    { id: 'eigen', de: ['Eigene Waffe', 'Europäischer Feuerwaffenpass nötig'], en: ['Own rifle', 'European Firearms Pass required'], perDay: 0 },
    { id: 'leih', de: ['Leihwaffe vor Ort', 'Repetierer mit Drückjagdglas, inkl. 20 Patronen'], en: ['Rental rifle on site', 'Bolt-action with driven-hunt scope, incl. 20 rounds'], perDay: 60 }
  ],
  guide: [
    { id: 'nein', de: ['Ohne Jagdführer', 'Anstellen durch die Jagdleitung'], en: ['No personal guide', 'Placed on stand by the hunt master'], perDay: 0 },
    { id: 'ja', de: ['Persönlicher Jagdführer', 'Deutschsprachig, begleitet dich an allen Jagdtagen'], en: ['Personal guide', 'German-speaking, with you on every hunting day'], perDay: 120 }
  ],
  trophyPrep: [
    { id: 'none', de: ['Keine Trophäenbehandlung', 'Trophäe bleibt im Revier oder ich kümmere mich'], en: ['No trophy service', 'Trophy stays or I handle it myself'], price: 0 },
    { id: 'abkochen', de: ['Abkochen + Exportpapiere', 'Zum Mitnehmen nach Hause'], en: ['Boiling + export papers', 'Ready to take home'], price: 80 },
    { id: 'schaedel', de: ['Schädelpräparat', 'Beim Partner-Präparator, Versand nach DE'], en: ['European skull mount', 'Partner taxidermist, shipped to Germany'], price: 250 },
    { id: 'kopf', de: ['Kopfpräparat', 'Beim Partner-Präparator, Versand nach DE'], en: ['Head mount', 'Partner taxidermist, shipped to Germany'], price: 650 }
  ]
};

/* ---------- Trophäenklassen je Wildart (Abrechnung nach Preisliste des Reviers) ---------- */
RR.TROPHY = {
  keiler: { de: 'Keiler', en: 'Boar (tusker)', note: { de: 'Waffenlänge', en: 'tusk length' }, classes: [
    { id: 'none', de: ['Kein Keiler', 'Nur Frischlinge, Überläufer, Bachen'], en: ['No tusker', 'Piglets, yearlings, sows only'], price: 0 },
    { id: 'k1', de: ['Keiler bis 14 cm', 'häufigste Klasse'], en: ['Tusker up to 14 cm', 'most common class'], price: 350 },
    { id: 'k2', de: ['Keiler 14–16 cm', 'starker Keiler'], en: ['Tusker 14–16 cm', 'strong boar'], price: 650 },
    { id: 'k3', de: ['Keiler über 16 cm', 'Lebenskeiler'], en: ['Tusker over 16 cm', 'trophy of a lifetime'], price: 950 }
  ]},
  hirsch: { de: 'Rothirsch', en: 'Red stag', note: { de: 'Geweihgewicht', en: 'antler weight' }, classes: [
    { id: 'none', de: ['Kein Hirsch', 'Nur Kahlwild (Alttier, Kalb)'], en: ['No stag', 'Hinds and calves only'], price: 0 },
    { id: 'h1', de: ['Hirsch bis 5 kg', 'junger Hirsch'], en: ['Stag up to 5 kg', 'young stag'], price: 1400 },
    { id: 'h2', de: ['Hirsch 5–7 kg', 'mittlerer Hirsch'], en: ['Stag 5–7 kg', 'medium stag'], price: 2600 },
    { id: 'h3', de: ['Hirsch über 7 kg', 'starker Hirsch'], en: ['Stag over 7 kg', 'strong stag'], price: 4200 }
  ]},
  damhirsch: { de: 'Damhirsch', en: 'Fallow buck', note: { de: 'Geweihgewicht', en: 'antler weight' }, classes: [
    { id: 'none', de: ['Kein Damhirsch', 'Nur Damkahlwild'], en: ['No buck', 'Does and fawns only'], price: 0 },
    { id: 'd1', de: ['Damhirsch bis 2,5 kg', 'junger Schaufler'], en: ['Buck up to 2.5 kg', 'young buck'], price: 600 },
    { id: 'd2', de: ['Damhirsch 2,5–3,5 kg', 'mittlerer Schaufler'], en: ['Buck 2.5–3.5 kg', 'medium buck'], price: 1300 },
    { id: 'd3', de: ['Damhirsch über 3,5 kg', 'starker Schaufler'], en: ['Buck over 3.5 kg', 'strong buck'], price: 2100 }
  ]},
  rehbock: { de: 'Rehbock', en: 'Roe buck', note: { de: 'Gehörngewicht', en: 'antler weight' }, classes: [
    { id: 'r1', de: ['Bock bis 300 g', 'Abschussbock'], en: ['Buck up to 300 g', 'management buck'], price: 250 },
    { id: 'r2', de: ['Bock 300–400 g', 'guter Bock'], en: ['Buck 300–400 g', 'good buck'], price: 550 },
    { id: 'r3', de: ['Bock über 400 g', 'Medaillenbock'], en: ['Buck over 400 g', 'medal-class buck'], price: 1100 }
  ]}
};

/* ---------- Unterkünfte in der Nähe (Option 2: selbst buchen) ---------- */
// left = freie Einheiten je Termin-ID. Später z. B. über die Booking.com Demand API live abfragen.
RR.STAYS = {
  westpommern: [
    { id: 's6', name: 'Ferienwohnung Jägerstube', type: { de: 'Ferienwohnung', en: 'Holiday flat' }, km: 4, unit: { de: 'Wohnung für 3', en: 'Flat for 3' }, cap: 3, night: 70, left: { t1: 0, t2: 1, t3: 1 }, url: '#' },
    { id: 's1', name: 'Landhotel am Waldrand', type: { de: 'Hotel', en: 'Hotel' }, km: 6, unit: { de: 'Doppelzimmer', en: 'Double room' }, cap: 2, night: 79, left: { t1: 5, t2: 2, t3: 6 }, url: '#' },
    { id: 's2', name: 'Ferienhaus Kiefernhof', type: { de: 'Ferienhaus', en: 'Holiday house' }, km: 9, unit: { de: 'Haus für 8', en: 'House for 8' }, cap: 8, night: 165, left: { t1: 1, t2: 0, t3: 1 }, url: '#' },
    { id: 's3', name: 'Gasthof Zur alten Mühle', type: { de: 'Pension', en: 'Guesthouse' }, km: 12, unit: { de: 'Doppelzimmer', en: 'Double room' }, cap: 2, night: 62, left: { t1: 4, t2: 3, t3: 0 }, url: '#' },
    { id: 's4', name: 'Apartments am Markt', type: { de: 'Ferienwohnung', en: 'Apartment' }, km: 18, unit: { de: 'Apartment für 4', en: 'Apartment for 4' }, cap: 4, night: 95, left: { t1: 3, t2: 1, t3: 3 }, url: '#' },
    { id: 's5', name: 'Seehotel Waldsee', type: { de: 'Hotel', en: 'Hotel' }, km: 24, unit: { de: 'Doppelzimmer', en: 'Double room' }, cap: 2, night: 112, left: { t1: 8, t2: 6, t3: 8 }, url: '#' }
  ]
};

/* ---------- Angebote ---------- */
RR.OFFERS = [
  {
    id: 'o1', title: 'Drückjagd Westpommern', land: 'Polen', region: 'Westpommern', art: 'Drückjagd',
    wild: ['Schwarzwild', 'Rotwild', 'Damwild'], start: '2027-10-15', end: '2028-01-15', saison: 'Mitte Okt. – Mitte Jan.',
    days: 3, nights: 3, capacity: 14, instant: true, rental: true, base: 1290, est: '1.700–2.600 €',
    img: 'winterwald.svg', alt: 'Illustration: verschneiter Nadelwald', trophyMax: 2, kahl: true,
    recommended: { why: 'Beste Wahl für Gruppen', text: 'Bis zu 14 Schützen, Kahlwild und Sauen im Grundpreis, Sammelshuttle ab Berlin buchbar.' },
    includes: 'Organisation, Treiber, Hunde, Ansteller, Mittagessen im Revier. Frischlinge, Überläufer, Bachen und Kahlwild sind inklusive.',
    termine: [
      { id: 't1', label: '12.–14. Nov. 2027', sub: 'Anreise 11.11.', free: 6 },
      { id: 't2', label: '26.–28. Nov. 2027', sub: 'Anreise 25.11.', free: 2 },
      { id: 't3', label: '7.–9. Jan. 2028', sub: 'Anreise 6.1.', free: 0 }
    ],
    trophies: ['keiler', 'hirsch'],
    lodging: [
      { id: 'pension', de: ['Revier: Pension, Halbpension', 'Vom Revier gestellt'], en: ['Area: guesthouse, half board', 'Provided by the hunting area'], perNight: 65 },
      { id: 'jagdhaus', de: ['Revier: Jagdhütte, Vollpension', 'Direkt im Revier'], en: ['Area: hunting lodge, full board', 'Right in the hunting area'], perNight: 110 }
    ],
    stays: 'westpommern',
    travel: [
      { id: 'selbst', de: ['Eigene Anreise', 'Mit dem Auto, ca. 2 h ab Berlin'], en: ['Own travel', 'By car, approx. 2 h from Berlin'], price: 0 },
      { id: 'shuttle', de: ['Sammelshuttle ab Berlin', 'Hin und zurück, Waffentransport möglich'], en: ['Group shuttle from Berlin', 'Return trip, rifle transport possible'], price: 95 },
      { id: 'transfer', de: ['Flughafentransfer Stettin', 'Hin und zurück, Abholung am Terminal'], en: ['Airport transfer Szczecin', 'Return trip, pick-up at the terminal'], price: 140 }
    ],
    gallery: [['winterwald.svg', 'Illustration: Revier im Winter'], ['hochsitz.svg', 'Illustration: Drückjagdstand'], ['see-huette.svg', 'Illustration: Unterkunft am See']]
  },
  {
    id: 'o2', title: 'Rehbock in Masuren', land: 'Polen', region: 'Ermland-Masuren', art: 'Pirschjagd',
    wild: ['Rehwild'], start: '2027-05-11', end: '2027-09-30', saison: 'Mai – Sept.',
    days: 3, nights: 3, capacity: 4, instant: true, rental: true, base: 890, est: '1.200–1.800 €',
    img: 'hochsitz.svg', alt: 'Illustration: Hochsitz am Feldrand', trophyMax: 3, kahl: false,
    recommended: { why: 'Ideal für die erste Auslandsjagd', text: 'Persönlicher Jagdführer, Leihwaffe vor Ort und deutschsprachige Betreuung.' },
    includes: 'Pirsch und Ansitz morgens und abends mit Jagdführer, Revierfahrten. Der Bock wird nach Gehörngewicht abgerechnet.',
    termine: [
      { id: 't1', label: '13.–15. Mai 2027', sub: 'Bockaufgang', free: 3 },
      { id: 't2', label: '22.–24. Juli 2027', sub: 'Blattzeit', free: 4 },
      { id: 't3', label: '2.–4. Sept. 2027', sub: 'Spätsommer', free: 2 }
    ],
    trophies: ['rehbock'],
    lodging: [
      { id: 'pension', de: ['Revier: Gästehaus, Halbpension', 'Am Seeufer'], en: ['Area: guesthouse, half board', 'On the lakeshore'], perNight: 55 }
    ],
    stays: null,
    travel: [
      { id: 'selbst', de: ['Eigene Anreise', 'Mit dem Auto, ca. 6 h ab Berlin'], en: ['Own travel', 'By car, approx. 6 h from Berlin'], price: 0 },
      { id: 'transfer', de: ['Flughafentransfer Danzig', 'Hin und zurück'], en: ['Airport transfer Gdańsk', 'Return trip'], price: 160 }
    ],
    gallery: [['hochsitz.svg', 'Illustration: Hochsitz am Feldrand'], ['wald-morgen.svg', 'Illustration: Wald im Morgenrot'], ['see-huette.svg', 'Illustration: Gästehaus am See']]
  },
  {
    id: 'o3', title: 'Sau-Drückjagd Nógrád, Pauschale', land: 'Ungarn', region: 'Nógrád', art: 'Drückjagd',
    wild: ['Schwarzwild'], start: '2027-10-01', end: '2028-01-31', saison: 'Okt. – Jan.',
    days: 2, nights: 2, capacity: 25, instant: false, rental: true, base: 1150, est: '1.400–1.800 €',
    img: 'herbst.svg', alt: 'Illustration: Hügel im Herbst', trophyMax: 1, kahl: true,
    recommended: { why: 'Pauschalpreis ohne Abschussgebühren', text: 'Zwei Tage Saujagd, fester Preis – keine Überraschung bei der Abrechnung.' },
    includes: 'Zwei Drückjagdtage, Treiber und Hunde. Alle Sauen sind im Pauschalpreis enthalten – auch Keiler.',
    termine: [
      { id: 't1', label: '20.–21. Nov. 2027', sub: 'Auf Anfrage', free: 10 },
      { id: 't2', label: '11.–12. Dez. 2027', sub: 'Auf Anfrage', free: 18 }
    ],
    trophies: [],
    lodging: [
      { id: 'jagdhaus', de: ['Revier: Jagdschloss, Vollpension', 'Historisches Jagdhaus im Revier'], en: ['Area: hunting manor, full board', 'Historic lodge in the area'], perNight: 120 }
    ],
    stays: null,
    travel: [
      { id: 'selbst', de: ['Eigene Anreise', 'Mit dem Auto'], en: ['Own travel', 'By car'], price: 0 },
      { id: 'transfer', de: ['Flughafentransfer Budapest', 'Hin und zurück'], en: ['Airport transfer Budapest', 'Return trip'], price: 120 }
    ],
    gallery: [['herbst.svg', 'Illustration: Hügel im Herbst'], ['wald-morgen.svg', 'Illustration: Wald'], ['see-huette.svg', 'Illustration: Unterkunft']]
  },
  {
    id: 'o4', title: 'Hirschbrunft in Somogy', land: 'Ungarn', region: 'Somogy', art: 'Pirschjagd',
    wild: ['Rotwild'], start: '2027-09-05', end: '2027-10-10', saison: 'Sept. – Anf. Okt.',
    days: 4, nights: 4, capacity: 2, instant: false, rental: true, base: 1900, est: '3.500–8.000 €',
    img: 'hirsch.svg', alt: 'Illustration: Hirsch in der Abenddämmerung', trophyMax: 3, kahl: false,
    includes: 'Vier Pirschtage zur Brunft mit Berufsjäger. Der Hirsch wird nach Geweihgewicht laut Preisliste abgerechnet.',
    termine: [
      { id: 't1', label: '12.–15. Sept. 2027', sub: 'Brunftbeginn', free: 2 },
      { id: 't2', label: '20.–23. Sept. 2027', sub: 'Hochbrunft', free: 1 }
    ],
    trophies: ['hirsch'],
    lodging: [
      { id: 'jagdhaus', de: ['Revier: Jagdhaus, Vollpension', 'Mitten im Revier'], en: ['Area: hunting lodge, full board', 'In the middle of the area'], perNight: 110 }
    ],
    stays: null,
    travel: [
      { id: 'selbst', de: ['Eigene Anreise', 'Mit dem Auto'], en: ['Own travel', 'By car'], price: 0 },
      { id: 'transfer', de: ['Flughafentransfer Budapest', 'Hin und zurück'], en: ['Airport transfer Budapest', 'Return trip'], price: 150 }
    ],
    gallery: [['hirsch.svg', 'Illustration: Hirsch'], ['herbst.svg', 'Illustration: Revier im Herbst'], ['see-huette.svg', 'Illustration: Jagdhaus']]
  },
  {
    id: 'o5', title: 'Damwild-Drückjagd Lebuser Land', land: 'Polen', region: 'Lebuser Land', art: 'Drückjagd',
    wild: ['Damwild', 'Schwarzwild'], start: '2027-11-01', end: '2028-01-10', saison: 'Nov. – Anf. Jan.',
    days: 2, nights: 2, capacity: 8, instant: true, rental: false, base: 690, est: '800–1.300 €',
    img: 'wald-morgen.svg', alt: 'Illustration: Wald im Morgenrot', trophyMax: 1, kahl: true,
    includes: 'Zwei Drückjagdtage nahe der deutschen Grenze. Damkahlwild und Sauen bis 50 kg inklusive.',
    termine: [
      { id: 't1', label: '4.–5. Dez. 2027', sub: 'Anreise am Vorabend', free: 5 },
      { id: 't2', label: '8.–9. Jan. 2028', sub: 'Anreise am Vorabend', free: 8 }
    ],
    trophies: ['damhirsch', 'keiler'],
    lodging: [],
    stays: null,
    travel: [
      { id: 'selbst', de: ['Eigene Anreise', 'Ca. 1,5 h ab Berlin'], en: ['Own travel', 'Approx. 1.5 h from Berlin'], price: 0 }
    ],
    gallery: [['wald-morgen.svg', 'Illustration: Wald im Morgenrot'], ['winterwald.svg', 'Illustration: Winterwald'], ['hochsitz.svg', 'Illustration: Stand']]
  },
  {
    id: 'o6', title: 'Ansitz auf Sauen, Südböhmen', land: 'Tschechien', region: 'Südböhmen', art: 'Ansitzjagd',
    wild: ['Schwarzwild'], start: '2027-01-01', end: '2027-12-31', saison: 'ganzjährig',
    days: 3, nights: 3, capacity: 3, instant: true, rental: true, base: 640, est: '900–1.400 €',
    img: 'see-huette.svg', alt: 'Illustration: Jagdhütte am See', trophyMax: 2, kahl: true,
    includes: 'Drei Ansitznächte an Kirrungen, Jagdführung zum Stand, Bergung.',
    termine: [
      { id: 't1', label: 'Flexibel, Do–So', sub: 'Nach Absprache', free: 3 },
      { id: 't2', label: 'Flexibel, Mo–Do', sub: 'Nach Absprache', free: 3 }
    ],
    trophies: ['keiler'],
    lodging: [
      { id: 'jagdhaus', de: ['Revier: Jagdhütte, Selbstversorger', 'Am Teich im Revier'], en: ['Area: hunting cabin, self-catering', 'By the pond in the area'], perNight: 45 }
    ],
    stays: null,
    travel: [
      { id: 'selbst', de: ['Eigene Anreise', 'Ca. 3 h ab München'], en: ['Own travel', 'Approx. 3 h from Munich'], price: 0 }
    ],
    gallery: [['see-huette.svg', 'Illustration: Jagdhütte am See'], ['wald-morgen.svg', 'Illustration: Wald'], ['hochsitz.svg', 'Illustration: Kanzel']]
  },
  {
    id: 'o7', title: 'Niederwild-Treibjagd Pannonien', land: 'Ungarn', region: 'Westtransdanubien', art: 'Treibjagd',
    wild: ['Niederwild'], start: '2027-11-01', end: '2028-01-31', saison: 'Nov. – Jan.',
    days: 2, nights: 2, capacity: 12, instant: false, rental: true, base: 980, est: '1.200–1.700 €',
    img: 'feld.svg', alt: 'Illustration: Feld am Waldrand', trophyMax: 0, kahl: true,
    includes: 'Zwei Treibjagdtage auf Fasan und Hase, Treiber, Hunde, Streckenlegen. Abrechnung je erlegtem Stück laut Preisliste.',
    termine: [
      { id: 't1', label: '27.–28. Nov. 2027', sub: 'Auf Anfrage', free: 12 },
      { id: 't2', label: '18.–19. Dez. 2027', sub: 'Auf Anfrage', free: 9 }
    ],
    trophies: [],
    lodging: [
      { id: 'pension', de: ['Revier: Landgasthof, Halbpension', 'Im Nachbardorf'], en: ['Area: country inn, half board', 'In the next village'], perNight: 60 }
    ],
    stays: null,
    travel: [
      { id: 'selbst', de: ['Eigene Anreise', 'Mit dem Auto'], en: ['Own travel', 'By car'], price: 0 },
      { id: 'transfer', de: ['Flughafentransfer Wien', 'Hin und zurück'], en: ['Airport transfer Vienna', 'Return trip'], price: 110 }
    ],
    gallery: [['feld.svg', 'Illustration: Feld'], ['herbst.svg', 'Illustration: Herbst'], ['see-huette.svg', 'Illustration: Unterkunft']]
  }
];

/* Empfohlene Zusammenstellung je Angebot ("Unsere Empfehlung übernehmen") */
RR.RECOMMENDED_SETUP = {
  o1: { trophy: { keiler: 'k1', hirsch: 'none' }, weapon: 'eigen', guide: 'nein', lodging: 'pension', travel: 'shuttle', prep: 'abkochen' },
  o2: { trophy: { rehbock: 'r1' }, weapon: 'leih', guide: 'ja', lodging: 'pension', travel: 'selbst', prep: 'abkochen' },
  default: { weapon: 'eigen', guide: 'nein', prep: 'none' }
};
