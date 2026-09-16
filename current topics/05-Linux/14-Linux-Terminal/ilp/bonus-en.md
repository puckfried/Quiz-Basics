# WSL and Terminal Practice Workshop

You do not need to complete every task. Choose a task that matches your current level. When you finish, you can try an extension or move on to another task.

The first tasks review topics from class. The later tasks introduce new commands. Read each new command completely before running it, and use it only in the specified practice directories.

## How the Tasks Work

1. Read the goal and the expected result first.
2. Try to find the first step yourself.
3. Open the tips if you need support.
4. Check at the end whether your result really works.

There is no fixed time limit and no formal submission. Understanding your solution is more important than completing as many tasks as possible.

## Important Rules

- Work only in your home directory or in the WSL practice directory named in the task.
- Replace placeholders such as `YOUR_WINDOWS_USERNAME` with the correct name on your computer.
- Use the Tab key to complete file and directory names.
- You do not need `sudo` or any delete commands for these tasks.
- `>` can overwrite an existing file. Use it only with the new practice files named here.

---

## Table of Contents

- [Task 1: Build a WSL Handover Folder](#task-1-build-a-wsl-handover-folder) – Create and organize files that are also visible in Windows.
- [Task 2: Two File Systems, Several Paths](#task-2-two-file-systems-several-paths) – Compare the Linux home, Windows home, and absolute and relative paths.
- [Task 3: Investigate a Long File](#task-3-investigate-a-long-file) – Compare `cat` and `less` using a real system file.
- [Task 4: Find Programs on the System](#task-4-find-programs-on-the-system) – Combine `ls`, `grep`, `wc`, `sort`, `|`, and `>`.
- [Task 5: Research Commands Independently](#task-5-research-commands-independently) – Use help pages and find out where commands come from.
- [Task 6: Start Windows Tools from WSL](#task-6-start-windows-tools-from-wsl) – Open File Explorer and Notepad from the Linux terminal.

Tasks 1 to 3 are good starting points. Tasks 4 to 6 contain additional commands that we have not yet discussed fully in class.

---

## Task 1: Build a WSL Handover Folder

### Goal

Use Ubuntu to create a working directory inside your Windows user directory. Then check whether you can find the same files in Windows.

### Your Task

1. Change to `/mnt/c/Users` and display the available user directories.
2. Find your Windows user directory. Use the Tab key when changing into it.
3. Create a directory called `wsl-handover` with the subdirectories `draft`, `finished`, and `notes`.
4. Create the files `linux-note.txt` and `windows-note.txt` inside `draft`.
5. Use `nano` to write at least three terminal commands you have learned into `linux-note.txt`.
6. Move the file into `finished` and rename it to `linux-note-finished.txt` at the same time.
7. Display its contents first with `cat` and then with `less`.
8. Open the `wsl-handover` directory in Windows File Explorer and find the file there.

### Done When

- all three subdirectories exist
- `linux-note-finished.txt` is located only in `finished`
- you can read its contents in the Linux terminal
- you have found the same file in Windows File Explorer

<details>
<summary>Tips and possible commands</summary>

```bash
cd /mnt/c/Users
ls
cd YOUR_WINDOWS_USERNAME
mkdir -p wsl-handover/draft wsl-handover/finished wsl-handover/notes
cd wsl-handover
touch draft/linux-note.txt draft/windows-note.txt
nano draft/linux-note.txt
mv draft/linux-note.txt finished/linux-note-finished.txt
cat finished/linux-note-finished.txt
less finished/linux-note-finished.txt
```

Exit `less` with `q`.

The corresponding Windows path normally starts like this:

```text
C:\Users\YOUR_WINDOWS_USERNAME\wsl-handover
```

</details>

<details>
<summary>Extension</summary>

Edit `windows-note.txt` with a Windows text editor. Then open the file again with `cat` in the Ubuntu terminal.

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 2: Two File Systems, Several Paths

### Goal

Distinguish the Linux home from the Windows home and reach locations using different paths.

### Your Task

1. Change to your Linux home and write down its full path.
2. Use an absolute path to change to `/mnt/c/Users`.
3. From there, use a relative path to enter your Windows user directory.
4. Use `~` to return directly to your Linux home.
5. Go to your Windows user directory again, this time using Tab completion whenever possible.
6. Create the file `path-map.txt` in your Linux home.
7. Write down:
   - the absolute path to your Linux home
   - the absolute WSL path to your Windows home
   - the matching Windows path beginning with `C:\Users\...`
   - the meaning of `~`, `.`, and `..`

### Done When

You can explain why the Linux home and Windows home are different locations and where a relative path starts.

<details>
<summary>Tips and possible commands</summary>

```bash
cd ~
pwd
cd /mnt/c/Users
ls
cd YOUR_WINDOWS_USERNAME
pwd
cd ~
nano path-map.txt
```

`pwd` always displays the full path of your current working directory.

</details>

<details>
<summary>Extension</summary>

Start in `/mnt/c/Users/YOUR_WINDOWS_USERNAME` and reach `/mnt/c` using only `..`. Use `pwd` after each step to check where you are.

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 3: Investigate a Long File

### Goal

Compare `cat` and `less` and learn how to search for specific information in a longer file.

### Your Task

1. Check whether the file `/etc/services` exists.
2. Display it once with `cat` and observe what happens.
3. Open the same file with `less`.
4. Move through the text one line and one page at a time.
5. Search for the word `http`.
6. Jump to the next match.
7. Exit `less` without closing the terminal window.
8. Write in `~/reading-notes.txt` which kind of file you would view with `cat` and which kind you would view with `less`.

### Done When

You have found at least two matches in `less` and can explain the difference between `cat` and `less` in your own words.

<details>
<summary>Tips and possible commands</summary>

```bash
ls -l /etc/services
cat /etc/services
less /etc/services
nano ~/reading-notes.txt
```

Inside `less`:

- `/http` searches for `http`
- `n` jumps to the next match
- Space moves forward one page
- `q` exits `less`

If `/etc/services` does not exist on your system, use this file instead:

```bash
less /usr/share/common-licenses/GPL-3
```

</details>

<details>
<summary>Extension</summary>

Open a second long file with `less` and find out whether the search distinguishes between uppercase and lowercase letters.

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 4: Find Programs on the System

### Goal

Connect small terminal tools and save only the output that interests you.

### Your Task

1. Display the program names in `/usr/bin` one page at a time.
2. Filter all names containing the letters `sh`.
3. Count the matching lines.
4. Sort the matches in reverse alphabetical order.
5. Write the sorted result to the new file `~/programs-with-sh.txt`.
6. Check the saved contents with `less`.
7. Explain in your own words what `|` and `>` did in your command sequence.

### Done When

`~/programs-with-sh.txt` exists, contains only matching names, and you know how many lines were found.

<details>
<summary>Tips and possible commands</summary>

```bash
ls /usr/bin | less
ls /usr/bin | grep sh
ls /usr/bin | grep sh | wc -l
ls /usr/bin | grep sh | sort -r
ls /usr/bin | grep sh | sort -r > ~/programs-with-sh.txt
less ~/programs-with-sh.txt
```

- `|` passes the output on its left to the next command.
- `>` writes the output to a file and can overwrite existing contents.
- Use a different file name if `~/programs-with-sh.txt` already contains something important.

</details>

<details>
<summary>Extension</summary>

Choose a different sequence of characters and create a second result file. Which search finds more matches?

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 5: Research Commands Independently

### Goal

Find information about commands without immediately asking for a complete solution.

### Your Task

1. Find out whether `cd` and `ls` are built directly into the shell or exist as separate programs.
2. Find the location of the `nano` program.
3. Open the short help for `mkdir` and find the explanation for `-p`.
4. Open the manual page for `mv` and search for information about renaming.
5. Create `~/command-research.txt` and write down at least four things you learned.
6. Also write down how to exit a help view.

### Done When

Your notes contain information from at least three different help or investigation commands.

<details>
<summary>Tips and possible commands</summary>

```bash
type cd
type ls
which nano
mkdir --help | less
man mv
nano ~/command-research.txt
```

Exit a manual page or `less` with `q`.

If `man` is not installed, use:

```bash
mv --help | less
```

</details>

<details>
<summary>Extension</summary>

Use `type` to investigate whether `pwd`, `cat`, and `less` are shell commands or separate programs. Does any result surprise you?

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 6: Start Windows Tools from WSL

### Goal

Use the connection between Ubuntu and Windows and translate paths between the two systems.

### Your Task

1. Create the directory `wsl-interop` in your Linux home and create the file `exchange.txt` inside it.
2. Use `nano` to write a short text in the file.
3. Display the Windows version of your current Linux path.
4. Open the current directory in Windows File Explorer directly from the terminal.
5. Open `exchange.txt` in Windows Notepad from WSL.
6. Add one line in Notepad and save the file.
7. Check the change with `cat` in the Linux terminal.
8. Optionally copy the file contents to the Windows clipboard and paste them into a Windows application.

### Done When

You have edited the same file with a Linux program and a Windows program and can show both its Linux path and its Windows path.

<details>
<summary>Tips and possible commands</summary>

```bash
mkdir -p ~/wsl-interop
cd ~/wsl-interop
touch exchange.txt
nano exchange.txt
wslpath -w "$(pwd)"
explorer.exe .
notepad.exe "$(wslpath -w "$(pwd)/exchange.txt")"
cat exchange.txt
```

For the optional clipboard step:

```bash
cat exchange.txt | clip.exe
```

- `wslpath -w` translates a Linux path into Windows format.
- Start Windows programs from WSL using their `.exe` extension.
- The dot in `explorer.exe .` means: open the current directory.

</details>

<details>
<summary>Extension</summary>

Run a single Linux command from Windows PowerShell:

```powershell
wsl pwd
```

Compare the output with `pwd` in your open Ubuntu terminal.

</details>

[Back to the table of contents](#table-of-contents)

---

## Final Self-Check

- Which two file systems did you work with today?
- Which path was absolute and which was relative?
- When was `less` more helpful than `cat`?
- What did a pipe do with a command's output?
- Which Windows tool could you start directly from WSL?
- Which new command would you like to investigate further?
