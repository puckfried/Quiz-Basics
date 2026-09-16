# Individual Learning Phase: Git Basics: Status, Commits, Restore, and Branches

## Your Goal

You are working in a local Git repository and practicing a typical workflow: creating files, tracking changes, creating commits, checking status and history, reverting unsaved changes, and working with branches.

## What you need

- A computer with Git installed
- A terminal or console
- A text editor
- An empty working folder where you can create a new Git repository
- Approx. 2 hours of focused work time

## Schedule

- **0–10 Min.:** Prepare working environment, create project folder
- **10–30 Min.:** Task 1
- **30–50 Min.:** Task 2
- **50–65 Min.:** Task 3
- **65–85 Min.:** Task 4
- **85–110 Min.:** Task 5
- **110–120 Min.:** Extension tasks and reflection

## Core Tasks

### Task 1:
Set up repository and version first files
**Goal:** You create a local Git repository, add initial files, and secure the initial state with a first commit.

**Instructions:**
1. Create a new project folder, e.g., for a small internal project like `team-notes` or `service-docs`.
2. Initialize a Git repository within it.
3. Create at least **3 files**, e.g.:
   - `README.md`
   - `notes.txt`
   - `config.txt`
4. Fill each file with short, meaningful content.
5. Check the current status of the repository.
6. Add the files to the repository.
7. Create the first commit with a short, appropriate commit message.
8. Check the status again afterward.

**Expected Outcome / Target State:**
- Your repository is initialized.
- The 3 files are versioned.
- There is **one first commit**.
- The status shows no open changes.

### Task 2:
Edit changes and commit selectively
**Goal:** You edit existing files, check changes, and secure them with another commit.

**Instructions:**
1. Modify the content of at least **2 existing files**.
2. Additionally, create **1 new file**, e.g., `tasks.txt` or `ideas.md`.
3. Check the status of the repository.
4. Display the content changes.
5. Add all desired changes to the repository.
6. Create a second commit with an appropriate commit message.
7. Check the status again afterward.

**Expected Outcome / Target State:**
- You have cleanly recorded changes to existing files and a new file.
- There are now **at least 2 commits**.
- The status is clean again after the commit.

### Task 3:
Understand working status and history
**Goal:** You check how Git makes the current state and the project's development visible.

**Instructions:**
1. Display the current status of the repository.
2. Display the commit history.
3. For each existing commit, note:
   - its order
   - the short commit description
   - what work step you associated with it
4. Make a small further change, e.g.:
   - add a section to `README.md`
   - add a new line to `notes.txt`
5. Check the status again.
6. Secure this change with another commit.
7. Display the history again afterward.

**Expected Outcome / Target State:**
- You can practically understand the difference between the current working status and the previous commit history.
- Your repository now contains **at least 3 commits**.
- The history shows the development of your project in a logical order.

### Task 4:
Revert unsaved changes with `git restore`
**Goal:** You practice discarding local changes in already versioned files.

**Instructions:**
1. Select an already versioned file.
2. Significantly change its content without committing the change.
3. Check the status and view the change.
4. Revert the change using `git restore`.
5. Check the status again.
6. Repeat the process with a second already versioned file.
7. Make sure you **do not create a commit** during this task.

**Expected Outcome / Target State:**
- The unsaved changes in the selected files have been discarded.
- The original state of the files has been restored.
- The status shows no open changes in these files after reverting.

### Task 5:
Create, display, and switch branches
**Goal:** You work with a separate development branch and safely switch between branches.

**Instructions:**
1. Display the existing branches.
2. Create a new branch for a small functional change, e.g., `feature-readme` or `feature-notes`.
3. Switch to this new branch.
4. Make a visible change to a file there, e.g.:
   - new section in `README.md`
   - additional entries in `notes.txt`
5. Check the status and create a commit on this branch.
6. Display the branches again.
7. Switch back to your main branch (`main` or `master`, depending on your environment).
8. Check the status there and verify that you can understand the branch switch.
9. Switch back to your feature branch again and check the history.

**Expected Outcome / Target State:**
- You have created **at least one additional branch**.
- You can switch between the main branch and the feature branch.
- A separate commit exists on the feature branch.
- You have practically experienced what branches are useful for in daily work.

## Extension Tasks

### Extension Task 1: Create two parallel work branches

**Goal:** You deepen your understanding of working with multiple branches for different tasks.

**Instructions:**
1. In addition to your feature branch, create a second branch, e.g., `bugfix-config` or `docs-update`.
2. Switch to this branch.
3. Change a different file than in the first branch.
4. Create a commit.
5. Display all branches and check the history.
6. Switch back and forth between the branches and observe the differences in the project state.

**Expected Outcome / Target State:**
- You have created at least **2 additional branches**.
- Each branch contains its own, understandable change step.
- You can safely distinguish and switch branches.

### Extension Task 2: Compare history compactly

**Goal:** You visualize the development of your repository in a compact view.

**Instructions:**
1. Display the history in a compact format.
2. Compare the commits on your main branch with those on your working branches.
3. Briefly document in a file `work-protocol.md`:
   - which commits are on which branch
   - what purpose each branch served
   - the order in which you worked

**Expected Outcome / Target State:**
- You have generated a clear representation of your work steps.
- Your work protocol briefly and understandably describes your branches and commits.

### Extension Task 3: Deliberately simulate an error case

**Goal:** You train a realistic correction scenario for local, uncommitted changes.

**Instructions:**
1. Simultaneously change **2 already versioned files**.
2. Check the status.
3. Discard changes in **only one** file.
4. Check the status again afterward.
5. Then decide whether you want to commit the remaining change or discard it as well.
6. Document in 2–3 sentences in `work-protocol.md` why this approach is helpful in daily work.

**Expected Outcome / Target State:**
- You have deliberately worked with a typical error case.
- You can understand how the status changes after discarding individual changes.
- Your repository is in a clear, clean state at the end.

## Important Notes

- Work as much as possible in the terminal so you consciously execute Git commands.
- Check the status of your repository before each commit.
- Use short, meaningful commit messages.
- In Task 4 and Extension Task 3, only change files that are already versioned.
- If your main branch is called `master` instead of `main`, use the existing name.
- Ensure that you ultimately have a traceable project history with multiple commits and at least one additional branch.

## Reflection Questions

- How do you quickly recognize in daily work whether your repository contains clean or open changes?
- When is `git restore` helpful, and when should you rather not discard changes?
- What practical advantage does a separate branch offer for new features or small experiments?
- How does the commit history help you understand work steps later?
- Which 3 Git commands were most important for you in this work phase?