# CSS Box Concepts

## Recap

- Selectors
- Linking files
- Network tab

## Box Model

- The browser treats every element as a rectangular box
- We can modify these boxes from the inside out:

1. `content` – the actual content
2. `padding` – space inside the box
3. `border` – the box's border
4. `margin` – space outside the box

```text
Margin
└── Border
    └── Padding
        └── Content
```

- `padding` creates space inside
- `margin` creates space outside
- The background colour covers the content and padding
- We will explore this in practice

## Flexbox Preview

- The parent container arranges its direct children
- `display: flex` places the children next to each other
- `gap` creates space between the children

```css
.actions {
  display: flex;
  gap: 16px;
}
```

- `justify-content` lets you move the children along the main axis
- Here is a useful overview: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## Summary

- Every element is a box
- We can use `div` to group elements in HTML
- We can use width/height, padding, border, and margin to change the four layers of an element
- `margin-left: auto` and `margin-right: auto` centre a block element (for example, a `div`)
- Flexbox lets us position and move elements next to each other
