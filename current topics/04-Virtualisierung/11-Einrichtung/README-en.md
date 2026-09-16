# Setting Up VirtualBox

## Installation Links


## Recap

- What is an operating system, and why do I need one?
    - A program that operates the system
    - Manages the hardware and software
    - Starts programs
    - Provides a user interface
- Virtualization -> What are the host, the guest, and the hypervisor?
    - Host -> The computer on which the virtual machine is installed
    - Guest -> The virtual machine (for example, Linux running on a Windows computer)
    - Hypervisor -> A program that organizes the virtual machines


## Installation on Windows

### Download the Files
- [VirtualBox](https://download.virtualbox.org/virtualbox/7.2.16/VirtualBox-7.2.16-174877-Win.exe)
- [Microsoft Visual C++ Redistributable](https://aka.ms/vc14/vc_redist.x64.exe) - required for VirtualBox to run (install this first)
- [Lubuntu, a simple Linux distribution](https://cdimage.ubuntu.com/lubuntu/releases/26.04/release/lubuntu-26.04-desktop-amd64.iso)


### Install the Programs
1. Install Microsoft Visual C++ Redistributable. It is required for VirtualBox to run on Windows
2. Install VirtualBox. You do not need to change any settings during the installation

### Create a Virtual Machine
1. Create a new virtual machine
![new virtual machine](assets/01_new_machine.png)

2. Give the machine a name in the dialog
![name machine](./assets/02_name_machine.png)

3. Select the operating system installation file under ISO Image
![add iso image](./assets/03_iso_image.png)

4. Configure the machine's hardware (2-4 GB RAM, 1-2 processors, 25 GB hard drive)
![specify hardware](./assets/04_hardware.png)
![specify hardware](./assets/04_hardware2.png)

5. Click Finish

6. Start the virtual machine and complete the installation
![start virtual machine](./assets/05_start.png)


## Summary
- We use VirtualBox to create and manage virtual machines (start, stop, and change settings)
- VirtualBox is the hypervisor (Type 2); it runs inside Windows, our host system
- We can install different operating systems (Lubuntu in this example)


## What's Next
- You can try different operating systems. Here are two options for the afternoon:
- [FreeDOS](https://www.freedos.org)
    - A very small, usable DOS operating system with some old games (Doom :-) )
    - Here is the ISO file [download](https://download.freedos.org/1.4/FD14-LiveCD.zip). The ZIP file contains the ISO file that you can use in VirtualBox
    - The machine only needs 64 MB RAM and 1 processor; 500 MB is enough for the hard drive

- Take a look at [Hack The Box](https://www.hackthebox.com/get-started), where you will use a special security-focused Linux distribution (Parrot OS)
    - Hack The Box is a well-known provider of cybersecurity courses (hacking basics)
    - You can use the introductory courses for free and learn about special Linux security tools
    - Only use these tools for the tasks on Hack The Box, not on real websites
    - You can [install Parrot OS in VirtualBox](https://parrotsec.org/docs/virtualization/install-parrot-on-virtualbox/) and then use it for the HTB tasks
