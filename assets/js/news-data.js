/* Revierreise – Jagd-News (Stand: 26.11.2026)
   Jeder Beitrag: Kategorie, Datum, Foto, Texte DE/EN, Tipp für die Jagdreise, Quellen.
   Hinweis: Zusammenfassungen in eigenen Worten, keine Rechtsberatung. */
window.RR = window.RR || {};

RR.NEWS_CATS = [
  { id: 'all', icon: null, de: 'Alle', en: 'All' },
  { id: 'gesetz', icon: 'rvDoc', de: 'Gesetze & Recht', en: 'Law' },
  { id: 'waffen', icon: 'rvGuide', de: 'Waffen & Ausrüstung', en: 'Guns & gear' },
  { id: 'trends', icon: 'rvStar', de: 'Trends', en: 'Trends' },
  { id: 'seuchen', icon: 'rvShield', de: 'Wildseuchen', en: 'Wildlife disease' },
  { id: 'ratgeber', icon: 'rvCheck', de: 'Ratgeber', en: 'Guide' }
];

RR.NEWS_UPDATED = '2026-11-26';

RR.NEWS = [
  {
    id: 'wolf-jagdrecht', cat: 'gesetz', date: '2026-04-02', img: 'rothirsch-lauf', min: 3, featured: true,
    de: {
      title: 'Der Wolf ist jetzt im Jagdrecht',
      teaser: 'Seit 2. April 2026 steht der Wolf im Bundesjagdgesetz. Was sich ändert – und was nicht.',
      body: [
        'Bundestag und Bundesrat haben zugestimmt, seit dem 2. April 2026 gilt die Änderung: Der Wolf ist in Deutschland nun eine grundsätzlich jagdbare Tierart. Möglich wurde das, weil die EU den Schutzstatus des Wolfs zuvor herabgestuft hatte.',
        'Ob und wie gejagt wird, entscheiden die Länder. Ist der Bestand nicht in einem günstigen Erhaltungszustand, können sie die Jagd zeitlich oder räumlich begrenzen, die Zahl der Wölfe deckeln, ein Genehmigungssystem einführen oder die Jagd ganz verbieten.',
        'Unverändert bleibt: Handel mit toten Wölfen und deren Zurschaustellung sind nach EU-Artenschutzrecht weiter verboten. Herdenschutz wird weiter gefördert.'
      ],
      tip: 'Für deine Jagdreise: Eine Wolfstrophäe ist kein Thema – Handel und Zurschaustellung bleiben verboten. Im Ausland gelten außerdem die Regeln des Gastlandes.'
    },
    en: {
      title: 'Wolves are now covered by German hunting law',
      teaser: 'Since 2 April 2026 the wolf is listed in the Federal Hunting Act. What changes – and what does not.',
      body: [
        'Both chambers of parliament approved it and the change has applied since 2 April 2026: the wolf is now, in principle, a huntable species in Germany. This became possible after the EU had lowered the wolf\'s protection status.',
        'Whether and how wolves are hunted is up to the federal states. If the population is not in a favourable conservation status, they can restrict hunting by time or area, cap numbers, introduce permits or ban it altogether.',
        'Unchanged: trading in dead wolves and displaying them remain prohibited under EU wildlife trade rules. Livestock protection continues to be funded.'
      ],
      tip: 'For your trip: a wolf trophy is off the table – trade and display remain banned. Abroad, the host country\'s rules apply as well.'
    },
    sources: [
      ['Bundesregierung: Wolf ins Jagdrecht aufgenommen', 'https://www.bundesregierung.de/breg-de/aktuelles/bundestag-wolf-bundesjagdgesetz-2399894'],
      ['Bundestag: Anhörung zum Bundesjagdgesetz (23.02.2026)', 'https://www.bundestag.de/dokumente/textarchiv/2026/kw10-de-bundesjagdgesetz-1150486'],
      ['Bundesrat-Drucksache 117/26', 'https://dserver.bundestag.de/brd/2026/0117-26.pdf']
    ]
  },
  {
    id: 'bleischrot', cat: 'gesetz', date: '2026-10-15', img: 'hase', min: 3,
    de: {
      title: 'EU-Bleischrotverbot kommt – mit sieben Jahren Übergang',
      teaser: 'Die Mitgliedstaaten haben zugestimmt. Betroffen ist Schrot, nicht Kugelmunition.',
      body: [
        'Im Juni 2026 haben die EU-Mitgliedstaaten im REACH-Ausschuss einer überarbeiteten Beschränkung von Blei in Munition zugestimmt. Der Text betrifft im Kern Schrotmunition – die ursprünglich diskutierte Beschränkung bleihaltiger Kugelmunition ist nach aktuellem Stand herausgenommen.',
        'Nach einer Übergangsfrist von sieben Jahren ab Inkrafttreten darf Schrot mit mindestens einem Prozent Blei bei der Jagd und auf dem Weg dorthin weder mitgeführt noch verschossen werden. Das wäre frühestens 2033.',
        'Schon heute gilt EU-weit: In und an Feuchtgebieten ist Bleischrot verboten.'
      ],
      tip: 'Für deine Jagdreise: Bei Enten- und Niederwildjagden in Gewässernähe brauchst du schon jetzt bleifreien Schrot. Frag beim Revier nach, was vor Ort üblich ist.'
    },
    en: {
      title: 'EU lead-shot ban is coming – with a seven-year transition',
      teaser: 'Member states have agreed. It covers shot, not rifle bullets.',
      body: [
        'In June 2026 the EU member states approved a revised restriction on lead in ammunition in the REACH committee. The text mainly concerns gunshot – the restriction on lead rifle bullets that was discussed earlier has been dropped for now.',
        'After a seven-year transition from entry into force, shot containing at least one per cent lead may no longer be carried or fired while hunting or on the way to a hunt. That would be 2033 at the earliest.',
        'Already in force EU-wide: lead shot is banned in and around wetlands.'
      ],
      tip: 'For your trip: for duck and small-game hunts near water you already need lead-free shot. Ask the outfitter what is common locally.'
    },
    sources: [
      ['top agrar: EU-Länder stimmen für Bleiverbot', 'https://www.topagrar.com/management-und-politik/news/schrotmunition-eu-lander-stimmen-fur-weitreichendes-bleiverbot-20026919.html'],
      ['all4shooters: Was jetzt für Jäger gilt', 'https://www.all4shooters.com/de/jagd/munition/verbot-von-blei-in-munition-reach-ausschuss-EU-entwurf-abstimmung-bericht-news-2026/'],
      ['NABU: Weg frei für Bleischrotverbot', 'https://www.nabu.de/news/2026/10/bleischrotverbot.html']
    ]
  },
  {
    id: 'asp-polen', cat: 'seuchen', date: '2026-08-05', img: 'schwarzwild-winter', min: 3,
    de: {
      title: 'Schweinepest: Polen bleibt der Hotspot',
      teaser: 'Wildschweine treiben das Seuchengeschehen. Auch in Deutschland gibt es neue Fälle.',
      body: [
        'Bis Anfang August 2026 wurden in Europa 6.689 Fälle der Afrikanischen Schweinepest gemeldet, Polen allein steht für rund ein Viertel davon. Im ersten Halbjahr 2026 zählte das Land 1.415 Fälle bei Wildschweinen.',
        'In Deutschland galt Sachsen im Februar 2026 als seuchenfrei, Ende März tauchte dort aber wieder ein infiziertes Tier auf. In der Uckermark wurde die ASP im Juli nach über einem Jahr erneut bei Wildschweinen nachgewiesen.',
        'Ein Mensch kann nicht erkranken – das Virus wird aber leicht über Kleidung, Schuhe, Fahrzeuge und Lebensmittel verschleppt.'
      ],
      tip: 'Für deine Jagdreise: Schuhe, Kleidung und Auto nach der Jagd reinigen, keine Wurst oder Schweinefleisch aus Sperrzonen mitnehmen. Trophäen von Sauen nur fachgerecht behandelt – kläre das vorher mit Revier und Präparator.'
    },
    en: {
      title: 'Swine fever: Poland remains the hotspot',
      teaser: 'Wild boar drive the outbreak. Germany is seeing new cases too.',
      body: [
        'By early August 2026, Europe had reported 6,689 cases of African swine fever, with Poland alone accounting for about a quarter. In the first half of 2026 the country recorded 1,415 cases in wild boar.',
        'In Germany, Saxony was declared free of the disease in February 2026, but another infected animal was found there at the end of March. In the Uckermark district ASF was detected in wild boar again in July after more than a year.',
        'Humans cannot catch it – but the virus spreads easily via clothing, boots, vehicles and food.'
      ],
      tip: 'For your trip: clean boots, clothing and car after the hunt, do not bring sausage or pork from restricted zones. Boar trophies only when properly treated – agree this with the outfitter and taxidermist beforehand.'
    },
    sources: [
      ['top agrar: ASP in Europa', 'https://www.topagrar.com/schwein/news/asp-in-europa-wildschweine-bleiben-haupttreiber-des-seuchengeschehens-20027935.html'],
      ['top agrar: Über 5.800 ASP-Fälle im ersten Halbjahr', 'https://www.topagrar.com/schwein/news/europa-mehr-als-5800-asp-falle-im-ersten-halbjahr-20026968.html'],
      ['Berliner Zeitung: ASP in Sachsen', 'https://www.berliner-zeitung.de/article/afrikanische-schweinepest-sachsen-koenigshainer-berge-10602454']
    ]
  },
  {
    id: 'langwaffen-urteil', cat: 'waffen', date: '2026-11-12', img: 'rothirsch-portrait', min: 2,
    de: {
      title: 'Urteil: Jäger dürfen beliebig viele Langwaffen haben',
      teaser: 'Das Verwaltungsgericht Münster sieht keine Obergrenze bei Langwaffen – nur bei Kurzwaffen.',
      body: [
        'Ein Jäger mit bereits 25 Langwaffen wollte weitere erwerben, die Behörde lehnte ab. Das Verwaltungsgericht Münster gab ihm recht (Urteil vom 12.11.2026, 1 K 1692/23).',
        'Begründung: Bei Jägern wird das waffenrechtliche Bedürfnis für Langwaffen gesetzlich vermutet – eine Grenze kennt das Gesetz nur für Kurzwaffen. Eine Änderung sei Sache des Gesetzgebers.',
        'Es handelt sich um ein erstinstanzliches Urteil; andere Gerichte können anders entscheiden.'
      ],
      tip: 'Für deine Jagdreise: Mehr Waffen heißt nicht mehr Gepäck – für die Auslandsjagd reicht meist eine gut eingeschossene Büchse. Oder du nimmst die Leihwaffe vor Ort.'
    },
    en: {
      title: 'Ruling: hunters may own any number of long guns',
      teaser: 'The administrative court of Münster sees no cap on long guns – only on handguns.',
      body: [
        'A hunter who already owned 25 long guns wanted to buy more; the authority refused. The administrative court of Münster ruled in his favour (judgment of 12 Nov 2026, 1 K 1692/23).',
        'Reasoning: for hunters, the legal need for long guns is presumed by law – the law only sets a limit for handguns. Changing that would be up to the legislator.',
        'This is a first-instance ruling; other courts may decide differently.'
      ],
      tip: 'For your trip: more guns does not mean more luggage – one well-zeroed rifle is usually enough abroad. Or use a rental rifle on site.'
    },
    sources: [
      ['beck-aktuell: VG Münster zu Langwaffen', 'https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/vg-muenster-1K169223-jaeger-waffenrecht-langwaffen-anzahl-erlaubnis-2026-11-17']
    ]
  },
  {
    id: 'nachtzieltechnik', cat: 'waffen', date: '2025-07-17', img: 'keiler-winter', min: 3,
    de: {
      title: 'Nachtsicht & Wärmebild: Schluss mit dem Flickenteppich?',
      teaser: 'Der Bundesrat will Nachtzieltechnik ins Waffengesetz aufnehmen. Bis dahin entscheidet das Bundesland.',
      body: [
        'Wer nachts auf Sauen jagt, muss heute genau hinschauen: Was erlaubt ist, regeln Waffenrecht, Bundesjagdgesetz und Landesrecht unterschiedlich. Bayern erlaubt Nachtsichttechnik auf Schwarz- und Raubwild seit Mai 2024, in NRW können die Jagdbehörden seit einem Erlass vom Juli 2025 auch digitale und Wärmebild-Vorsätze auf Schwarzwild zulassen.',
        'Der Bundesrat hat deshalb einen Gesetzentwurf beschlossen, der Nachtzieltechnik einheitlich im Waffengesetz regeln soll – einschließlich der Frage, ob Lichtquellen an der Waffe montiert werden dürfen. Der Entwurf liegt dem Bundestag vor.',
        'Echte Nachtsicht-Zielfernrohre mit eigenem Absehen bleiben nach heutigem Stand verboten.'
      ],
      tip: 'Für deine Jagdreise: In Polen, Ungarn und Tschechien gelten eigene Regeln. Nimm Vorsatzgeräte nur mit, wenn das Revier vorher bestätigt hat, dass sie dort erlaubt sind.'
    },
    en: {
      title: 'Night vision & thermal: an end to the patchwork?',
      teaser: 'The Bundesrat wants night-aiming devices in the Weapons Act. Until then, each state decides.',
      body: [
        'Anyone hunting boar at night needs to check carefully: weapons law, federal hunting law and state law all treat it differently. Bavaria has allowed night-vision devices for boar and predators since May 2024; in North Rhine-Westphalia authorities may approve digital and thermal clip-ons for boar since a decree in July 2025.',
        'The Bundesrat has therefore passed a bill to regulate night-aiming devices uniformly in the Weapons Act – including whether lights may be mounted on the gun. The bill is now with the Bundestag.',
        'Dedicated night-vision riflescopes with their own reticle remain prohibited for now.'
      ],
      tip: 'For your trip: Poland, Hungary and Czechia have their own rules. Only bring clip-on devices once the outfitter has confirmed they are allowed there.'
    },
    sources: [
      ['Bundestag: Bundesrat will Änderung des Waffengesetzes (hib)', 'https://www.bundestag.de/presse/hib/kurzmeldungen-1102344'],
      ['Bundestag-Drucksache 21/893', 'https://dserver.bundestag.de/btd/21/008/2100893.pdf'],
      ['top agrar: Wärmebild in NRW erlaubt', 'https://www.topagrar.com/jagd-und-wald/news/warmebild-und-digitalvorsatze-auf-der-buchse-in-nrw-endlich-erlaubt-20017698.html']
    ]
  },
  {
    id: 'jaegerrekord', cat: 'trends', date: '2026-01-27', img: 'ricke', min: 2,
    de: {
      title: 'Rekord: 467.682 Jägerinnen und Jäger',
      teaser: 'So viele Menschen mit Jagdschein gab es noch nie – und die Jagd wird weiblicher.',
      body: [
        'Laut Deutschem Jagdverband haben in Deutschland 467.682 Menschen einen Jagdschein (Stand November 2025) – 42 Prozent mehr als vor 30 Jahren. Die meisten leben in Nordrhein-Westfalen, gemessen an der Einwohnerzahl liegt Mecklenburg-Vorpommern mit 10 Jägern pro 1.000 Einwohner vorn.',
        'Auch der Nachwuchs verändert sich: In den Jagdkursen lag der Frauenanteil laut DJV-Befragung bei 28 Prozent, zehn Jahre zuvor waren es 20 Prozent. Viele Neue kommen aus der Stadt.'
      ],
      tip: 'Für deine Jagdreise: Mehr Jäger, aber kaum mehr Reviere – deshalb wird die Auslandsjagd für viele zur Möglichkeit, regelmäßig zu jagen.'
    },
    en: {
      title: 'Record: 467,682 hunters in Germany',
      teaser: 'More people than ever hold a hunting licence – and hunting is becoming more female.',
      body: [
        'According to the German Hunting Association (DJV), 467,682 people in Germany hold a hunting licence (as of November 2025) – 42 per cent more than 30 years ago. Most live in North Rhine-Westphalia; per capita, Mecklenburg-Western Pomerania leads with 10 hunters per 1,000 inhabitants.',
        'Newcomers are changing too: according to a DJV survey, women made up 28 per cent of hunting-course students, up from 20 per cent ten years earlier. Many come from cities.'
      ],
      tip: 'For your trip: more hunters but hardly more hunting grounds – which is why hunting abroad lets many hunt regularly.'
    },
    sources: [
      ['top agrar: Neuer Jäger-Rekord', 'https://www.topagrar.com/panorama/news/neuer-jager-rekord-in-deutschland-20022834.html'],
      ['Statista/DJV: Frauenanteil in Jagdschulen', 'https://de.statista.com/infografik/amp/26426/der-anteil-der-jagdschuelerinnen-steigt-seit-zehn-jahren-kontinuierlich']
    ]
  },
  {
    id: 'oesterreich-waffg', cat: 'gesetz', date: '2026-04-28', img: 'rothirsch-silhouette', min: 2,
    de: {
      title: 'Österreich: neues Waffengesetz in Kraft',
      teaser: 'Höhere Altersgrenzen und befristete Dokumente – mit Ausnahmen für Jäger.',
      body: [
        'Seit 28. April 2026 gilt in Österreich das überarbeitete Waffengesetz vollständig. Es bringt höhere Mindestalter und strengere psychologische Prüfungen; für Jäger und Sportschützen sind Ausnahmen vorgesehen.',
        'Laut Zusammenfassung der Wirtschaftskammer ändert sich auch der Umgang mit dem Europäischen Feuerwaffenpass: Waffen der Kategorie B sollen nicht mehr ohne Genehmigung mitgenommen werden dürfen, Kategorie C bleibt einfacher.'
      ],
      tip: 'Für deine Jagdreise: Jagst du aus Österreich mit eigener Büchse im Ausland, lass dir vor der Reise von deiner Behörde bestätigen, was du jetzt brauchst.'
    },
    en: {
      title: 'Austria: new Weapons Act in force',
      teaser: 'Higher age limits and time-limited documents – with exemptions for hunters.',
      body: [
        'Since 28 April 2026 Austria\'s revised Weapons Act has applied in full. It raises minimum ages and tightens psychological assessments; hunters and sport shooters are exempt.',
        'According to the Austrian Economic Chamber\'s summary, use of the European Firearms Pass also changes: category B firearms may no longer be taken along without a permit, category C stays simpler.'
      ],
      tip: 'For your trip: if you travel from Austria with your own rifle, ask your authority before the trip what you now need.'
    },
    sources: [
      ['WKO: Update zur Waffengesetznovelle', 'https://www.wko.at/oe/arge-zivile-sicherheit/update-waffengesetznovelle']
    ]
  },
  {
    id: 'trends-leise-bleifrei', cat: 'trends', date: '2026-09-20', img: 'rehbock-wiese', min: 3,
    de: {
      title: 'Leise, bleifrei, digital: so jagt man heute',
      teaser: 'Schalldämpfer, bleifreie Geschosse und Wärmebild-Beobachtung sind im Revier angekommen.',
      body: [
        'Schalldämpfer: Seit der Waffenrechtsänderung 2020 dürfen Jäger in Deutschland Schalldämpfer für Langwaffen erwerben. Sie schonen Gehör und Jagdhund – und sind heute auf vielen Büchsen Standard.',
        'Bleifreie Büchsengeschosse sind in mehreren Bundesländern und vielen Staatsforsten Pflicht. Die Hersteller haben nachgezogen, die Auswahl an Kalibern ist groß.',
        'Beobachten statt schießen: Wärmebildkameras als Handgerät helfen beim Ansprechen und bei der Nachsuche. Wie sie auf der Waffe eingesetzt werden dürfen, regelt das jeweilige Land.'
      ],
      tip: 'Für deine Jagdreise: Frag vorher, ob das Revier bleifreie Munition vorschreibt und ob Schalldämpfer erlaubt sind. Beides ist im Ausland nicht überall gleich geregelt.'
    },
    en: {
      title: 'Quiet, lead-free, digital: how people hunt today',
      teaser: 'Suppressors, lead-free bullets and thermal spotting have arrived in the field.',
      body: [
        'Suppressors: since the 2020 change to the Weapons Act, hunters in Germany may acquire suppressors for long guns. They protect hearing and dogs – and are now standard on many rifles.',
        'Lead-free rifle bullets are mandatory in several German states and many state forests. Manufacturers have caught up and the choice of calibres is wide.',
        'Observe rather than shoot: hand-held thermal cameras help with judging game and tracking. How they may be used on the gun depends on the state.'
      ],
      tip: 'For your trip: ask beforehand whether the area requires lead-free ammunition and whether suppressors are allowed. Rules differ abroad.'
    },
    sources: []
  },
  {
    id: 'ratgeber-waffe-ausland', cat: 'ratgeber', date: '2026-11-20', img: 'hero-rothirsch', min: 4,
    de: {
      title: 'Mit eigener Waffe ins Ausland: die Checkliste',
      teaser: 'Feuerwaffenpass, Einladung, Munition, Flug – was du vor der Abreise klären solltest.',
      body: [
        'Europäischer Feuerwaffenpass: Für Reisen innerhalb der EU mit eigener Jagdwaffe brauchst du ihn, und die Waffe muss darin eingetragen sein. Die Ausstellung kann dauern – beantrage ihn früh.',
        'Einladung: Viele Länder verlangen eine schriftliche Einladung des Reviers oder Veranstalters. Wir schicken sie dir mit der Buchungsbestätigung.',
        'Unterwegs: Waffe ungeladen und verschlossen transportieren, Munition getrennt. Bei Flugreisen gelten zusätzlich die Regeln der Airline – melde Waffe und Munition rechtzeitig an.',
        'Alternative: Eine Leihwaffe vor Ort erspart Papierkram und Gepäck. Auf jeder Angebotsseite siehst du, ob das Revier eine anbietet.'
      ],
      tip: 'Kurz gesagt: früh planen, Unterlagen doppelt prüfen – oder einfach die Leihwaffe buchen.'
    },
    en: {
      title: 'Taking your own rifle abroad: the checklist',
      teaser: 'Firearms pass, invitation, ammunition, flights – what to sort out before you leave.',
      body: [
        'European Firearms Pass: you need it to travel within the EU with your own hunting rifle, and the rifle must be entered in it. Issuing can take a while – apply early.',
        'Invitation: many countries require a written invitation from the area or organiser. We send it with your booking confirmation.',
        'On the way: transport the rifle unloaded and locked, ammunition separately. When flying, the airline\'s rules apply too – register rifle and ammunition in good time.',
        'Alternative: a rental rifle on site saves paperwork and luggage. Every offer page shows whether the area provides one.'
      ],
      tip: 'In short: plan early, double-check your documents – or just book the rental rifle.'
    },
    sources: []
  }
];
