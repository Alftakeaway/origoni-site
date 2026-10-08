# Claudia Origoni — Sito dell'autrice

Single-page site for the author: verified bibliography, literary journal, public events
with sources, biography, reading log and contact. Italian first, with an English toggle:
every text field in the data files is `{ it, en }`, Italian before English.

## Stack

- **Vite 5 + React 18** (lightweight build, no SSR needed for a portfolio)
- **Tailwind CSS v3** with a custom literary theme (paper / ink / gold / sage palette,
  Cormorant Garamond + Playfair Display + Plus Jakarta Sans). Held at v3 on purpose, see
  [docs/adr/0004](docs/adr/0004-tailwind-3-niente-v4.md).
- **Framer Motion** for physics-based scroll reveals, modals, and page-level transitions
- **Lucide React** for icons

Covers are the publisher's own jacket art: either the catalogue image or a photograph of a
copy that belongs to the author, and `coverCredit` on the card says which. Where no image
exists `BookCover.jsx` draws a typographic cover in one of four tones instead. No stock
photo is ever presented as a cover. The same holds for the event photographs in
`public/foto/`: they are either prints from her archive or images the organiser published
and the card credits as a source.

## Docs and rules

- [CHANGELOG.md](CHANGELOG.md): what changed, and which source made it possible. Versions
  follow deploys, so one entry is one push to `main`.
- [GLOSSARY.md](GLOSSARY.md): how titles, sections and the award are written. A title is
  quoted as it is printed, never shortened.
- `docs/adr/`: five decisions. Italian as the primary language, the mandatory BOZZA badge,
  the form without a backend, Tailwind 3, and no long dash in Italian prose.
- `docs/corrispondenza/`: the letters to the author asking for the material still missing,
  in the version cleared for a public repository.

## Bozze (placeholder content)

As of 8 October 2026, eight of the nineteen bibliography entries, all six journal posts,
six of the fourteen event cards and the one flash note are provisional: some are placeholder
texts agreed with the author on 3 October 2026, to show the structure of the page before the
real material arrives, and the rest are real works missing one catalogue detail. Any entry
with `draft: true` in `works.js`, `posts.js`, `events.js` or `flashes.js` renders a
terracotta **BOZZA / DRAFT** badge on the card and a banner in the detail view. To confirm
an entry: replace the text, then delete its `draft: true` line. The badge is the only thing
separating invented placeholder copy from verified fact on the live site, so nothing marked
draft should lose the flag without a check against a source. Each promotion gets a line in
[CHANGELOG.md](CHANGELOG.md), with the source and the commit.

Drafts are dropped from the RSS as well, since a feed has no way to mark them. While every
journal post is provisional the generated `feed.xml` holds no items, and the build removes
the `<link rel="alternate">` pointer from `dist/index.html` together with the on-page «Feed
RSS» link: the site advertises a subscription only once there is something to receive.

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/, then dist/feed.xml from scripts/build-feed.mjs
npm run preview  # serve the production bundle
npm run press-kit  # public/press/press-kit-claudia-origoni.pdf, from the same data
```

## Structure

```
index.html                 # Head, fonts, and the RSS pointer the build may drop
src/
  main.jsx, App.jsx        # Mount, then the sections under one MotionConfig
  index.css, contrast.css  # Tailwind layers, paper grain, article typography, high contrast
  data/
    works.js               # Bibliography: title, subtitle, type, year, publisher, isbn,
                           # pages, coAuthors, tone, cover, coverCredit, synopsis, notes,
                           # press (quote, outlet, byline, date, href), excerpt (credit +
                           # paragraphs), links, draft
    posts.js               # Journal: category, `iso` date, read time, excerpt, blocks
                           # (p / quote), draft
    events.js              # Appointments: sort, time, dateLabel, place, role, detail,
                           # photo, photoCaption, sources, wholeMonth, draft
    shelf.js               # Reading log: status (reading / finished / queued), rating,
                           # progress, note, cover, tint
    flashes.js             # «Fuori dai libri»: one line or two, an `iso` date, draft
    site.js                # Contact address + socials + press kit path + list of sources
  i18n/
    strings.js             # Every UI string, Italian primary + English
    LanguageContext.jsx    # IT/EN toggle, persists, syncs <html lang> and the title
  components/              # Navbar, Hero, Works, BookCover, WorkModal, Journal, PostView,
                           # ReadingControls, Events, About, Shelf, Contact, Flashes,
                           # Footer, Cursor, DraftBadge, Reveal
  utils/ics.js             # .ics composed at runtime as a data URI, floating time
scripts/build-feed.mjs     # dist/feed.xml from posts.js, minus the drafts
scripts/make-press-kit.mjs # public/press PDF: bio, bibliography, press, photographs
public/
  covers/  foto/  shelf/   # Jacket images, event photographs, reading-log covers
  press/                   # The generated press kit PDF, served as it stands
  robots.txt  sitemap.xml  # Crawlers welcome, and the one page listed for them
  og.jpg                   # 1200x630 share card: the portrait and the hero's own words
```

## Editing content

- New book: an object in `src/data/works.js`, bilingual text fields. Words that belong to
  the book stay in the data file; interface labels go to `src/i18n/strings.js`.
- Press quote: a `press` entry carries the sentence exactly as printed, the outlet, the
  byline where the page shows one, the date and the `href` of the page it came from. The
  sentence is not bilingual and must not be translated: an English reader gets the Italian
  under an English label, because rendering it in English would put words in the critic's
  mouth that nobody wrote.
- Extract: an `excerpt` carries a page of the book as printed, paragraph by paragraph, with
  a `credit` line naming the page and the volume. Only where the page has been photographed
  and read: the text is transcribed, not summarised, and the misprints stay with it. Where
  the printed page is bilingual both languages stand; where it is not, the English site shows
  the Italian and says so in the credit.
- New appointment: `src/data/events.js`, with the `sources` entry that documents it. An
  entry whose day is unknown gets `wholeMonth: true`, and one with no date at all sorts on
  `0000-00-00` and lands at the end of the timeline: both keep their place in the page, and
  neither offers the calendar file, which would have to invent a date.
- Reading log: entries go in `src/data/shelf.js`, whose header comment documents the shape.
  Only books she has actually read, and the `note` line renders only where she wrote one, so
  a card can carry title, author and status alone. The `shelf.length === 0` branch in
  `Shelf.jsx` is a fallback for an emptied array: it says the shelf is not stocked rather
  than inventing titles.
- Flash note: `src/data/flashes.js` holds «Fuori dai libri», the notes at the foot of the
  page that are not about books. An entry is a date and one line or two — no title, no
  category, no «read all», since the note ends where it stands. `Flashes.jsx` sorts on `iso`
  and shows the three newest. The words are the author's own: a lived experience is not
  something the repository can invent, so the section launched with a single `draft: true`
  placeholder that says it is a test, and real entries replace it as she dictates them.
- Contact address and social profiles: `src/data/site.js`. The address is kept split and
  base64-encoded in `encodedEmail`, so it is not sitting in the open in the shipped bundle;
  that keeps the casual crawler, not a reader who goes looking, which is the whole of what
  the encoding claims to do. To change it, re-encode each half with `btoa('local-part')`
  and `btoa('domain')`. Delete the `email` line and the site shows no contact details, with
  the form saying so instead of pretending to send.
- Source list: `sources` in `src/data/site.js`; `About.jsx` renders it. Each event in
  `src/data/events.js` carries its own `sources` array, and `Events.jsx` prints them.
- Press kit: `npm run press-kit` rebuilds `public/press/press-kit-claudia-origoni.pdf` from
  the same data the pages read, so the PDF cannot say something the site does not already
  say. Run it again after any change to bio, bibliography, press or event photographs; it
  needs Chrome, and takes `CHROME=` to point at another binary. The download sits in the
  contact section, and `pressKit.href` in `src/data/site.js` is where the path lives.
- Language: Italian prose takes no long dash ([docs/adr/0005](docs/adr/0005-nessun-trattino-lungo-in-italiano.md)),
  and titles are copied exactly as printed (`GLOSSARY.md`).

## Contact form

No backend on purpose: submitting opens a `mailto:` draft with the composed subject and
body, so nothing is stored or forwarded by this site
([docs/adr/0003](docs/adr/0003-form-senza-backend.md)). If a real inbox or a form service
is wanted later, point `onSubmit` in `Contact.jsx` at it.

## Reading, motion and accessibility

- `ReadingControls.jsx` offers three text sizes and a high-contrast mode, saved in
  `localStorage` under `co-read`; the contrast rules live in `src/contrast.css`.
- The language choice persists the same way under `co-lang`, and syncs `<html lang>` with
  the document title.
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

## Being found

`robots.txt` allows everything and points at `sitemap.xml`, which holds the one page the
site has: the section links are fragments of it, not separate addresses. The `canonical`,
the `og:*` and `twitter:*` tags in `index.html` and the sitemap all carry the absolute
address, so a domain of her own means editing those three places and nothing else. The
share card is `public/og.jpg`, 1200x630, built from the portrait and the words the hero
already uses.
