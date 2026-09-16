# Individuelle Learning Phase: Sicher in Git starten



## Dein Ziel

Du richtest Git auf deinem System ein, konfigurierst deine Identität, nutzt Git-Hilfe gezielt zur Selbsthilfe und legst ein erstes lokales Git-Repository an. Dabei dokumentierst du die wichtigsten Grundlagen der Versionskontrolle in einem kleinen Praxisprojekt.



## Das brauchst du

- Einen Rechner mit Windows, macOS oder Linux
- Zugriff auf ein Terminal, eine Konsole oder PowerShell
- Einen Texteditor oder eine IDE
- Internetzugang für den Download von Git, falls Git noch nicht installiert ist
- Schreibrechte in deinem Benutzerordner
- Optional: eine Trainings-E-Mail-Adresse, falls du nicht deine private Adresse verwenden möchtest



## Zeitplanung

- **0–20 Minuten:** Git prüfen oder installieren
- **20–35 Minuten:** Git konfigurieren
- **35–55 Minuten:** Git-Hilfe und Selbsthilfeoptionen erkunden
- **55–85 Minuten:** Praxisordner anlegen und Git-Repository initialisieren
- **85–105 Minuten:** Grundlagen der Versionskontrolle im Projekt dokumentieren
- **105–120 Minuten:** Erweiterungsaufgaben und Reflexion



## Basis-Aufgaben



### Aufgabe 1:

Git installieren und Einsatzbereitschaft prüfen **Ziel:** Du stellst sicher, dass Git auf deinem System verfügbar ist und du in einer sauberen Arbeitsumgebung arbeitest.

**Arbeitsauftrag:**  
- Prüfe im Terminal, ob Git bereits installiert ist.  
- Wenn Git nicht installiert ist, installiere Git passend zu deinem Betriebssystem.  
- Öffne danach das Terminal neu und prüfe erneut, ob Git erkannt wird.  
- Lege in deinem Benutzerordner einen Arbeitsordner mit dem Namen `git-learning-phase` an.  
- Erstelle darin eine Datei `arbeitsprotokoll.md` und notiere:
  - Datum
  - Betriebssystem
  - ob Git bereits vorhanden war oder neu installiert wurde
  - die erkannte Git-Version

**Erwartetes Ergebnis / Soll-Zustand:**  
Git ist nutzbar, die Versionsausgabe funktioniert, und dein Ordner `git-learning-phase` mit der Datei `arbeitsprotokoll.md` ist vorhanden.



### Aufgabe 2:

Git-Grundkonfiguration setzen **Ziel:** Du hinterlegst deine Identität für die Arbeit mit Git und überprüfst die gespeicherten Einstellungen.

**Arbeitsauftrag:**  
- Konfiguriere in Git deinen Namen und deine E-Mail-Adresse mit den Einstellungen `user.name` und `user.email`.  
- Prüfe anschließend, ob beide Werte korrekt gespeichert wurden.  
- Ergänze dein `arbeitsprotokoll.md` um:
  - den verwendeten Namen
  - die verwendete E-Mail-Adresse
  - einen kurzen Satz, warum diese Konfiguration für die Arbeit mit Git wichtig ist

**Erwartetes Ergebnis / Soll-Zustand:**  
Git kennt deinen Namen und deine E-Mail-Adresse, und beide Werte lassen sich im Terminal wieder anzeigen.



### Aufgabe 3:

Git-Hilfe gezielt nutzen **Ziel:** Du lernst, wie du dir bei Git selbst helfen kannst, ohne auf externe Hilfe angewiesen zu sein.

**Arbeitsauftrag:**  
- Nutze mindestens drei Git-Selbsthilfeoptionen, zum Beispiel:
  - allgemeine Hilfe
  - Hilfe zu einem bestimmten Unterbefehl
  - Übersicht über verfügbare Befehle  
- Recherchiere mit den eingebauten Hilfefunktionen:
  - wofür `git init` verwendet wird
  - wie du Hilfe zu einzelnen Befehlen aufrufst
  - welche Rolle Konfigurationen in Git spielen  
- Erstelle im Ordner `git-learning-phase` eine Datei `selbsthilfe.md`.  
- Halte darin in 5–7 Stichpunkten fest:
  - welche Hilfefunktionen du benutzt hast
  - welche Informationen du damit gefunden hast
  - welche Hilfeoption du am verständlichsten fandest

**Erwartetes Ergebnis / Soll-Zustand:**  
Die Datei `selbsthilfe.md` ist vorhanden und enthält eine kurze, nachvollziehbare Zusammenfassung deiner Git-Selbsthilfewege.



### Aufgabe 4:

Ein Praxisprojekt anlegen und als Git-Repository initialisieren **Ziel:** Du legst ein realistisches lokales Projekt an und wandelst es in ein Git-Repository um.

**Arbeitsauftrag:**  
- Erstelle innerhalb von `git-learning-phase` einen neuen Projektordner mit einem realistischen Namen, zum Beispiel:
  - `support-wiki`
  - `inventur-notizen`
  - `team-dokumentation`  
- Lege in diesem Projekt mindestens folgende Struktur an:
  - `README.md`
  - einen Unterordner `docs`
  - eine weitere Textdatei deiner Wahl, zum Beispiel `docs/setup.md` oder `infos.txt`  
- Fülle die Dateien mit kurzen Platzhalterinhalten, damit dein Projekt nicht leer ist.  
- Initialisiere den Projektordner als neues Git-Repository.  
- Prüfe anschließend:
  - ob ein `.git`-Ordner entstanden ist
  - welchen Status Git für dein Projekt anzeigt

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein Projektordner ist ein lokales Git-Repository, der `.git`-Ordner existiert, und Git zeigt dir den aktuellen Zustand der Dateien an.



### Aufgabe 5:

Grundlagen der Versionskontrolle im Projekt dokumentieren **Ziel:** Du verknüpfst die praktischen Git-Schritte mit den grundlegenden Konzepten der Versionskontrolle.

**Arbeitsauftrag:**  
- Öffne die Datei `README.md` in deinem Projektordner.  
- Ergänze dort drei Abschnitte mit eigenen Formulierungen:
  1. **Prinzipien von Versionskontrollsystemen**
  2. **Unterschied zwischen zentralisierter und verteilter Versionskontrolle**
  3. **Nutzen von Versionskontrolle im Arbeitsalltag**  
- Schreibe pro Abschnitt 3–5 Stichpunkte.  
- Verwende mindestens zwei alltagsnahe Beispiele aus einer IT-Arbeitssituation, zum Beispiel:
  - Änderungen an Dokumentationen
  - Teamarbeit an Skripten
  - Nachvollziehen von Fehlerursachen  
- Prüfe danach erneut den Status deines Repositories und ergänze im `arbeitsprotokoll.md`, was Git aktuell erkennt.

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein `README.md` enthält die drei geforderten Themen verständlich in eigenen Worten, und dein Arbeitsprotokoll beschreibt den aktuellen Zustand des Repositories.



## Erweiterungsaufgaben



### Erweiterungsaufgabe 1: Konfiguration transparent machen

**Ziel:** Du verstehst besser, wo Git-Konfigurationen gespeichert werden und wie du deren Herkunft prüfen kannst.

**Arbeitsauftrag:**  
- Lass dir deine Git-Konfiguration so anzeigen, dass du auch die Herkunft der Einträge erkennen kannst.  
- Prüfe, aus welcher Datei `user.name` und `user.email` gelesen werden.  
- Erstelle eine Datei `konfiguration.md` im Ordner `git-learning-phase` und notiere:
  - welche Konfigurationswerte du geprüft hast
  - woher diese Werte geladen wurden
  - welchen Unterschied du zwischen globaler und lokaler Konfiguration erkennst

**Erwartetes Ergebnis / Soll-Zustand:**  
Die Datei `konfiguration.md` zeigt nachvollziehbar, welche Git-Einstellungen du geprüft hast und wo sie gespeichert sind.



### Erweiterungsaufgabe 2: Zweites Repository ohne Schritt-für-Schritt-Hilfe anlegen

**Ziel:** Du wiederholst die wichtigsten Grundschritte selbstständig und festigst deinen Ablauf.

**Arbeitsauftrag:**  
- Lege neben deinem ersten Projekt ein zweites Mini-Projekt an, zum Beispiel `meeting-notizen` oder `faq-sammlung`.  
- Erstelle mindestens zwei Dateien mit kurzen Inhalten.  
- Initialisiere erneut ein Git-Repository.  
- Prüfe den Status.  
- Wenn du an einem Schritt unsicher bist, nutze bewusst zuerst die Git-Hilfe statt einer Websuche.  
- Ergänze im `arbeitsprotokoll.md`, welche Schritte du bereits sicher konntest und bei welchen du Hilfe gebraucht hast.

**Erwartetes Ergebnis / Soll-Zustand:**  
Ein zweites funktionsfähiges lokales Repository ist vorhanden, und du hast deinen eigenen Arbeitsstand realistisch dokumentiert.



### Erweiterungsaufgabe 3: Eigene Git-Kurzreferenz erstellen

**Ziel:** Du baust dir eine kompakte persönliche Hilfe für spätere Übungen auf.

**Arbeitsauftrag:**  
- Erstelle im Ordner `git-learning-phase` eine Datei `git-kurzreferenz.md`.  
- Sammle dort 8–10 Git-Befehle oder Hilfefunktionen, die du in dieser Lernphase verwendet hast oder sinnvoll gefunden hast.  
- Ergänze zu jedem Eintrag:
  - wofür du ihn verwendest
  - in welcher Situation er dir hilft  
- Ordne die Einträge sinnvoll, zum Beispiel nach:
  - Installation und Prüfung
  - Konfiguration
  - Hilfe
  - Repository-Start

**Erwartetes Ergebnis / Soll-Zustand:**  
Deine `git-kurzreferenz.md` ist übersichtlich aufgebaut und kann von dir als persönliche Spickzettel-Datei genutzt werden.



## Wichtige Hinweise

- Arbeite nur in dem von dir angelegten Übungsordner, damit du keine bestehenden Projekte veränderst.  
- Verwende für die Konfiguration nur eine E-Mail-Adresse, die du in dieser Lernumgebung nutzen möchtest.  
- Wenn du bei einem Git-Befehl nicht weiterkommst, nutze zuerst die eingebauten Hilfefunktionen.  
- Achte darauf, dass deine Dateien wirklich gespeichert sind, bevor du den Repository-Status prüfst.  
- Wenn du Git nicht selbst installieren darfst, dokumentiere die Abweichung in deinem `arbeitsprotokoll.md` und arbeite mit einer vorhandenen Installation weiter.



## Reflexionsfragen

- Was war für dich der Unterschied zwischen Git-Installation, Git-Konfiguration und Repository-Initialisierung?  
- Woran erkennst du, dass ein Ordner ein Git-Repository ist?  
- Welche Vorteile hat Versionskontrolle für deinen Arbeitsalltag am deutlichsten gezeigt?  
- Wann wäre ein zentralisiertes System für dich nachvollziehbar, und wann ist ein verteiltes System sinnvoller?  
- Welche Git-Hilfefunktion würdest du künftig als Erstes verwenden?  
- Welchen Schritt könntest du nach dieser Lernphase schon ohne Anleitung wiederholen?



---