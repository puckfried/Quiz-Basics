# Individual Learning Phase: Setting up virtualization software and commissioning a first VM

## Your Goal

You will set up virtualization software on your system, check the most important prerequisites, create a virtual machine, adjust central settings, and start a guest operating system. In doing so, you will document unusual messages and identify simple configuration or startup problems.

## What you need

- A computer with Windows, Linux, or macOS
- Internet access
- Local administrative rights for installation and system settings
- Virtualization software, for example, VirtualBox or VMware Workstation Player
- An ISO file of a guest operating system, for example, Ubuntu Desktop
- A way to take notes for brief documentation, for example, a text file or Markdown file
- Sufficient free disk space, at least 25 GB recommended
- At least 8 GB RAM on the host system recommended

## Schedule

- 0–10 Min.: Check prerequisites and prepare the work environment
- 10–30 Min.: Download and install virtualization software
- 30–55 Min.: Create a new virtual machine
- 55–80 Min.: Configure CPU, RAM, hard drive, and network
- 80–105 Min.: Start the guest operating system and perform initial checks
- 105–120 Min.: Document error patterns, complete extension tasks or reflection

## Basic Tasks

### Task 1:

Check prerequisites on your system
**Goal:** You ensure that your computer is fundamentally suitable for virtualization.
**Assignment:**
- Check which operating system and hardware you are using.
- Determine the size of your RAM and free hard disk space.
- Check if hardware virtualization is available in the system or if there are indications that it is deactivated.
- Also note whether you have local administrative rights for installations.
- Record all results as bullet points in a short file.
**Expected Result / Desired State:** You have a brief overview of the most important prerequisites and can assess whether your system is suitable for the next steps.

### Task 2:

Download and install virtualization software
**Goal:** You install functional virtualization software on your computer.
**Assignment:**
- Select virtualization software.
- Download the installation file from the official manufacturer's website.
- Install the software with the default options or deliberately chosen settings.
- Start the software after installation.
- Document the product name, version, and whether the installation completed without an error message.
**Expected Result / Desired State:** The virtualization software is installed, starts successfully, and is ready for use.

### Task 3:

Create a new virtual machine
**Goal:** You create a clean basic configuration for a new VM.
**Assignment:**
- Create a new virtual machine with a unique name, for example, `Ubuntu-Test-01`.
- Select the ISO file of your guest operating system as the installation source.
- Deliberately define the storage location and file name of the VM.
- Select the appropriate guest operating system type and version.
- Record the VM's name, guest operating system, and storage location in your documentation.
**Expected Result / Desired State:** A new VM has been created and can be further configured.

### Task 4:

Configure resources and basic VM settings
**Goal:** You assign suitable resources to the VM and adjust central settings.
**Assignment:**
- Assign an appropriate number of CPU cores to the VM.
- Set the RAM so that the VM is usable and your host system remains stable.
- Create a virtual hard disk or adjust its size.
- Check the network settings and initially decide on NAT or Bridged, depending on the available environment.
- Check additional basic settings, for example, boot order, display, ISO file mount, and automatic integration of input devices.
- Document all chosen values in a table.
**Expected Result / Desired State:** The VM is fully configured and prepared with suitable resources for a first start.

### Task 5:

Start the guest operating system and perform initial functional checks
**Goal:** You start the VM, check the boot process, and identify simple problems.
**Assignment:**
- Start the virtual machine.
- Observe the startup process carefully and note any abnormalities or error messages.
- If the guest operating system starts, check at least these points: display works, input works, system responds, network connection is fundamentally available or recognizably configured.
- If a problem occurs, document it structured with: timestamp, message, suspected cause, already checked setting.
- Finally, create a short status report with the current state of your VM.
**Expected Result / Desired State:** The VM starts up to the installation or desktop screen of the guest operating system, or you have clearly documented a simple startup problem.

## Extension Tasks

### Extension Task 1: Compare network modes

**Goal:** You understand the practical effect of different network modes in the VM.
**Assignment:**
- Check the currently set network mode of your VM.
- Switch to another mode for testing purposes, for example, from NAT to Bridged or vice versa, if your environment allows it.
- Start the VM again and observe whether the network connectivity or reachability changes.
- Note which mode seems more suitable in your environment and why.
**Expected Result / Desired State:** You have examined at least two network modes and briefly documented their practical effect.

### Extension Task 2: Adjust resources and observe effects

**Goal:** You learn how CPU, RAM, and hard disk settings affect the usability of the VM.
**Assignment:**
- Deliberately change a resource setting, for example, RAM or CPU cores.
- Start the VM again and observe whether the behavior changes during startup or operation.
- Repeat the test with a second setting.
- Record your observations in a small comparison table.
**Expected Result / Desired State:** You have demonstrably documented which resource settings are suitable for your VM.

### Extension Task 3: Systematically narrow down typical startup problems

**Goal:** You deal with simple error patterns in a structured way.
**Assignment:**
- Create a checklist with at least five possible causes for startup problems, for example, missing ISO integration, insufficient RAM, deactivated virtualization, incorrect boot order, or blocked hypervisor function.
- Check your VM or host system using this list.
- Mark which points are uncritical in your case and which you actually had to check.
**Expected Result / Desired State:** You have created a usable checklist for simple VM startup problems and applied it to your environment.

## Important Notes

- Only work with software from official sources.
- Make sure to leave enough RAM and CPU performance for your host system.
- Avoid unnecessarily large virtual hard disks if your disk space is limited.
- If a VM does not start, always change only one setting at a time.
- Document error messages as literally as possible or with a screenshot.
- If your system requests a security query or privilege elevation, read the message completely before proceeding.

## Reflection Questions

- Which prerequisites were immediately met on your system, and which did you have to check first?
- Why did you choose exactly this virtualization software?
- Which settings for CPU, RAM, and hard drive were reasonable for your VM?
- Which network mode was most practical for your first test?
- What abnormality or problem occurred when starting the VM?
- How did you proceed with troubleshooting?
- What would you configure differently from the start for the next VM?