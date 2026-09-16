# Individual Learning Phase: How the Web Works and Your First HTML Page

## Your Goal

You understand the basic communication between browser and server, differentiate HTTP and HTTPS in a simple way, and create a small, cleanly structured HTML page yourself with head and body sections, as well as typical text elements.

## What You Need

- A computer with internet access
- A browser
- A text editor or an integrated development environment (IDE)
- A local working folder, for example `web-fundamentals`
- Optional: the browser's developer tools

## Schedule

- 10 minutes: Task 1
- 15 minutes: Task 2
- 20 minutes: Task 3
- 25 minutes: Task 4
- 20 minutes: Task 5
- 20 minutes: Extension Tasks
- 10 minutes: Conclusion and Reflection

## Basic Tasks

### Task 1:

From Browser to Website **Goal:** You concretely understand the journey of a website from its call to its display in the browser.

**Instructions:**
1. Open any public website in your browser, for example, a news site, a company website, or a documentation page.
2. Note down these stages, in the order they occur during the call, in a file or on paper:
   - Your browser
   - Request to a server
   - Transmission path over the internet
   - Server's response
   - Display in the browser
3. Write 1 short sentence in your own words for each stage.
4. Check the address bar to see if the page starts with `http://` or `https://`.
5. Additionally note:
   - The domain name
   - Whether a padlock icon is displayed
   - What you notice about the difference between HTTP and HTTPS

**Expected Result / Target State:**
You have created a short, comprehensible description of the process from page call to display, and a simple comparison of HTTP and HTTPS.

### Task 2:

Your First HTML Boilerplate **Goal:** You create a minimal HTML document with the most important basic elements.

**Instructions:**
1. In your working folder, create a file named `index.html`.
2. Create a minimal HTML document within it, with these components:
   - `<!DOCTYPE html>`
   - `html`
   - `head`
   - `body`
3. Save the file and open it in your browser.
4. Check if the file is displayed without error messages.
5. Experimentally change the content in the `body` and reload the page in the browser.

**Expected Result / Target State:**
You have a locally executable `index.html` file that can be opened in the browser and contains a correct HTML boilerplate.

### Task 3:

Information in the Head Section **Goal:** You augment your HTML document with basic information in the `head` and recognize their effect in the browser.

**Instructions:**
1. In your `index.html`, add a meaningful `title` within the `head`.
2. Add a basic `meta` tag for the character set.
3. Add a `meta` tag for responsive design (display on different devices).
4. Save the file and check in the browser:
   - What text appears in the tab?
   - Is the file still displayed correctly?
5. Deliberately change the `title` once and observe the effect directly in the browser tab.

**Expected Result / Target State:**
Your page contains a meaningful `title` and basic `meta` tags, and you can understand the visible effect of the `title` in the browser.

### Task 4:

Create a Structurally Meaningful Web Page **Goal:** You build a small, logically structured web page in the `body` using typical HTML text elements.

**Instructions:**
In the `body`, create a short information page on the topic **"Understanding the Web"**. Use at least the following elements:
- 1 main heading with `h1`
- At least 2 subheadings with `h2`
- At least 1 further subheading with `h3`
- At least 3 paragraphs with `p`
- At least 2 text emphases with `strong`
- At least 2 text emphases with `em`
- At least 1 line break with `br`
- At least 1 horizontal line with `hr`

Content-wise, include at least these sections:
1. What a client is
2. What a server is
3. What happens when a website is accessed
4. The rough differences between HTTP and HTTPS

Ensure that you do not just enter keywords, but formulate short, understandable texts.

**Expected Result / Target State:**
Your page displays a clearly readable content structure with headings, paragraphs, and text emphases. The page covers the basic concepts of Client, Server, Transmission Path, HTTP, and HTTPS.

### Task 5:

Compare Browser Display and Source Code **Goal:** You recognize the connection between HTML code and visible browser representation.

**Instructions:**
1. Open your `index.html` in the browser.
2. Compare your code in the editor with the visible display in the browser.
3. Specifically check these points:
   - Which heading is displayed largest?
   - How do `strong` and `em` appear in the display?
   - What does `br` do?
   - What does `hr` do?
4. Then, one by one, change 3 things in the HTML, for example:
   - A heading level
   - A text emphasis
   - The position of a horizontal line
5. Reload the page after each change and briefly note what has changed.

**Expected Result / Target State:**
You can directly attribute several visible effects to specific HTML elements and have demonstrably tested at least 3 changes.

## Extension Tasks

### Extension Task 1: A Mini Homepage for a Learning Project

**Goal:** You apply the learned HTML fundamentals to a realistic small homepage.

**Instructions:**
Extend your `index.html` into a small homepage for a fictional learning project titled **"Core Tech Fundamentals"**.
Include these contents:
- A main heading
- A short introductory text
- A section **"Today you will learn"**
- A section **"Important Terms"**
- A section **"Why HTTPS is important"**
Consciously use the HTML elements you have already learned and structure the content clearly.

**Expected Result / Target State:**
Your page appears as a simple, cleanly structured information page and uses the basic HTML elements appropriately and consistently.

### Extension Task 2: Consciously Analyze Website Structure

**Goal:** You train your understanding of the structure of real websites in the browser.

**Instructions:**
1. Open two different websites in your browser.
2. For each, observe the visible structure and note:
   - The page title in the tab
   - The presumably most important main heading
   - At least 2 other visible text areas
   - Whether the page was loaded via HTTP or HTTPS
3. Briefly compare both pages:
   - Which page seems more clearly structured?
   - What heading hierarchy do you recognize?
   - Which contents are particularly emphasized?

**Expected Result / Target State:**
You have consciously observed and compared the basic ideas of title, structure, hierarchy, and secure transmission on two real websites.

### Extension Task 3: Improve Cleanliness and Readability

**Goal:** You revise your HTML code so that it is easier to read and understand.

**Instructions:**
1. Check your `index.html` for indentation and clear structure.
2. Arrange the content so that the order is logical:
   - Page Title
   - Introduction
   - Web Fundamentals
   - HTTP/HTTPS
   - Conclusion
3. Rephrase at least 2 paragraphs to be linguistically clearer or shorter.
4. Finally, check in the browser again if everything is still displayed correctly.

**Expected Result / Target State:**
Your HTML document is clearly structured, logically organized in terms of content, and readable without errors in the browser.

## Important Notes

- Work through the tasks in the given order.
- Save your file regularly.
- Reload the page in the browser after each change.
- Ensure that you properly open and close HTML tags.
- Use descriptive, understandable texts instead of just single keywords.
- If something is not displayed, first check tag names, order, and spelling.

## Reflection Questions

- How would you explain the difference between a client and a server in 2 simple sentences?
- What roughly happens after you enter a web address in the browser?
- How do you recognize in the browser whether a connection is running over HTTPS?
- What is the purpose of the `head` section in your HTML document?
- What effect did `title`, `strong`, `em`, `br`, and `hr` have on your page?
- What could you particularly well understand when comparing source code and browser display?

---