# Portfolio

Small Astro portfolio for `samueladesuyi`.

## Local

```bash
npm install
npm run dev
```

## Add A Blog Post

Add one Markdown file in `src/content/blog`.

```md
---
title: "My Post Title"
date: 2026-06-09
---

Write the post here.
```

The filename becomes the URL. For example:

`src/content/blog/my-post-title.md` -> `/blog/my-post-title`

The home page shows the newest posts up to `homePostLimit` in `src/config/site.ts`. If there are no Markdown files in `src/content/blog`, the home page and blog page hide the post list.

Astro reads these files at build time, so GitHub Pages updates when you push the new Markdown file and the site rebuilds.

Example posts live in `examples/blog-posts`. They are only there as references for format and layout, and they do not publish unless you copy one into `src/content/blog`.

## Posts API

The site also generates a tiny static JSON endpoint:

`/api/posts.json`

It returns the blog post title, date, slug, and URL. This is not a running server API; it is a plain JSON file generated during the Astro build, which keeps it compatible with GitHub Pages.

## Resume Files

Resume files live in `public/resume`.

- `public/resume/samuel-adesuyi-resume.pdf`
- `public/resume/resume-template-overleaf.tex`

Replace those files with the same names to update the resume menu without touching code. The `.tex` file can be uploaded to Overleaf as the resume template.

The header links, social links, location, clock timezone, and home post limit live in `src/config/site.ts`.
