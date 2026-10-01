# Computer Fundamentals Learning Quiz

A static, bilingual learning quiz for practising essential computer fundamentals.

The light-only interface takes inspiration from the GOV.UK Design System for its typography, 5-pixel spacing scale, form controls, buttons and status messages.

The quiz includes conventional single- and multiple-choice questions, interactive HTML, CSS and Python code-completion tasks, and Bash and Git exercises in a controlled virtual terminal. It has no runtime dependencies, build step or backend.

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

## Adding a terminal exercise

Terminal exercises use `"type": "terminal"` in the same topic files as the other questions. The application evaluates the resulting virtual file-system or Git state, so learners may use any supported sequence of commands that reaches the goal.

```json
{
  "id": "terminal-example",
  "type": "terminal",
  "difficulty": "easy",
  "title": {
    "de": "Ordner erstellen",
    "en": "Create a directory"
  },
  "prompt": {
    "de": "Erstelle den Ordner notizen.",
    "en": "Create the directory notizen."
  },
  "terminal": {
    "kind": "bash",
    "cwd": "/home/learner",
    "filesystem": [],
    "goals": [
      {
        "type": "pathExists",
        "path": "/home/learner/notizen",
        "entryType": "directory"
      }
    ],
    "hints": [
      {
        "de": "Verwende mkdir.",
        "en": "Use mkdir."
      }
    ],
    "solution": ["mkdir notizen"]
  },
  "explanation": {
    "de": "mkdir erstellt ein Verzeichnis.",
    "en": "mkdir creates a directory."
  }
}
```

The bilingual `title` is shown as the short heading, while `prompt` contains the full task description below it. The Bash simulator supports `pwd`, `ls`, `cd`, `mkdir`, `touch`, `cat`, `cp`, `mv`, `rm` and `clear`, including the options used by the included exercises. The Git simulator supports `config`, `help`, `init`, `status`, `diff`, `add`, `commit` and `log`. It deliberately runs no real shell commands and cannot access the visitor's computer.

Available goal types are `cwdEquals`, `pathExists`, `pathAbsent`, `fileContentEquals`, `gitInitializedAt`, `gitConfigEquals`, `gitStagedExactly` and `gitCommitExists`. Run the validation script after every edit; it also checks the terminal configuration.

When an interactive topic is selected, a round contains at least one practical task when one is available. Terminal and code exercises together are capped at roughly one third of the round, leaving room for knowledge questions.

## Adding a code-completion exercise

Code exercises use `"type": "code"`. The learner fills the single gap between the read-only `prefix` and `suffix`. Answers are compared after normalising line endings and surrounding whitespace; list every other valid spelling or ordering explicitly in `acceptedAnswers`.

```json
{
  "id": "css-example",
  "type": "code",
  "difficulty": "easy",
  "title": { "de": "Flexbox aktivieren", "en": "Activate Flexbox" },
  "prompt": { "de": "Ergänze die Deklaration.", "en": "Add the declaration." },
  "code": {
    "language": "css",
    "prefix": ".container {\n  ",
    "suffix": "\n}",
    "acceptedAnswers": ["display: flex;"],
    "hints": [
      { "de": "Verwende display.", "en": "Use display." }
    ]
  },
  "explanation": {
    "de": "display: flex aktiviert Flexbox.",
    "en": "display: flex activates Flexbox."
  }
}
```

Learners may retry code tasks without a penalty. Revealing the example solution completes the task as incorrect. Terminal and code tasks share an interactive-task quota of roughly one third of each round.

Code-completion tasks support `html`, `css` and `python`. Python snippets are compared with the configured accepted answers just like HTML and CSS; they are never executed in the browser or on the visitor's computer.

Short inline code in localised question text can be enclosed in paired backticks. The quiz renders these spans as semantic inline code. This is deliberately not a general Markdown or HTML feature, and source text is always inserted safely as text.

Single- and multiple-choice questions may define a bilingual `title`. When present, it is used as the short heading and `prompt` is displayed as the question below it. A larger example can additionally be placed in a bilingual `codeBlock` with `language`, `lead` and `content`; it is rendered between the heading and prompt without executing or interpreting its contents.

## Browser tests

Serve the repository locally and open `tests/` in a browser. The test page checks the simulator, command parser, code-answer evaluation, question selection and every interactive exercise's example solution.

Question files may contain optional source references for editorial traceability. The standard validation and deployment do not resolve these references. If the original source files are available locally, they can be checked explicitly:

```bash
python3 scripts/questions.py --source-root ../path/to/source-materials
```
