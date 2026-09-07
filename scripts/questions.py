#!/usr/bin/env python3
import json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
folder = ROOT / "questions"
course = ROOT.parent / "CTF-26a"
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
        elif "vorbereitung" in source_file.lower() or not (course / source_file).is_file(): errors.append(f"{prefix}: Quelle außerhalb von CTF-26a oder nicht vorhanden")
    catalog.append({"file": path.name, "topic": topic, "questionCount": len(questions)})
if errors:
    print("\n".join(errors), file=sys.stderr); sys.exit(1)
catalog.sort(key=lambda item: item["topic"]["order"])
(folder / "index.json").write_text(json.dumps({"schemaVersion": 1, "topics": catalog}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"OK: {len(files)} Themen, {len(ids)} Fragen")
