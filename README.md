# Bot One Website

A minimal, responsive landing page for **Bot One** — an AI-powered Telegram bot that reads your PDFs and answers your questions.

Built with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no external dependencies.

## Quick Start

Open `index.html` directly in your browser, or serve it locally:

```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

## File Structure

```
bot-one-website/
├── index.html          # Single-page site with all sections
├── css/
│   └── style.css       # Design system — colors, typography, layout, responsive
├── js/
│   └── main.js         # Smooth scroll, mobile nav, scroll animations
├── assets/             # Place images and GIFs here
└── README.md
```

## Customization

### Telegram Bot Link

Search for `https://t.me/YOUR_BOT_USERNAME` in `index.html` and replace all instances with your actual Telegram bot link.

### Demo GIF

Find the "Demo GIF coming soon" placeholder in `index.html` (the `#demo` section). Replace it with:

```html
<img src="assets/demo.gif" alt="Bot One demo" />
```

### Step-by-Step Guide

Edit the ordered list in the `#guide` section of `index.html` with your actual instructions.

### Content & Pricing

All content is in `index.html`. Pricing cards are in the `#pricing` section — update prices, credit counts, and notes as needed.

## Deployment

This is a static site. Deploy it anywhere:

- **GitHub Pages** — push to a `gh-pages` branch or enable Pages in repo settings
- **Netlify / Vercel** — point to the repo, no build step needed
- **Any static host** — just upload the files

## Design Principles

- System fonts only — zero external requests
- Mobile-first responsive layout
- Generous whitespace, strong typography hierarchy
- Single accent color (`#0071e3`)
- Subtle scroll animations via Intersection Observer
- Every element earns its place
