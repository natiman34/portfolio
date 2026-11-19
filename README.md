# Natnael Sema — Portfolio

Personal portfolio for an IT Support Specialist and Full-Stack Developer based in
Addis Ababa. The site presents professional experience, capabilities, projects,
certifications and contact options in a single responsive page.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui primitives
- React Router (single-page app with 404 route)
- EmailJS for the contact form

## Getting started

```sh
npm install
npm run dev       # http://localhost:3000
npm run build     # production bundle in dist/
npm run preview   # preview the production build
npm run lint
```

## Structure

```text
src/
  components/        Section components + shared design primitives
    Reveal.tsx       IntersectionObserver-based scroll reveal
    SectionHeading.tsx
    FilterTabs.tsx
    ThemeToggle.tsx
  data/portfolioData.ts   Single source of truth for all site content
  pages/Index.tsx         Page composition and theme state
  utils/portfolio.ts      Filtering, validation and theme helpers
public/
  fonts/            Self-hosted variable fonts (no third-party font requests)
  assets/aistudio/  Downloadable CV
```

All content lives in `src/data/portfolioData.ts`. Update that file to change text,
projects, experience or certifications without touching component code.

## Design system

- Colors, borders and radii are CSS custom properties in `src/index.css`
  (`:root` for light, `.dark` for dark mode).
- Type scale utilities: `heading-xl`, `heading-section`, `heading-sub`, `lede`,
  `eyebrow`, `meta-row`.
- Shared surface utilities: `panel`, `tag`, `hairline`.
- Fonts: Bricolage Grotesque (display), Plus Jakarta Sans (body), JetBrains Mono
  (labels), served locally from `public/fonts`.
- Motion respects `prefers-reduced-motion`; reveal animations are disabled for
  those users.

## Theme

Light, dark and system modes are supported. The preference is stored in
`localStorage` under `portfolio-theme` and applied before first paint by an inline
script in `index.html` to avoid a theme flash.

## Contact form

The form validates client-side, includes a honeypot and a submission cooldown, and
sends through EmailJS (`service_yhnqjss` / `template_c63z6jz`). If delivery fails,
the visitor is given a direct `mailto:` fallback. EmailJS identifiers live in
`src/components/Contact.tsx`.

## SEO and accessibility

- Title, description, Open Graph and Twitter metadata plus Person structured data
  are in `index.html`.
- `public/robots.txt` and `public/sitemap.xml` are included. Update the sitemap
  domain when the production URL is final.
- Semantic landmarks, a skip link, labelled forms, visible focus states and
  keyboard-operable menus are implemented throughout.

## Notes

- `src/utils/portfolio.test.ts` uses `node:test`. The test file imports
  `./portfolio` without an extension, so run it with a runner that resolves
  TypeScript paths (for example Vitest) or adjust the import if you run it with
  plain `node --test`.
- `src/assets/natnael-profile.jpg` is unused; `natnael-profile-real.jpg` is the
  portrait referenced by the hero section.
