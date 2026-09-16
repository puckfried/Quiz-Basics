# Extra Task: Your GitHub Profile

## Your Goal

You will design your personal GitHub profile and create a profile README.

While doing this, you will practice a complete Git workflow again:

- create a repository on GitHub
- clone the repository
- edit `README.md` locally
- review and commit your changes
- push the commit to GitHub
- check the result on your profile




## What Is a GitHub Profile?

Your GitHub profile is your public overview page on GitHub.

You can find it at:

```text
https://github.com/YOUR-USERNAME
```

On your profile, other people can see things such as:

- your name and username
- your short bio
- your public repositories
- projects you have selected
- your public activity and contributions
- organizations you belong to
- your profile README

You decide which personal information you want to publish there.

GitHub explains the different parts of a profile here:

- [About your profile – GitHub Docs](https://docs.github.com/en/account-and-profile/concepts/personal-profile)


## What Is a GitHub Profile Used For?

A GitHub profile can serve different purposes:

- collect and present your own projects
- document your learning progress
- show other developers what you are working on
- contribute to open-source projects
- complement your portfolio and CV
- share contact options and professional interests

People who visit your profile often want to understand the following things quickly:

1. Who are you?
2. What are you currently learning or developing?
3. Which technologies do you work with?
4. Which projects would you like to show?
5. Where can they find more information about you?

Your profile does not need to be especially colorful or complicated. A short, honest, and well-organized text is often more useful than a large number of images, statistics, and badges.

GitHub also provides advice about using your profile when applying for jobs:

- [Using your GitHub profile to enhance your resume – GitHub Docs](https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume)


## What Is a Profile README?

A profile README is a special `README.md` that GitHub displays directly at the top of your profile page.

The following requirements must be met:

- The repository has exactly the same name as your GitHub username
- The repository is **public**
- A file called `README.md` is located in the root directory
- The README is not empty

Example:

```text
GitHub username: octocat
Repository:      octocat
Profile:         https://github.com/octocat
Repository:      https://github.com/octocat/octocat
```

You can find the official instructions here:

- [Managing your profile README – GitHub Docs](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)


## Before You Begin: What Should Be Public?

Your profile and profile README are publicly visible.

Never publish:

- passwords
- private SSH keys
- access tokens or API keys
- private addresses or phone numbers
- identity document or bank account details
- internal company information
- personal information about other people

You also do not have to provide your location, a photo, your pronouns, or private social media accounts. This information is optional.

Before every push, check once more whether you are comfortable making all the content public.


## Task 1: Explore Existing Profiles

Look at at least **three** of the following profiles.

### Learning-focused example

- [new2code](https://github.com/new2code)
- Profile repository: [new2code/new2code](https://github.com/new2code/new2code)

Pay attention to:

- How does the person introduce themselves?
- How are their current learning goals made visible?
- Which information would be useful for a junior developer's profile?

### Personal and project-focused

- [cassidoo](https://github.com/cassidoo)
- Profile repository: [cassidoo/cassidoo](https://github.com/cassidoo/cassidoo)

Pay attention to:

- How is personality shown?
- How are projects linked?
- Which information can you find immediately?

### Very minimal

- [sindresorhus](https://github.com/sindresorhus)
- Profile repository: [sindresorhus/sindresorhus](https://github.com/sindresorhus/sindresorhus)

Pay attention to:

- How little content can still work well?
- Which information comes from the regular profile view?
- Which repositories have been highlighted?


Pay attention to:

- Which visual elements are used?
- Which projects are the main focus?
- What helps you understand the profile, and what is mainly decoration?

### More inspiration

- [Awesome GitHub Profile README](https://github.com/roypriyanshu02/awesome-github-profile-readme)

This repository collects many different profile READMEs. Use them as inspiration, but do not simply copy someone else's entire profile.

For each of the three profiles you selected, write down:

1. What do you like?
2. What do you find unclear or difficult to navigate?
3. What is one idea you would like to use for your own profile?


## Task 2: Plan Your Profile

Before writing the README, answer these questions in your notes:

- How would you like to introduce yourself in two sentences?
- What are you currently learning?
- Which technologies have you already used?
- Which project would you like to show?
- Which technical topics are you interested in?
- Would you like to provide a contact option?
- Will you write your profile in German or English?

You do not need a long list of projects or professional experience yet. Write honestly about where you are in your learning journey.

Examples:

- “I am currently learning web development with HTML, CSS, and JavaScript.”
- “At the moment, I am learning about Git, GitHub, and responsive websites.”
- “For my first project, I am building a small website for …”

Avoid making claims about skills that you cannot explain or demonstrate in practice yet.


## Task 3: Create the Profile Repository

1. Sign in to GitHub.
2. Open your profile and check the exact spelling of your username.
3. Click **New repository**.
4. Enter your exact username as the repository name.
5. Set the repository to **Public**.
6. Enable **Add a README file**.
7. Create the repository.
8. Then open your GitHub profile in a new browser tab.

When the repository name is correct, GitHub will usually show a message telling you that you have found a special profile repository.

**Done when:** A README is displayed on your profile page.


## Task 4: Clone the Repository

Now you will edit the profile locally with VS Code and Git instead of editing it directly in the browser.

1. Open your profile repository.
2. Click the green **Code** button.
3. Select **SSH**.
4. Copy the displayed URL.
5. Open your terminal.
6. Go to a folder where you store your projects.
7. Clone the repository.

```sh
git clone <repository-url>
```

Example:

```sh
git clone git@github.com:octocat/octocat.git
```

Then go into the cloned directory:

```sh
cd <your-username>
```

Check the current state and the remote connection:

```sh
git status
git remote -v
git log --oneline
```

Open the folder in VS Code:

```sh
code .
```

**Done when:** You can see `README.md` locally in VS Code and `git remote -v` shows your GitHub repository as `origin`.


## Task 5: Edit the Profile README

Open `README.md` and activate the Markdown preview in VS Code.

Your first version should contain at least:

- a greeting or heading with your name
- two to four sentences about yourself
- the topics you are currently learning
- technologies you have used
- at least one project or current learning project
- optionally, a link to a contact method or portfolio

You can use this template as a starting point. Adapt all text to yourself and remove any sections you do not need.

````md
# Hi, I'm First Name 👋

I am currently learning web development and am especially interested in modern websites.

## About Me

- 🌱 I am currently learning JavaScript and Git
- 💻 I am working on small web projects
- 🎯 My next goal is ...

## Technologies

- HTML
- CSS
- JavaScript
- Git and GitHub

## Projects

### [Name of my project](LINK-TO-THE-REPOSITORY)

Short explanation: What does the project do and what did you learn while working on it?

## Contact

- [Portfolio](LINK)
- [LinkedIn](LINK)
````


## Tips for a Good Profile

### Make It Easy to Read

- Start with the most important information
- Use short paragraphs and clear headings
- Use lists for technologies and learning goals
- Check your spelling and links

### Show Specific Things

- Link to real projects
- Briefly explain what a project does
- Describe what you built or learned yourself
- One small finished project is more interesting than a very long list of technologies

### Be Honest

- It is fine to say that you are still learning
- Only name technologies that you have already worked with
- Do not copy someone else's biography
- Only use other people's images or graphics if you have permission to use them

### Less Is Often More

- A large number of badges does not automatically improve a profile
- Automatic statistics can be interesting, but they are not required
- GIFs and animations can quickly distract from the content
- Create a clear text version first
- You can add decoration later

### Choose a Language

- German is suitable if you are mainly applying in German-speaking countries
- English is useful for international contacts and projects
- Both languages are possible, but try to keep your first version consistent


## Task 6: Review and Commit Your Changes

Save your README and then review your changes:

```sh
git status
git diff
```

Read your README once more in the Markdown preview.

Check especially:

- Are there any placeholders such as `LINK` or `First Name` left?
- Do all links work?
- Is all information suitable for the public?
- Is the text understandable to someone who does not know you yet?

If everything looks good, create a commit:

```sh
git add README.md
git diff --staged
git commit -m "Create GitHub profile README"
```

Then check:

```sh
git status
git log --oneline
```

**Done when:** The working tree is clean and your history contains the new commit.


## Task 7: Push Your Profile to GitHub

The new commit currently exists only in your local repository.

Send it to GitHub:

```sh
git push
```

Then open your profile page:

```text
https://github.com/YOUR-USERNAME
```

Refresh the page and check:

- Is the new README displayed?
- Are the headings and lists formatted correctly?
- Do the links work?
- Does the page also look good outside the VS Code preview?

**Done when:** Your new profile README is publicly visible on your GitHub profile.


## If `git push` Does Not Work

Do not immediately use a force push.

First check:

```sh
git status
git branch
git remote -v
```

Read the complete error message.

If GitHub already contains a new commit that you do not have locally yet:

```sh
git pull
```

Check the status again and then try to push once more.

If you do not understand the error message, write it down or show it to your teacher. Do not simply delete the repository and do not use `git push --force`.


## Task 8: Complete Your Profile

Open your GitHub profile settings and decide which information you would like to add.

Possible information includes:

- profile picture or avatar
- display name
- short bio
- link to a portfolio or personal website
- social media link, such as LinkedIn
- location, if you would like to share it publicly

If you already have suitable projects, you can also pin some repositories to your profile. It is better to select a few projects that you can explain than many random repositories.




## Reflection

- Which audience would you like your profile to reach?
- Which information did you intentionally decide not to publish?
- Which idea from another profile helped you?
- What should a visitor learn about you first?
- Which project would you like to add in the next few weeks?
- Which commands show the path from your local change to GitHub?


## Expected Result

At the end of this task:

- you have a public profile repository
- you have cloned the repository locally
- your profile README contains a personal and honest introduction
- you have reviewed and committed your change locally
- you have pushed at least one commit to GitHub
- the README is visible on your profile page
- you have received feedback and made at least one improvement
