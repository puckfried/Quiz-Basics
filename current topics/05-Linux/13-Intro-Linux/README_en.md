# Linux

## Recap: VirtualBox

### Company Network Scenario

> Nordtritt Gummistiefel GmbH has an internal employee portal. The employee PC receives its network configuration automatically. The Debian web server provides the portal, and OpenWrt connects the company network to the internet.

![Company network](./assets/firmennetz-uebersicht.svg)


## Linux

- Linux is an operating system (OS)
- It was developed to replace a system called Unix
- macOS also has its roots in Unix
- Linux itself is actually the core, or `kernel`, of your operating system
    - The macOS kernel is called XNU
    - The Windows kernel is called NT
- There are different types of Linux: Linux distributions, or `distros`
- A distro combines the kernel with a collection of useful software
    - A browser
    - Office applications
    - The desktop environment (visuals)
    - A software package manager
    - And so on...
- The distro we are using today: `Lubuntu`
- `Lubuntu` is based on `Ubuntu`, which is based on another distro called `Debian`
- Linux is customisable, fast, free, and open source
    - https://github.com/torvalds/linux


### Usage

- our Lubuntu has a graphical user interface, so you can also use it with a mouse just like Windows
- but knowing how to use the Linux terminal is a valuable skill:
    - it is needed on servers
    - you can automate tasks
    - you can work faster
    - it looks cool ;-)

**First terminal commands**

- `pwd` - displays the current working directory
- `ls` - displays the contents of the current directory
- `mkdir test` - creates a directory named `test`
- `cd` - changes the directory
    - `cd Documents` - changes to the Documents subdirectory
    - `cd ..` - moves up one directory
    - `cd /` - changes to the root directory
    - `cd ~` - changes to the user's home directory
- `touch nonsense.txt` - creates a file named `nonsense.txt`
- `nano nonsense.txt` - opens a built-in terminal text editor (Nano)
    - to save and exit Nano, press `CTRL` + `X`, then `Y`, and then `Enter`
- `cat nonsense.txt` - displays the contents of nonsense.txt in the terminal


### Outlook – Installing Programs

- today, we will only take a brief look at the commands; tomorrow, we will examine what they mean in detail
- `sudo apt update` - updates the package list
- `sudo apt install falkon` - installs a program (Falkon, a web browser)
- `sudo` - gives you additional permissions that allow you to make changes to the system; this is why you need to enter your password (the characters are not displayed)
