/* Revierreise – "Gut zu wissen": Länderregeln, Ausrüstung je Jagdart, Vorbereitung
   Stand: 26.11.2026. Länderangaben aus Preislisten/Behördenseiten zusammengefasst –
   vor jeder Reise mit dem Revier abgleichen, Regeln können sich ändern. */
window.RR = window.RR || {};

/* Vor der Reise – gilt für alle Angebote */
RR.TRIP_PREP = {
  de: [
    ['Jagdschein', 'Gültiger Jagdschein deines Heimatlandes – im Original dabeihaben.'],
    ['Versicherung', 'Jagdhaftpflicht mit Auslandsdeckung. Manche Länder verlangen zusätzlich eine eigene Versicherung vor Ort (siehe Länderregeln).'],
    ['Feuerwaffenpass', 'Nur mit eigener Waffe: Europäischer Feuerwaffenpass, Waffe eingetragen. Früh beantragen.'],
    ['Einladung', 'Schriftliche Einladung bzw. Buchungsbestätigung des Reviers ausdrucken – wird an der Grenze und bei Kontrollen gefragt.'],
    ['Ausweis', 'Personalausweis oder Reisepass, dazu Kopien aller Dokumente getrennt aufbewahren.'],
    ['Krankenversicherung', 'Europäische Krankenversicherungskarte, ggf. Auslandsreise-Krankenversicherung mit Rücktransport.'],
    ['Bargeld', 'Etwas Bargeld in Landeswährung für Trinkgelder, Wildbret oder kleine Gebühren.']
  ],
  en: [
    ['Hunting licence', 'Valid hunting licence from your home country – bring the original.'],
    ['Insurance', 'Hunting liability insurance that covers you abroad. Some countries also require local insurance (see country rules).'],
    ['Firearms pass', 'Only with your own rifle: European Firearms Pass with the rifle entered. Apply early.'],
    ['Invitation', 'Print the written invitation or booking confirmation from the area – asked for at borders and checks.'],
    ['ID', 'ID card or passport; keep copies of all documents separately.'],
    ['Health insurance', 'European Health Insurance Card, ideally travel health insurance including repatriation.'],
    ['Cash', 'Some cash in local currency for tips, venison or small fees.']
  ]
};

/* Ausrüstung je Jagdart (Packliste) */
RR.GEAR = {
  'Drückjagd': {
    de: ['Signaljacke oder -weste in Orange, dazu Hutband oder Mütze in Signalfarbe', 'Büchse mit niedrig vergrößerndem Drückjagdglas (z. B. 1–6×)', 'Gehörschutz, aktiv – damit du Kommandos und Hunde hörst', 'Sitzstock oder Klappsitz für lange Treiben', 'Warme, leise Kleidung in Schichten und wasserdichte Stiefel', 'Thermoskanne, kleiner Snack', 'Messer und Einweghandschuhe zum Aufbrechen', 'Ausreichend Munition – frag das Revier, wie viel du brauchst'],
    en: ['Orange high-visibility jacket or vest plus hat band or cap', 'Rifle with a low-magnification driven-hunt scope (e.g. 1–6×)', 'Active hearing protection – so you still hear commands and dogs', 'Shooting stick or folding seat for long drives', 'Warm, quiet layers and waterproof boots', 'Thermos and a small snack', 'Knife and disposable gloves for field dressing', 'Enough ammunition – ask the area how much you need']
  },
  'Pirschjagd': {
    de: ['Leise Kleidung ohne raschelnde Stoffe, in gedeckten Farben', 'Leichte, eingelaufene Stiefel mit leiser Sohle', 'Zielstock (Dreibein) für sichere Schüsse im Stehen', 'Fernglas, ideal mit Entfernungsmesser', 'Büchse mit variabler Optik (z. B. 2,5–15×)', 'Kleiner Rucksack mit Wasser, Messer, Stirnlampe', 'Mückenschutz im Frühjahr und Sommer'],
    en: ['Quiet clothing without rustling fabrics, in muted colours', 'Light, broken-in boots with quiet soles', 'Shooting sticks (tripod) for safe standing shots', 'Binoculars, ideally with rangefinder', 'Rifle with variable scope (e.g. 2.5–15×)', 'Small backpack with water, knife, headlamp', 'Insect repellent in spring and summer']
  },
  'Ansitzjagd': {
    de: ['Sehr warme Kleidung – auf dem Hochsitz bewegst du dich stundenlang kaum', 'Sitzkissen und Ansitzsack oder Decke', 'Lichtstarkes Fernglas für die Dämmerung', 'Büchse mit lichtstarkem Zielfernrohr', 'Stirnlampe mit Rotlicht für den Weg', 'Wärmebild-Handgerät zum Beobachten – nur wenn im Revier erlaubt', 'Handy auf lautlos, Powerbank'],
    en: ['Very warm clothing – on a high seat you barely move for hours', 'Seat cushion and sitting bag or blanket', 'Bright binoculars for dusk', 'Rifle with a bright riflescope', 'Headlamp with red light for the walk', 'Hand-held thermal for observing – only if allowed in the area', 'Phone on silent, power bank']
  },
  'Treibjagd': {
    de: ['Signalkleidung in Orange (Jacke oder Weste und Kopfbedeckung)', 'Flinte, bei Gewässern nur mit bleifreiem Schrot', 'Gehörschutz und Schießbrille', 'Patronengürtel oder -tasche mit ausreichend Munition', 'Wetterfeste Kleidung und Gummistiefel für Feld und Acker', 'Wildtasche oder Wildträger'],
    en: ['Orange high-visibility clothing (jacket or vest and hat)', 'Shotgun – near water only with lead-free shot', 'Hearing protection and shooting glasses', 'Cartridge belt or bag with enough ammunition', 'Weatherproof clothing and rubber boots for fields', 'Game bag or game carrier']
  }
};

/* Regeln je Land */
RR.COUNTRY = {
  Polen: {
    de: {
      intro: 'Polen ist für deutsche Jäger das nächstgelegene Ziel. Gejagt wird meist in Revieren der Staatsforsten oder von Jagdvereinen – immer mit Begleitung vor Ort.',
      rules: [
        'Mit Europäischem Feuerwaffenpass brauchen EU-Bürger keine zusätzliche Einfuhrbescheinigung für die Jagdwaffe. Ohne Pass musst du die Bescheinigung vorher beim polnischen Konsulat beantragen.',
        'Halte die Einladung bzw. Buchung bereit – sie belegt den Zweck der Einreise mit Waffe.',
        'Gastjäger müssen die polnischen Jagdbedingungen einhalten. Das Revier erklärt sie dir bei der Einweisung.',
        'Afrikanische Schweinepest: In vielen Gebieten gelten Sperrzonen. Wildbret und Trophäen von Sauen nur nach Vorgabe des Reviers mitnehmen, Schuhe und Auto nach der Jagd reinigen.'
      ],
      know: ['Sprache: Polnisch, in Grenznähe oft Deutsch', 'Währung: Złoty (PLN) – Karte wird fast überall akzeptiert', 'Notruf: 112']
    },
    en: {
      intro: 'Poland is the closest destination for German hunters. Hunts usually take place in state forest areas or hunting clubs – always with a local companion.',
      rules: [
        'With a European Firearms Pass, EU citizens need no extra import certificate for their hunting rifle. Without it, apply to the Polish consulate in advance.',
        'Keep your invitation or booking at hand – it proves why you are entering with a firearm.',
        'Guest hunters must follow Polish hunting conditions. The area explains them at the briefing.',
        'African swine fever: many areas have restricted zones. Take boar meat and trophies only as the area instructs; clean boots and car after the hunt.'
      ],
      know: ['Language: Polish, often German near the border', 'Currency: złoty (PLN) – cards accepted almost everywhere', 'Emergency: 112']
    },
    sources: [
      ['gov.pl: Einfuhr von Waffen nach Polen', 'https://www.gov.pl/web/oesterreich/bescheinigung-die-zur-einfuhr-von-waffen-und-munition-aus-dem-ausland-durch-polnische-brger-fr-eigene-bedrfnisse-berechtigt'],
      ['gov.pl: Einfuhr zur Jagd', 'https://www.gov.pl/web/schweiz/bescheinigung-die-zur-einfuhr-von-waffen-und-munition-ins-gebiet-der-republik-polen-und-zu-deren-ausfuhr-ins-ausland-berechtigt']
    ]
  },
  Ungarn: {
    de: {
      intro: 'Ungarn ist berühmt für starke Rothirsche und Keiler. Die Abläufe sind sehr geregelt – vor allem rund um die Trophäe.',
      rules: [
        'Jeder Jagdgast braucht eine ungarische Jagdkarte. Sie kostet extra, enthält oft die ungarische Haftpflichtversicherung und wird meist vom Revier oder Jagdbüro besorgt.',
        'Mindestalter für Jagdgäste ist in vielen Revieren 18 Jahre.',
        'Trophäen werden vor der Ausfuhr offiziell bewertet. Die Bewertung und ein Veterinärzeugnis zahlst du in der Regel selbst.',
        'Vorsicht beim Schuss: In vielen ungarischen Revieren gilt angeschweißtes Wild ganz oder teilweise als erlegt und wird berechnet.',
        'Ein- und Ausfuhr von Waffen und Munition sind genehmigungspflichtig – kläre die Papiere vorher mit dem Revier.'
      ],
      know: ['Sprache: Ungarisch, in Jagdrevieren oft Deutsch', 'Währung: Forint (HUF), viele Preislisten in Euro', 'Notruf: 112']
    },
    en: {
      intro: 'Hungary is famous for strong red stags and boars. Procedures are well regulated – especially around trophies.',
      rules: [
        'Every guest needs a Hungarian hunting card. It costs extra, often includes Hungarian liability insurance and is usually arranged by the area or agency.',
        'Many areas require guests to be at least 18.',
        'Trophies are officially measured before export. You usually pay for the measurement and a veterinary certificate.',
        'Careful with your shot: in many Hungarian areas wounded game counts fully or partly as taken and is charged.',
        'Import and export of firearms and ammunition need a permit – sort out the papers with the area in advance.'
      ],
      know: ['Language: Hungarian, German often spoken in hunting areas', 'Currency: forint (HUF), many price lists in euros', 'Emergency: 112']
    },
    sources: [
      ['TAEG Zrt.: Preisliste (Voraussetzungen, Jagdlizenz)', 'https://taegrt.hu/wp-content/uploads/2024/05/2024.04.01.-Vadaszati-arjegyzek_nemet.pdf'],
      ['Gemenc Zrt.: Preisliste 2026', 'https://gemenczrt.hu/wp-content/uploads/2026/02/Gemenc_Vadaszati_arjegyzek_2026_DE_egybe_k_251125.pdf'],
      ['NAV (Zoll Ungarn): Schusswaffen & Munition', 'https://nav.gov.hu/en/intormation_on_customs_matters/travel-guides---faq/german/schusswaffen-munition']
    ]
  },
  Tschechien: {
    de: {
      intro: 'Tschechien liegt direkt vor der Tür und hat eine lange Jagdtradition. Die Formalitäten erledigt meist der Forstbetrieb für dich.',
      rules: [
        'Du brauchst eine in Tschechien gültige Jagdkarte inklusive tschechischer Haftpflichtversicherung. Der Forstbetrieb stellt sie aus – dafür schickst du vorher eine Kopie deines Jagdscheins.',
        'Mit eigener Waffe legst du den Europäischen Feuerwaffenpass bzw. einen Waffenbegleitschein vor.',
        'Auf Schalen- und Schwarzwild jagst du in der Regel nur mit Jagdführer.',
        'Die Rechnung ist meist vor der Abreise aus Tschechien zu bezahlen.'
      ],
      know: ['Sprache: Tschechisch, Deutsch in Grenznähe verbreitet', 'Währung: Krone (CZK)', 'Notruf: 112']
    },
    en: {
      intro: 'Czechia is right next door and has a long hunting tradition. The forest office usually handles the formalities for you.',
      rules: [
        'You need a Czech-valid hunting card including Czech liability insurance. The forest office issues it – send a copy of your licence in advance.',
        'With your own rifle you show the European Firearms Pass or a firearms transport permit.',
        'For hoofed game and boar you usually hunt only with a guide.',
        'The bill usually has to be paid before you leave the country.'
      ],
      know: ['Language: Czech, German common near the border', 'Currency: koruna (CZK)', 'Emergency: 112']
    },
    sources: [
      ['Forstbetrieb Židlochovice: Preisliste 2025', 'https://lzzidlochovice.lesycr.cz/wp-content/uploads/2025/04/Preisliste-2025.pdf'],
      ['Vertragsbedingungen Jagdgäste (Register der Verträge, CZ)', 'https://smlouvy.gov.cz/smlouva/soubor/39925000/SML-00184-2025-4_P.pdf']
    ]
  }
};
