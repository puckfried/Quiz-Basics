# Einstieg Web

## Wiederholung:
- Was ist HTTP?
    - in Rechnernetzen
    - auf der Anwendungsschicht (z.B. Browser kommunizert mit Webserver)
    - zustandslos (Anfrage - Antwort und vorbei)
    - Protokoll (eine Sammlung von festgelegten Begriffen, z.B. GET)
- Und was ist mit HTTP(S)?
    - zusätzlich mit einer Verschlüsselung
    - solltet ihr immer nutzen
    - ist sicher!

- Was passiert wenn ich `google.com` in meinem Browser eingebe?
    - Der Browser macht eine `GET`-Anfrage
    - Eine GET-Anfrage für ein HTML-Dokument
    - Irgendeine Art von Webserver muss diese Anfrage bearbeiten
    - Der Server sendet eine Antwort (das HTML-Dokument)

- Was ist eine Webseite?
    - Daten die meist zwischen Browser und Webserver ausgetauscht werden
    - Sammlung von Informationen
    - das äußere, das Gesicht
    - Text
    - ein Textdokument
    - das im Browser betrachtet wird
    - besteht aus HTML


## HTML
- definiert die Struktur und Inhalt der Webseite
- enthält "Befehle" für den Browser
- Markup Sprache (ähnlich wie Markdown) 
- HTML ist ein "lebender Standard"
    - Es wird ständig von WHATWG aktualisiert
    - `Web Hypertext Application Technology Working Group`
    - WHATWG umfasst Apple, Mozilla, Google und Microsoft
    - HTML-Spezifikation: https://html.spec.whatwg.org
    - Es wird auf GitHub entwickelt https://github.com/whatwg/html


### Wie sieht das Ganze jetzt aus?
 HTML-Struktur
    - Öffnendes Tag `<p>`, schließendes Tag `</p>`
    - Vollständiges Element `<p>Hello</p>`
    - `<hr>` ist ein Void-Element; kein schließendes Tag nötig
    - Du könntest auch Void-Elemente als selbstschließend sehen: `<hr />`