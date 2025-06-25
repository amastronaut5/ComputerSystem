# Computer System Vision — "From Atoms to API Calls"

This project implements a comprehensive, visually engaging, and highly interactive website dedicated to mastering the core concepts and interconnections of computer systems — from hardware internals to high-level networking. It features:

- **Structured Knowledge Map**: Visualizes the Computer System Vision and bridges.
- **Curated Playlists**: YouTube/video/book links for each topic, handpicked and categorized.
- **Material References**: Authoritative articles, textbooks, and tutorials.
- **Interactive Quizzes and Progress Tracking**: Test understanding and track journey.
- **Cross-linking and Contextual Guidance**: Shows how different topics relate, in real time.

**Stack:**  
- Next.js (React 18) + TypeScript  
- TailwindCSS for styling  
- shadcn/ui & Framer Motion for animations  
- Prisma + SQLite (or Postgres) for user data (optional, for progress/features)  
- Markdown/MDX for content  
- Vercel hosting (or Netlify)  
- Ready for static export and SEO  

---

## Project Structure

- `/content` — All learning materials, playlists, and references in MDX/JSON.
- `/components` — Reusable UI, graph visualizer, quiz engine, etc.
- `/pages` — Next.js pages (Home, Topics, Playlists, References, etc.).
- `/lib` — Utility functions.
- `/public` — Static assets.
- `/styles` — Tailwind & global styles.

---

## Quickstart

1. `npm install`
2. `npm run dev`
3. Visit [localhost:3000](http://localhost:3000)

---

## Contributing

- Add new references/playlists in `/content`
- Write interactive explanations/quizzes in MDX
- Improve visualizations in `/components/BridgeGraph.tsx`

---

## Inspired by

- "CS50", "Nand2Tetris", "Operating Systems: Three Easy Pieces", "Computer Networking: A Top-Down Approach", MIT OCW, and more.