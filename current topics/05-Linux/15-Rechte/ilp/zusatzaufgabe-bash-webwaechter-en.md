# Extra Task: The Nginx Website Watchdog

## The Situation

You manage a website on an Nginx web server for a small club.

The website needs to be checked regularly. There should also be backup copies of the HTML file. So far, someone would have to do both tasks manually every time.

Your task:

> Develop a Bash script that backs up the website, checks whether it is reachable, and logs its work.

You do not need any previous experience with Bash scripts. However, you should be prepared to research commands yourself, try small experiments, and investigate error messages.

## Time and Possible Milestones

Plan approximately **2 to 3 hours**.

The task has three levels. After each level, you will have a working result that you can demonstrate and submit.


## What You Already Know

You can use what you learned in today's lesson:

- working with absolute and relative paths
- creating, copying, and inspecting files and directories
- opening Nginx and `http://localhost/rechte.html`
- reading permissions with `ls -l` and changing them with `chmod`
- investigating error messages systematically
- using `sudo` consciously

The main new topics are Bash syntax, variables, conditions, exit codes, and later Cron.

## Safety Rules

- Work only in your home directory for this project.
- Do not modify the website file in `/var/www/html` with your script.
- Your script may read and copy the website file, but it must not overwrite or delete it.
- Do not use `sudo` in the script.
- Do not use `sudo crontab -e`. The Cron job should apply only to your own user account.
- Do not use `crontab -r`. This command would delete all your personal Cron jobs.
- Do not automate any delete commands.

## Preparation

Create this project structure in your home directory:

```text
~/webwaechter/
├── backups/
├── logs/
└── webwaechter.sh
```

Then check:

- Where are you currently located?
- Who owns `webwaechter.sh`?
- Which permissions does the file have?
- Does `/var/www/html/rechte.html` exist, and can you read it?
- Is the page available at `http://localhost/rechte.html`?

Also create `~/webwaechter/research.md`. While working, write down at least three new things you discover about Bash or Cron.

---

## Build a Backup Script

### Goal

Every time your script runs, it creates a new backup of `rechte.html` with a unique name.

Examples of possible filenames:

```text
rechte_2026-09-04_14-05-22.html
rechte_2026-09-04_14-08-47.html
```

### Requirements

Your script should:

1. begin with a suitable shebang
2. use variables for the source file, backup directory, and timestamp
3. create the backup directory itself if necessary
4. check whether the source file exists and is readable
5. display a clear error message and exit with code `1` if there is a problem
6. create a timestamped copy if successful
7. display the path of the new backup file
8. exit with code `0` if successful

Make the script executable and run it using its path:

```bash
~/webwaechter/webwaechter.sh
```

Run it at least twice. Existing backups must not be overwritten.

### Done When

- [ ] the script can be executed directly
- [ ] there are at least two backups with different names
- [ ] the backups contain the expected HTML content
- [ ] paths stored in variables are enclosed in double quotes
- [ ] `echo $?` displays `0` after a successful run
- [ ] an intentionally incorrect source path produces a clear message and exit code `1`
- [ ] the correct source path has been restored after the error test

<details>
<summary>Hints about the shebang, variables, and timestamps</summary>

Research these terms:

- Bash shebang
- use Bash variable
- Linux date format timestamp
- Bash exit code

Small building blocks:

```bash
#!/usr/bin/env bash

NAME="Value"
echo "$NAME"

TIMESTAMP=$(date '+%Y-%m-%d_%H-%M-%S')
```

In Bash, there must not be a space around the `=` in a variable assignment.

</details>

<details>
<summary>Hint for checking the source file</summary>

You can use `-f` to check whether a path is a regular file. Use `-r` to check whether the current user can read the file.

General form of a condition:

```bash
if [[ CONDITION ]]; then
    # Commands for this case
else
    # Commands for the other case
fi
```

Also research what `exit 0` and `exit 1` mean.

</details>

<details>
<summary>Hint if the script does not start</summary>

Check these one after another:

```bash
ls -l ~/webwaechter/webwaechter.sh
head -n 1 ~/webwaechter/webwaechter.sh
```

Then ask yourself:

- Does the file have execute permission?
- Is the shebang on the first line?
- Are you starting the correct file?

</details>

---

## Check the Website and Write a Log

### Goal

Your script additionally checks the published website and documents every run.

A possible log file might later look like this:

```text
2026-09-04 14:05:22 | HTTP 200 | OK | Backup created
2026-09-04 14:10:23 | HTTP 404 | ERROR | Website not reachable
```

You may phrase your entries differently. The important thing is that another person can understand them.

### Requirements

Extend your Bronze script. It should now:

1. have a variable for `http://localhost/rechte.html`
2. request the URL with `curl` and store the HTTP status code
3. use an `if` condition to check whether the status code is `200`
4. append the date, time, status code, and result to `~/webwaechter/logs/webwaechter.log`
5. display a success message for HTTP `200`
6. display a clear warning for any other status code
7. exit with `0` on success and `1` if the check fails

Your script should create required directories itself with `mkdir -p`. It must not overwrite an existing log file during a new run.

### Done When

- [ ] Bronze still works
- [ ] a successful request creates an entry containing HTTP `200`
- [ ] another run adds to the existing log content
- [ ] a URL that does not exist, such as `http://localhost/does-not-exist.html`, is logged as an error
- [ ] `echo $?` displays `1` after this error test
- [ ] the correct URL has been restored after the error test
- [ ] terminal output and log entries are understandable

<details>
<summary>Hint for getting the HTTP status code with curl</summary>

First, check whether `curl` is available:

```bash
command -v curl
```

A useful individual test is:

```bash
curl --silent --output /dev/null --write-out "%{http_code}" "http://localhost/rechte.html"
```

Find out what the three options do. Then store the command's output in a variable, similarly to the timestamp.

If `curl` is missing, first use `apt` to check which package is required. Install it only if you are allowed to install packages on your system.

</details>

<details>
<summary>Hints for comparing and logging</summary>

A string comparison can look like this:

```bash
if [[ "$VALUE" == "expected" ]]; then
    echo "The value matches."
fi
```

`>` replaces the existing contents of a file. `>>` appends a new line. For a continuous log file, you need the appropriate variant.

Research:

- Bash output append file
- Bash string comparison if

</details>

<details>
<summary>Additional hint for HTTP 000</summary>

Status `000` is not a normal HTTP status code. It usually means that `curl` could not reach the web server at all.

Then check, for example:

```bash
systemctl is-active nginx
```

If your WSL does not use systemd:

```bash
sudo service nginx status
```

</details>

---

## Automate the Script with Cron

### Goal

For a short test, the completed Silver script will run automatically every five minutes.

Cron is an additional level. On WSL, the service might not be installed or might not start automatically. Investigating and documenting the problem sensibly is also a good result.

### Prepare Cron

First, check:

```bash
command -v cron
systemctl is-active cron
```

If your WSL does not use systemd, you can check the status like this:

```bash
sudo service cron status
```

Do not start or install anything blindly. Read the output and research the appropriate procedure for your system. You may need `sudo` to start the service, but it must never appear in your script or personal Cron job.

### Determine the Absolute Script Path

Change to your project directory and determine the full path:

```bash
cd ~/webwaechter
pwd
```

Cron does not run from your usual terminal directory. Therefore, use an absolute path in the Cron job instead of `~`.

### Set Up a Personal Cron Job

Open your personal crontab:

```bash
crontab -e
```

The five time fields mean:

```text
Minute Hour Day-of-Month Month Day-of-Week
```

This expression means “every five minutes”:

```text
*/5 * * * *
```

Add the **absolute** path to your script after it. Also redirect standard output and error messages to a separate file called `logs/cron.log`.

The general form is:

```text
*/5 * * * * /absolute/path/webwaechter.sh >> /absolute/path/logs/cron.log 2>&1
```

Do not copy `/absolute/path/` literally. Replace it with the path you determined.

### Verify Automatic Runs

- Wait for at least two scheduled runs.
- Check the timestamps of the backups.
- Check `webwaechter.log` and `cron.log`.
- Compare the times with your Cron expression.
- Document the Cron expression you used in `research.md`.

### Remove the Test Job Again

Open `crontab -e` again and remove only the line you added, or comment it out with `#`.

Then check with:

```bash
crontab -l
```

Do not use `crontab -r`, because it deletes all your personal Cron jobs.

### Gold Is Done When

- [ ] the Cron service has been checked
- [ ] the Cron job uses absolute paths
- [ ] timestamps show at least two automatic runs
- [ ] output and errors from the Cron job are written to `cron.log`
- [ ] the test job has then been removed or commented out
- [ ] `crontab -l` has been checked

<details>
<summary>Hints for troubleshooting Cron</summary>

Check systematically:

1. Is the Cron service active?
2. Does `crontab -l` actually show your entry?
3. Is the script path absolute and correct?
4. Is the script executable?
5. Does the directory for `cron.log` exist?
6. Does `cron.log` contain an error message?
7. Does the exact same absolute script path work when run manually?

Cron has a smaller execution environment than your interactive terminal. Therefore, do not rely on the current directory.

</details>

---

## Final Check

At the end, deliberately perform these four tests and write down the result in `research.md`:

| Test | Expected Result |
|---|---|
| Script with correct source and URL | new backup, HTTP `200`, exit code `0` |
| Run the script a second time | another backup; the existing backup remains unchanged |
| Enter an incorrect source path | no empty backup, clear message, exit code `1` |
| Enter a URL that does not exist | error in the log, exit code `1` |

Restore the correct values after the error tests.

Also inspect your project files:

```bash
ls -l ~/webwaechter
ls -l ~/webwaechter/backups
less ~/webwaechter/logs/webwaechter.log
```

## Submission or Short Presentation

Show:

- your `webwaechter.sh` script
- at least two different backup files
- at least one successful and one failed log entry
- the results of the four final tests
- three new things you learned from `research.md`
- for Gold: the Cron expression you used and evidence of the automatic runs

Briefly explain:

1. What work does your script automate?
2. Why do you put variables in double quotes?
3. How can another program tell whether your script was successful?
4. What was your most difficult error, and how did you investigate it?

## Optional Extension If There Is Time Left

Choose no more than one idea:

- If an HTTP error occurs, also write a file called `logs/attention.txt`.
- Add a short comment at the beginning of the script with its purpose, author, and date.
- Find out how `curl` can also display the website's response time and add it to the log.

Do not add automatic deletion of old backups. Log rotation, loops, and functions can be covered in a later task.
