# Linux Practice Workshop

You do not have to complete every task. Choose a task that interests you. When you are finished, you can extend it or move on to another task.

You will work mostly independently. If you get stuck, you can ask specific questions in the course call or in the chat.

## How the Tasks Work

1. First, read the goal and the target state.
2. Try to find a first step on your own.
3. Open the tips if you need support.
4. At the end, check whether your result actually works.

There is no fixed time limit and no formal submission. A working result and an error message that you understand are more important than completing as many tasks as possible.

## Important Rules

- Read commands before you execute them.
- Use `sudo` only in steps that explicitly require it.
- Do not add unknown package sources.
- A VM in bridged mode may be reachable from the local network.

---

## Table of Contents

The links take you directly to the relevant task on GitHub:

- [Task 1: Examine the Linux system](#task-1-examine-the-linux-system) – Find the operating system, kernel, CPU, memory, and disk space of your VM.
- [Task 2: Use files and paths](#task-2-use-files-and-paths) – Create a directory structure and practise navigation, copying, renaming, and hidden files.
- [Task 3: Install programs with APT](#task-3-install-programs-with-apt) – Examine and install small tools such as `tree`, `htop`, `ncdu`, `curl`, or `figlet`.
- [Task 4: Observe processes](#task-4-observe-processes) – Start a background process, find it in the process list, and stop it in a controlled way.
- [Task 5: Process text files](#task-5-process-text-files) – Search, sort, and filter text using `grep`, `wc`, pipes, and redirection.
- [Task 6: Create a shell script](#task-6-create-a-shell-script) – Save several system commands in an executable script.
- [Task 7: Examine the network](#task-7-examine-the-network) – Find the IP address, default route, name resolution, and listening TCP ports.
- [Task 8: Set up a web server with Nginx](#task-8-set-up-a-web-server-with-nginx) – Install Nginx on Debian or Lubuntu and publish your own HTML page.

Tasks 1 to 3 are suitable as a short introduction. The other tasks are a little more advanced and use commands that we have not yet covered in class. However, this also makes them more interesting. You can use the tips and ask a chatbot of your choice if you get stuck.

---

## Task 1: Examine the Linux System

### Goal

Find out which hardware and operating system your VM recognises.

### Your Task

Find:

- your username
- the computer name
- the installed distribution
- the kernel version
- the number of detected CPUs
- the available memory
- the size of the virtual hard disk
- how long the VM has been running

Then compare the CPU, RAM, and hard disk with the VirtualBox settings.

### Finished When

You have found at least five pieces of information. Explain to yourself why the VM does not automatically see all of the host's hardware.

<details>
<summary>Tips and possible commands</summary>

```bash
whoami
hostname
cat /etc/os-release
uname -a
lscpu
free -h
df -h
uptime
```

You do not have to understand every line of the output. Look specifically for the information requested in the task.

</details>

<details>
<summary>Extra idea</summary>

Create a file named `system-profile.txt` in your home directory and write down the most important values in it.

On Lubuntu, you can use the graphical text editor. On Debian, you can use `nano`, for example, if it is installed.

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 2: Use Files and Paths

### Goal

Build a small directory structure and learn to navigate it confidently.

### Your Task

Create this structure inside your home directory:

```text
practice-workshop/
├── backup/
├── notes/
└── web/
```

Then:

1. Create a file named `linux.txt` in `notes`.
2. Write at least three Linux commands you have learned in it.
3. Copy the file to `backup`.
4. Rename the copy to `linux-copy.txt`.
5. Create a hidden directory named `.workshop-config`.
6. Display the entire structure in the terminal.

### Finished When

You can find every file in the terminal and, on Lubuntu, in the file manager as well.

<details>
<summary>Tips and possible commands</summary>

```bash
cd ~
mkdir -p practice-workshop/notes
mkdir -p practice-workshop/web
mkdir -p practice-workshop/backup
cd practice-workshop
touch notes/linux.txt
cp notes/linux.txt backup/
mv backup/linux.txt backup/linux-copy.txt
mkdir .workshop-config
ls -la
```

You can enter the text using a graphical editor or a terminal editor.

On Debian, for example:

```bash
nano notes/linux.txt
```

If Nano is not installed yet:

```bash
sudo apt update
sudo apt install nano
```

If `tree` is installed:

```bash
tree -a ~/practice-workshop
```

</details>

<details>
<summary>Extra idea</summary>

- What is the absolute path to `linux-copy.txt`?
- What is a relative path to it when you are inside `practice-workshop`?
- Why is `.workshop-config` not visible when you use a normal `ls` command?

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 3: Install Programs with APT

### Goal

Choose a small program, examine its package, and install it using APT.

### Program Options

| Package | What does it do? | First test |
|---|---|---|
| `tree` | displays directories as a tree | `tree -L 2 ~` |
| `htop` | displays running processes interactively | `htop` |
| `ncdu` | analyses disk usage | `ncdu ~` |
| `curl` | retrieves content and HTTP information | `curl -I https://example.com` |
| `figlet` | creates large text in the terminal | `figlet Linux` |

### Your Task

1. Choose at least one package.
2. Search for it using APT.
3. Read the package description.
4. Install the package.
5. Start it and try at least one option.
6. Explain to yourself in one sentence what the program is useful for.

### Finished When

The selected program starts and you can understand its purpose from a visible example.

<details>
<summary>Tips for searching for and installing packages</summary>

Replace `PACKAGE` with the name you selected:

```bash
sudo apt update
apt search PACKAGE
apt show PACKAGE
sudo apt install PACKAGE
```

You do not have to run `sudo apt update` again before every individual package.

</details>

<details>
<summary>Using the programs</summary>

- `htop`: Exit with `q` or `F10`.
- `ncdu`: Navigate with the arrow keys and exit with `q`. Do not delete anything from it today.
- `tree`: Use `tree --help` to find more options.
- `curl`: Use `-I` to display only the HTTP headers.
- `figlet`: Enter your own short text after the command.

</details>

<details>
<summary>Extra idea</summary>

After installation, examine:

```bash
which PACKAGE
apt-cache policy PACKAGE
```

- Where is the executable command located?
- Which version was installed?
- Which package source did it come from?

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 4: Observe Processes

### Goal

Start a process in the background, find it again, and stop it in a controlled way.

### Your Task

1. Start a process that runs for several minutes.
2. Get the prompt back without stopping the process.
3. Find the process in the process list.
4. Stop only the process that you started yourself.
5. Check whether it has actually stopped.

### Finished When

Explain to yourself the difference between a command, a running process, and a background job.

<details>
<summary>Tips and possible commands</summary>

```bash
sleep 300 &
jobs
ps
```

The `&` starts the command in the background of the current shell.

To stop it:

```bash
kill %1
jobs
```

If `jobs` shows a different job number, use that number instead of `%1`.

</details>

<details>
<summary>Observe it with htop</summary>

If `htop` is not installed yet:

```bash
sudo apt install htop
```

Then:

```bash
htop
```

Search for `sleep`. Exit `htop` with `q` or `F10`.

Do not stop any unknown system processes in `htop`.

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 5: Process Text Files

### Goal

Process a text file using several small terminal tools.

### Preparation

Create your working directory if it does not exist yet:

```bash
mkdir -p ~/practice-workshop
```

Create the file `~/practice-workshop/linux-facts.txt` with this content:

```text
Linux runs on servers.
Lubuntu is a distribution.
The terminal executes commands.
Linux runs in our virtual machine.
APT installs packages.
A web server provides websites.
```

On Debian, you can create the file using `nano ~/practice-workshop/linux-facts.txt`. If Nano is missing, install it with `sudo apt install nano`.

### Your Task

- Display the contents of the file.
- Count the lines.
- Find all lines containing the word `Linux`.
- Sort the lines alphabetically.
- Connect two commands with a pipe.
- Write the sorted result to a new file.

### Finished When

The new file `sorted-facts.txt` exists. Explain to yourself what the characters `|` and `>` do.

<details>
<summary>Tips and possible commands</summary>

```bash
cd ~/practice-workshop
cat linux-facts.txt
wc -l linux-facts.txt
grep Linux linux-facts.txt
grep -i linux linux-facts.txt
sort linux-facts.txt
```

Using a pipe:

```bash
cat linux-facts.txt | grep -i linux
cat linux-facts.txt | sort
```

Write to a new file:

```bash
sort linux-facts.txt > sorted-facts.txt
cat sorted-facts.txt
```

`>` overwrites an existing target file. Therefore, deliberately use the new filename `sorted-facts.txt` here.

</details>

<details>
<summary>Extra idea</summary>

Add several duplicate lines to the original file and try:

```bash
sort linux-facts.txt | uniq
```

What does `uniq` change?

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 6: Create a Shell Script

### Goal

Save several familiar commands in a file and execute them as one sequence.

### Your Task

Create a script named `system-check.sh` inside `~/practice-workshop`.

First create the directory with `mkdir -p ~/practice-workshop` if you have not completed another task yet.

The script should:

- display a greeting
- display the user and computer name
- display the date and uptime
- display the available memory
- display the available disk space on the root filesystem

First, run the script using Bash. Then make the script itself executable and run it with `./system-check.sh`.

### Finished When

All the information appears after a single script invocation.

<details>
<summary>Possible content of system-check.sh</summary>

```bash
#!/bin/bash

echo "Linux system check"
echo "User:"
whoami
echo "Computer name:"
hostname
echo "Date:"
date
echo "Uptime:"
uptime
echo "Memory:"
free -h
echo "Disk:"
df -h /
```

You can edit the file with the graphical text editor or with `nano`.

If Nano is missing:

```bash
sudo apt update
sudo apt install nano
```

</details>

<details>
<summary>Run the script and make it executable</summary>

```bash
mkdir -p ~/practice-workshop
cd ~/practice-workshop
bash system-check.sh
ls -l system-check.sh
chmod +x system-check.sh
ls -l system-check.sh
./system-check.sh
```

- `chmod +x` adds execute permission.
- `./` means: Use the file from the current directory.
- `#!/bin/bash` defines which interpreter reads the script.

</details>

<details>
<summary>Extra idea</summary>

Save the output of the script:

```bash
./system-check.sh > system-report.txt
cat system-report.txt
```

Then add a command of your own to the script.

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 7: Examine the Network

### Goal

Examine the network configuration of your VM and connect it to the concepts from the company network demonstration.

### Your Task

Find out:

- which IP address the VM has
- which network adapter is active
- which default route is being used
- whether a domain name can be resolved
- which TCP ports on the VM are waiting for connections
- which network mode is selected in the VirtualBox settings

### Finished When

You have found the IP address, default route, and at least one listening port. Explain to yourself what these three pieces of information mean.

<details>
<summary>Tips and possible commands</summary>

```bash
hostname -I
ip address
ip route
getent hosts example.com
ss -ltn
```

You can recognise the default route by a line that begins with `default`.

A listening port means that a service is waiting there for new connections.

</details>

<details>
<summary>Compare NAT and bridged networking</summary>

- With NAT, VirtualBox provides the VM's internet access.
- With bridged networking, the VM appears as a separate device on the local network.
- Shut down the VM before changing the network mode in VirtualBox.
- Then restart the VM and compare `hostname -I` and `ip route`.

Only change the mode if you know which VM you are currently editing.

</details>

<details>
<summary>Extra idea</summary>

If `ping` is installed:

```bash
ping -c 3 127.0.0.1
ping -c 3 1.1.1.1
ping -c 3 www.debian.org
```

For each test, consider:

- Does it test only the local computer?
- Does it also require routing?
- Does it also require DNS?

</details>

[Back to the table of contents](#table-of-contents)

---

## Task 8: Set Up a Web Server with Nginx

### Goal

Install Nginx, publish your own HTML page, and access it over HTTP.

On a Debian VM in bridged mode, the page should be accessible from the host's browser. On Lubuntu, you can first test it directly with Falkon at `http://localhost`.

### Before You Start

You need:

- a running Debian or Lubuntu VM
- internet access inside the VM
- a user with `sudo` permissions
- bridged networking for access from the host

Use only fictional content on your page. A bridged VM may be reachable from the local network.

### Part 1: Check the Network

Find the IP address of your VM and check the default route.

<details>
<summary>Tips</summary>

```bash
hostname -I
ip route
```

Write down the appropriate IP address. `127.0.0.1` is only the local loopback address and is not the address used to access the VM from the host.

</details>

### Part 2: Install Nginx

Install Nginx and a tool that allows you to test HTTP directly from the terminal.

<details>
<summary>Show commands</summary>

```bash
sudo apt update
sudo apt install nginx curl
```

If you need a simple terminal editor on Debian:

```bash
sudo apt install nano
```

</details>

### Part 3: Check the Service

Find out whether Nginx is running and which TCP port the web server is listening on.

<details>
<summary>Show commands</summary>

```bash
systemctl status nginx --no-pager
systemctl is-active nginx
ss -ltn
```

Nginx normally uses TCP port `80` for unencrypted HTTP.

If the service is not running after installation:

```bash
sudo systemctl start nginx
```

</details>

### Part 4: Test Locally

First, test the website from inside the same VM.

<details>
<summary>Show commands and addresses</summary>

In the terminal:

```bash
curl -I http://localhost
curl http://localhost | head
```

On Lubuntu, also use Falkon:

```text
http://localhost
```

A response containing `200 OK` shows that the web server successfully answered the request.

</details>

### Part 5: Access It from the Host

If the VM uses bridged networking, open this address on the host:

```text
http://VM-IP
```

Example:

```text
http://192.168.1.50
```

Use your own IP address; do not copy the example address.

### Part 6: Create Your Own Website

First, examine the web directory and then create your own `index.html`.

<details>
<summary>Show commands and example HTML</summary>

```bash
ls -la /var/www/html
sudo nano /var/www/html/index.html
```

Possible content:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My Linux Web Server</title>
  </head>
  <body>
    <h1>My Linux web server is running!</h1>
    <p>This page comes from my virtual machine.</p>
    <p>Provided by Nginx.</p>
  </body>
</html>
```

In Nano:

- `Ctrl` + `O`: save
- Enter: confirm the filename
- `Ctrl` + `X`: exit Nano

The `/var/www/html` directory belongs to the system. This is why `sudo` is required when saving. Do not change the permissions using `chmod 777`.

</details>

Then open the page again:

- inside the VM: `http://localhost`
- from the host: `http://VM-IP`

### Part 7: Distinguish Between Computer, Network, and Service

Stop Nginx briefly and test again.

<details>
<summary>Show commands</summary>

```bash
sudo systemctl stop nginx
systemctl is-active nginx
```

Now test:

- does the VM perhaps still respond to ping?
- is the website still accessible?

Then start Nginx again:

```bash
sudo systemctl start nginx
systemctl is-active nginx
```

</details>

Important observation:

> The VM and the network can work even when the web service is stopped.

### Part 8: Observe Requests in the Log

Open the access log and reload the page several times.

<details>
<summary>Show command</summary>

```bash
sudo tail -f /var/log/nginx/access.log
```

Reload the website in the browser. Then stop the live log display with `Ctrl` + `C`.

Look for the following in a log entry:

- the client's IP address
- the requested file
- the HTTP status code
- the browser that was used

</details>

### Finished When

- Nginx is installed
- the service is running
- `curl http://localhost` returns HTML
- your own page appears in the browser
- with bridged networking, the host can access the page using the VM's IP address
- you can stop and restart Nginx

### If Something Does Not Work

<details>
<summary>The VM does not have a suitable IP address</summary>

- In VirtualBox, check whether the network adapter is enabled.
- For access from the host, **Bridged Adapter** must be selected.
- Check whether the correct physical network adapter is selected.
- Restart the VM after making a change.
- Run `hostname -I` and `ip route` again.

</details>

<details>
<summary>APT cannot download packages</summary>

```bash
ip route
getent hosts deb.debian.org
```

- Is the default route missing?
- Does name resolution work?
- Is the network adapter connected?
- Read the exact error message before changing any settings.

</details>

<details>
<summary>Nginx is not running</summary>

```bash
systemctl status nginx --no-pager
sudo journalctl -u nginx --no-pager -n 30
ss -ltn
```

Look for the first specific error message. Do not change several settings at the same time.

</details>

<details>
<summary>It works locally, but the host cannot access the page</summary>

If `curl http://localhost` works, Nginx and the website are generally working correctly.

Then check:

- are you really using the VM's current IP address?
- is the VM running in bridged mode?
- are the host and the VM on the same local network?
- does the course network block direct connections between devices?
- according to `ss -ltn`, is Nginx listening on port 80?

Do not change the Nginx configuration while the local test is already working. The problem is then probably related to network access.

</details>

<details>
<summary>The browser still displays the old page</summary>

```bash
cat /var/www/html/index.html
curl http://localhost
```

- Was the correct file saved?
- Does `curl` already show the new content?
- Reload the page with `Ctrl` + `F5`.

</details>

### Further Options

- Add headings, lists, and links to the HTML file.
- Use `curl -I` to display the HTTP headers sent by Nginx.
- Open the page from a second VM of your own.
- Observe the access log again while doing so.
- Compare the client IP in the log with the output of `hostname -I` on the client.

### After the Task

If you no longer need the bridged VM:

```bash
sudo systemctl stop nginx
```

Alternatively, shut down the VM completely. This prevents the web server from remaining unnecessarily accessible on the local network.

[Back to the table of contents](#table-of-contents)

---

## Final Self-Check

Answer these questions for yourself:

- What did you build or examine in practice?
- Which command was new to you?
- Which output or error message was interesting?
- Can you explain to yourself how you achieved your result?
- What would you like to try next?

You do not have to submit a report. What matters is that you understand your result.

