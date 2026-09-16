# Practical Exercise: Linux Permissions in a Web Project

You manage files for the website of a small club. Some files are public, while others must only be readable internally.

Work only inside `~/permissions-lab`. Use `sudo` only where the task explicitly tells you to.

## Important: Copy Names and Paths Exactly

- Linux distinguishes between uppercase and lowercase letters.
- `permissions-lab`, `Permissions-Lab`, and `permissions_lab` are three different names.
- Copy every directory and file name exactly as written in the task.
- Do not add an extra extension such as `.txt` to a file ending in `.sh`.
- The later scripts and browser URLs only work with the names and paths from the instructions.

## Preparation

Create this structure:

```text
~/permissions-lab/
├── internal/
│   ├── customer-data.txt
│   └── team-note.txt
├── tools/
│   └── status.sh
├── web/
│   └── club-page.html
└── .access-note
```

Write this in `club-page.html`:

```html
<h1>Our Club</h1>
<p>Welcome to our local test page.</p>
```

Write this in `status.sh`:

```bash
#!/usr/bin/env bash
echo "The club page is being checked."
```

<details>
<summary>Preparation solution steps</summary>

```bash
mkdir -p ~/permissions-lab/internal ~/permissions-lab/tools ~/permissions-lab/web
touch ~/permissions-lab/internal/customer-data.txt
touch ~/permissions-lab/internal/team-note.txt
touch ~/permissions-lab/.access-note
nano ~/permissions-lab/web/club-page.html
nano ~/permissions-lab/tools/status.sh
```

</details>

---

## New: Start a Bash Script

A Bash script is a text file containing several terminal commands. The `.sh` extension helps you recognise it. The execute permission `x` is what allows you to start it directly.

The first line names the program that should run the script:

```bash
#!/usr/bin/env bash
```

Test your prepared `status.sh`:

```bash
cd ~/permissions-lab
ls -l tools/status.sh
./tools/status.sh
```

The first attempt will probably show `Permission denied` because the execute permission is missing. Add and check it:

```bash
chmod u+x tools/status.sh
ls -l tools/status.sh
./tools/status.sh
```

- `chmod u+x` gives the owner execute permission.
- `./` means: start the file from the current directory using its path.
- The path and file name you enter must match exactly.

You will use the same pattern again later:

```text
Create script with nano → paste code → save → add execute permission → start with ./
```

---

## Task 1: Paths and Hidden Files

1. Use an absolute path to change into `~/permissions-lab/web`.
2. Use `pwd` to display your current location.
3. Use a relative path to change directly into `internal`.
4. Return to the main project directory.
5. Display all entries, including hidden ones.
6. Answer these questions:
   - Why was `.access-note` not visible before?
   - Does the dot at the beginning protect the file?

### Done When

You reached `internal` using a relative path and can display the hidden file.

<details>
<summary>Solution steps</summary>

```bash
cd ~/permissions-lab/web
pwd
cd ../internal
pwd
cd ..
ls -la
```

The dot at the beginning hides the name from the normal `ls` output. It does not protect the file. File permissions control access.

</details>

---

## Task 2: Read Permissions

Display the permissions of these entries:

- `internal`
- `internal/customer-data.txt`
- `web/club-page.html`
- `tools/status.sh`
- `.access-note`

Write down for each entry:

- Is it a file or a directory?
- Which permissions does the owner have?
- Which permissions does the group have?
- Which permissions do others have?

Also answer these questions:

1. How can you recognise a directory?
2. Who owns your files?
3. Which groups do you belong to?

### Done When

You can split a complete permission string such as `-rw-r--r--` into the three sections owner, group, and others.

<details>
<summary>Solution steps</summary>

```bash
cd ~/permissions-lab
ls -ld internal
ls -l internal/customer-data.txt web/club-page.html tools/status.sh
ls -l .access-note
groups
```

- The first character is `d` for a directory and `-` for a regular file.
- It is followed by three characters each for owner, group, and others.
- The owner and group are also shown in the output of `ls -l`.

The exact permissions may differ slightly depending on your system.

</details>

---

## Task 3: Set Suitable Permissions

Set the permissions using only the symbolic notation of `chmod`.

| File | Required state |
|---|---|
| `customer-data.txt` | Only you may read and write the file. |
| `team-note.txt` | You may read and write. The group may read. Others have no access. |
| `club-page.html` | You may read and write. Everyone else may only read. |
| `status.sh` | Only you may read, change, and execute the file. |
| `.access-note` | Only you may read and write the file. |

Check each change with `ls -l`. Then run `status.sh` using its path.

### Done When

All five files have the required permissions and `status.sh` starts directly.

<details>
<summary>Solution steps</summary>

```bash
cd ~/permissions-lab

chmod u+rw,g-rwx,o-rwx internal/customer-data.txt
chmod u+rw,g+r-wx,o-rwx internal/team-note.txt
chmod u+rw,g+r-wx,o+r-wx web/club-page.html
chmod u+rwx,g-rwx,o-rwx tools/status.sh
chmod u+rw,g-rwx,o-rwx .access-note

ls -l internal/customer-data.txt internal/team-note.txt
ls -l web/club-page.html tools/status.sh .access-note
./tools/status.sh
```

Expected permissions:

```text
-rw-------  customer-data.txt
-rw-r-----  team-note.txt
-rw-r--r--  club-page.html
-rwx------  status.sh
-rw-------  .access-note
```

</details>

---

## Task 4: What Does `x` Mean for a Directory?

Work from the `~/permissions-lab` directory.

1. First check whether you can enter `internal` and read `customer-data.txt`.
2. Remove the execute permission for the owner from the `internal` directory.
3. Try again to:
   - list the names inside the directory
   - enter the directory
   - read `customer-data.txt`
4. Restore the permission you removed.
5. Explain the difference between `x` on a file and `x` on a directory.

### Done When

You can enter the directory again at the end and can explain the error messages.

<details>
<summary>Solution steps</summary>

```bash
cd ~/permissions-lab
cd internal
cat customer-data.txt
cd ..

chmod u-x internal
ls internal
cd internal
cat internal/customer-data.txt

chmod u+x internal
cd internal
cd ..
```

On a file, `x` allows the file to be executed. On a directory, `x` allows you to enter the directory and traverse paths inside it.

With `r` on the directory, you can see the entry names. Without `x`, you still cannot open those entries normally. The error messages in this test are intentional.

</details>

---

## Task 5: Extended Challenge – Nginx Incident at the Club Office

The morning after a server change, three reports arrive:

- The club portal only displays `403 Forbidden`.
- After the first repair, the page appears without its green status box.
- An internal hidden note is publicly accessible through its exact URL.

Find and fix every cause. The task does not tell you which file or directory to investigate first.

### Preparation: Copy the Setup Script from GitHub

1. Check whether Nginx is installed and active.
2. If Nginx is missing, install it as described in the README.
3. Change into your permissions lab and create a new script file:

```bash
cd ~/permissions-lab
nano prepare-permissions-incident.sh
```

4. Open [prepare-permissions-incident.sh](material/prepare-permissions-incident.sh) on GitHub. Use the **Raw** view if needed.
5. Copy the complete code and paste it into `nano`. Depending on your terminal, paste with `Ctrl` + `Shift` + `V` or the right mouse button.
6. Save with `Ctrl` + `O`, confirm with `Enter`, and exit `nano` with `Ctrl` + `X`.
7. Check the name and current permissions:

```bash
pwd
ls -l prepare-permissions-incident.sh
```

8. Add execute permission and start the script:

```bash
chmod u+x prepare-permissions-incident.sh
ls -l prepare-permissions-incident.sh
./prepare-permissions-incident.sh
```

The script asks for your `sudo` password and changes only the practice directory `/var/www/html/permissions-incident`. Running it again resets the incident.

**Pay particular attention to these names:**

```text
~/permissions-lab/prepare-permissions-incident.sh
/var/www/html/permissions-incident
http://localhost/permissions-incident/
```

If you change a name or are in the wrong directory, the later commands and URLs will no longer match. You do not need to understand all of the setup script yet. Do not change its code for this task.

You can use the same process for other scripts from GitHub later: create a new `.sh` file with `nano`, paste the complete code, save it, add `x`, and start it using the exact path.

### Assignment 1: Inspect the Current State

Investigate the incident before changing permissions:

- Is Nginx running?
- Does the complete path exist?
- Which permissions do the involved directories have?
- Which permissions do the public and hidden files have?
- Which permissions does Nginx need on a file and on a directory?

Use `ls -l`, `ls -la`, and `ls -ld` where appropriate. Work step by step: record the current output before each permission change. One repair may make additional problems visible. Write down at least three unusual findings in total.

### Assignment 2: Repair the Portal

Fix the problems one at a time:

1. `http://localhost/permissions-incident/` must be accessible.
2. The link to the contact page must work.
3. The status box must appear green. Reload with `Ctrl` + `F5`.

Change only the missing permission each time. Check the result after every change.

### Assignment 3: Close the Data Leak

This URL must not display the note:

```text
http://localhost/permissions-incident/.team-note.txt
```

The file must be readable and writable by the owner, readable by the group, and not readable by others. Hiding it is not enough.

### Assignment 4: Document the Handover

Create `~/permissions-lab/incident-report.txt` containing:

- the three problems you found
- the affected path for each problem
- your smallest suitable permission change
- the result after the repair
- one sentence explaining the difference between `r` and `x` on directories

### Rules

- Do not use `chmod 777`.
- Do not use `chmod -R`.
- Do not delete or rename files.
- Do not change file contents.
- Use `sudo` only for changes inside `/var/www/html`.

### Done When

- [ ] the main page and contact page work
- [ ] the status box is green
- [ ] the internal note cannot be read in the browser
- [ ] you checked all permissions with `ls -la`
- [ ] your incident report is complete

<details>
<summary>Hints</summary>

- `ls -ld DIRECTORY` displays the permissions of the directory itself.
- To reach a file, Nginx must be able to traverse every directory in its path.
- HTML and CSS files must be readable but do not need to be executable.
- `ls -l` does not show hidden names.
- A `403` can be caused by the file or by a directory in its path.

</details>

<details>
<summary>Solution steps</summary>

First check the service and path:

```bash
systemctl is-active nginx
ls -ld /var /var/www /var/www/html
ls -ld /var/www/html/permissions-incident
ls -la /var/www/html/permissions-incident
```

Missing file details or errors from `ls` provide another clue: `others` is missing `x` on the `permissions-incident` directory. Nginx and your user cannot traverse it normally.

Repair the first problem and then inspect deeper:

```bash
sudo chmod o+x /var/www/html/permissions-incident
ls -ld /var/www/html/permissions-incident
ls -la /var/www/html/permissions-incident
ls -ld /var/www/html/permissions-incident/assets
ls -la /var/www/html/permissions-incident/assets
```

The two remaining problems are now visible:

1. `others` is missing `r` on `assets/style.css`. Nginx cannot read the stylesheet.
2. `.team-note.txt` is hidden but still readable by `others`.

Change only the missing or excessive file permissions:

```bash
sudo chmod o+r /var/www/html/permissions-incident/assets/style.css
ls -l /var/www/html/permissions-incident/assets/style.css

sudo chmod o-r /var/www/html/permissions-incident/.team-note.txt
ls -la /var/www/html/permissions-incident
```

Expected state:

```text
drwxr-xr-x  permissions-incident
drwxr-xr-x  assets
-rw-r--r--  index.html
-rw-r--r--  contact.html
-rw-r--r--  style.css
-rw-r-----  .team-note.txt
```

Check all three URLs in the browser:

```text
http://localhost/permissions-incident/
http://localhost/permissions-incident/contact.html
http://localhost/permissions-incident/.team-note.txt
```

The first two pages must work. The internal note must be blocked with `403 Forbidden`.

Create the incident report:

```bash
nano ~/permissions-lab/incident-report.txt
```

</details>

---

## Short Wrap-up

Answer in two to four sentences:

- Why is “hidden” not the same as “protected”?
- Why is read permission on a file not enough when a directory in its path is missing `x`?
- Why are `chmod 777` and `chmod -R` poor quick fixes?
