# Styling with CSS

## Why Do We Need It?
- CSS code can be very extensive and take up a lot of space in web projects
- you should understand how this code is structured
- it trains logical thinking
- it gives you the opportunity to build your own frontends
- if you need HTML, you also need CSS


## How CSS Works

- Let's examine a CSS rule:

    ```css
    h1 {
        color: magenta;
        background: lightpink;
    }
    ```


- CSS: "Cascading Style Sheets"
    - The styling language of the web
    - Controls how the browser renders our HTML
- just like with HTML, you communicate with the browser

- Separation of responsibilities
    - CSS only takes care of presentation
    - HTML only takes care of content and structure

### Adding CSS

- CSS can be added to our page in three main ways
    - Inline
    - Internal
    - External (preferred)

- **Inline** CSS goes directly into the target element
    - `<p style="color:red">I am red!</p>`
    - Very difficult to maintain

- **Internal** CSS is an HTML element that contains CSS for the current HTML document
    - But it cannot be reused across multiple files
    ```html
    <style>
        p { color: red; }
        pre { color: darkred; }
    </style>
    ```

- **External** CSS is stored in a separate file
    - Usually the preferred option
    - Easy to reuse across multiple HTML files
    - Keeps CSS and HTML neatly separated
    - The browser makes separate requests
        - The browser can "cache" the CSS between requests


### Selectors
- Selectors are used to select elements from the HTML
- there are many different selectors; these are the most common ones
- **Element selector**: uses the HTML element name, for example:
    ```css
    h1 {color: red}
    ```
- **Class selector**: selects elements using a class name, which allows you to distinguish individual elements, for example:
    ```css
    .highlight {color: red}
    ```
- **ID selector**: selects an element using an ID; IDs are not usually assigned for styling, so they are less relevant for our course, for example:
    ```css
    #special {color: red}
    ```


### When an Element Is Styled Multiple Times
- if several selectors target the same element, their priority (specificity) is checked first. An element selector is less specific than a class selector, and a class selector is less specific than an ID selector
- if two identical selectors exist, their order decides which one is used (the later one wins)
