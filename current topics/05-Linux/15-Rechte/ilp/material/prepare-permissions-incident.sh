#!/usr/bin/env bash

set -euo pipefail

TARGET="/var/www/html/permissions-incident"

if ! command -v nginx >/dev/null 2>&1; then
    echo "Nginx is not installed. Install it first as described in the README."
    exit 1
fi

sudo mkdir -p "$TARGET/assets"

sudo tee "$TARGET/index.html" >/dev/null <<'HTML'
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Club Portal</title>
    <link rel="stylesheet" href="/permissions-incident/assets/style.css">
</head>
<body>
    <h1>Club Portal</h1>
    <p class="status">If this box is green, the stylesheet was loaded.</p>
    <a href="/permissions-incident/contact.html">Contact</a>
</body>
</html>
HTML

sudo tee "$TARGET/contact.html" >/dev/null <<'HTML'
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
</head>
<body>
    <h1>Contact</h1>
    <p>Email: club@example.com</p>
    <a href="/permissions-incident/">Back</a>
</body>
</html>
HTML

sudo tee "$TARGET/assets/style.css" >/dev/null <<'CSS'
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

sudo tee "$TARGET/.team-note.txt" >/dev/null <<'TEXT'
INTERNAL: The new member list will be checked on Friday.
This note must not be publicly accessible.
TEXT

# Prepared starting state for the practice incident.
sudo chmod 754 "$TARGET"
sudo chmod 755 "$TARGET/assets"
sudo chmod 644 "$TARGET/index.html" "$TARGET/contact.html" "$TARGET/.team-note.txt"
sudo chmod 640 "$TARGET/assets/style.css"

echo "The practice incident was prepared in $TARGET."
echo "Start with: http://localhost/permissions-incident/"
