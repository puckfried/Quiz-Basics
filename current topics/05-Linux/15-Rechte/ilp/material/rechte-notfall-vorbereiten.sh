#!/usr/bin/env bash

set -euo pipefail

ZIEL="/var/www/html/rechte-notfall"

if ! command -v nginx >/dev/null 2>&1; then
    echo "Nginx ist nicht installiert. Installiere Nginx zuerst wie in der README beschrieben."
    exit 1
fi

sudo mkdir -p "$ZIEL/assets"

sudo tee "$ZIEL/index.html" >/dev/null <<'HTML'
<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Vereinsportal</title>
    <link rel="stylesheet" href="/rechte-notfall/assets/style.css">
</head>
<body>
    <h1>Vereinsportal</h1>
    <p class="status">Wenn dieser Kasten grün ist, wurde das Stylesheet geladen.</p>
    <a href="/rechte-notfall/kontakt.html">Kontakt</a>
</body>
</html>
HTML

sudo tee "$ZIEL/kontakt.html" >/dev/null <<'HTML'
<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Kontakt</title>
</head>
<body>
    <h1>Kontakt</h1>
    <p>E-Mail: verein@example.com</p>
    <a href="/rechte-notfall/">Zurück</a>
</body>
</html>
HTML

sudo tee "$ZIEL/assets/style.css" >/dev/null <<'CSS'
body {
    max-width: 700px;
    margin: 3rem auto;
    font-family: sans-serif;
}

.status {
    padding: 1rem;
    color: #12351d;
    background: #b9efc6;
    border: 2px solid #287a3e;
}
CSS

sudo tee "$ZIEL/.team-notiz.txt" >/dev/null <<'TEXT'
INTERN: Die neue Mitgliederliste wird am Freitag geprüft.
Diese Notiz darf nicht öffentlich abrufbar sein.
TEXT

# Vorbereiteter Ausgangszustand für den Übungsfall.
sudo chmod 754 "$ZIEL"
sudo chmod 755 "$ZIEL/assets"
sudo chmod 644 "$ZIEL/index.html" "$ZIEL/kontakt.html" "$ZIEL/.team-notiz.txt"
sudo chmod 640 "$ZIEL/assets/style.css"

echo "Der Übungsfall wurde unter $ZIEL vorbereitet."
echo "Beginne mit: http://localhost/rechte-notfall/"
