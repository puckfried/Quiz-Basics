const MESSAGES = {
  de: {
    emptyCommand: "Gib einen Befehl ein.",
    parseError: "Die Eingabe enthält nicht geschlossene Anführungszeichen.",
    unsupportedSyntax: "Diese Shell-Syntax wird im Lernterminal nicht unterstützt.",
    commandNotFound: ({ command }) => `${command}: Befehl nicht gefunden`,
    unsupportedOption: ({ command, option }) => `${command}: Option ${option} wird nicht unterstützt`,
    missingOperand: ({ command }) => `${command}: Operand fehlt`,
    tooManyArguments: ({ command }) => `${command}: zu viele Argumente`,
    noSuchPath: ({ path }) => `${path}: Datei oder Verzeichnis nicht gefunden`,
    notDirectory: ({ path }) => `${path}: ist kein Verzeichnis`,
    isDirectory: ({ path }) => `${path}: ist ein Verzeichnis`,
    alreadyExists: ({ path }) => `${path}: existiert bereits`,
    parentMissing: ({ path }) => `${path}: übergeordnetes Verzeichnis fehlt`,
    directoryNeedsRecursive: ({ path }) => `${path}: Verzeichnis benötigt die Option -r`,
    unsafeRoot: "Das virtuelle Wurzelverzeichnis kann nicht verändert werden.",
    copyIntoSelf: "Ein Verzeichnis kann nicht in sich selbst kopiert oder verschoben werden.",
    gitNotRepository: "Kein Git-Repository gefunden.",
    gitAlreadyRepository: ({ path }) => `Vorhandenes Git-Repository in ${path} neu initialisiert.`,
    gitInitialized: ({ path }) => `Leeres Git-Repository in ${path}/.git/ initialisiert.`,
    gitConfigUsage: "Verwendung: git config [--global|--local] user.name|user.email [Wert]",
    gitConfigMissing: ({ key }) => `${key} ist nicht gesetzt.`,
    gitConfigSet: ({ key }) => `${key} wurde gespeichert.`,
    gitNothingToAdd: "Keine passenden Dateien zum Vormerken gefunden.",
    gitAdded: ({ count }) => `${count} ${count === 1 ? "Datei wurde" : "Dateien wurden"} vorgemerkt.`,
    gitIdentityMissing: "Autoridentität fehlt. Konfiguriere zuerst user.name und user.email.",
    gitNothingToCommit: "Keine vorgemerkten Änderungen für einen Commit.",
    gitCommitted: ({ hash, message }) => `[main ${hash}] ${message}`,
    gitNoCommits: "Das Repository enthält noch keine Commits.",
    gitClean: "Nichts zu committen, Arbeitsverzeichnis unverändert.",
    gitStatusHeader: "Auf Branch main",
    gitStagedHeader: "Für Commit vorgemerkte Änderungen:",
    gitUntrackedHeader: "Unversionierte Dateien:",
    gitModifiedHeader: "Nicht vorgemerkte Änderungen:",
    gitDiffEmpty: "Keine nicht vorgemerkten Änderungen.",
    gitHelp: "Verfügbare Git-Befehle: config, help, init, status, diff, add, commit, log",
    gitCommandHelp: ({ command }) => `Hilfe für git ${command}: Nutze den Befehl im lokalen Repository und prüfe danach mit git status.`,
  },
  en: {
    emptyCommand: "Enter a command.",
    parseError: "The input contains an unclosed quote.",
    unsupportedSyntax: "This shell syntax is not supported in the learning terminal.",
    commandNotFound: ({ command }) => `${command}: command not found`,
    unsupportedOption: ({ command, option }) => `${command}: option ${option} is not supported`,
    missingOperand: ({ command }) => `${command}: missing operand`,
    tooManyArguments: ({ command }) => `${command}: too many arguments`,
    noSuchPath: ({ path }) => `${path}: no such file or directory`,
    notDirectory: ({ path }) => `${path}: not a directory`,
    isDirectory: ({ path }) => `${path}: is a directory`,
    alreadyExists: ({ path }) => `${path}: already exists`,
    parentMissing: ({ path }) => `${path}: parent directory does not exist`,
    directoryNeedsRecursive: ({ path }) => `${path}: directory requires the -r option`,
    unsafeRoot: "The virtual root directory cannot be changed.",
    copyIntoSelf: "A directory cannot be copied or moved into itself.",
    gitNotRepository: "Not a Git repository.",
    gitAlreadyRepository: ({ path }) => `Reinitialised existing Git repository in ${path}/.git/.`,
    gitInitialized: ({ path }) => `Initialised empty Git repository in ${path}/.git/.`,
    gitConfigUsage: "Usage: git config [--global|--local] user.name|user.email [value]",
    gitConfigMissing: ({ key }) => `${key} is not set.`,
    gitConfigSet: ({ key }) => `${key} was saved.`,
    gitNothingToAdd: "No matching files found to stage.",
    gitAdded: ({ count }) => `${count} ${count === 1 ? "file was" : "files were"} staged.`,
    gitIdentityMissing: "Author identity is missing. Configure user.name and user.email first.",
    gitNothingToCommit: "No staged changes to commit.",
    gitCommitted: ({ hash, message }) => `[main ${hash}] ${message}`,
    gitNoCommits: "The repository does not have any commits yet.",
    gitClean: "Nothing to commit, working tree clean.",
    gitStatusHeader: "On branch main",
    gitStagedHeader: "Changes to be committed:",
    gitUntrackedHeader: "Untracked files:",
    gitModifiedHeader: "Changes not staged for commit:",
    gitDiffEmpty: "No unstaged changes.",
    gitHelp: "Available Git commands: config, help, init, status, diff, add, commit, log",
    gitCommandHelp: ({ command }) => `Help for git ${command}: Use the command in a local repository, then inspect the result with git status.`,
  },
};

function event(key, params = {}, tone = "normal") { return { kind: "message", key, params, tone }; }
function text(value, tone = "normal") { return { kind: "text", text: String(value), tone }; }
function result(ok, events = [], extra = {}) { return { ok, events, ...extra }; }

export function formatTerminalEvent(item, language) {
  if (item.kind === "text") return item.text;
  const value = MESSAGES[language]?.[item.key] ?? MESSAGES.de[item.key] ?? item.key;
  return typeof value === "function" ? value(item.params ?? {}) : value;
}

export function tokenizeCommand(line) {
  const tokens = [];
  let token = "", quote = null, escaped = false;
  const push = () => { if (token.length) { tokens.push(token); token = ""; } };
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (escaped) { token += character; escaped = false; continue; }
    if (character === "\\") { escaped = true; continue; }
    if (quote) {
      if (character === quote) quote = null;
      else token += character;
      continue;
    }
    if (character === "\"" || character === "'") { quote = character; continue; }
    if (";|><`".includes(character) || (character === "$" && line[index + 1] === "(")) {
      return { error: "unsupportedSyntax", tokens: [] };
    }
    if (/\s/.test(character)) push();
    else token += character;
  }
  if (quote || escaped) return { error: "parseError", tokens: [] };
  push();
  return { tokens };
}

export function normalizePath(cwd, input = ".", home = "/home/learner") {
  let value = input || ".";
  if (value === "~") value = home;
  else if (value.startsWith("~/")) value = `${home}/${value.slice(2)}`;
  const parts = value.startsWith("/") ? [] : cwd.split("/").filter(Boolean);
  for (const part of value.split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") parts.pop();
    else parts.push(part);
  }
  return `/${parts.join("/")}` || "/";
}

function parentPath(path) { return path === "/" ? "/" : path.slice(0, path.lastIndexOf("/")) || "/"; }
function baseName(path) { return path === "/" ? "/" : path.slice(path.lastIndexOf("/") + 1); }
function relativeTo(root, path) { return path === root ? "." : path.slice(root.length + (root === "/" ? 0 : 1)); }

export class TerminalSession {
  constructor(configuration = {}) {
    this.configuration = structuredClone(configuration);
    this.reset();
  }

  reset() {
    const config = structuredClone(this.configuration);
    this.home = config.home || "/home/learner";
    this.cwd = normalizePath("/", config.cwd || this.home, this.home);
    this.entries = new Map([["/", { type: "directory" }]]);
    this.commandHistory = [];
    this.transcript = [];
    this.git = {
      repoRoot: config.git?.repoRoot ? normalizePath(this.cwd, config.git.repoRoot, this.home) : null,
      globalConfig: { ...(config.git?.globalConfig || {}) },
      localConfig: { ...(config.git?.localConfig || {}) },
      staged: new Map(), tracked: new Map(), commits: structuredClone(config.git?.commits || []),
    };
    this.ensureDirectory(this.home);
    for (const entry of config.filesystem || []) {
      const path = normalizePath(this.cwd, entry.path, this.home);
      if (entry.type === "directory") this.ensureDirectory(path);
      else { this.ensureDirectory(parentPath(path)); this.entries.set(path, { type: "file", content: entry.content || "" }); }
    }
    if (this.git.repoRoot) {
      this.ensureDirectory(this.git.repoRoot);
      for (const item of config.git?.tracked || []) {
        const absolute = normalizePath(this.git.repoRoot, item.path, this.home);
        const content = this.entries.get(absolute)?.content ?? item.content ?? "";
        this.git.tracked.set(relativeTo(this.git.repoRoot, absolute), content);
      }
      for (const item of config.git?.staged || []) {
        const absolute = normalizePath(this.git.repoRoot, item.path, this.home);
        const content = this.entries.get(absolute)?.content ?? item.content ?? "";
        this.git.staged.set(relativeTo(this.git.repoRoot, absolute), content);
      }
    }
  }

  ensureDirectory(path) {
    if (path !== "/") this.ensureDirectory(parentPath(path));
    if (!this.entries.has(path)) this.entries.set(path, { type: "directory" });
  }

  prompt() {
    const shown = this.cwd === this.home ? "~" : this.cwd.startsWith(`${this.home}/`) ? `~/${this.cwd.slice(this.home.length + 1)}` : this.cwd;
    return `learner@quiz:${shown}$`;
  }

  execute(line) {
    const raw = line.trim();
    if (!raw) return result(false, [event("emptyCommand", {}, "error")]);
    if (raw.length > 500) return result(false, [event("unsupportedSyntax", {}, "error")]);
    this.promptBefore = this.prompt();
    const parsed = tokenizeCommand(raw);
    if (parsed.error) return this.record(raw, result(false, [event(parsed.error, {}, "error")]));
    const [command, ...args] = parsed.tokens;
    let output;
    if (command === "git") output = this.executeGit(args);
    else if (["pwd", "ls", "cd", "mkdir", "touch", "cat", "cp", "mv", "rm", "clear"].includes(command)) output = this[`command_${command}`](args);
    else output = result(false, [event("commandNotFound", { command }, "error")]);
    return this.record(raw, output);
  }

  record(command, output) {
    if (output.clear) this.transcript = [];
    else this.transcript.push({ command, prompt: this.promptBefore ?? null, events: output.events });
    this.commandHistory.push(command);
    this.promptBefore = null;
    return output;
  }

  command_pwd(args) {
    if (args.length) return result(false, [event("tooManyArguments", { command: "pwd" }, "error")]);
    return result(true, [text(this.cwd)]);
  }

  command_ls(args) {
    let showAll = false, long = false, target = ".";
    for (const arg of args) {
      if (arg.startsWith("-")) {
        if (![...arg.slice(1)].every((flag) => "al".includes(flag))) return result(false, [event("unsupportedOption", { command: "ls", option: arg }, "error")]);
        showAll ||= arg.includes("a"); long ||= arg.includes("l");
      } else if (target === ".") target = arg;
      else return result(false, [event("tooManyArguments", { command: "ls" }, "error")]);
    }
    const path = normalizePath(this.cwd, target, this.home), entry = this.entries.get(path);
    if (!entry) return result(false, [event("noSuchPath", { path: target }, "error")]);
    if (entry.type === "file") return result(true, [text(long ? `-rw-r--r-- 1 learner learner ${entry.content.length} ${baseName(path)}` : baseName(path))]);
    const children = [...this.entries.entries()].filter(([candidate]) => candidate !== path && parentPath(candidate) === path && (showAll || !baseName(candidate).startsWith("."))).sort(([a], [b]) => a.localeCompare(b));
    const lines = children.map(([candidate, child]) => long ? `${child.type === "directory" ? "d" : "-"}rwxr-xr-x 1 learner learner ${child.type === "file" ? child.content.length : 0} ${baseName(candidate)}` : baseName(candidate));
    return result(true, [text(lines.length ? lines.join("\n") : "")]);
  }

  command_cd(args) {
    if (args.length > 1) return result(false, [event("tooManyArguments", { command: "cd" }, "error")]);
    const raw = args[0] || this.home, path = normalizePath(this.cwd, raw, this.home), entry = this.entries.get(path);
    if (!entry) return result(false, [event("noSuchPath", { path: raw }, "error")]);
    if (entry.type !== "directory") return result(false, [event("notDirectory", { path: raw }, "error")]);
    this.cwd = path; return result(true);
  }

  command_mkdir(args) {
    let parents = false; const paths = [];
    for (const arg of args) { if (arg === "-p") parents = true; else if (arg.startsWith("-")) return result(false, [event("unsupportedOption", { command: "mkdir", option: arg }, "error")]); else paths.push(arg); }
    if (!paths.length) return result(false, [event("missingOperand", { command: "mkdir" }, "error")]);
    for (const raw of paths) {
      const path = normalizePath(this.cwd, raw, this.home);
      if (this.entries.has(path) && !parents) return result(false, [event("alreadyExists", { path: raw }, "error")]);
      if (!this.entries.has(parentPath(path)) && !parents) return result(false, [event("parentMissing", { path: raw }, "error")]);
      if (parents) this.ensureDirectory(path); else this.entries.set(path, { type: "directory" });
    }
    return result(true);
  }

  command_touch(args) {
    if (!args.length) return result(false, [event("missingOperand", { command: "touch" }, "error")]);
    for (const raw of args) {
      if (raw.startsWith("-")) return result(false, [event("unsupportedOption", { command: "touch", option: raw }, "error")]);
      const path = normalizePath(this.cwd, raw, this.home), parent = this.entries.get(parentPath(path));
      if (!parent) return result(false, [event("parentMissing", { path: raw }, "error")]);
      if (this.entries.get(path)?.type === "directory") return result(false, [event("isDirectory", { path: raw }, "error")]);
      if (!this.entries.has(path)) this.entries.set(path, { type: "file", content: "" });
    }
    return result(true);
  }

  command_cat(args) {
    if (!args.length) return result(false, [event("missingOperand", { command: "cat" }, "error")]);
    const events = [];
    for (const raw of args) {
      const entry = this.entries.get(normalizePath(this.cwd, raw, this.home));
      if (!entry) return result(false, [event("noSuchPath", { path: raw }, "error")]);
      if (entry.type !== "file") return result(false, [event("isDirectory", { path: raw }, "error")]);
      events.push(text(entry.content));
    }
    return result(true, events);
  }

  command_cp(args) { return this.copyOrMove(args, false); }
  command_mv(args) { return this.copyOrMove(args, true); }

  copyOrMove(args, move) {
    let recursive = false; const paths = [];
    for (const arg of args) { if (arg === "-r") recursive = true; else if (arg.startsWith("-")) return result(false, [event("unsupportedOption", { command: move ? "mv" : "cp", option: arg }, "error")]); else paths.push(arg); }
    if (paths.length < 2) return result(false, [event("missingOperand", { command: move ? "mv" : "cp" }, "error")]);
    if (paths.length > 2) return result(false, [event("tooManyArguments", { command: move ? "mv" : "cp" }, "error")]);
    const source = normalizePath(this.cwd, paths[0], this.home), sourceEntry = this.entries.get(source);
    if (!sourceEntry) return result(false, [event("noSuchPath", { path: paths[0] }, "error")]);
    if (sourceEntry.type === "directory" && !recursive && !move) return result(false, [event("directoryNeedsRecursive", { path: paths[0] }, "error")]);
    let destination = normalizePath(this.cwd, paths[1], this.home);
    if (this.entries.get(destination)?.type === "directory") destination = `${destination === "/" ? "" : destination}/${baseName(source)}`;
    if (!this.entries.has(parentPath(destination))) return result(false, [event("parentMissing", { path: paths[1] }, "error")]);
    if (destination === source || destination.startsWith(`${source}/`)) return result(false, [event("copyIntoSelf", {}, "error")]);
    const affected = [...this.entries.entries()].filter(([path]) => path === source || path.startsWith(`${source}/`));
    for (const [path, entry] of affected) this.entries.set(`${destination}${path.slice(source.length)}`, { ...entry });
    if (move) for (const [path] of affected.sort(([a], [b]) => b.length - a.length)) this.entries.delete(path);
    return result(true);
  }

  command_rm(args) {
    let recursive = false; const paths = [];
    for (const arg of args) { if (arg === "-r") recursive = true; else if (arg.startsWith("-")) return result(false, [event("unsupportedOption", { command: "rm", option: arg }, "error")]); else paths.push(arg); }
    if (!paths.length) return result(false, [event("missingOperand", { command: "rm" }, "error")]);
    for (const raw of paths) {
      const path = normalizePath(this.cwd, raw, this.home), entry = this.entries.get(path);
      if (path === "/") return result(false, [event("unsafeRoot", {}, "error")]);
      if (!entry) return result(false, [event("noSuchPath", { path: raw }, "error")]);
      if (entry.type === "directory" && !recursive) return result(false, [event("directoryNeedsRecursive", { path: raw }, "error")]);
      for (const candidate of [...this.entries.keys()].filter((value) => value === path || value.startsWith(`${path}/`))) this.entries.delete(candidate);
    }
    return result(true);
  }

  command_clear(args) {
    if (args.length) return result(false, [event("tooManyArguments", { command: "clear" }, "error")]);
    return result(true, [], { clear: true });
  }

  repositoryRoot() {
    if (!this.git.repoRoot) return null;
    return this.cwd === this.git.repoRoot || this.cwd.startsWith(`${this.git.repoRoot}/`) ? this.git.repoRoot : null;
  }

  executeGit(args) {
    const [command, ...rest] = args;
    if (!command || command === "help") return result(true, [command && rest[0] ? event("gitCommandHelp", { command: rest[0] }) : event("gitHelp")]);
    if (command === "--version") return result(true, [text("git version 2.43.0")]);
    if (rest.includes("--help")) return result(true, [event("gitCommandHelp", { command })]);
    const handler = this[`git_${command}`];
    return handler ? handler.call(this, rest) : result(false, [event("commandNotFound", { command: `git ${command}` }, "error")]);
  }

  git_init(args) {
    if (args.length) return result(false, [event("tooManyArguments", { command: "git init" }, "error")]);
    if (this.repositoryRoot() === this.cwd) return result(true, [event("gitAlreadyRepository", { path: this.cwd })]);
    this.git.repoRoot = this.cwd; this.git.localConfig = {}; this.git.staged.clear(); this.git.tracked.clear(); this.git.commits = [];
    return result(true, [event("gitInitialized", { path: this.cwd })]);
  }

  git_config(args) {
    let scope = "local";
    if (["--global", "--local"].includes(args[0])) scope = args.shift().slice(2);
    const target = scope === "global" ? this.git.globalConfig : this.git.localConfig;
    if (scope === "local" && !this.repositoryRoot()) return result(false, [event("gitNotRepository", {}, "error")]);
    if (["--list", "-l", "--show-origin"].includes(args[0])) {
      const merged = { ...this.git.globalConfig, ...this.git.localConfig };
      return result(true, [text(Object.entries(merged).map(([key, value]) => `${key}=${value}`).join("\n"))]);
    }
    const [key, ...valueParts] = args;
    if (!["user.name", "user.email"].includes(key) || valueParts.length > 1) return result(false, [event("gitConfigUsage", {}, "error")]);
    if (!valueParts.length) return key in target ? result(true, [text(target[key])]) : result(false, [event("gitConfigMissing", { key }, "error")]);
    target[key] = valueParts[0]; return result(true, [event("gitConfigSet", { key })]);
  }

  git_status(args) {
    if (args.length) return result(false, [event("tooManyArguments", { command: "git status" }, "error")]);
    const root = this.repositoryRoot(); if (!root) return result(false, [event("gitNotRepository", {}, "error")]);
    const current = this.repositoryFiles(root), staged = [...this.git.staged.keys()].sort();
    const untracked = [...current.keys()].filter((path) => !this.git.tracked.has(path) && !this.git.staged.has(path)).sort();
    const modified = [...current.keys()].filter((path) => this.git.tracked.has(path) && this.git.tracked.get(path) !== current.get(path) && !this.git.staged.has(path)).sort();
    const events = [event("gitStatusHeader")];
    if (staged.length) events.push(event("gitStagedHeader"), text(staged.map((path) => `  new file: ${path}`).join("\n")));
    if (modified.length) events.push(event("gitModifiedHeader"), text(modified.map((path) => `  modified: ${path}`).join("\n")));
    if (untracked.length) events.push(event("gitUntrackedHeader"), text(untracked.map((path) => `  ${path}`).join("\n")));
    if (!staged.length && !modified.length && !untracked.length) events.push(event("gitClean"));
    return result(true, events);
  }

  repositoryFiles(root) {
    return new Map([...this.entries.entries()].filter(([path, entry]) => entry.type === "file" && path.startsWith(`${root}/`)).map(([path, entry]) => [relativeTo(root, path), entry.content]));
  }

  git_add(args) {
    const root = this.repositoryRoot(); if (!root) return result(false, [event("gitNotRepository", {}, "error")]);
    if (!args.length) return result(false, [event("missingOperand", { command: "git add" }, "error")]);
    const files = this.repositoryFiles(root), selected = new Set();
    for (const raw of args) {
      if (raw.startsWith("-")) return result(false, [event("unsupportedOption", { command: "git add", option: raw }, "error")]);
      const absolute = normalizePath(this.cwd, raw, this.home);
      for (const path of files.keys()) {
        const full = normalizePath(root, path, this.home);
        if (full === absolute || full.startsWith(`${absolute}/`) || (raw === "." && (full === this.cwd || full.startsWith(`${this.cwd}/`)))) selected.add(path);
      }
    }
    if (!selected.size) return result(false, [event("gitNothingToAdd", {}, "error")]);
    for (const path of selected) this.git.staged.set(path, files.get(path));
    return result(true, [event("gitAdded", { count: selected.size })]);
  }

  git_commit(args) {
    const root = this.repositoryRoot(); if (!root) return result(false, [event("gitNotRepository", {}, "error")]);
    if (args[0] !== "-m" || args.length !== 2 || !args[1]) return result(false, [text("Usage: git commit -m \"message\"", "error")]);
    const config = { ...this.git.globalConfig, ...this.git.localConfig };
    if (!config["user.name"] || !config["user.email"]) return result(false, [event("gitIdentityMissing", {}, "error")]);
    if (!this.git.staged.size) return result(false, [event("gitNothingToCommit", {}, "error")]);
    for (const [path, content] of this.git.staged) this.git.tracked.set(path, content);
    const hash = (this.git.commits.length + 1).toString(16).padStart(7, "0");
    const commit = { hash, message: args[1], files: [...this.git.staged.keys()].sort(), author: config["user.name"] };
    this.git.commits.unshift(commit); this.git.staged.clear();
    return result(true, [event("gitCommitted", { hash, message: commit.message })]);
  }

  git_log(args) {
    const root = this.repositoryRoot(); if (!root) return result(false, [event("gitNotRepository", {}, "error")]);
    const oneline = args.length === 1 && args[0] === "--oneline";
    if (args.length && !oneline) return result(false, [event("unsupportedOption", { command: "git log", option: args[0] }, "error")]);
    if (!this.git.commits.length) return result(false, [event("gitNoCommits", {}, "error")]);
    return result(true, [text(this.git.commits.map((commit) => oneline ? `${commit.hash} ${commit.message}` : `commit ${commit.hash}\nAuthor: ${commit.author}\n\n    ${commit.message}`).join("\n\n"))]);
  }

  git_diff(args) {
    const root = this.repositoryRoot(); if (!root) return result(false, [event("gitNotRepository", {}, "error")]);
    if (args.length) return result(false, [event("unsupportedOption", { command: "git diff", option: args[0] }, "error")]);
    const files = this.repositoryFiles(root);
    const modified = [...files.keys()].filter((path) => this.git.tracked.has(path) && this.git.tracked.get(path) !== files.get(path) && !this.git.staged.has(path));
    return result(true, [modified.length ? text(modified.map((path) => `diff -- ${path}`).join("\n")) : event("gitDiffEmpty")]);
  }
}

export function evaluateTerminalGoals(session, goals = []) {
  const details = goals.map((goal) => {
    if (goal.type === "cwdEquals") return session.cwd === normalizePath(session.cwd, goal.path, session.home);
    if (goal.type === "pathExists") return session.entries.get(normalizePath(session.cwd, goal.path, session.home))?.type === goal.entryType;
    if (goal.type === "pathAbsent") return !session.entries.has(normalizePath(session.cwd, goal.path, session.home));
    if (goal.type === "fileContentEquals") return session.entries.get(normalizePath(session.cwd, goal.path, session.home))?.content === goal.content;
    if (goal.type === "gitInitializedAt") return session.git.repoRoot === normalizePath(session.cwd, goal.path, session.home);
    if (goal.type === "gitConfigEquals") {
      const config = goal.scope === "global" ? session.git.globalConfig : goal.scope === "local" ? session.git.localConfig : { ...session.git.globalConfig, ...session.git.localConfig };
      return config[goal.key] === goal.value;
    }
    if (goal.type === "gitStagedExactly") return [...session.git.staged.keys()].sort().join("\0") === [...goal.paths].sort().join("\0");
    if (goal.type === "gitCommitExists") return session.git.commits.some((commit) => commit.message === goal.message && (!goal.paths || [...commit.files].sort().join("\0") === [...goal.paths].sort().join("\0")));
    return false;
  });
  return { complete: details.length > 0 && details.every(Boolean), details };
}
