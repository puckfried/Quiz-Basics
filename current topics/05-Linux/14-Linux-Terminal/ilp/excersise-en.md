# Individual Learning Phase: Safely Using the Linux Shell in Everyday Life

## Your Goal

You will confidently navigate directories, files, and text files in the Linux Shell. You will use relative and absolute paths, display content with appropriate commands, create and organize files and directories, and edit text files with `nano`. By the end, you will have built a small, well-structured work environment and independently solved typical shell tasks.

## What you need

- A Linux computer or a Linux VM
- A terminal
- Write permissions in your home directory
- The commands `pwd`, `ls`, `cat`, `less`, `mkdir`, `cp`, `mv`, `rm`, `nano`
- Approximately 2 hours of focused work time

## Time Planning

- 10 minutes: Check work environment and create starting folder
- 20 minutes: Navigate the file system and display contents
- 25 minutes: Create and organize files and directories
- 25 minutes: Edit text files with `nano`
- 20 minutes: Practical task with multiple steps
- 20 minutes: Extension tasks or thorough post-processing

## Basic Tasks

### Task 1:
Prepare your workspace **Goal:** You set up a clear work structure in your home directory and check your orientation within the file system.

**Work Assignment:**
1. Open a terminal.
2. Check which directory you are currently in.
3. Change to your home directory.
4. Create a main folder named `shell_training` there.
5. Create the subfolders `notizen`, `projekte`, `backup`, and `temp` within it.
6. Display the content of your home directory and then the content of `shell_training`.
7. Change to the newly created subfolders and back again using relative paths.
8. Note down the commands you used in a text file `notizen/start.txt`.

**Expected Result / Target State:**
In the home directory, the `shell_training` folder exists with the four subfolders. You can switch between folders using relative and absolute paths. The file `start.txt` is present.

### Task 2:
Explore the file system and display contents **Goal:** You use `ls`, `cat`, and `less` to view directory contents and files specifically.

**Work Assignment:**
1. Display the content of `shell_training` and at least two subfolders.
2. Create a file `linux_info.txt` with at least 6 lines of content in `nano` within the `notizen` folder.
   For example, use these topics as headings:
   - current working directory
   - home directory
   - relative path
   - absolute path
   - important commands
   - open questions
3. Display the content of the file once with `cat` and once with `less`.
4. In `less`, use navigation up and down as well as the search for a term from your file.
5. Add another line to `linux_info.txt` with an example of an absolute path and a line with an example of a relative path.

**Expected Result / Target State:**
The file `linux_info.txt` contains at least 8 meaningful lines. You have displayed the content with `cat` and `less` and performed a search in `less`.

### Task 3:
Organize files and folders **Goal:** You manage files and directories with `mkdir`, `cp`, `mv`, and `rm`.

**Work Assignment:**
1. Create the subfolders `projekt_a` and `projekt_b` in the `projekte` folder.
2. Copy the file `linux_info.txt` from `notizen` to `projekte/projekt_a`.
3. Create a new file `todo.txt` in `projekt_a` with at least 5 short task lines.
4. Move `todo.txt` from `projekt_a` to `projekt_b`.
5. Additionally copy the file `todo.txt` to the `backup` folder.
6. Create a test file `loeschen.txt` with arbitrary content in the `temp` folder and then remove it.
7. After each step, check with `ls` if the files are in the expected location.

**Expected Result / Target State:**
`linux_info.txt` is in `notizen` and additionally in `projekte/projekt_a`. `todo.txt` is in `projekte/projekt_b` and as a copy in `backup`. The test file in `temp` has been removed.

### Task 4:
Edit text files specifically with nano **Goal:** You edit existing files in `nano`, add content, and find text passages again.

**Work Assignment:**
1. Open `projekte/projekt_b/todo.txt` in `nano`.
2. Add a heading at the beginning of the file, followed by the current date on its own line.
3. Add two new tasks at the end of the file.
4. Search in `nano` for a word that already exists in the file.
5. Change the content of at least one existing line.
6. Save the file and close `nano`.
7. Then display the content with `cat`.
8. Open `notizen/start.txt` again and add 3 typical errors that might occur with shell commands, for example, wrong path, typo, or file not found.

**Expected Result / Target State:**
`todo.txt` has been extended and properly saved. You have searched for and changed text in `nano`. `start.txt` additionally contains three typical error sources.

### Task 5:
Practical Case: Create a small filing system for a workday **Goal:** You combine navigation, file management, and text editing in a realistic everyday task.

**Work Assignment:**
Imagine you are setting up a simple filing system for a workday.
1. Create a new folder `arbeitstag` in the `projekte` folder.
2. Create the subfolders `eingang`, `bearbeitet`, and `archiv` within it.
3. Create three files in `eingang`:
   - `mail_01.txt`
   - `mail_02.txt`
   - `aufgabenliste.txt`
4. Write a short, appropriate content into each file using `nano`.
5. Move `mail_01.txt` and `mail_02.txt` to `bearbeitet`.
6. Additionally copy `aufgabenliste.txt` to `archiv`.
7. Display the structure of `arbeitstag` with several `ls` calls.
8. Open `bearbeitet/mail_01.txt` with `less` and search for a term from its content.
9. Add a line to `archiv/aufgabenliste.txt`: `Kontrolle abgeschlossen`.

**Expected Result / Target State:**
The `arbeitstag` folder contains a clear structure. At least one file remains in `eingang`, the processed mails are in `bearbeitet`, and a copy of the task list with an added completion line is in `archiv`.

## Extension Tasks

### Extension Task 1: Path training under time pressure
**Goal:** You become faster and more confident in switching between relative and absolute paths.

**Work Assignment:**
1. Start in the home directory.
2. Change successively to these destinations:
   - `shell_training/notizen`
   - `shell_training/projekte/projekt_a`
   - `shell_training/projekte/projekt_b`
   - `shell_training/backup`
3. Perform the changes once using only absolute paths and once using only relative paths.
4. Document in a file `notizen/pfadtraining.txt` one example each for an absolute and a relative path to `todo.txt`.

**Expected Result / Target State:**
`pfadtraining.txt` exists and contains correct path examples. You can reach the target folders in two ways.

### Extension Task 2: Purposefully find and fix errors
**Goal:** You recognize typical shell errors and correct them independently.

**Work Assignment:**
1. Intentionally try out three erroneous commands, for example:
   - wrong filename
   - wrong folder name
   - wrong path
2. Read the error message carefully.
3. Correct the command immediately afterwards in each case.
4. Document in `notizen/fehlerprotokoll.txt` for each case:
   - your faulty command
   - the error message in your own words
   - the corrected command

**Expected Result / Target State:**
`fehlerprotokoll.txt` contains three documented error cases, each with a clear correction.

### Extension Task 3: Deliberate cleanup
**Goal:** You remove files and directories in a controlled manner and check their content beforehand.

**Work Assignment:**
1. Create a subfolder `testbereich` with two files in the `temp` folder.
2. Check with `ls` what is inside.
3. First remove a single file.
4. Then remove the entire test area only if you are sure it is no longer needed.
5. Finally, check if `temp` is clean again.
6. Add a short warning to `notizen/start.txt` about what you want to pay attention to when using `rm`.

**Expected Result / Target State:**
The test area has been created and removed in a controlled manner. A meaningful warning about careful deletion is in `start.txt`.

## Important Notes

- Work only in your own `shell_training` folder.
- Always check with `ls` before `rm` whether you are in the correct directory.
- Use `pwd` regularly if you are unsure where you are.
- Consciously save changes in `nano` and then check the content.
- If a command does not work, read the error message carefully and check spelling, path, and filenames.
- Pay attention to case sensitivity.

## Reflection Questions

- For which tasks did you confidently use relative paths, and when were absolute paths more helpful?
- Which command helped you best to check file contents, and why?
- Where did an error occur for you, and how did you recognize it?
- What must you always check before deleting files or directories in the future?
- Which three shell commands do you feel most confident with after this work phase?