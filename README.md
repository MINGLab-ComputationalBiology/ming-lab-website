# MING Lab website

Bilingual (English / 简体中文) site for **Chen Ming**, Faculty of Medicine, University of Macau.

Static Vite + React app. Publishes to **GitHub Pages** (no server).

## Publish on GitHub Pages

### A. From the GitHub website (no terminal)

1. Unzip this folder so you have a `ming-lab` directory.
2. Open [https://github.com/new](https://github.com/new).
3. Repository name: `ming-lab` (or any name). Keep it **Public**. Create repository.
4. On the empty repo page, click **uploading an existing file**.
5. Drag **all files inside** `ming-lab` (including `.github`) into the browser. Commit.
6. Open **Settings → Pages**.
7. Under **Build and deployment → Source**, choose **GitHub Actions**.
8. Wait 1–2 minutes, then open **Actions** and confirm the **Deploy to GitHub Pages** workflow is green.
9. Your site:

`https://YOUR_USERNAME.github.io/ming-lab/`

(If the repo is named `YOUR_USERNAME.github.io`, the site is `https://YOUR_USERNAME.github.io/`.)

### B. From a terminal

```bash
cd ming-lab
git init
git add .
git commit -m "MING Lab website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ming-lab.git
git push -u origin main
```

Then **Settings → Pages → Source: GitHub Actions**.

The workflow is `.github/workflows/pages.yml`. It runs on every push to `main`.

Pages uses hash URLs (`/#/people`, `/#/publications`) so routing works without a server.

## Edit later

| What | File |
| --- | --- |
| English / Chinese text | `src/lib/copy.ts` |
| Papers | `src/lib/publications.ts` |
| Team | `src/lib/team.ts` |
| News | `newsItems` in `src/lib/copy.ts` |
| Photos / logos | `public/images/` (`logo.png`, `um-lockup.png`, `team.jpg`) |

Then `git add` / `git commit` / `git push` — GitHub rebuilds the site.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173
