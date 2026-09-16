# Linux Terminal with WSL

## Today

- installed Ubuntu on Windows using WSL
- distinguished between Linux and Windows directories
- moved between directories in the terminal
- created directories and files
- moved and renamed files
- edited text files with `nano`
- viewed files with `cat` and `less`

## WSL and Ubuntu

**WSL** stands for **Windows Subsystem for Linux**. It allows us to use a Linux environment directly on Windows. We installed the Linux distribution **Ubuntu** for this purpose.

WSL 2 uses a real Linux kernel inside a small virtual machine managed by Windows. Unlike a traditional VM, we do not need to configure virtual hardware, virtual disks, or a separate window ourselves.

### Understanding the Hypervisor

- Hyper-V uses a type 1 hypervisor architecture.
- The hypervisor sits between the hardware and the operating system environments.
- Windows runs in the root partition and manages the other virtual environments.
- WSL 2 uses this virtualization technology, but WSL itself is not the type 1 hypervisor.

You can check the WSL version in Windows PowerShell:

```powershell
wsl --list --verbose
```

## Linux and Windows Directories

Linux and Windows each have their own home directory.

| Location | Path in WSL |
|---|---|
| Linux home | `~` |
| Windows user directory | `/mnt/c/Users/<Windows-username>` |

On a German keyboard, you can type the tilde `~` using `Alt Gr` + `+`.

`/mnt/c` is the Windows `C:` drive mounted in Linux. The Linux home directory is normally the better place for Linux projects. Use `/mnt/c` when you intentionally want to exchange files with Windows.

Paths can be written in different ways:

- `/mnt/c/Users/...` starts at `/` and is an **absolute path**.
- `filing/inbox` starts at the current location and is a **relative path**.
- `..` represents the parent directory.
- `~` represents your Linux home directory.

## Terminal Commands

Whenever possible, use the **Tab key** for file and directory names. The shell can complete known names and help you avoid many typing mistakes.

| Command | Meaning |
|---|---|
| `cd DIRECTORY` | change into a directory |
| `cd ..` | move up one directory level |
| `mkdir name` | create a new directory called `name` |
| `mkdir -p filing/inbox` | create `filing` and the `inbox` directory inside it |
| `mkdir -p filing/outbox filing/trash` | create several subdirectories at once |
| `touch mail1.txt mail2.txt` | create two empty files |
| `mv SOURCE TARGET` | move or rename a file |
| `nano commands.md` | open or create a file in the Nano text editor |
| `cat commands.md` | display the complete contents of a short file |
| `less commands.md` | view and search a longer file page by page |

Example: move a file into the parent directory's `outbox` directory:

```bash
mv mail1.txt ../outbox/
```

Example: rename a file:

```bash
mv mail2.txt customer-mail.txt
```

### Using Nano

- `Ctrl` + `O`: save
- `Enter`: confirm the file name
- `Ctrl` + `W`: search for text
- `Ctrl` + `X`: exit Nano

### Using Less

- Arrow keys: move one line at a time
- Space: move forward one page
- `/WORD`: search for a word
- `n`: jump to the next match
- `q`: exit Less

Remember:

> `cat` is useful for short files. `less` is more comfortable for longer files.
