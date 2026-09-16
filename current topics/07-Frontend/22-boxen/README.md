# CSS Box-Konzepte

## Wiederholung

- Selektoren:
  - Elementselektor `p {}`
  - Klassenselektor `.hero {}`
- Verlinkung der Stylesheets
  - `<link rel="stylesheet" href="wiederholung.css">`
- Netzwerktab
  - der Netzwerkverkehr zwischen Brwoser und Webserver lässt sich hier anzeigen
  - sichtbar wird z.B. das Laden des HTML, des CSS, favicon, Bilder etc.

## Box Modell

- der Browser behandelt alle Elemente als rechteckige Boxen
- wir können diese Boxen von innen nach außen manipulieren:

1. `content` – der eigentliche Inhalt
2. `padding` – Abstand innerhalb der Box
3. `border` – Rahmen der Box
4. `margin` – Abstand außerhalb der Box

```text
Margin
└── Border
    └── Padding
        └── Content
```

- `padding` schafft innen Platz
- `margin` schafft außen Platz
- die Hintergrundfarbe reicht über Content und Padding
- wir schauen uns das praktisch an, schaut dafür in `live/box-model`

## Ausblick Flex

- der Elterncontainer ordnet seine direkten Kinder an
- `display: flex` stellt die Kinder nebeneinander
- `gap` erzeugt Abstand zwischen den Kindern

```css
.actions {
  display: flex;
  gap: 16px;
}
```

- mit `justify-content` könnt ihr die Kinder auf der Hauptachse bewegen
- hier eine gute Übersicht dazu: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## Zusammenfassung

- jedes Element ist eine Box
- mit `div` können wir Elemente in HTML gruppieren
- wir können mit width/height, padding, border und margin die 4 Ebenen eines Elements verändern
- `margin-left: auto` und `margin-right: auto` zentrieren ein Blockelement (z.B. eine `div`)
- mit flex können wir Elemente auch nebeneinander positionieren und bewegen
