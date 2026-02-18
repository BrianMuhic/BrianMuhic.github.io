# Brian Muhic — Portfolio

A modern portfolio site for a software engineer, built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Add your assets** (optional but recommended)

   Put your headshot and resume in `public/Files/`:

   - `public/Files/headshot.jpg` (or `.png`) — profile photo
   - `public/Files/resume.pdf` — resume PDF

   See `public/Files/README.md` for details.

3. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Experience & Projects:** Edit `components/Experience.tsx` and `components/Projects.tsx` with your real roles and projects.
- **About:** Update the bio in `components/About.tsx`.
- **Social links:** LinkedIn and GitHub are in `components/Contact.tsx` (and match `info.txt`).

## Build

The site is built as a **static export** (plain HTML/CSS/JS in the `out/` folder), so it can run anywhere static files are hosted, including GitHub Pages.

```bash
npm run build
```

The built site is in the `out/` directory. To preview it locally, use any static server, e.g. `npx serve out`.

## Deploy

### GitHub Pages

1. Push this repo to GitHub.
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch (or change the workflow to your default branch). The included workflow will build the site and deploy it to GitHub Pages.

Your site will be at `https://<username>.github.io/<repo-name>/` (or `https://<username>.github.io/` if the repo is named `username.github.io`). The build automatically uses the correct base path when running on GitHub Actions, so assets and links work on both project and user Pages.

### Vercel

You can also deploy to [Vercel](https://vercel.com) by connecting this repo. For Vercel you may want to remove `output: "export"` from `next.config.ts` to use server-side features later; the static export is mainly for GitHub Pages compatibility.
