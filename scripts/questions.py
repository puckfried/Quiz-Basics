#!/usr/bin/env python3
import argparse, json, pathlib, sys

parser = argparse.ArgumentParser(description="Validate question files and build the topic catalogue.")
parser.add_argument(
    "--source-root",
    type=pathlib.Path,
    help="Optionally verify question source paths against this directory.",
)
args = parser.parse_args()

ROOT = pathlib.Path(__file__).resolve().parents[1]
folder = ROOT / "questions"
source_root = args.source_root.resolve() if args.source_root else None
files = sorted(p for p in folder.glob("*.json") if p.name != "index.json")
catalog, ids, errors = [], set(), []
for path in files:
    try: data = json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        errors.append(f"{path.name}: ungültiges JSON ({exc})"); continue
    topic, questions = data.get("topic", {}), data.get("questions", [])
    required_topic = ("id", "title", "group", "description", "order")
    if data.get("schemaVersion") != 1 or any(key not in topic for key in required_topic): errors.append(f"{path.name}: ungültige Metadaten")
    if not questions: errors.append(f"{path.name}: keine Fragen")
    for q in questions:
        prefix = f"{path.name}/{q.get('id', '?')}"
        if q.get("id") in ids: errors.append(f"{prefix}: doppelte ID")
        ids.add(q.get("id"))
        question_type = q.get("type")
        if question_type not in ("single", "multiple", "terminal", "code") or q.get("difficulty") not in ("easy", "medium", "hard"): errors.append(f"{prefix}: Typ/Schwierigkeit ungültig")
        if any(lang not in q.get("prompt", {}) or lang not in q.get("explanation", {}) for lang in ("de", "en")): errors.append(f"{prefix}: Übersetzung fehlt")
        if question_type == "terminal":
            terminal = q.get("terminal", {})
            goals, hints, solution = terminal.get("goals", []), terminal.get("hints", []), terminal.get("solution", [])
            goal_types = {"cwdEquals", "pathExists", "pathAbsent", "fileContentEquals", "gitInitializedAt", "gitConfigEquals", "gitStagedExactly", "gitCommitExists"}
            if any(lang not in q.get("title", {}) for lang in ("de", "en")): errors.append(f"{prefix}: Terminal-Titel fehlt")
            if terminal.get("kind") not in ("bash", "git") or not isinstance(terminal.get("cwd"), str): errors.append(f"{prefix}: Terminal-Konfiguration ungültig")
            if not goals or any(goal.get("type") not in goal_types for goal in goals): errors.append(f"{prefix}: Terminal-Ziele ungültig")
            if not hints or any(any(lang not in hint for lang in ("de", "en")) for hint in hints): errors.append(f"{prefix}: Terminal-Hinweise ungültig")
            if not solution or any(not isinstance(command, str) or not command.strip() for command in solution): errors.append(f"{prefix}: Terminal-Musterlösung ungültig")
            for entry in terminal.get("filesystem", []):
                if not isinstance(entry.get("path"), str) or entry.get("type") not in ("file", "directory"): errors.append(f"{prefix}: virtueller Dateisystemeintrag ungültig")
            for goal in goals:
                if goal.get("type") == "pathExists" and goal.get("entryType") not in ("file", "directory"): errors.append(f"{prefix}: pathExists benötigt entryType")
                if goal.get("type") in ("cwdEquals", "pathExists", "pathAbsent", "fileContentEquals", "gitInitializedAt") and not isinstance(goal.get("path"), str): errors.append(f"{prefix}: Zielpfad fehlt")
                if goal.get("type") == "gitStagedExactly" and not isinstance(goal.get("paths"), list): errors.append(f"{prefix}: Staging-Ziel ungültig")
                if goal.get("type") == "gitConfigEquals" and goal.get("key") not in ("user.name", "user.email"): errors.append(f"{prefix}: Git-Konfigurationsziel ungültig")
                if goal.get("type") == "gitCommitExists" and not isinstance(goal.get("message"), str): errors.append(f"{prefix}: Commit-Ziel ungültig")
        elif question_type == "code":
            code = q.get("code", {})
            hints, accepted_answers = code.get("hints", []), code.get("acceptedAnswers", [])
            if any(lang not in q.get("title", {}) for lang in ("de", "en")): errors.append(f"{prefix}: Code-Titel fehlt")
            if code.get("language") not in ("html", "css", "python"): errors.append(f"{prefix}: Code-Sprache ungültig")
            if not isinstance(code.get("prefix"), str) or not isinstance(code.get("suffix"), str): errors.append(f"{prefix}: Code-Kontext ungültig")
            if not code.get("prefix") and not code.get("suffix"): errors.append(f"{prefix}: Code-Kontext fehlt")
            if not accepted_answers or any(not isinstance(answer, str) or not answer.strip() for answer in accepted_answers): errors.append(f"{prefix}: Code-Lösung ungültig")
            if not hints or any(any(lang not in hint for lang in ("de", "en")) for hint in hints): errors.append(f"{prefix}: Code-Hinweise ungültig")
        else:
            answers = q.get("answers", []); answer_ids = {a.get("id") for a in answers}
            if len(answers) < 3 or any(lang not in a for a in answers for lang in ("de", "en")): errors.append(f"{prefix}: Antworten ungültig")
            if not q.get("correctAnswers") or not set(q.get("correctAnswers", [])).issubset(answer_ids): errors.append(f"{prefix}: Lösung ungültig")
        source = q.get("source", "")
        source_file = source.split("#", 1)[0]
        if source and source_root:
            source_path = (source_root / source_file).resolve()
            if not source_path.is_relative_to(source_root) or not source_path.is_file():
                errors.append(f"{prefix}: Quelldatei nicht im angegebenen Quellenordner gefunden")
    catalog.append({"file": path.name, "topic": topic, "questionCount": len(questions)})
if errors:
    print("\n".join(errors), file=sys.stderr); sys.exit(1)
catalog.sort(key=lambda item: item["topic"]["order"])
(folder / "index.json").write_text(json.dumps({"schemaVersion": 1, "topics": catalog}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"OK: {len(files)} Themen, {len(ids)} Fragen")
