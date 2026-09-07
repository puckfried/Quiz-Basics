# Computer Fundamentals Learning Quiz

A static, bilingual learning quiz for practising essential computer fundamentals.

The light-only interface takes inspiration from the GOV.UK Design System for its typography, 5-pixel spacing scale, form controls, buttons and status messages.

## Standalone deployment

The project is fully self-contained. Building and deploying the quiz does not require a separate content or source-material repository to be present. The question files in `questions/` contain everything the application needs at runtime.

## GitHub Pages

The site can be published directly from the repository without a custom GitHub Actions workflow. In the repository settings, configure **Pages → Build and deployment** as follows:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

GitHub Pages will publish the site after changes are pushed to `main`.

## Adding a new topic

1. Add another JSON file to `questions/`. An existing file can be used as a template.
2. Run `python3 scripts/questions.py`. The script validates all question data and regenerates `questions/index.json`.
3. Commit both the new question file and the regenerated `questions/index.json`.
4. Push the changes to `main`. GitHub Pages will then publish the updated files directly.

No manual changes to the HTML or JavaScript are required. IDs must be unique across the entire project. Every question must include both German and English text.

Question files may contain optional source references for editorial traceability. The standard validation and deployment do not resolve these references. If the original source files are available locally, they can be checked explicitly:

```bash
python3 scripts/questions.py --source-root ../path/to/source-materials
```
