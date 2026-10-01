export function renderInlineCode(element, value) {
  const text = String(value ?? "");
  const parts = text.split("`");

  // Keep malformed source text readable instead of guessing where code ends.
  if (parts.length % 2 === 0) {
    element.textContent = text;
    return element;
  }

  const content = document.createDocumentFragment();
  parts.forEach((part, index) => {
    if (index % 2 === 0) {
      content.append(document.createTextNode(part));
      return;
    }

    const code = document.createElement("code");
    code.className = "inline-code";
    code.textContent = part;
    content.append(code);
  });
  element.replaceChildren(content);
  return element;
}
