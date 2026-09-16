# Individual Learning Phase: Starting Securely in Git



## Your Goal

You will set up Git on your system, configure your identity, use Git help effectively for self-support, and create your first local Git repository. In doing so, you will document the most important basics of version control in a small practical project.



## What You Need

- A computer with Windows, macOS, or Linux
- Access to a terminal, console, or PowerShell
- A text editor or an IDE
- Internet access to download Git, if Git is not yet installed
- Write permissions in your user folder
- Optional: a training email address, if you don't want to use your private one



## Time Schedule

- **0–20 Minutes:** Check or install Git
- **20–35 Minutes:** Configure Git
- **35–55 Minutes:** Explore Git help and self-help options
- **55–85 Minutes:** Create practice folder and initialize Git repository
- **85–105 Minutes:** Document version control basics in the project
- **105–120 Minutes:** Extension tasks and reflection



## Basic Tasks



### Task 1:

Install Git and check readiness for use **Goal:** You ensure that Git is available on your system and that you are working in a clean environment.

**Work Order:**
- In the terminal, check if Git is already installed.
- If Git is not installed, install Git suitable for your operating system.
- Afterwards, open the terminal again and re-check if Git is recognized.
- In your user folder, create a working folder named `git-learning-phase`.
- Inside it, create a file `arbeitsprotokoll.md` and note:
  - Date
  - Operating system
  - Whether Git was already present or newly installed
  - The detected Git version

**Expected Result / Target State:**
Git is usable, the version output works, and your `git-learning-phase` folder with the `arbeitsprotokoll.md` file exists.



### Task 2:

Set Git basic configuration **Goal:** You store your identity for working with Git and verify the saved settings.

**Work Order:**
- Configure your name and email address in Git using the `user.name` and `user.email` settings.
- Then check if both values have been correctly saved.
- Add to your `arbeitsprotokoll.md`:
  - The name used
  - The email address used
  - A short sentence explaining why this configuration is important for working with Git

**Expected Result / Target State:**
Git knows your name and email address, and both values can be displayed again in the terminal.



### Task 3:

Use Git help effectively **Goal:** You learn how to help yourself with Git without relying on external assistance.

**Work Order:**
- Use at least three Git self-help options, for example:
  - General help
  - Help for a specific subcommand
  - Overview of available commands
- Research using the built-in help functions:
  - What `git init` is used for
  - How to call help for individual commands
  - What role configurations play in Git
- In the `git-learning-phase` folder, create a file `selbsthilfe.md`.
- In it, summarize in 5–7 bullet points:
  - Which help functions you used
  - What information you found with them
  - Which help option you found most understandable

**Expected Result / Target State:**
The file `selbsthilfe.md` exists and contains a short, comprehensible summary of your Git self-help methods.



### Task 4:

Create a practical project and initialize it as a Git repository **Goal:** You create a realistic local project and transform it into a Git repository.

**Work Order:**
- Inside `git-learning-phase`, create a new project folder with a realistic name, for example:
  - `support-wiki`
  - `inventory-notes`
  - `team-documentation`
- In this project, create at least the following structure:
  - `README.md`
  - a subfolder `docs`
  - another text file of your choice, for example `docs/setup.md` or `infos.txt`
- Fill the files with short placeholder content so your project is not empty.
- Initialize the project folder as a new Git repository.
- Then check:
  - if a `.git` folder has been created
  - what status Git shows for your project

**Expected Result / Target State:**
Your project folder is a local Git repository, the `.git` folder exists, and Git shows you the current state of the files.



### Task 5:

Document version control basics in the project **Goal:** You link the practical Git steps with the fundamental concepts of version control.

**Work Order:**
- Open the `README.md` file in your project folder.
- Add three sections with your own formulations:
  1. **Principles of Version Control Systems**
  2. **Difference between Centralized and Distributed Version Control**
  3. **Benefits of Version Control in Everyday Work**
- Write 3–5 bullet points per section.
- Use at least two everyday examples from an IT work situation, for example:
  - Changes to documentation
  - Teamwork on scripts
  - Tracing error causes
- Afterwards, re-check the status of your repository and add to `arbeitsprotokoll.md` what Git currently recognizes.

**Expected Result / Target State:**
Your `README.md` contains the three required topics clearly in your own words, and your work log describes the current state of the repository.



## Extension Tasks



### Extension Task 1: Make configuration transparent

**Goal:** You better understand where Git configurations are stored and how to check their origin.

**Work Order:**
- Display your Git configuration in a way that allows you to identify the origin of the entries.
- Check which file `user.name` and `user.email` are read from.
- Create a file `konfiguration.md` in the `git-learning-phase` folder and note:
  - which configuration values you checked
  - where these values were loaded from
  - what difference you see between global and local configuration

**Expected Result / Target State:**
The `konfiguration.md` file clearly shows which Git settings you checked and where they are stored.



### Extension Task 2: Create a second repository without step-by-step help

**Goal:** You repeat the most important basic steps independently and solidify your workflow.

**Work Order:**
- Next to your first project, create a second mini-project, for example `meeting-notes` or `faq-collection`.
- Create at least two files with short content.
- Initialize a Git repository again.
- Check the status.
- If you are unsure about a step, consciously use Git help first instead of a web search.
- In `arbeitsprotokoll.md`, add which steps you could already do confidently and for which you needed help.

**Expected Result / Target State:**
A second functional local repository exists, and you have realistically documented your own progress.



### Extension Task 3: Create your own Git quick reference

**Goal:** You build a compact personal aid for later exercises.

**Work Order:**
- In the `git-learning-phase` folder, create a file `git-kurzreferenz.md`.
- Collect 8–10 Git commands or help functions that you used or found useful in this learning phase.
- For each entry, add:
  - what you use it for
  - in which situation it helps you
- Organize the entries meaningfully, for example by:
  - Installation and checking
  - Configuration
  - Help
  - Repository startup

**Expected Result / Target State:**
Your `git-kurzreferenz.md` is clearly structured and can be used by you as a personal cheat sheet file.



## Important Notes

- Only work in the exercise folder you created so you don't change existing projects.
- For configuration, only use an email address you wish to use in this learning environment.
- If you get stuck on a Git command, first use the built-in help functions.
- Make sure your files are actually saved before checking the repository status.
- If you are not allowed to install Git yourself, document the deviation in your `arbeitsprotokoll.md` and continue working with an existing installation.



## Reflection Questions

- What was the difference for you between Git installation, Git configuration, and repository initialization?
- How do you recognize that a folder is a Git repository?
- Which advantages of version control were most clearly demonstrated for your daily work?
- When would a centralized system be comprehensible for you, and when is a distributed system more sensible?
- Which Git help function would you use first in the future?
- Which step could you repeat without instructions after this learning phase?