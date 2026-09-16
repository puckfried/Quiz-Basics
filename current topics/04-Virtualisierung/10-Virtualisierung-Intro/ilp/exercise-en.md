# Individual Learning Phase: Understanding Virtualization and Planning a Simple VM Environment

## Your Goal

You will acquire the basics of virtualization and apply them directly to a realistic scenario. In the end, you will have a concise documentation comparing physical and virtual hardware, identifying suitable application areas, categorizing hypervisors, and intelligently planning a simple virtual machine.

## What you need

- A PC or laptop
- Internet access or provided documentation
- A text document, note-taking tool, or paper for your results
- Optional: installed virtualization software, e.g., VirtualBox, Hyper-V, or VMware Workstation Player

## Time Schedule

- 10 minutes: Task 1
- 20 minutes: Task 2
- 20 minutes: Task 3
- 25 minutes: Task 4
- 20 minutes: Task 5
- 15 minutes: Optional extended tasks
- 10 minutes: Reflection and Conclusion

## Core Tasks

### Task 1:

Status Quo: Physical vs. Virtual 

**Goal:** You will confidently differentiate between physical and virtual hardware.

**Instructions:**
Create a table with two columns: "Physical Hardware" and "Virtual Hardware".
For each of the following components, describe how they appear in a real computer and how they appear in a virtual machine:

- CPU
- RAM (Working Memory)
- Hard Drive / Storage
- Network Card

For each component, add 1-2 short sentences:

- How you recognize the physical variant
- How the virtual variant is provided
- Why this distinction is important for VM operation

**Expected Result / Target State:**
You will have a clear comparison table with all four hardware components and a brief, understandable classification for each entry.

### Task 2:

Practical Relevance: Application Areas of Virtualization 

**Goal:** You will identify where virtualization is usefully applied in everyday life and in businesses.

**Instructions:**
Process the following scenario:

A small company with 25 workstations wants to:

- test new software without endangering productive PCs
- continue operating an old specialized application server
- provide training environments for new employees
- keep hardware costs as low as possible

Create an overview with at least four specific application areas of virtualization for this company.
For each application area, describe:

- the initial situation
- how virtualization can help
- the specific advantage the company gains from it

Make sure you don't just list general advantages, but relate them to the scenario.

**Expected Result / Target State:**
You will have clearly described at least four practical application areas and specifically related the benefits of virtualization to the company.

### Task 3:

Categorizing Hypervisors 

**Goal:** You will distinguish between Type 1 and Type 2 hypervisors in an overview and assign typical software examples.

**Instructions:**
Create a comparison overview for Type 1 and Type 2 hypervisors.
Elaborate on at least the following points:

- Where the hypervisor runs
- Typical operating environment
- Overview of advantages and disadvantages
- Suitable target audience or application scenarios

Then, assign at least three examples of virtualization software, e.g.:

- VirtualBox
- VMware Workstation Player
- Hyper-V
- VMware ESXi

For each example, note:

- whether it is more Type 1 or Type 2
- what it is typically used for

**Expected Result / Target State:**
You will have a clear comparison of Type 1 and Type 2, as well as a correct assignment of several virtualization solutions with their typical use cases.

### Task 4:

Planning a Virtual Machine 

**Goal:** You will understand the basic virtual hardware resources and plan a suitable VM.

**Instructions:**
Plan a virtual machine for the following purpose:

"You are to set up a test environment for a standard office system where you can safely try out software."

Define the following for your VM:

- Number of virtual CPUs
- Size of RAM (Working Memory)
- Size of the virtual hard disk
- Type and role of the virtual network card

Briefly justify each decision.
Also add:

- What risks arise from too few resources?
- What problems arise from overly generous allocation?
- Why must the host hardware still be sufficiently powerful?

If you have virtualization software available, check the possible setting values there as an example and use realistic specifications.

**Expected Result / Target State:**
You will have a comprehensible VM plan with appropriately chosen resources and brief justifications for CPU, RAM, storage, and network.

### Task 5:

Mini-Concept: Recommendation for a Virtualization Solution 

**Goal:** You will combine your results into a practical recommendation.

**Instructions:**
Create a short mini-concept for the company from Task 2.
Your concept should include the following points:

- brief occasion: Why does the company want to virtualize?
- recommended type of hypervisor
- a suitable software example
- two to three typical application areas in the company
- the most important advantages for users and the company
- basic virtual hardware configuration for an example VM

Formulate your concept in such a way that it can also be understood by a technically interested person with little prior knowledge.

**Expected Result / Target State:**
You will have a short, structured concept with a clear recommendation, appropriate justification, and reference to the previous tasks.

## Extended Tasks

### Extended Task 1: Investigating Virtualization Software

**Goal:** You will apply your knowledge to a specific interface or product documentation.

**Instructions:**
Open installed virtualization software or research its interface via screenshots and manufacturer websites.
Document where you can find the settings for the following virtual hardware:

- CPU
- RAM (Working Memory)
- Hard Disk
- Network Card

Create a short step-by-step guide or a labeled sketch for this.

**Expected Result / Target State:**
You will have comprehensibly documented where the most important VM hardware settings can be found in a specific solution.

### Extended Task 2: Software Comparison

**Goal:** You will compare virtualization solutions based on practical criteria.

**Instructions:**
Compare three virtualization solutions of your choice in a table.
Use at least these criteria:

- Hypervisor type
- Typical application area
- Operating system or platform
- Ease of use
- Suitability for learning, testing, or server operation

Conclude with a brief recommendation as to which solution you would choose for learning purposes and why.

**Expected Result / Target State:**
You will have an understandable comparison table and a justified selection for a specific purpose.

### Extended Task 3: Creating an Architecture Sketch

**Goal:** You will clearly illustrate the relationship between host, hypervisor, and virtual machine.

**Instructions:**
Create a simple sketch or diagram with the following elements:

- Physical hardware
- Host operating system or direct hardware utilization
- Hypervisor
- At least two virtual machines
- Virtual CPU, RAM, hard disk, and network card within a VM

Label your sketch so that the structure is clearly understandable.

**Expected Result / Target State:**
You will have a clear representation that comprehensibly visualizes the structure of a virtualized environment.

## Important Notes

- Continuously compile your results in a document.
- Formulate concisely, precisely, and with clear practical relevance.
- Use tables, bullet points, and sketches if they help you.
- If you do not have virtualization software available, complete the tasks using research, screenshots, or product descriptions.
- Ensure that your results build upon each other and ultimately form a coherent overall picture.

## Reflection Questions

- What is the most important difference for you between physical and virtual hardware?
- In which application area does virtualization seem most sensible to you and why?
- When would you rather choose a Type 1 hypervisor, and when a Type 2?
- Which virtual hardware component was easiest for you to understand, and which was most difficult?
- What would you pay particular attention to when planning a VM in practice?