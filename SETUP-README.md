# Blackwood Publishing — Website Setup & Hosting

This folder is your complete website. Below is the easiest path to get it
online, written for someone who has never done this before. No coding needed.

---

## What you have

A finished romance-publisher website: home, books catalog, the lead title page
("I Accidentally Married a Vampire"), three author pages, an about page, and a
submissions page. All 5 images are bundled inside (in `public/images`), so the
site no longer depends on Higgsfield's servers.

There are two ways to get it live. **Option A is the easiest** and the one I
recommend. Option B is here only as a backup.

---

## OPTION A — Easiest: let Netlify build it for you (recommended)

You'll upload this whole folder to a free Netlify account. Netlify does the
technical "build" step in the cloud, so you don't install anything.

### Step 1 — Make a free Netlify account
1. Go to https://www.netlify.com
2. Click **Sign up** and create an account (free plan is fine).

### Step 2 — Put this project on the web in one drop
The simplest Netlify path needs a *pre-built* folder, which requires a build
step. Since you'd rather not run anything on your computer, use the
**connect-a-folder-through-GitHub** flow OR the **Netlify Drop after build**
flow. The truly no-tools route is:

**Easiest no-tools route — Netlify + GitHub (click-only):**
1. Make a free account at https://github.com
2. On GitHub, click **+ → New repository**, name it `blackwood-website`,
   click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Drag *everything inside this folder* into the upload box, then click
   **Commit changes**.
5. Back on Netlify, click **Add new site → Import an existing project →
   GitHub**, pick `blackwood-website`.
6. Netlify will auto-read the included `netlify.toml` and fill in the settings
   (build command `npm run build`, publish folder `dist`). Click **Deploy**.
7. Wait ~2 minutes. Netlify gives you a live link like
   `https://your-name.netlify.app`. Done — your site is online.

### Step 3 — (Optional) Use your own domain
In Netlify: **Domain settings → Add a domain**. If you buy a domain (e.g.
`blackwoodpublishing.com`), Netlify walks you through pointing it. ~$12/year.

---

## OPTION B — If you (or a helper) can run a few commands

If you have someone technical, or want to try: install Node.js from
https://nodejs.org (the "LTS" version), then in this folder run:

```
npm install
npm run build
```

That creates a `dist` folder. Go to https://app.netlify.com/drop and drag the
`dist` folder onto the page. Instantly live. (This is the classic drag-and-drop
method — it just needs the `dist` folder to exist first.)

---

## Connecting your mailing list (do this when ready)

The email signup boxes already work and show a thank-you message. To make them
actually collect subscribers:

1. Create a free mailing list at **MailerLite** (recommended), **Kit**, or
   **Beehiiv**.
2. Make a signup form; copy its **form action URL**.
3. Open the file `src/lib/site-config.ts` in this project.
4. Paste your URL between the quotes on the `MAILING_LIST_ACTION` line.
5. While you're in that file, paste your real Instagram / Facebook / Threads /
   TikTok links too.
6. Re-deploy (if using GitHub: re-upload the changed file; Netlify rebuilds
   automatically).

That one file is the only thing you edit to connect everything.

---

## Good to know

- The 3 real book covers (vampire, Shadow King, Briar House) are shown on the
  lead titles. The other 9 "coming soon" books use a styled gold placeholder
  cover until you generate their real covers in Higgsfield. To swap one in
  later: add the image to `public/images` and update its `cover:` line in
  `src/routes/books.tsx`.
- The lead book page no longer shows a price; its button invites readers to
  join the list for release-day notification. When you have real buy links
  (Amazon, etc.), they can be added to that button later.
- Submissions form currently shows a confirmation on screen. To receive the
  actual emails, it can be connected to a form service (e.g. Formspree) the
  same way as the mailing list — happy to help with that when you're ready.
