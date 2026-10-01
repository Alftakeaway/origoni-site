# Claudia Origoni — Literary Portfolio & Journal

A modern, animated single-page site for a professional writer and book reviewer:
curated portfolio, immersive long-form journal, reading log, and press contact.

## Stack

- **Vite + React 18** (lightweight build, no SSR needed for a portfolio)
- **Tailwind CSS v3** with a custom literary theme (paper / ink / gold / sage palette,
  Cormorant Garamond + Playfair Display + Plus Jakarta Sans)
- **Framer Motion** for physics-based scroll reveals, modals, and page-level transitions
- **Lucide React** for icons
- Unsplash placeholder imagery (swap for real covers/portraits in `src/data/*`)

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production bundle
```

## Structure

```
src/
  App.jsx                 # Section composition + MotionConfig (reduced-motion aware)
  index.css               # Tailwind layers, paper-grain texture, article typography
  data/
    works.js              # Featured bibliography (drives Works grid + modal)
    posts.js              # Journal posts with block content (paragraphs / pull quotes)
    shelf.js              # Reading log entries (status, rating, progress)
  components/
    Navbar.jsx            # Sticky blur-on-scroll nav + mobile menu
    Hero.jsx              # Animated gradient field, floating glyphs, staggered copy
    Works.jsx             # Masonry grid (CSS columns) with hover zoom
    WorkModal.jsx         # Immersive detail view: synopsis, press quotes, links
    Journal.jsx           # Category filter + animated card grid
    PostView.jsx          # Full-screen reading view: progress bar, drop cap, pull quotes
    Shelf.jsx             # Bookshelf cards with ratings and progress bars
    Contact.jsx           # Inquiry form (agent / press / newsletter) + socials
    Footer.jsx
    Cursor.jsx            # Spring-physics cursor follower (fine pointers only)
    Reveal.jsx            # Shared fade-up-on-scroll wrapper
```

## Editing content

All copy lives in `src/data/`. Add a work, post, or shelf entry as a new object —
the grids, filters, and modals pick it up automatically. Post bodies use a tiny
block format: `{ type: 'p', text }` for paragraphs and `{ type: 'quote', text }`
for pull quotes.

## Motion & accessibility

- Every Framer Motion animation respects `prefers-reduced-motion` via
  `<MotionConfig reducedMotion="user">`; CSS keyframe animations are disabled
  with a media query in `index.css`.
- The cursor follower only activates on fine-pointer devices.
- Modals lock body scroll, close on Escape and backdrop click, and expose
  `role="dialog"` / `aria-modal`.

## Wiring the contact form

`Contact.jsx` currently shows a success state on submit. Point `onSubmit` at your
provider of choice (Formspree, Resend, a Next/Vercel function, etc.).

## Deploy

The project is hosted on Vercel and connected to this GitHub repository:
every push to `main` triggers a production deploy automatically
(https://origoni-site.vercel.app). Preview deployments are created for other
branches. No manual `vercel deploy` is needed for normal changes.
