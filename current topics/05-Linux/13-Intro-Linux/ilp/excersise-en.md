# Individual Learning Phase: Linux Fundamentals in a Virtual Machine



## Your Goal

You will set up a Linux distribution in a virtual machine, successfully log in, and familiarise yourself with both the graphical user interface and the terminal. By the end, you will be able to name typical use cases for Linux, make an informed choice of distribution, and navigate confidently between the GUI and the terminal.



## What you need

- a computer with internet access
- virtualization software, e.g., VirtualBox or VMware Workstation Player
- an ISO image of a Linux distribution, e.g., Ubuntu Desktop, Debian, or Fedora Workstation
- at least 25 GB of free storage space
- a way to take notes, e.g., text file, OneNote, or paper
- a way to take screenshots



## Time Planning

- 0–15 Min.: Task 1
- 15–50 Min.: Task 2
- 50–65 Min.: Task 3
- 65–85 Min.: Task 4
- 85–105 Min.: Task 5
- 105–120 Min.: Extension Task 1 and/or 2
- If you are faster: Extension Task 3



## Basic Tasks



### Task 1: Choose and briefly justify a distribution

**Goal:** You gain an overview of Linux, typical use cases, and select a suitable distribution for your VM.

**Work Assignment:**
1. Briefly research at least three Linux distributions, e.g.:
   - Ubuntu Desktop
   - Debian
   - Fedora Workstation
2. For each distribution, jot down in bullet points:
   - typical area of use
   - whether it's more beginner-friendly or more technical
   - whether it's more known for Desktop or Server
3. Then add to your notes:
   - at least three typical use cases for Linux
   - at least three differences between Linux and an operating system you already know
4. Decide on a distribution that you will install in the VM and justify your choice in 3–5 sentences.

**Expected Result / Target State:**
You have created a brief comparison overview of at least three distributions and selected and justified a specific distribution for installation.



### Task 2: Create a virtual machine and install Linux

**Goal:** You set up a functional Linux VM and successfully complete the installation.

**Work Assignment:**
1. Create a new virtual machine for your chosen distribution.
2. Configure the VM with sensible basic settings, e.g.:
   - VM name
   - RAM
   - CPU cores
   - virtual hard disk
3. Mount the ISO image and start the VM.
4. Install Linux in the VM.
5. During installation, set:
   - Language
   - Time zone
   - Keyboard layout
   - Username
   - Computer name
   - Password
6. Restart the VM after installation and remove the installation media if necessary.
7. Take a screenshot of:
   - the fully set up VM in the virtualization software
   - the login screen or the first launched desktop

**Expected Result / Target State:**
The Linux distribution is fully installed in the VM, starts without errors, and displays the login screen or directly the desktop.



### Task 3: First login and check system data

**Goal:** You successfully log in and check basic information about the installed system.

**Work Assignment:**
1. Log in with your created user account.
2. Check in the graphical interface:
   - your username
   - the computer name
   - language or keyboard layout
3. Then open a terminal.
4. Execute the following commands one after another in the terminal and briefly note what you observe:
   - `whoami`
   - `hostname`
   - `pwd`
   - `uname -a`
   - `cat /etc/os-release`
5. Save a screenshot of the open terminal with the executed commands.

**Expected Result / Target State:**
You are successfully logged in and have visibly documented the most important basic information about the user, computer, and Linux version.



### Task 4: Explore the graphical interface purposefully

**Goal:** You become familiar with the Linux GUI and know central areas of the interface.

**Work Assignment:**
1. Explore the graphical interface and find:
   - Application menu or start area
   - File manager
   - System settings
   - Area for network, volume, or time
2. Open the file manager and perform the following steps:
   - open your Home folder
   - create a folder named `learning-phase`
   - create a text file named `notes.txt` inside it
3. Open the system settings and check:
   - User account
   - Date/Time
   - Network status
4. Briefly note:
   - which elements seem familiar to you
   - what feels different compared to Windows or macOS
5. Take a screenshot of the file manager in the Home folder or of the created `learning-phase` folder.

**Expected Result / Target State:**
You can navigate the graphical interface, use the file manager, and have created your own work folder.



### Task 5: Work with the terminal and switch between GUI and terminal

**Goal:** You use the terminal for simple navigation tasks and can understand the switch between the graphical interface and the terminal.

**Work Assignment:**
1. Open a terminal.
2. Execute the following commands and observe their effect:
   - `pwd`
   - `ls`
   - `cd ~`
   - `mkdir -p learning-phase/terminal-test`
   - `cd learning-phase/terminal-test`
   - `touch file1.txt file2.txt`
   - `ls -l`
   - `clear`
   - `history`
3. Then check in the file manager whether the folder and files created in the terminal are visible.
4. Consciously switch at least once between the graphical interface and the terminal, e.g.:
   - Open terminal from the GUI
   - Switch back to the graphical interface
   - If possible: switch to a text console and back to the GUI
5. Note in 3–5 bullet points:
   - which tasks can be done quickly in the terminal
   - what you noticed when switching between GUI and terminal

**Expected Result / Target State:**
You have created folders and files using the terminal, verified the results in the GUI, and practically performed the switch between the graphical interface and the terminal.



## Extension Tasks



### Extension Task 1: Briefly compare a second distribution

**Goal:** You sharpen your understanding of differences between distributions.

**Work Assignment:**
1. Choose a second Linux distribution that you did not install.
2. Research it for:
   - Target audience
   - Desktop or server focus
   - Typical strengths
3. Compare it with your installed distribution in a table with at least five comparison points.
4. Add a brief decision at the end:
   - For which use case would you choose which distribution?

**Expected Result / Target State:**
You have created a clear comparison table and can articulate your selection criteria understandably.



### Extension Task 2: Build a file structure in the terminal

**Goal:** You deepen your navigation and file management skills in the terminal.

**Work Assignment:**
1. Create the following structure in the terminal under your Home directory:
   - `project`
   - `project/docs`
   - `project/scripts`
   - `project/logs`
2. Create a file `readme.txt` in `docs`.
3. Create two empty files in `scripts`:
   - `start.sh`
   - `backup.sh`
4. Display the structure using appropriate `ls` commands.
5. Open the file manager and check if the structure is correctly visible.
6. Document with a screenshot or a brief note how the GUI and terminal work together.

**Expected Result / Target State:**
The specified folder and file structure is created in the terminal and visible in the graphical interface.



### Extension Task 3: Compare Linux with your daily system

**Goal:** You contextualize your first Linux experiences in a practical way.

**Work Assignment:**
Create a comparison overview between Linux and an operating system you already know. Compare at least these points:
- Login and user concept
- File system or folder structure
- Software installation
- Role of the graphical interface
- Importance of the terminal
- Typical use cases

Finally, formulate a brief conclusion in 4–6 sentences:
- Where do you see advantages of Linux?
- Where do you expect more familiarization effort?

**Expected Result / Target State:**
You have created a practical comparison overview and reflected on your first Linux impressions.



## Important Notes

- Work step-by-step and briefly document each completed task.
- Save screenshots and notes in your `learning-phase` folder.
- If a command does not work, first check spelling, spaces, and case sensitivity.
- If the VM does not start, check ISO mounting, RAM, and hard disk settings.
- Do not change any settings whose effect you cannot understand.
- If you get stuck on a task, note the exact step and the message displayed.



## Reflection Questions

- Why did you choose this specific distribution?
- Which Linux use cases seem particularly plausible to you after working in the VM?
- What differences to other operating systems did you practically perceive?
- What was easy for you in the graphical interface, what was unfamiliar?
- What advantages has the terminal already shown you?
- In which steps do you still need more confidence?

---