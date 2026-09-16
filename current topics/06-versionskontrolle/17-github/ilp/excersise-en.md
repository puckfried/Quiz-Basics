# Individual Learning Phase: GitHub Remote Repositories and Synchronization in Practice

## Your Goal

You will set up your own GitHub repository, connect it to a local repository, synchronize changes in both directions, and use GitHub for simple documentation. You will also learn the basic workflow of Pull Requests and recognize simple merge conflicts in a realistic exercise.

## What you need

- A GitHub account
- Git installed on your computer
- A terminal or console
- An editor, e.g., VS Code
- Internet access
- A local working folder for your exercise, e.g., `github-remote-praxis`

## Time Schedule

- 10 minutes: Task 1
- 20 minutes: Task 2
- 20 minutes: Task 3
- 25 minutes: Task 4
- 20 minutes: Task 5
- 25 minutes: Extension tasks and reflection

## Basic Tasks

### Task 1:

Create GitHub repository and explore interface
**Goal:** You will create your own remote repository and navigate the GitHub web interface.

**Assignment:**
1. Log in to GitHub.
2. Create a new repository, e.g., `coretech-github-praxis`.
3. Choose a short description.
4. Check at least these areas in the web interface:
   - Repository homepage
   - Code
   - Issues
   - Pull requests
   - Settings
5. Note down the URL of the repository.
6. Check if the repository is empty or already contains files.

**Expected Result / Target State:**
You have created your own GitHub repository, know the most important navigation areas, and have the remote URL ready.

### Task 2:

Create local repository and connect to GitHub
**Goal:** You will set up a local repository and link it to your remote repository on GitHub.

**Assignment:**
1. Create a new local working folder.
2. Initialize a Git repository within it.
3. Create at least these files:
   - `README.md`
   - `.gitignore`
   - a simple text file or project file, e.g., `notes.txt`
4. Add some meaningful initial content.
5. Create your first commit.
6. Connect your local repository with the previously created GitHub repository as a remote.
7. Check the remote configuration.

**Expected Result / Target State:**
You have created a local Git repository with at least one commit and successfully connected it to your GitHub repository.

### Task 3:

Document README and push changes to GitHub
**Goal:** You will document your project with a simple README and transfer your local changes to the remote repository.

**Assignment:**
1. Supplement the `README.md` with the following sections:
   - Project name
   - Short description
   - Repository content
   - First use or purpose
2. Add at least 2 entries to `.gitignore` that are relevant to your environment.
3. Save all changes.
4. Create another commit with a clear commit message.
5. Push your commits to the remote repository on GitHub.
6. Open the repository in your browser and check if the files and content are visible.

**Expected Result / Target State:**
Your repository on GitHub contains your files, at least two commits, and a readable `README.md` as simple project documentation.

### Task 4:

Clone existing repository and test synchronization
**Goal:** You will clone an existing repository and practice fetching and integrating changes.

**Assignment:**
1. Clone your GitHub repository into a second local folder, e.g., `github-remote-praxis-clone`.
2. In the cloned repository, check the commit history and the current state of the files.
3. Switch back to your first local repository.
4. Change the `README.md` and another file there.
5. Commit the changes and push them to GitHub.
6. Switch to the cloned folder.
7. Fetch the changes from the remote repository and integrate them locally.
8. Check if both local working states are identical again.

**Expected Result / Target State:**
You have successfully cloned a repository, synchronized changes from another working state via GitHub, and integrated the current state locally.

### Task 5:

Branch, Pull Request, and recognize a simple conflict
**Goal:** You will understand the basic workflow of a Pull Request and recognize a simple merge conflict.

**Assignment:**
1. In your first local repository, create a new branch, e.g., `feature-readme-update`.
2. In this branch, change exactly one line in `README.md` that you can easily remember.
3. Commit the change and push the branch to GitHub.
4. On GitHub, open the prompt to compare the branch and start a Pull Request.
5. Look at the Pull Request area:
   - Title
   - Description
   - Changed files
   - Merge status
6. Now, in the default branch, create a different change on exactly the same line in `README.md`.
7. Commit and push this change.
8. Check the Pull Request on GitHub again or try to merge the branches locally.
9. Write down how you recognized the conflict.

**Expected Result / Target State:**
You have created a branch, opened a Pull Request, and made a simple merge conflict visible or recognized it locally.

## Extension Tasks

### Extension Task 1: Structure and improve README

**Goal:** You will make your project documentation clearer and GitHub-ready.

**Assignment:**
1. Supplement your `README.md` with further meaningful sections, e.g.:
   - Prerequisites
   - Project Structure
   - Next Steps
2. Use Markdown elements such as headings, lists, and code blocks.
3. Check the display directly on GitHub in the browser.
4. Commit and push your revision.

**Expected Result / Target State:**
Your `README.md` is clearly structured, easy to read, and cleanly formatted on GitHub.

### Extension Task 2: Integrate remote change directly on GitHub and locally

**Goal:** You will practice a typical scenario where changes are made directly in the browser and need to be pulled locally.

**Assignment:**
1. Edit a file directly in the GitHub web interface, e.g., `README.md` or `notes.txt`.
2. Save the change directly in the default branch with a commit.
3. Go to your local repository.
4. Fetch the remote change and integrate it locally.
5. Check if your local state again matches GitHub.

**Expected Result / Target State:**
You have pulled a change created directly on GitHub locally and successfully synchronized the common state.

### Extension Task 3: Create a small synchronization log

**Goal:** You will document your workflow in a traceable manner.

**Assignment:**
1. Create a file `workflow-notes.md`.
2. In it, note down in bullet points:
   - which steps you performed when connecting to a remote
   - how you pushed changes to GitHub
   - how you integrated changes from GitHub locally
   - where you recognized the merge conflict
3. Commit and push the file.

**Expected Result / Target State:**
Your repository contains a short, traceable workflow documentation of your GitHub workflow.

## Important Notes

- Work in small, traceable steps.
- Use clear commit messages.
- Check your current branch before every push and pull.
- Do not store sensitive data, passwords, or private keys in the repository.
- If a step does not work, briefly document the error message and your last successful state.

## Reflection Questions

- How do you recognize if your local repository is connected to the remote repository?
- How did you see that a push was successful?
- How did you recognize that new changes from GitHub have arrived locally?
- What is the practical benefit of a Pull Request, even if you are working alone?
- What causes a simple merge conflict?
- What information in your `README.md` helps you or others the most?