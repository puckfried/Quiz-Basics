# Setting Up a Debian Server

In this bonus task, you will create another virtual machine: a simple Debian server. Debian is widely used.

## Preparation

- Download the ISO image from [here](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-13.6.0-amd64-netinst.iso).
- Create a new virtual machine with 2 GB of RAM and 2 processors.
- Use the downloaded ISO image as the installation medium.

## Installing the Operating System

- Below you will find a step-by-step guide through the installation process.
- After starting the virtual machine, you will be greeted by the installer.

### 1. Start the Installer

- Select `Graphical install` in the first menu.
- The graphical installer is only used during the installation. The finished system will not have a graphical user interface.

![Debian installer start menu](./assets_zusatz/01-installer-menue.png)

![Select Graphical install](./assets_zusatz/02-graphical-install-auswaehlen.png)

### 2. Set the Language and Keyboard

- Language: `Deutsch` (German)
- Location: `Deutschland` (Germany)
- Keyboard layout: `Deutsch` (German)

The installer will then load some components. This may take a moment.

### 3. Configure the Network

- You can use `debian` as the hostname.
- Leave the domain name empty.

![Leave the domain name empty](./assets_zusatz/03-domainname-leer-lassen.png)

### 4. Set Up a User

- Leave both root password fields empty.
- This disables password-based access to the root account.
- Your regular user will be able to perform administrative tasks with `sudo` later.

![Leave the root password fields empty](./assets_zusatz/04-root-passwort-leer-lassen.png)

- Enter your full name.
- Then choose a username.
- Choose a password and confirm it in the next field.

![Enter your full name](./assets_zusatz/05-benutzer-vollstaendiger-name.png)

### 5. Partition the Disk

- Select `Geführt - gesamte Platte verwenden` (`Guided - use entire disk`).

![Use the entire virtual disk](./assets_zusatz/06-partitionierung-gesamte-platte.png)

- Select the virtual disk. In our example, this is the `VBOX HARDDISK`.
- Then select `Alle Dateien auf eine Partition` (`All files in one partition`).

![Store all files in one partition](./assets_zusatz/07-partitionierung-alle-dateien.png)

- Select `Partitionierung beenden und Änderungen übernehmen` (`Finish partitioning and write changes to disk`).

![Finish partitioning](./assets_zusatz/08-partitionierung-abschliessen.png)

- Confirm writing the changes by selecting `Ja` (`Yes`).

> Warning: This will erase and reconfigure the virtual disk of the new VM.

![Confirm the partitioning changes](./assets_zusatz/09-partitionierung-bestaetigen.png)

The base system installation will now begin. This may take a few minutes.

### 6. Configure the Package Manager

- When asked about an additional installation medium, select `Nein` (`No`).

![Do not scan another installation medium](./assets_zusatz/10-kein-weiteres-installationsmedium.png)

- Select `Deutschland` (`Germany`) as the mirror country.

![Select Germany as the mirror country](./assets_zusatz/11-spiegelserver-land-deutschland.png)

- Select `deb.debian.org` as the mirror server.

![Select deb.debian.org as the mirror server](./assets_zusatz/12-spiegelserver-deb-debian-org.png)

- If you do not use an HTTP proxy, leave the field empty.

![Leave the HTTP proxy field empty](./assets_zusatz/13-http-proxy-leer-lassen.png)

- You can decline participation in the package usage survey by selecting `Nein` (`No`).

![Decline the package usage survey](./assets_zusatz/14-paketstatistik-ablehnen.png)

### 7. Select Software

This step is important so that the server is installed **without a graphical user interface**.

- Use the space bar to select or deselect an entry.
- Deselect `Debian desktop environment` and all desktop environments.
- Select `SSH server`.
- Leave `Standard-Systemwerkzeuge` (`standard system utilities`) selected.
- Leave all other entries deselected.

![Deselect the desktop environment and select the SSH server](./assets_zusatz/15-softwareauswahl-desktop-abwaehlen.png)

Your final selection should look like this:

```text
[ ] Debian desktop environment
[x] SSH server
[x] Standard-Systemwerkzeuge
```

![Final software selection for the Debian server](./assets_zusatz/16-softwareauswahl-ssh-server.png)

Confirm your selection with `Weiter` (`Continue`). The selected packages will now be installed.

### 8. Install the GRUB Bootloader

- Select `Ja` (`Yes`) when asked whether to install the GRUB bootloader.

![Install the GRUB bootloader](./assets_zusatz/17-grub-installieren.png)

- Select the virtual disk `/dev/sda` as the installation target.

![Install GRUB on dev sda](./assets_zusatz/18-grub-auf-dev-sda.png)

### 9. Complete the Installation

- Complete the installation and restart the VM.
- If the installation menu appears again, remove the ISO image from the virtual drive and restart the VM once more.
- The login prompt will appear after the system starts.

![Debian server login prompt](./assets_zusatz/19-login-aufforderung.png)

- Enter your username and press `Enter`.
- Then enter your password. No characters will be displayed while you type it.

![Log in with your username and password](./assets_zusatz/20-login-benutzername-passwort.png)

When you see the command line with your username, you have logged in successfully and your Debian server is ready to use.

![Successfully logged in to the Debian server](./assets_zusatz/21-login-erfolgreich.png)
