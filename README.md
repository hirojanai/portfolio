# Portfolio

A carefully crafted portfolio that showcases both the work and the craft: modern UI patterns, intentional scroll behavior, and responsiveness across viewports.

---

## Techniques & craft

### Liquid glass navigation

The bottom navigation uses a **glassmorphism** treatment: semi-transparent background, subtle border, and backdrop blur so it reads as a floating bar that doesn’t overpower the content. It appears only when the user scrolls away from the hero, and the active section is derived from viewport position for accurate highlighting.

### Scroll-driven UX

- **Scroll lock on load** — On first load, the page is locked at the top so the hero has full attention. Overflow is restored after a short delay so the experience isn’t blocked.
- **Click to continue** — A clear call-to-action appears after that delay; one click smoothly scrolls to the About section and unlocks the rest of the journey.
- **Scroll to top on load** — Every navigation or refresh starts at the top, avoiding mid-page landings and keeping the narrative consistent.
- **Viewport-aware nav** — The floating nav reflects the section in the center of the viewport and stays out of the way at the very top.

Together, these choices control pacing and focus instead of relying on default browser scroll behavior.

### Responsive design

Layout and typography are tuned for **mobile, tablet, and desktop**:

- Breakpoint-based spacing, grid columns, and font sizes so content stays readable and well-proportioned.
- Touch-friendly targets and tap-to-reveal tooltips where hover isn’t available.
- Bottom padding so the floating nav never covers the last section on small screens.
- Skills grid that reflows (e.g. last row full-width on small viewports) to avoid awkward single-item rows.

### Tooltips & interaction polish

- **Viewport-safe tooltips** — Position is computed from trigger and viewport bounds so labels stay on-screen (including on mobile) and don’t get clipped.
- **Hover and tap** — Tooltips show on hover (desktop) and on tap (mobile), with logic so the same tap doesn’t both open and close.
- **Keyboard** — Triggers are focusable; tooltips open on focus and support Enter/Space. When the trigger is a link, the wrapper doesn’t steal focus so Tab and Enter behave correctly.
- **Skills** — Chip-style affordances (border, hover scale, focus ring) make it clear that icons are interactive without extra copy.

### Attention to detail

- **Accessibility** — Semantic structure, `aria-label`s, focus management, and keyboard support where it matters (tooltips, links, nav).
- **Performance** — Fonts loaded via `next/font`; no heavy icon libraries; minimal client JS where possible.
- **Consistency** — Shared design tokens (slate/indigo, borders, radii) and reusable `Text` variants so the UI feels coherent.

---

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).