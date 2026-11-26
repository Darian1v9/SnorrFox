/* Kleine Linien-Icons für Wildarten (24 × 24, Farbe folgt dem Text) */
window.RR = window.RR || {};

RR.ICONS = {
  /* Wildschwein, Seitenansicht */
  Schwarzwild: [
    'M3.5 13.5c0-3 2.5-5 6.5-5h4c2 0 3.2.9 4.2 2.2l2.3 1.6c.5.4.4 1.1-.1 1.3l-2.4.9v1c0 1-.8 1.5-1.8 1.5H6.5C4.8 17 3.5 15.5 3.5 13.5z',
    'M7 17v2.5M10 17v2.5M14 17v2.5M16.5 17v2.5',
    'M15 8.6l.9-2.1 1 2.7',
    'M20.2 13.6l.9-1.3',
    'M3.7 12.4 2.5 11.2',
    'M7.5 9.4l.9-1.5.9 1.1.9-1.4.9 1.2.9-1.3.9 1.1'
  ],
  /* Rothirsch, Kopf von vorn mit großem Geweih */
  Rotwild: [
    'M9.2 12.2c0-1 1.2-1.6 2.8-1.6s2.8.6 2.8 1.6l-1.5 6.4c-.3 1-2.3 1-2.6 0z',
    'M9.2 12.4 6.6 11.4M14.8 12.4l2.6-1',
    'M10.6 10.6 8.2 6.2 6.8 2.6M8.2 6.2 5 5.2M9 7.6l.4-3.4',
    'M13.4 10.6l2.4-4.4 1.4-3.6M15.8 6.2l3.2-1M15 7.6l-.4-3.4'
  ],
  /* Damhirsch, Kopf mit Schaufelgeweih */
  Damwild: [
    'M9.2 12.2c0-1 1.2-1.6 2.8-1.6s2.8.6 2.8 1.6l-1.5 6.4c-.3 1-2.3 1-2.6 0z',
    'M9.2 12.4 6.6 11.4M14.8 12.4l2.6-1',
    'M10.6 10.6 9 7.4c-2.2-.2-4-1.8-4.3-4.4 1.2.9 2.4.8 3.4 1.6.3-.8.9-1.4 1.6-1.6',
    'M13.4 10.6 15 7.4c2.2-.2 4-1.8 4.3-4.4-1.2.9-2.4.8-3.4 1.6-.3-.8-.9-1.4-1.6-1.6'
  ],
  /* Rehbock, Kopf mit kurzem Gehörn und großen Lauschern */
  Rehwild: [
    'M9.2 12.6c0-1 1.2-1.6 2.8-1.6s2.8.6 2.8 1.6l-1.5 6c-.3 1-2.3 1-2.6 0z',
    'M9.3 12.4C7.4 12.6 5.8 11.5 5.4 9.8c1.6-.3 3.2.3 4.2 1.4M14.7 12.4c1.9.2 3.5-.9 3.9-2.6-1.6-.3-3.2.3-4.2 1.4',
    'M11 10.8l-.6-4.6-.9-1.6M10.5 8.2l-1.1-.2',
    'M13 10.8l.6-4.6.9-1.6M13.5 8.2l1.1-.2'
  ],
  /* Feldhase, sitzend */
  Niederwild: [
    'M6.2 19C4.6 19 3.5 17.9 3.5 16.4 3.5 13 6.4 10 10 10c1.5 0 2.6.4 3.4 1.1l1.6-1.6c.8-.8 2-.9 2.8-.2l1.5 1.4c.6.5.5 1.5-.2 1.9l-2 1.1c.3 1.8-.5 3.6-2.2 4.6L14.7 19z',
    'M15.5 9.2 14 3.6c-.2-.8.8-1.2 1.2-.5l2.3 5.2M17.3 9l.8-5.2c.1-.8 1.2-.7 1.2.1l-.2 5.7',
    'M3.7 15.6c-.8-.2-1.4.4-1.1 1.1'
  ],
  /* Fuchs, Kopf von vorn */
  Fuchs: [
    'M5 4.2 8.6 9h6.8L19 4.2l.6 7.2c0 3.1-3.5 6.1-7.6 9.1-4.1-3-7.6-6-7.6-9.1z',
    'M9.3 12.6h.01M14.7 12.6h.01',
    'M11.1 16.3h1.8l-.9 1z'
  ]
};

/* Baut das SVG ohne HTML-Strings */
RR.util = RR.util || {};
RR.icon = function (name, size) {
  var paths = RR.ICONS[name];
  if (!paths) return null;
  var NS = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size || 20));
  svg.setAttribute('height', String(size || 20));
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.6');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('class', 'icon');
  paths.forEach(function (d) {
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('d', d);
    svg.appendChild(p);
  });
  return svg;
};
