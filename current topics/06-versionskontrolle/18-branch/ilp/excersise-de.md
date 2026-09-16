# Individuelle Learning Phase: Git-Grundlagen: Status, Commits, Restore und Branches

## Dein Ziel

Du arbeitest in einem lokalen Git-Repository und übst einen typischen Arbeitsablauf: Dateien anlegen, Änderungen nachverfolgen, Commits erstellen, den Status und die Historie prüfen, nicht gespeicherte Änderungen zurücksetzen und mit Branches arbeiten.

## Das brauchst du

- einen Rechner mit installiertem Git
- ein Terminal oder eine Konsole
- einen Texteditor
- einen leeren Arbeitsordner, in dem du ein neues Git-Repository anlegen kannst
- ca. 2 Stunden konzentrierte Arbeitszeit

## Zeitplanung

- **0–10 Min.:** Arbeitsumgebung vorbereiten, Projektordner anlegen
- **10–30 Min.:** Aufgabe 1
- **30–50 Min.:** Aufgabe 2
- **50–65 Min.:** Aufgabe 3
- **65–85 Min.:** Aufgabe 4
- **85–110 Min.:** Aufgabe 5
- **110–120 Min.:** Erweiterungsaufgaben und Reflexion

## Basis-Aufgaben

### Aufgabe 1:
Repository aufsetzen und erste Dateien versionieren  
**Ziel:** Du legst ein lokales Git-Repository an, nimmst erste Dateien auf und sicherst den Ausgangszustand mit einem ersten Commit.  

**Arbeitsauftrag:**  
1. Lege einen neuen Projektordner an, z. B. für ein kleines internes Projekt wie `team-notizen` oder `service-doku`.  
2. Initialisiere darin ein Git-Repository.  
3. Erstelle mindestens **3 Dateien**, z. B.:
   - `README.md`
   - `notizen.txt`
   - `config.txt`
4. Fülle jede Datei mit kurzem, sinnvollem Inhalt.  
5. Prüfe den aktuellen Zustand des Repositories.  
6. Nimm die Dateien ins Repository auf.  
7. Erstelle den ersten Commit mit einer kurzen, passenden Commit-Nachricht.  
8. Prüfe danach erneut den Status.  

**Erwartetes Ergebnis / Soll-Zustand:**  
- Dein Repository ist initialisiert.  
- Die 3 Dateien sind versioniert.  
- Es gibt **einen ersten Commit**.  
- Der Status zeigt keine offenen Änderungen mehr an.

### Aufgabe 2:
Änderungen bearbeiten und gezielt committen  
**Ziel:** Du bearbeitest bestehende Dateien, prüfst Änderungen und sicherst sie mit einem weiteren Commit.  

**Arbeitsauftrag:**  
1. Ändere den Inhalt von mindestens **2 vorhandenen Dateien**.  
2. Erstelle zusätzlich **1 neue Datei**, z. B. `aufgaben.txt` oder `ideen.md`.  
3. Prüfe den Status des Repositories.  
4. Zeige dir die inhaltlichen Änderungen an.  
5. Nimm alle gewünschten Änderungen ins Repository auf.  
6. Erstelle einen zweiten Commit mit einer passenden Commit-Nachricht.  
7. Prüfe anschließend erneut den Status.  

**Erwartetes Ergebnis / Soll-Zustand:**  
- Du hast Änderungen an bestehenden Dateien und eine neue Datei sauber erfasst.  
- Es gibt jetzt **mindestens 2 Commits**.  
- Der Status ist nach dem Commit wieder sauber.

### Aufgabe 3:
Arbeitsstatus und Historie nachvollziehen  
**Ziel:** Du prüfst, wie Git den aktuellen Zustand und die bisherige Entwicklung deines Projekts sichtbar macht.  

**Arbeitsauftrag:**  
1. Lass dir den aktuellen Status des Repositories anzeigen.  
2. Lass dir die Commit-Historie anzeigen.  
3. Notiere dir zu jedem vorhandenen Commit:
   - die Reihenfolge
   - die kurze Commit-Beschreibung
   - welchen Arbeitsschritt du damit verbunden hast  
4. Führe eine kleine weitere Änderung durch, z. B.:
   - ergänze einen Abschnitt in `README.md`
   - füge in `notizen.txt` eine neue Zeile hinzu  
5. Prüfe wieder den Status.  
6. Sichere auch diese Änderung mit einem weiteren Commit.  
7. Zeige dir die Historie danach erneut an.  

**Erwartetes Ergebnis / Soll-Zustand:**  
- Du kannst den Unterschied zwischen aktuellem Arbeitsstatus und bisheriger Commit-Historie praktisch nachvollziehen.  
- Dein Repository enthält jetzt **mindestens 3 Commits**.  
- Die Historie zeigt die Entwicklung deines Projekts in sinnvoller Reihenfolge.

### Aufgabe 4:
Nicht gespeicherte Änderungen mit `git restore` zurücksetzen  
**Ziel:** Du übst, lokale Änderungen in bereits versionierten Dateien zu verwerfen.  

**Arbeitsauftrag:**  
1. Wähle eine bereits versionierte Datei aus.  
2. Ändere deren Inhalt deutlich, ohne die Änderung zu committen.  
3. Prüfe den Status und sieh dir die Änderung an.  
4. Setze die Änderung mit `git restore` zurück.  
5. Prüfe erneut den Status.  
6. Wiederhole den Vorgang mit einer zweiten bereits versionierten Datei.  
7. Achte darauf, dass du bei dieser Aufgabe **keinen Commit** erstellst.  

**Erwartetes Ergebnis / Soll-Zustand:**  
- Die nicht gespeicherten Änderungen in den ausgewählten Dateien sind verworfen.  
- Der ursprüngliche Stand der Dateien ist wiederhergestellt.  
- Der Status zeigt nach dem Zurücksetzen keine offenen Änderungen in diesen Dateien mehr an.

### Aufgabe 5:
Branches erstellen, anzeigen und wechseln  
**Ziel:** Du arbeitest mit einem separaten Entwicklungszweig und wechselst sicher zwischen Branches.  

**Arbeitsauftrag:**  
1. Lass dir die vorhandenen Branches anzeigen.  
2. Erstelle einen neuen Branch für eine kleine Funktionsänderung, z. B. `feature-readme` oder `feature-notizen`.  
3. Wechsle auf diesen neuen Branch.  
4. Nimm dort eine sichtbare Änderung an einer Datei vor, z. B.:
   - neuen Abschnitt in `README.md`
   - zusätzliche Einträge in `notizen.txt`  
5. Prüfe den Status und erstelle einen Commit auf diesem Branch.  
6. Lass dir die Branches erneut anzeigen.  
7. Wechsle zurück auf deinen Hauptbranch (`main` oder `master`, je nach deiner Umgebung).  
8. Prüfe dort den Status und kontrolliere, ob du den Branch-Wechsel nachvollziehen kannst.  
9. Wechsle noch einmal auf deinen Feature-Branch zurück und prüfe die Historie.  

**Erwartetes Ergebnis / Soll-Zustand:**  
- Du hast **mindestens einen zusätzlichen Branch** erstellt.  
- Du kannst zwischen Hauptbranch und Feature-Branch wechseln.  
- Auf dem Feature-Branch existiert ein eigener Commit.  
- Du hast praktisch erlebt, wofür Branches im Arbeitsalltag nützlich sind.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Zwei parallele Arbeitszweige anlegen

**Ziel:** Du vertiefst den Umgang mit mehreren Branches für unterschiedliche Aufgaben.  

**Arbeitsauftrag:**  
1. Erstelle zusätzlich zu deinem Feature-Branch einen zweiten Branch, z. B. `bugfix-konfig` oder `docs-update`.  
2. Wechsle auf diesen Branch.  
3. Ändere eine andere Datei als im ersten Branch.  
4. Erstelle einen Commit.  
5. Lass dir alle Branches anzeigen und prüfe die Historie.  
6. Wechsle zwischen den Branches hin und her und beobachte die Unterschiede im Projektstand.  

**Erwartetes Ergebnis / Soll-Zustand:**  
- Du hast mindestens **2 zusätzliche Branches** angelegt.  
- Jeder Branch enthält einen eigenen, nachvollziehbaren Änderungsschritt.  
- Du kannst Branches sicher unterscheiden und wechseln.

### Erweiterungsaufgabe 2: Historie kompakt vergleichen

**Ziel:** Du machst dir die Entwicklung deines Repositories in einer kompakten Ansicht sichtbar.  

**Arbeitsauftrag:**  
1. Lass dir die Historie in einer kompakten Form anzeigen.  
2. Vergleiche die Commits deines Hauptbranchs mit denen deiner Arbeits-Branches.  
3. Dokumentiere in einer Datei `arbeitsprotokoll.md` kurz:
   - welche Commits auf welchem Branch liegen
   - welcher Branch welchen Zweck hatte
   - in welcher Reihenfolge du gearbeitet hast  

**Erwartetes Ergebnis / Soll-Zustand:**  
- Du hast eine übersichtliche Darstellung deiner Arbeitsschritte erzeugt.  
- Dein Arbeitsprotokoll beschreibt deine Branches und Commits kurz und nachvollziehbar.

### Erweiterungsaufgabe 3: Fehlerfall bewusst simulieren

**Ziel:** Du trainierst einen realistischen Korrekturfall bei lokalen, noch nicht gesicherten Änderungen.  

**Arbeitsauftrag:**  
1. Ändere gleichzeitig **2 bereits versionierte Dateien**.  
2. Prüfe den Status.  
3. Verwirf die Änderungen in **nur einer** Datei.  
4. Kontrolliere danach erneut den Status.  
5. Entscheide anschließend, ob du die verbleibende Änderung committen oder ebenfalls verwerfen willst.  
6. Dokumentiere in 2–3 Sätzen in `arbeitsprotokoll.md`, warum dieses Vorgehen im Arbeitsalltag hilfreich ist.  

**Erwartetes Ergebnis / Soll-Zustand:**  
- Du hast bewusst mit einem typischen Fehlerfall gearbeitet.  
- Du kannst nachvollziehen, wie sich der Status nach dem Zurücksetzen einzelner Änderungen verändert.  
- Dein Repository ist am Ende in einem klaren, sauberen Zustand.

## Wichtige Hinweise

- Arbeite möglichst im Terminal, damit du die Git-Befehle bewusst ausführst.  
- Prüfe vor jedem Commit den Status deines Repositories.  
- Verwende kurze, aussagekräftige Commit-Nachrichten.  
- Ändere bei Aufgabe 4 und Erweiterungsaufgabe 3 nur Dateien, die bereits versioniert sind.  
- Wenn dein Hauptbranch nicht `main`, sondern `master` heißt, verwende den vorhandenen Namen.  
- Achte darauf, dass du am Ende einen nachvollziehbaren Projektverlauf mit mehreren Commits und mindestens einem zusätzlichen Branch hast.

## Reflexionsfragen

- Woran erkennst du im Arbeitsalltag schnell, ob dein Repository saubere oder offene Änderungen enthält?  
- Wann ist `git restore` hilfreich, und wann solltest du Änderungen lieber nicht verwerfen?  
- Welchen praktischen Vorteil hat ein separater Branch für neue Funktionen oder kleine Experimente?  
- Wie hilft dir die Commit-Historie dabei, Arbeitsschritte später nachzuvollziehen?  
- Welche 3 Git-Befehle waren für dich in dieser Arbeitsphase am wichtigsten?

---