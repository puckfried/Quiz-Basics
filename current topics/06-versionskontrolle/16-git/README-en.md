# Version Control

## TODAY

- Why do we need version control?
- Initialize a project as a Git repository
- Review and select changes and save them as a commit
- View the Git history

## Version control systems

- In software development, you need a version control system
- It stores not only the current state but also a traceable history
- You can see what was changed, when it was changed, and by whom
- Previous versions are not simply lost
- Version control is especially important for collaboration
- Version control systems help with:
    - Working on multiple tasks
    - Making changes to the same files
    - Troubleshooting and recovery
    - Code review

### A simplified example from a real project

- You are working on a new feature that is not finished yet
- Meanwhile, a critical bug is found in the stable version
- You need to safely set your unfinished work aside
- You fix the bug and then return to your original task
- A version control system makes it possible to manage these separate working states

## Git

- Version control systems have been around for about 50 years
    - Today, the most widely used system is **Git**
    - Before Git, **Subversion** (`svn`) was widely used
- Git is based on **repositories**
    - A repository is a project folder whose changes are managed by Git
    - Git stores the history of tracked files in commits
    - Any project folder can be turned into a Git repository -> repo

- A commit is a deliberately saved state (snapshot)
    - A commit can contain added, modified, and deleted files
    - Together, the commits form the history of the project

### Briefly check the Git configuration

- Before you commit, Git should know who you are
- Your name and email address are stored in the metadata of your commits
- This information is not used to log in to GitHub or GitLab

```sh
git config --global user.name
git config --global user.email
```

- If no values have been set yet:

```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## First Git walkthrough: Repository and first commit

### 1. Check the status

```sh
git status
```

- We are not in a Git repository yet
- Read the error message together with the students
- `git status` is one of the most important Git commands
- If you do not know what is going on, start with `git status`

### 2. Initialize the repository

```sh
git init
git status
```

- `git init` turns the current folder into a Git repository
- This creates the hidden `.git` folder
- `.git` contains the repository's administrative data and history
- Do not edit the contents of `.git` manually
- After `git init`, Git recognizes our files but does not save them automatically

### 3. Select changes for the commit

- Our simple mental model:

```text
Working directory -- git add --> Staging area -- git commit --> History
```

- You create and edit files in the working directory
- With `git add`, you select changes for the next commit
- This selection is called the **staging area** or **stage**

```sh
git add recipes.txt
git status

git add assets
git status

git add .
git status
```

- `git add <path>` selects a specific file or folder
- `git add .` selects all changes in the current project folder
- Check the status again after each `git add`
- Which files are still untracked?
- Which changes are already "ready to be committed"?

### 4. Create the first commit

```sh
git commit -m "Add pancake recipe"
git status
```

- A commit saves the selected changes in the history
- The commit message describes the saved work step
- A good first rule for commit messages:
    - Keep them short and clear
    - Use the imperative mood

- Examples:
    - `Add pancake recipe`
    - `Improve banana bread recipe`
    - `Fix broken pancake image`
    - `Fix typo`

### 5. View the history

```sh
git log
git log --oneline
```

- `git log` shows the repository's commits
- Here you can see the author, date, and commit message
- `git log --oneline` shows a short overview

## Short final task

- Create a project folder called `albums` and initialize it as a repository
    - Open WSL
    - Create a new project folder: `mkdir albums`
    - Initialize Git: `git init`
    - Open the folder with VS Code: `code .`

- Add three different albums as files and commit each one separately

## Summary

- Version control systems help with collaboration
- Version control systems help manage parallel versions
- Git is the de facto standard for version control systems
- Git commands: `init`, `status`, `add`, `commit`, `log`
