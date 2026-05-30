# Project notes for Claude

## Commits

- Do **not** add `Co-Authored-By: Claude` (or any Claude/Anthropic attribution) to commit messages in this repo.
- Use the configured git user (`Sam Ilic`) as the sole author. No co-author trailers.

## Conventions

- Component filenames are kebab-case (`cta-band.tsx`), default export PascalCase.
- Mobile-first Tailwind: base styles target small screens, layer `sm:`/`md:`/`lg:` modifiers on top.
- Single source of truth for business details and copy is `src/config/site.ts`.

## Business

- Trading name: **Total Shed Solutions Australia**.
- Legal entity: **PA & KS Contractors Pty Ltd** (ABN 51 124 752 512).
- Custom-made, 100% Australian-made steel sheds — domestic, rural, commercial and made-to-order.
- Service area: Canberra, Queanbeyan, Googong, Bungendore, Yass, and surrounding ACT & NSW.

## Theme

- Light-first, steel/charcoal base with an amber accent (`--color-amber-brand`) sampled from the logo.
- Dark/light/system theme via `ThemeProvider`; header, hero and footer are always-dark "wells" in both modes.

## Build / deploy

- Static export (`output: 'export'`) to `bin/`. Deployed via AWS CodePipeline → S3 + CloudFront (see `infrastructure/`).
