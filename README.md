# The Fairway Journal

A personal golf journey blog built with TanStack Start and deployed on Netlify. Chronicles rounds played, lessons learned, courses visited, and the ongoing pursuit of a single-digit handicap.

## Tech Stack

- **Framework**: TanStack Start (React, file-based routing)
- **Content**: Content Collections (Markdown files in `content/posts/`)
- **Styling**: Tailwind CSS v4 with custom CSS design system
- **Fonts**: Playfair Display, Lora, Barlow Condensed (Google Fonts)
- **Deployment**: Netlify

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

## Adding a New Post

Create a `.md` file in `content/posts/` with the following frontmatter:

```markdown
---
date: 2025-07-01
title: "Your Post Title"
summary: "A one-sentence description of this round or topic."
categories:
  - Course Diary   # or: Milestones, Lessons Learned, Competition
image: placeholder.png
---

Your content here...
```

The slug is auto-generated from the title.
