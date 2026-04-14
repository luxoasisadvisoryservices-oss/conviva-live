# Conviva — conviva.live

AI-powered guest communication for holiday homes operators.

## Stack
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion

---

## Deploy to Vercel in 3 steps

### Option A — Drag & drop (fastest)
1. Run `npm run build` locally OR skip and just deploy the source
2. Go to [vercel.com](https://vercel.com) → New Project
3. Drag this folder into the Vercel UI → Deploy

### Option B — GitHub → Vercel (recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select the repo → click Deploy
4. Done. Vercel auto-deploys on every push.

### Connect your GoDaddy domain
1. In Vercel → Project Settings → Domains → Add `conviva.live`
2. Vercel gives you DNS records (A record + CNAME)
3. Go to GoDaddy → DNS Settings for conviva.live
4. Add the records Vercel provides
5. Done — usually live within 10–30 minutes

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project structure

```
conviva/
├── app/
│   ├── layout.tsx       # Root layout + fonts + metadata
│   ├── page.tsx         # Main page — assembles all sections
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── HowItWorks.tsx
│   ├── Intelligence.tsx
│   ├── Chatwoot.tsx
│   ├── HumanAI.tsx
│   ├── UseCases.tsx
│   ├── Benefits.tsx
│   ├── Comparison.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.mjs
└── tsconfig.json
```

---

Property of Lux Oasis Advisory & Services LLC
