# Revierreise – Jagdreisen individuell zusammenstellen

Website-Prototyp für eine Buchungsplattform für Jagdreisen nach Osteuropa (Polen, Ungarn, Tschechien).
Jäger finden passende Jagden und stellen ihre Reise Baustein für Baustein zusammen – mit klarem Gesamtpreis.

> **Hinweis:** „Revierreise“ ist ein Arbeitstitel. Alle Angebote, Unterkünfte, Kapazitäten und Preise sind **Beispieldaten**.

## Funktionen

**Startseite (`index.html`)**
- Suche nach Zeitraum, Land, Wildart, Jagdart, Anzahl Jäger, Begleitpersonen und Trophäenklasse (CIC Bronze/Silber/Gold)
- Filter „Direkt verfügbar“, „Mit Unterkunft“, „Mit Anreise“
- „Unsere Empfehlungen“ und Liste aller Angebote inkl. Gruppenpreis
- Umschalter Deutsch / Englisch

**Angebotsseite (`angebot.html?id=o1`)**
- Baukasten: Termin, Personen, Trophäenklasse je Wildart, eigene Waffe oder Leihwaffe, Jagdführer, Unterkunft, Anreise, Präparator
- Unterkunft wahlweise vom Revier oder aus einer Auswahl von Hotels/Ferienwohnungen in der Nähe (mit Verfügbarkeit und Preis, Buchung beim Anbieter)
- Live-Preis mit Trennung „Fixkosten“ und „Nur bei Erlegung“
- „Empfehlung übernehmen“ setzt eine sinnvolle Zusammenstellung
- Unverbindliche Anfrage: öffnet das E-Mail-Programm mit allen Angaben (kein Server nötig)

## Aufbau

```
index.html              Startseite
angebot.html            Angebotsseite mit Baukasten
assets/css/styles.css   Gestaltung
assets/js/data.js       ALLE Inhalte: Angebote, Preise, Optionen, Unterkünfte
assets/js/i18n.js       Texte DE/EN + kleine Hilfsfunktionen
assets/js/pricing.js    Preisberechnung (reine Logik, ohne Oberfläche)
assets/js/search.js     Startseite
assets/js/detail.js     Angebotsseite
assets/img/foto/        Fotos in zwei Größen (…-800.jpg und …-1600.jpg)
```

Neue Fotos: Bild als `name-800.jpg` und `name-1600.jpg` (Breite in Pixel) nach `assets/img/foto/` legen und in `data.js` beim Angebot unter `img`/`gallery` den Namen eintragen.

Inhalte und Logik sind bewusst getrennt: Für ein neues Angebot oder andere Preise muss nur `assets/js/data.js` angepasst werden.

## Lokal ansehen

Einfach `index.html` im Browser öffnen – oder für saubere Links einen kleinen Server starten:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Online stellen mit GitHub Pages (kostenlos)

1. Im Repository auf **Settings → Pages** gehen.
2. Bei **Source** „Deploy from a branch“ wählen, Branch **main** und Ordner **/ (root)**, dann **Save**.
3. Nach 1–2 Minuten ist die Seite unter `https://<benutzername>.github.io/<repository>/` erreichbar.

## Vor dem echten Start anpassen

- [ ] Eigene E-Mail-Adresse in `assets/js/data.js` (`RR.CONFIG.contactEmail`) und in den Fußzeilen eintragen
- [ ] Echte Angebote, Termine und Preise der Partner-Reviere in `data.js` eintragen
- [ ] Nutzungsrechte der Fotos prüfen (z. B. Unsplash-Lizenz) und später durch Fotos der Partner-Reviere ergänzen
- [ ] Echte Unterkünfte mit Buchungslinks; später Live-Preise über die Booking.com Demand API (erfordert Partnervertrag)
- [ ] Angebotsinhalte (Titel, Beschreibungen) ins Englische übersetzen – bisher ist nur die Oberfläche zweisprachig
- [ ] Impressum und Datenschutzerklärung ergänzen (Pflicht in Deutschland)
- [ ] Reiserecht prüfen lassen (Vermittler vs. Veranstalter)

## Später: Umstieg auf ein Framework

`data.js` (Inhalte) und `pricing.js` (Preislogik) sind ohne Oberfläche geschrieben und können in React/Next.js direkt weiterverwendet werden. Neu zu bauen sind dann nur die Seitenbausteine.
