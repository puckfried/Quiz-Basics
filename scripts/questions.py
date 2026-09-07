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
        if q.get("type") not in ("single", "multiple") or q.get("difficulty") not in ("easy", "medium", "hard"): errors.append(f"{prefix}: Typ/Schwierigkeit ungültig")
        if any(lang not in q.get("prompt", {}) or lang not in q.get("explanation", {}) for lang in ("de", "en")): errors.append(f"{prefix}: Übersetzung fehlt")
        answers = q.get("answers", []); answer_ids = {a.get("id") for a in answers}
        if len(answers) < 3 or any(lang not in a for a in answers for lang in ("de", "en")): errors.append(f"{prefix}: Antworten ungültig")
        if not q.get("correctAnswers") or not set(q.get("correctAnswers", [])).issubset(answer_ids): errors.append(f"{prefix}: Lösung ungültig")
        source = q.get("source", "")
        source_file = source.split("#", 1)[0]
        if not source: errors.append(f"{prefix}: Quelle fehlt")
        elif source_root:
            source_path = (source_root / source_file).resolve()
            if not source_path.is_relative_to(source_root) or not source_path.is_file():
                errors.append(f"{prefix}: Quelldatei nicht im angegebenen Quellenordner gefunden")
    catalog.append({"file": path.name, "topic": topic, "questionCount": len(questions)})
if errors:
    print("\n".join(errors), file=sys.stderr); sys.exit(1)
catalog.sort(key=lambda item: item["topic"]["order"])
(folder / "index.json").write_text(json.dumps({"schemaVersion": 1, "topics": catalog}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"OK: {len(files)} Themen, {len(ids)} Fragen")
