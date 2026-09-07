# Computer Fundamentals Learning Quiz

A static, bilingual learning quiz for practising essential computer fundamentals.

The light-only interface takes inspiration from the GOV.UK Design System for its typography, 5-pixel spacing scale, form controls, buttons and status messages.

## Adding a new topic

1. Add another JSON file to `questions/`. An existing file can be used as a template.
2. Run `python3 scripts/questions.py`. The script validates all question data and regenerates `questions/index.json`.
3. Push the changes. The GitHub Pages workflow performs the same validation and publishes the site.

No manual changes to the HTML or JavaScript are required. IDs must be unique across the entire project. Every question must include both German and English text.


