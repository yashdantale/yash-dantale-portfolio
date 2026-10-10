# V4 — Mobile Motion & Premium Polish

This iteration builds on V3 without changing the live deployment.

## Enhancements
- Thin scroll-progress indicator at the top of the viewport.
- Scroll-aware floating mobile quick-navigation dock (About, Career, Work, Contact), shown after the visitor scrolls past the hero.
- Safe-area-aware mobile spacing for devices with home indicators.
- More tactile press states for project cards, flowchart nodes, principles, and navigation links.
- Mobile typography, contrast, tap targets, and card spacing refinements.
- Subtle hero name reveal/underline, atmospheric orbit, metric entrance, and tool-chip motion.
- Staggered reveal timing for content entering the viewport.
- `prefers-reduced-motion` overrides remain in place; the scroll listener is passive and updates through `requestAnimationFrame`.

## Build
The project keeps `output: "export"` for Cloudflare Pages. A production build could not be verified in this environment because `npm install --no-audit --no-fund` timed out. Please run `npm install` and `npm run build` locally before deploying.
