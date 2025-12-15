# Caviar Larimi — Luxury Website (DE/EN/FR/IT) ## 1) Install
```bash
npm install
``` ## 2) Run locally
```bash
npm run dev
```
Open: http://localhost:3000/de ## 3) Email (Quote requests)
Copy `.env.example` to `.env.local` and fill in your SMTP + destination email:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO`
- `CONTACT_FROM` ## 4) Deploy to Vercel
- Import project
- Add Environment Variables (same as above)
- Deploy ## 5) Replace logo & images
- Put your logo in: `public/logo.png` (then update the Navbar box to show the image)
- Replace the demo images in: `public/images/`
