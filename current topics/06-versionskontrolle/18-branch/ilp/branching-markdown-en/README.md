# Additional Exercise: Branching and Markdown

## Goal

Format two texts based on image references and practise the complete GitHub workflow twice:

```text
Create a branch → edit → commit → push → pull request → merge → pull main
```

Only change the formatting. The content of the texts should stay the same.

## Preparation

1. Create a new repository in your own GitHub account and add a `README.md`.
2. Add at least `puckfried` as a collaborator under **Settings → Collaborators**.
3. You may add other participants and work together.
4. Clone the repository and open it in VS Code.
5. Create the files `text-1.md` and `text-2.md` and copy the two source texts into them.

```sh
git clone <repository-url>
cd <repository-name>
code .
```

## Text 1

1. Create a branch for the first text.
2. Format `text-1.md` so that it looks like the first screenshot.
3. Commit and push the branch.

```sh
git switch -c format-text-1
git status
git add text-1.md
git commit -m "Format first text"
git push origin format-text-1
```

4. Open a pull request on GitHub and merge it into `main`.

## Back to `main`

```sh
git switch main
git pull
```

Check that the completed `text-1.md` file is now also available on your local `main` branch.

## Text 2

1. **Only now**, create a new branch for the second text.
2. Format `text-2.md` so that it looks like the second screenshot.
3. Commit and push the branch.

```sh
git switch -c format-text-2
git status
git add text-2.md
git commit -m "Format second text"
git push origin format-text-2
```

4. Open another pull request and merge it into `main`.
5. Finally, update your local `main` branch:

```sh
git switch main
git pull
git log --oneline
```

## You are finished when …

- the repository is in your GitHub account
- `puckfried` has been invited as a collaborator
- both texts look like the screenshots
- you have pushed two different branches
- both pull requests have been merged into `main` on GitHub
- your local `main` contains the completed version

## Working together

- Divide the tasks between you before you start.
- Each person works on their own branch and creates their own pull request.
- Two people can each take one of the two texts.
- Add one more Markdown file for every additional contributor.
  - Example: `image-links.md` containing suitable images and their links
  - Other options: `sources.md`, `tips.md`, or `git-commands.md`
- Before creating a new branch, always switch to `main` and run `git pull` first.
- Merge the pull requests one after another and check the current version after each merge.
