# Claudia Origoni — Sito dell'autrice

Single-page site for the author: verified bibliography, literary journal, public events
with sources, biography, reading log and contact.

## Stack

- **Vite + React 18** (lightweight build, no SSR needed for a portfolio)
- **Tailwind CSS v3** with a custom literary theme (paper / ink / gold / sage palette,
  Cormorant Garamond + Playfair Display + Plus Jakarta Sans)
- **Framer Motion** for physics-based scroll reveals, modals, and page-level transitions
- **Lucide React** for icons

Book covers are the real publisher jacket images, scanned from the catalogues listed in
`sources` (`public/covers/`). Where no image is available `BookCover.jsx` draws a
typographic cover instead — no stock photo is ever presented as a cover.

## Bozze (placeholder content)

Six bibliography entries and all six journal posts are provisional texts agreed with the
author on 3 October 2026: they exist to show the structure of the page before the real
material arrives. Any entry with `draft: true` in `works.js`, `posts.js` or `events.js`
renders a terracotta **BOZZA / DRAFT** badge on the card and a banner in the detail view.
To confirm an entry: replace the text, then delete its `draft: true` line. The badge is
the only thing separating invented placeholder copy from verified fact on the live site,
so nothing marked draft should lose the flag without a check against a source.

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
    works.js              # Bibliography: title, publisher, year, ISBN, synopsis, links
    posts.js              # Journal articles: category, date, read time, blocks (p / quote)
    events.js             # Public events, each with the source it came from
    shelf.js              # Reading log: currently empty until the real titles arrive
    site.js               # Contact address + socials + list of public sources
  i18n/
    strings.js            # Every UI string, Italian primary + English
    LanguageContext.jsx   # IT/EN toggle, persists, syncs <html lang> and title
  components/
    Navbar.jsx            # Sticky blur-on-scroll nav + mobile menu + language toggle
    Hero.jsx              # Animated gradient field, floating glyphs, staggered copy
    Works.jsx             # Masonry grid (CSS columns) with hover zoom
    BookCover.jsx         # Cover art with typographic fallback, four tones
    WorkModal.jsx         # Detail view: synopsis, ISBN facts, notes, external links
    Journal.jsx           # Category filter + post cards with typographic header
    PostView.jsx          # Full-screen reader: progress bar, drop cap, pull quotes
    Events.jsx            # Vertical timeline of presentations, prizes, panels
    DraftBadge.jsx        # BOZZA / DRAFT marker for provisional entries
    About.jsx             # Biography + quote + sources
    Shelf.jsx             # Reading log cards: status, rating, progress, note
    Contact.jsx           # Inquiry form handed off to the visitor's mail client
    Footer.jsx
    Cursor.jsx            # Spring-physics cursor follower (fine pointers only)
    Reveal.jsx            # Shared fade-up-on-scroll wrapper
```

## Editing content

- New book: add an object to `src/data/works.js` (bilingual fields are `{ it, en }`).
  Text belongs to the data file, chrome labels to `src/i18n/strings.js`.
- Contact address and social profiles: `src/data/site.js`. The address is kept split and
  base64-encoded in `encodedEmail` so scrapers never see it in the shipped bundle; to change
  it, re-encode each half with `btoa('local-part')` and `btoa('domain')`. Delete the `email`
  line and the site shows no contact details, with the form saying so instead of pretending
  to send.
- Source list: `sources` in `src/data/site.js`; `About.jsx` renders it. Each event in
  `src/data/events.js` carries its own `sources` array, and `Events.jsx` prints them.
- Reading log: entries go in `src/data/shelf.js`, whose header comment documents the shape.
  While the array is empty the section shows an honest "not stocked yet" panel instead of
  placeholder titles — nothing here ships a book she has not actually read.

## Contact form

No backend on purpose: submitting opens a `mailto:` draft with the composed subject and
body, so nothing is stored or forwarded by this site. If a real inbox/form service is
wanted later, point `onSubmit` in `Contact.jsx` at Formspree, Resend, or a serverless function.

## Motion & accessibility

- Every Framer Motion animation respects `prefers-reduced-motion` via
  `<MotionConfig reducedMotion="user">`; CSS keyframe animations are disabled
  with a media query in `index.css`.
- The cursor follower only activates on fine-pointer devices.
- Modals lock body scroll, close on Escape and backdrop click, and expose
  `role="dialog"` / `aria-modal`.

## Deploy

The project is hosted on Vercel and connected to this GitHub repository:
every push to `main` triggers a production deploy automatically
(https://origoni-site.vercel.app). Preview deployments are created for other
branches. No manual `vercel deploy` is needed for normal changes.
