# Linux Permissions

## Paths

- There are two types of paths in Linux
    - `absolute` and `relative`
    - Relative paths are relative to the current working directory
    - Absolute paths show the complete path to a file
- Examples
    - `cd /` uses an absolute path
    - `cd /home/dci/projects` uses an absolute path
    - `cd projects` uses a relative path
    - `cd ..` uses a relative path: "one level up, to the parent directory"
    - `cd .` does nothing; `.` refers to the current directory
    - `cd ./projects` and `cd projects` are the same
    - You can see `.` and `..` with `ls -la`
    - `~` is considered an absolute path... somehow... most of the time...

- On Linux, names that start with a dot (`.`) are considered "hidden"

### `ls` with options

- `-a`: also show hidden names
    - hidden does not mean protected
- `-l`: show details such as permissions, owner, group, size and modification time
- `-la` combines the two short options


### Linux directory structure

| Location | Meaning |
|---|---|
| `/` | beginning of the Linux file system |
| `~` | your own Linux home directory |
| `/home` | users' home directories |
| `/etc` | system-wide configuration |
| `/var` | variable data and logs |
| `/tmp` | temporary files |
| `/mnt/c` | Windows drive `C:` under WSL |


## Understanding file permissions

Typical output:

```text
-rw-r--r-- 1 root root ... permissions.html
│└─┬┘└┬┘└┬┘
│  │  │  └─ others
│  │  └──── group
│  └─────── owner
└────────── file type
```

- first character: `-` for a file, `d` for a directory
- followed by three permissions each for owner, group and others
- Nginx does not run as `root` and needs read permission for `others` here

| Permission | File | Directory |
|---|---|---|
| `r` | read the contents | list names |
| `w` | modify the contents | create, delete or rename entries |
| `x` | execute the file | enter or pass through the directory |

### More examples

```
-rw-r--r-- 1 joel    joel        0 Jan 23 13:02 catto.txt
-rw-r--r-- 1 sasha   sasha       0 Jan 11 10:05 doggo.txt
-rw-r--r-- 1 syslog  adm     41187 Jan 23 13:05 auth.log
```

- catto.txt belongs to the user `joel` and the group `joel`
- doggo.txt belongs to the user `sasha` and the group `sasha`
- auth.log belongs to the user `syslog` and the group `adm`

- Every user has their own group to make permissions easier to manage
- You can belong to many groups
- Enter `groups` in the terminal to see which groups you belong to




### Symbolic notation with chmod

- The following symbols can be used with `chmod`, among others:
    - `u`: owner/user
    - `g`: group
    - `o`: others
    - `+`: add a permission
    - `-`: remove a permission

- For example, `chmod o-r catto.txt` removes read permission for others from catto.txt
- Check the result with `ls -l` after every change.


## 2. Connecting to the Nginx web server

Nginx connects package management, system directories and file permissions in one example.

```text
Package source → package list → APT → installed program
```

```bash
sudo apt update
sudo apt install nginx
systemctl is-active nginx
```

- `apt update`: update package lists
- `apt install`: install a package
- `apt upgrade`: install updates for installed packages
- `apt remove`: remove a package

`apt update` does not install any updates yet.

If Nginx is not running:

```bash
sudo systemctl start nginx
```

Open in the Windows browser:

```text
http://localhost
```



## 3. Publishing your own page

Do not change the default page. Create `index.html` in your home directory:

```bash
nano ~/index.html
```

```html
<h1>Permissions Lab</h1>
<p>If you can read this, Nginx is allowed to read this file.</p>
```

Copy it to the web directory:

```bash
sudo cp ~/index.html /var/www/html/index.html
ls -l /var/www/html/index.html
```

`sudo` is necessary because `/var/www/html` is a system-wide directory.

```text
http://localhost/index.html
```

shows your page.


### Breaking the website on purpose

```bash
sudo chmod o-r /var/www/html/index.html
ls -l /var/www/html/index.html
```

Reload the page with `Ctrl` + `F5`.

Expected result: **403 Forbidden**. The file exists, but Nginx is not allowed to read it.

### Fixing access

```bash
sudo chmod o+r /var/www/html/index.html
ls -l /var/www/html/index.html
```

Reload the page. `chmod` changed the permissions, not the contents.
