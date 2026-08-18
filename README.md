# Slightly Functioning

The website for Slightly Functioning, an adult-focused World of Warcraft guild on Burning Legion EU.

## Run locally

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Upload to GitHub

1. Create a new empty GitHub repository.
2. Extract this project and open a terminal inside the folder.
3. Run:

```bash
git init
git add .
git commit -m "Add Slightly Functioning guild website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

The project can be deployed with any hosting provider that supports Next.js, including Vercel, Netlify or Cloudflare.

## Application form

The join form opens the visitor's email application and prepares an email addressed to the guild contact. No applicant information is stored by the website.

## Main files

- `app/page.tsx`: page content and application form
- `app/globals.css`: layout, branding and responsive styling
- `app/layout.tsx`: metadata and shared page layout
- `public/`: guild logos and raid imagery

World of Warcraft and Blizzard Entertainment are trademarks of Blizzard Entertainment. This fan-made guild website is not affiliated with Blizzard Entertainment.
