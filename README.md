# HE-Lingfeng.github.io

Lingfeng He's personal website, published with GitHub Pages.

## Site direction

This site is designed as a refined, long-term academic homepage rather than a short-lived portfolio splash page. The direction is rational and restrained at the system level, with a small poetic layer for literature, art, and slower personal notes.

- `index.html`: homepage, selected work, research direction, writing gallery, contact.
- `css/style.css`: global visual system, light/dark theme tokens, responsive layout, and compatibility styles for generated pages.
- `js/theme.js`: lightweight theme toggle for switching between dark and light appearances.
- `/posts/`: future writing index for research notes, project logs, paper reading, experiments, and the quiet journal.

## Design language

The current visual style is inspired by X/Twitter's black-and-white restraint and macOS's polished system surfaces. It should feel quiet, technical, and premium rather than decorative.

- **Theme**: dark mode is the default. Keep a matching light mode through `:root[data-theme="light"]`.
- **Color**: use pure black or pure white as the page background, near-neutral surfaces for cards, and X-style sky blue (`#1d9bf0`) only for primary actions, links, labels, hover borders, and focus-like emphasis.
- **Typography**: use the Apple/system sans-serif stack throughout (`-apple-system`, `SF Pro Display`, `SF Pro Text`, Inter, Segoe UI, Arial). Avoid mixing serif body text back into the homepage unless a future writing page intentionally needs an editorial mode.
- **Surfaces**: cards and header use translucent glass-like backgrounds, subtle borders, and soft layered shadows. Keep card corners generous (`--radius-card`) and panel corners slightly larger (`--radius-panel`).
- **Layout**: prefer spacious, scan-friendly sections with a restrained information hierarchy. Avoid marketing-style hero decorations, gradients, or extra ornamental shapes.
- **Interaction**: controls should be compact and system-like. Buttons are pill-shaped, theme switching is handled by a small header toggle, and hover states use subtle lift plus blue border/color changes.

## Maintenance plan

1. Keep the homepage curated. Add only selected publications, important projects, and current research directions.
2. Use posts for accumulation. Put paper notes, experiment write-ups, project retrospectives, and quiet journal entries under `/posts/` instead of expanding the homepage indefinitely.
3. Add one project page per mature project. Each project page should include motivation, method, links, citation, and representative figures.
4. Keep the quiet journal restrained. Literature and art can appear as a small writing category, but should not compete with the academic identity of the homepage.
5. Refresh the homepage quarterly. Update status, publications, links, and research focus without changing the core black/white/blue system language.
6. Keep the stack lightweight. Prefer semantic HTML and CSS unless the site genuinely needs search, filtering, or richer interaction.
