# Claudia Origoni — Sito dell'autrice

Single-page site for the author: verified bibliography, biography with sources, and contact.

## Stack

- **Vite + React 18** (lightweight build, no SSR needed for a portfolio)
- **Tailwind CSS v3** with a custom literary theme (paper / ink / gold / sage palette,
  Cormorant Garamond + Playfair Display + Plus Jakarta Sans)
- **Framer Motion** for physics-based scroll reveals, modals, and page-level transitions
- **Lucide React** for icons

Book "covers" are generated typographically (`BookCover.jsx`): the real cover art is not
reproducible here, so no stock photo is presented as a cover.

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
    site.js               # Contact address + socials + list of public sources
  i18n/
    strings.js            # Every UI string, Italian primary + English
    LanguageContext.jsx   # IT/EN toggle, persists, syncs <html lang> and title
  components/
    Navbar.jsx            # Sticky blur-on-scroll nav + mobile menu + language toggle
    Hero.jsx              # Animated gradient field, floating glyphs, staggered copy
    Works.jsx             # Masonry grid (CSS columns) with hover zoom
    BookCover.jsx         # Typographic cover, four tones
    WorkModal.jsx         # Detail view: synopsis, ISBN facts, notes, external links
    About.jsx             # Biography + quote + sources
    Contact.jsx           # Inquiry form handed off to the visitor's mail client
    Footer.jsx
    Cursor.jsx            # Spring-physics cursor follower (fine pointers only)
    Reveal.jsx            # Shared fade-up-on-scroll wrapper
```

## Editing content

- New book: add an object to `src/data/works.js` (bilingual fields are `{ it, en }`).
  Text belongs to the data file, chrome labels to `src/i18n/strings.js`.
- Contact address and social profiles: `src/data/site.js`. While `email` is empty the
  site shows no contact details and the form says so instead of pretending to send.
- Source list: `sources` in `src/data/site.js`; `About.jsx` renders it.

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
