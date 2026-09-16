# Individual Learning Phase: Securely Using and Networking Virtual Machines

## Your Goal

You will set up a small virtual test environment, secure your work with snapshots, create copies of a VM, and practically compare the network modes NAT, Bridged, and Host-only. In the end, you will have a documented mini-environment with two virtual machines and traceable test results regarding reachability and basic security aspects.

## What you need

- A computer with a virtualization solution, e.g., VirtualBox or VMware Workstation/Player
- At least one functional virtual machine
- If possible, a second operating system or sufficient storage space for cloning
- Access to basic network commands in the VM, e.g., `ipconfig` / `ifconfig`, `ping`, optionally `hostname`
- An editor for notes or a file to document your results
- Optional internet access for tests in NAT or Bridged mode

## Time Planning

- 10 min: Check environment and create documentation
- 20 min: Core Task 1
- 15 min: Core Task 2
- 20 min: Core Task 3
- 20 min: Core Task 4
- 20 min: Core Task 5
- 15 min: Work on extension tasks
- 10 min: Review results and answer reflection questions

## Core Tasks

### Task 1:
Inventory and prepare the initial VM
**Goal:** You create a clean starting point for all further steps.
**Work Assignment:**
- Start your existing VM or create a simple test VM if you don't have one yet.
- Check the current name of the VM, the installed operating system, and the configured network mode.
- Determine the current IP address and hostname within the VM.
- Create a documentation file and note down:
  - VM name
  - Operating system
  - current network mode
  - IP address
  - Hostname
- Shut down the VM cleanly if your virtualization tool only allows certain changes when powered off.

**Expected Result / Target State:**
You have a functional initial VM and brief documentation with the most important starting information.

### Task 2:
Create and purposefully use a snapshot
**Goal:** You secure a defined state of the VM and understand the practical benefit of a snapshot.
**Work Assignment:**
- Create a snapshot for your initial VM with a descriptive name, e.g., "Initial state before network changes".
- Start the VM and make a small, clearly recognizable change, e.g.:
  - Create a test file on the desktop
  - Change the hostname
  - Add an entry to a text file
- Verify that the change is visible.
- Then revert the VM to the snapshot.
- Check if the change made has disappeared or if the previous state has been restored.
- Note in your documentation:
  - Name of the snapshot
  - What change you made
  - What was visible after reverting

**Expected Result / Target State:**
You have created a snapshot, tested a change, and successfully restored the previous state.

### Task 3:
Clone or export and re-import a VM
**Goal:** You create a second, independent VM based on your initial VM.
**Work Assignment:**
- Create a copy of your initial VM. Use either:
  - the cloning function of your virtualization solution or
  - export and subsequent import of the VM
- Give the copy a clearly distinguishable name, e.g., `Test-VM-02`.
- Start both VMs one after another and check:
  - if both are visible in the management interface
  - if their name, storage location, or configuration data differ
  - if the second VM is fundamentally capable of starting
- If both VMs have the same hostname, change the hostname of the copy to distinguish them better later.
- Document:
  - whether you cloned or exported/imported
  - the names of both VMs
  - whether both VMs can be started successfully

**Expected Result / Target State:**
You have two separately usable VMs that you can clearly distinguish in the interface and that can fundamentally start.

### Task 4:
Compare NAT, Bridged, and Host-only
**Goal:** You recognize the differences between the three network modes through your own tests.
**Work Assignment:**
- Select one of your VMs and test the NAT, Bridged, and Host-only modes sequentially.
- Proceed identically for each mode:
  - Set the network mode
  - Start the VM
  - Determine the IP address
  - Check if the VM can reach the host
  - Check if internet access is available, if possible in your environment
- For each mode, note in a small table:
  - assigned IP address
  - Host reachability: yes/no
  - Internet access: yes/no
  - your brief impression of typical use
- Make sure to switch cleanly to the next mode after each test.

**Expected Result / Target State:**
You have performed a practical test for NAT, Bridged, and Host-only, respectively, and documented the differences based on real observations.

### Task 5:
Check communication between two virtual machines
**Goal:** You test how two VMs communicate with each other in a common virtual network.
**Work Assignment:**
- Configure both VMs to run in the same suitable network mode. Host-only is particularly suitable for direct communication; if possible, you can also test Bridged.
- Start both VMs.
- Determine the IP address and hostname on both VMs.
- Check the reachability of VM 2 from VM 1 via `ping`.
- Then check the reachability of VM 1 from VM 2.
- If communication does not work:
  - check if both VMs are in the same network
  - check if the IP addresses match the same network range
  - check if a local firewall is blocking the response
- Document:
  - Network mode
  - IP address and hostname of both VMs
  - Result of reachability in both directions
  - possible cause of a failed connection

**Expected Result / Target State:**
You have tested two VMs in a common virtual network and documented traceably whether and why they can or cannot communicate with each other.

## Extension Tasks

### Extension Task 1: Security check of network modes
**Goal:** You deduce simple security aspects from your practical tests.
**Work Assignment:**
- Compare your results from NAT, Bridged, and Host-only.
- Create a short overview with three columns:
  - Visibility of the VM in the network
  - Risk of unwanted reachability
  - Suitable application area
- Formulate a brief assessment for each mode, stating when you would prefer it and when you would not.

**Expected Result / Target State:**
You have created a short, understandable security assessment of the three network modes.

### Extension Task 2: Snapshot strategy for test environments
**Goal:** You plan the sensible use of snapshots for changes to VMs.
**Work Assignment:**
- Define a small snapshot strategy for your VM with at least three meaningful points in time, e.g.:
  - before network changes
  - before software installations
  - before security-relevant configuration changes
- For each point in time, describe in 1-2 sentences:
  - why a snapshot is useful there
  - what risk you reduce by doing so

**Expected Result / Target State:**
You have an simple, practically usable plan for employing snapshots in your test environment.

### Extension Task 3: Mini-migration scenario with export and import
**Goal:** You simulate the transfer of a VM to another system.
**Work Assignment:**
- Export a VM to a suitable exchange format, if your software supports it.
- Re-import the VM or check the export process up to the point where the exported file is visibly present.
- Document:
  - File name or format
  - Size of the export file
  - which settings should be checked after import, e.g., network, name, MAC address, ability to start

**Expected Result / Target State:**
You have followed the process of a simple VM transfer and recorded the most important checkpoints after import.

## Important Notes

- Work with test VMs whenever possible, not with production systems.
- Assign clear names to VMs and snapshots so you can distinguish states reliably later.
- Document every change immediately after the step to avoid losing results.
- If a test doesn't work, still record the observation. Even an unsuccessful test provides valuable insights.
- For network comparisons, always use the same VM if possible, so your results remain more comparable.
- If commands differ depending on the operating system, use the appropriate variant for your VM.

## Reflection Questions

- What was the practical difference between a snapshot and a clone for you?
- In what situation would you rather clone than export/import?
- Which network mode was most suitable for direct communication between two VMs?
- In which mode was your VM most isolated from the rest of the network?
- What simple security risks arise when operating a VM in Bridged mode?
- Which three checkpoints would you always check after importing or cloning a VM?