# Individual Learning Phase: Linux Permissions, Package Management, and Secure Terminal Work

## Your Goal

You will set up a secure working environment in the terminal, check and modify file permissions under Linux, work with package management, and develop simple routines for secure and efficient daily work.

## What you need

- A Linux computer or a Linux VM
- A terminal
- A user account with access to your home directory
- If possible: sudo rights for package management
- A text editor in the terminal or with a graphical interface
- An internet connection or reachable package sources

## Schedule

- 15 minutes: Task 1
- 20 minutes: Task 2
- 25 minutes: Task 3
- 30 minutes: Task 4
- 20 minutes: Task 5
- 10 minutes: Reflection, follow-up work, or starting an extension task

## Basic Tasks

### Task 1:

Building a Secure Working Environment **Goal:** You will set up a clear, secure workspace and use initial useful terminal routines.

**Instructions:**
- Open a terminal.
- Create a working folder in your home directory, e.g., `~/ilp-linux`.
- Create subfolders `rechte`, `pakete`, and `notizen` within it.
- Change into the new working folder and check with appropriate commands:
  - which directory you are in
  - which files and folders are present
  - which hidden files are displayed
- Create the following test files:
  - `rechte/bericht.txt`
  - `rechte/start.sh`
  - `notizen/arbeitsprotokoll.md`
- Open `rechte/start.sh` in an editor and enter a small shell script that outputs a short message when started.
- During this task, consciously use at least three helpful work routines or shortcuts, for example:
  - Tab completion
  - Arrow keys for previous commands
  - `Ctrl + C` to gracefully cancel a harmless command
  - `Ctrl + L` or `clear` to clean up the terminal
- In `notizen/arbeitsprotokoll.md`, note which routines or shortcuts you used and for what purpose.

**Expected Result / Target State:**
Your working folder with the desired structure exists. The three test files are created. Your work log contains at least three used terminal routines or shortcuts.

### Task 2:

Making and Classifying File Permissions Visible **Goal:** You will read permissions with `ls -l` and securely assign owner, group, and others.

**Instructions:**
- Determine with appropriate commands:
  - your username
  - your groups
- Display the files and folders in `~/ilp-linux/rechte` as well as the working folder itself using `ls -l`.
- Document in `notizen/arbeitsprotokoll.md` for at least four entries:
  - Name of the file or folder
  - Permission display from `ls -l`
  - Owner
  - Group
  - which rights owner, group, and others each have
- Compare at least one file with a folder and note what you observe about the permission display.

**Expected Result / Target State:**
You have documented a brief overview for at least four entries and can clearly assign owner, group, and others in the `ls -l` output.

### Task 3:

Changing Permissions Specifically **Goal:** You will adjust read, write, and execute permissions with `chmod` to achieve different target states.

**Instructions:**
- Work in the `~/ilp-linux/rechte` folder.
- Set a state for `start.sh` where only you can read, modify, and execute the file.
- Set a state for `bericht.txt` where you can read and write, the group can only read, and others have no access.
- Additionally, create a file named `freigabe.txt`.
- Set a state for `freigabe.txt` where:
  - you can read and write
  - the group can read and write
  - others can only read
- After each change, re-check the permissions with `ls -l`.
- Execute `start.sh` and check if the set execution status matches your goal.
- Note in your work log:
  - which file you changed
  - which target state you wanted to achieve
  - whether the display in `ls -l` matches it

**Expected Result / Target State:**
The three files have different, consciously set permissions. You have verified and documented each change.

### Task 4:

Installing, Checking, and Removing Software with Package Management **Goal:** You will use your system's package management for typical everyday tasks.

**Instructions:**
- Use your system's package management. If you are using a Debian-/Ubuntu-based system, work with `apt`.
- Update package information.
- Display which packages could be updated.
- Choose a small, non-critical package, for example `tree` or `htop`, if it is not already installed.
- Check the package information before installation.
- Install the package.
- Start the installed program once in a meaningful way, for example:
  - `tree` for your working folder
  - `htop` to display running processes
- Then consciously decide:
  - whether to remove the package again
  - or whether to leave it installed
- Document in `notizen/arbeitsprotokoll.md`:
  - which package you chose
  - which commands you used to search, install, and check
  - whether you removed or kept it

**Expected Result / Target State:**
You have practically performed and documented the typical workflow of updating, checking, installing, and removing or keeping at least once.

### Task 5:

Package Sources, Updates, and Secure Terminal Routine **Goal:** You will check package sources, simulate an update meaningfully, and formulate your personal security routine.

**Instructions:**
- Display the package sources registered on your system using an appropriate method.
- Identify at least one official package source and note:
  - the source or URL
  - the distribution or version
  - a visible component such as main section or component
- Perform a secure check for possible updates.
- If your system supports it, simulate an upgrade instead of executing it directly without checking.
- Create a personal checklist in `notizen/arbeitsprotokoll.md` with:
  - 5 steps you want to observe before updates or sudo commands
  - 3 rules for secure terminal work
  - 3 habits for efficient terminal work

**Expected Result / Target State:**
You have identified at least one package source, performed a secure update check, and recorded a short personal routine for secure and efficient work.

## Extension Tasks

### Extension Task 1: Implementing Permissions with Numeric Values

**Goal:** You will apply permissions using numeric notation in addition to symbolic notation.

**Instructions:**
- In the `~/ilp-linux/rechte` folder, create a subfolder `projektA`.
- Create the files `info.txt`, `team.txt`, and `deploy.sh` within it.
- Set a different meaningful permission state for each file using numeric notation.
- Check the results with `ls -l`.
- For each file, note:
  - which state you wanted to achieve
  - which numeric value you used
  - whether the result matches your expectation

**Expected Result / Target State:**
You have set several permissions using numeric notation and verified the effect with `ls -l`.

### Extension Task 2: Examining Package Information in More Detail

**Goal:** You will examine a package beyond just its installation.

**Instructions:**
- Choose a package that is installed on your system or one you used in Task 4.
- Research with appropriate package manager commands:
  - installed version
  - available version
  - origin from a package source
  - short description
  - important dependencies
- Record the results in bullet points in your work log.

**Expected Result / Target State:**
You have collected and understandably documented several technical pieces of information about a package.

### Extension Task 3: Creating Your Own Linux Daily Cheat Sheet

**Goal:** You will consolidate your knowledge into a compact, later usable form.

**Instructions:**
- In `notizen/arbeitsprotokoll.md` or a separate file, create a mini-overview with:
  - 5 commands for terminal navigation
  - 3 commands for checking permissions
  - 3 examples for adjusting permissions
  - 3 commands related to package management
  - 5 rules or habits for secure working
- Formulate the overview so that you can use it later as a personal cheat sheet.

**Expected Result / Target State:**
You have a compact, self-created overview for your Linux daily routine.

## Important Notes

- Work only in your own home directory and in your test folder.
- Use `sudo` only where absolutely necessary, especially for package management.
- Always check the command, path, and options before pressing Enter.
- Do not execute deletion commands in unfamiliar or unclear directories.
- Install only small, non-critical packages that you can remove again.
- If your system does not use `apt`, use the appropriate commands for your package manager.
- Read error messages completely and record them in your work log if necessary.

## Reflection Questions

- In which task did you feel most secure in the terminal and why?
- Which permission change was easiest for you to understand?
- Where was the difference between file and folder permissions clearest for you?
- Which package manager commands do you want to remember permanently?
- Which three rules will you always follow before using `sudo` from now on?
- Which routine or shortcut saved you the most time today?