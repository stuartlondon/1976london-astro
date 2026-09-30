# 1976 London Astro Portfolio

Modern Astro portfolio website for 1976 London, the freelance web development and creative technology studio run by Stuart Hunt.

This is a fresh Astro rebuild focused on:

- Showcasing real client work
- Generating project enquiries
- Presenting a personal, trustworthy studio identity
- Keeping the codebase clean and easy to extend

## Stack

- Astro 7
- TypeScript (strict Astro config)
- Component-based architecture
- Data-driven portfolio content

## Site Pages

- Home: Hero, studio introduction, featured projects, and calls to action
- Work: Full portfolio listing from shared project data
- Services: Outcome-focused service cards
- Contact: Enquiry form and direct contact details

## Design Direction

- Dark navy background
- High-contrast white type
- Cyan and teal accents
- Large spacing and premium modern presentation
- Mobile-first and accessibility-conscious UI

## Project Structure

```text
/
├── public/
│   ├── benstockley.png
│   ├── davidaustenstudio.png
│   ├── dragicacarlin.png
│   ├── fixmycar.png
│   └── redsplastering.png
├── src/
│   ├── components/
│   │   ├── ProjectCard.astro
│   │   ├── ServiceCard.astro
│   │   ├── SiteFooter.astro
│   │   └── SiteHeader.astro
│   ├── data/
│   │   └── projects.ts
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── services.astro
│   │   └── work.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Local Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Content Updates

Project cards are controlled in one place:

- Update project details in `src/data/projects.ts`

Each project supports:

- Name, category, description
- Technology tags
- Status badge (`Live` or `In Development`)
- Optional website URL
- Optional screenshot image path

## Contact Form Notes

The contact form is configured to send submissions via FormSubmit to:

- `stuart@1976.london`

On first use, FormSubmit requires one activation confirmation email.

## Deployment (Namecheap cPanel)

1. Run `npm run build`
2. Zip the contents of `dist/` (not the `dist` folder itself)
3. Upload to `public_html` via cPanel File Manager
4. Ensure `.htaccess` settings (if used) do not interfere with static files

## Future Enhancements

- Add mobile-specific project screenshots
- Add dedicated case study pages for each project
- Integrate analytics and enquiry conversion tracking
- Add form backend endpoint (optional) for more control

