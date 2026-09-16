# Collaboration

## Branch

- Until now, we have worked on the `master` branch
    - Different Git versions use different default names
    - `main` is the newer recommended name
    - You can also configure this in your Git settings
    - You can rename branches
- A branch is usually visualised like this
    - ![Git diagram showing a branch](./assets/git-2.png)
    - Here we have a branch that starts from the main branch
    - Branches have their own histories
        - The reorganisation has three commits
        - The main branch has three commits
        - Two of them are shared
    - A branch can have as many commits as you want

- The answer to “What do we use branches for?” is called a `branching strategy`
    - There are many different branching strategies
    - Different companies may use different strategies
    - Different projects may use different strategies

- One very popular strategy is called `feature branches`
    - It can be combined with the strategy described above
    - When you start working on something in your project
    - You first create a branch from the main branch
    - A branch could be called `fix-email-sending`
        - You can make several commits on the branch
        - When you are finished, the branch is merged back into the main branch
        - The `fix-email-sending` branch is then deleted
    - This makes it easier to work on several features at the same time
    - A senior developer might take some time to review `fix-email-sending`
    - While you are waiting, you can work on `add-login`
    - When `fix-email-sending` is approved
    - Merge it into the main branch and delete the branch
    - Then continue working on `add-login`
    - ![Git diagram showing feature branches](./assets/git-4.png)

## GitHub Collaboration

- `git switch -c <name-of-branch>`
    - There are different ways to create a branch
    - This is the command we recommend
    - NOTE
        - Check which branch you are currently on
        - The new branch is created from your current branch

- `git switch <branch>`
    - There are different ways to switch between branches
    - This is the command we recommend

- `git branch -a`
    - Lists all branches

- `git branch -m <name>`
    - Renames the current branch

- `git push origin <name>`
    - Pushes your current branch to a remote repository such as GitHub

## Example Workflow

You are working on a project as part of a group:

1. Open the repository on GitHub and clone the project with `git clone <address>`
2. Create a new branch on your local computer
3. Work on your branch
4. Check that all your changes have been committed with `git status`
5. Push your changes back to GitHub with `git push origin <name>`
6. Create a pull request on GitHub
    - A pull request asks whether your changes can be merged into the `main` branch
7. If there are no conflicts, merge the pull request on GitHub. Your changes are now on `main`
8. Switch back to `main` on your computer
9. Get the current version with `git pull`
10. When you receive a new task, create another branch from `main`. You can delete your old branch

# Summary

- Collaboration is key
- Branches are often used to organise teamwork
- Branches often lead to pull requests
- Pull requests are often reviewed in a code review
