# ZipShip Assets Site (Static)

A common static project with:
- `/assets/images` (JPG + SVG + favicon)
- `/assets/fonts` (local DejaVu Sans TTF)
- `/assets/css` + `/assets/js`
- Multi-page: `/about/`, `/pricing/`, `/legal/privacy.html`

## Deploy
- Netlify: uses `netlify.toml` (publish ".")
- Vercel: uses `vercel.json` (cleanUrls + cache headers for /assets)

No build tools, no dependencies. Pure static for pipeline testing.
