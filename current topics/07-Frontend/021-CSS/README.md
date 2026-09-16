# Gestaltung mit CSS

## Warum das Ganze?
- CSS Code ist sher umfangreich und nimmt viel Platz in Webprojekten ein
- ihr solltet verstehen wie dieser Code aufgebaut ist
- trainiert logisches Denken
- es gibt euch die Möglichkeit eigene Frontends umszusetzen
- wenn ihr HTML braucht, braucht ihr auch CSS


## Wie funktioniert CSS

- Lass uns eine CSS-Regel untersuchen:

    ```css
    h1 {
        color: magenta;
        background: lightpink;
    }
    ```


- CSS: "Cascading Style Sheets"
    - Die Stilsprache des Webs
    - Steuert, wie der Browser unser HTML rendert
- wie beim HTML ihr kommuniziert mit dem Browser

- Trennung der Zuständigkeiten
    - CSS kümmert sich nur um die Präsentation
    - HTML kümmert sich nur um den Inhalt und Struktur

### Einbindung

- CSS kann auf drei Hauptarten in unsere Seite eingebunden werden
    - Inline
    - Intern
    - Extern (bevorzugt)

- **Inline** CSS geht direkt in das Ziel-Element
    - `<p style="color:red">Ich bin rot!</p>`
    - Sehr schwer zu warten

- **Intern** CSS ist ein HTML-Element, das CSS für dieses HTML-Dokument enthält
    - Aber nicht wiederverwendbar in mehreren Dateien
    ```html
    <style>
        p { color: red; }
        pre { color: darkred; }
    </style>
    ```

- **Extern** CSS wird in einer separaten Datei gespeichert
    - Normalerweise die bevorzugte Option
    - Leicht wiederverwendbar in mehreren HTML-Dateien
    - Ordentlich getrenntes CSS und HTML
    - Der Browser macht separate Anfragen
        - Der Browser kann das CSS zwischen den Anfragen "cachen"


### Selektoren
- Selektoren werden genutzt um Elemente aus dem HTML auszuwählen
- es gibt ein Vielzahl an Selektoren, die häufigsten
- **Elementselektor**: nutzt den HTML-Elementnamen, Beispiel:
    ```css
    h1 {color: red}
    ``` 
- **Klassenselektor**: selektiert mittels eines Klassennamens, damit könnt ihr einzelne Elemente unterscheiden, Beispiel
    ```css
    .highlight {color: red}
    ```     
- **ID-Selektor**: selektiert mittels einer ID, die IDs werden gewöhnlich nicht zum Styling vergeben, für unseren Kurs daher nicht so relevant, Beispiel:
    ```css
    #special {color: red}
    ```   


### Wenn Element "mehrfach" gestylt wird
- falls es mehrere Selektoren gibt, die auf ein Element zeigen, wird zuerst nach der Wertigkeit (Spezifität) geschaut, hier gilt: Elementselektor ist weniger spezifisch als Klassenselektor und diese weniger als ID-Selektor
- falls es 2 gleiche Selektoren gibt entscheidet die Reihenfolge (spätere wird genommen)