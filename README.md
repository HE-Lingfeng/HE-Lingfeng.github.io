# Lingfeng He · Personal Academic Homepage

Personal academic website of Lingfeng He, hosted via GitHub Pages. A hand-crafted static site — semantic HTML, CSS custom properties, vanilla JavaScript. No framework, no build step, no dependencies.

## Quick Start

```bash
# Preview locally
python3 -m http.server 8000
# Open http://localhost:8000

# Deploy — push to main, served automatically by GitHub Pages
git push origin main
```

## Project Structure

```
.
├── index.html          # Homepage: hero, selected work, research, writing, contact
├── css/
│   ├── style.css       # Design tokens, theme system, layout, glassmorphism, responsive
│   └── fonts.css       # System font stacks with CJK fallbacks
├── js/
│   └── theme.js        # Theme toggle with localStorage persistence
├── assets/
│   └── portrait.jpg    # Hero portrait
├── posts/              # Writing index (Hugo-generated, placeholder)
├── categories/         # Hugo-generated taxonomy pages
├── tags/               # Hugo-generated taxonomy pages
└── 404.html            # Custom 404 page
```

## Design System

**Dark-first, restrained, technical.** The visual language draws from X/Twitter's black-and-white minimalism and macOS system surfaces — quiet, premium, free of decoration.

| Layer | Approach |
|-------|----------|
| **Theme** | Dark mode default; light mode via `[data-theme="light"]`. Tokens defined as CSS custom properties. |
| **Color** | Pure black/white backgrounds, translucent neutral surfaces (`--glass`), sky-blue accent (`#1d9bf0`) reserved for links, actions, and focus states. |
| **Typography** | System sans-serif stack (`-apple-system`, `SF Pro Display`, Inter, Segoe UI, Arial). Single family throughout; no serif body text on the homepage. |
| **Surfaces** | Glassmorphism cards with subtle borders, layered shadows, and generous border-radius. Buttons are pill-shaped, controls are compact and system-like. |
| **Layout** | Spacious, scan-friendly sections. Two breakpoints at 900px and 560px. `clamp()`-based responsive typography. |
| **Interaction** | Theme toggle in the header. Hover states use subtle lift + blue accent transitions. |

## Content Philosophy

- **Homepage stays curated.** Selected publications, active projects, current research directions. Updated quarterly.
- **Posts accumulate.** Paper notes, experiment write-ups, project retrospectives, and journal entries live under `/posts/`, not on the homepage.
- **One page per mature project.** Each includes motivation, method, links, citation, and figures.
- **Stack stays lightweight.** Semantic HTML and CSS unless the site genuinely needs richer interaction (search, filtering, etc.).

## Deployment

Push to `main` — GitHub Pages serves the site automatically from the root of the repository. No CI pipeline, no build step.
