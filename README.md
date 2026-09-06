# Morrison Handyman Services — Website

Marketing site for **Morrison Handyman Services** (Drew Morrison), a New Hampshire
handyman serving New England. Built with **Next.js (App Router) + Supabase +
Tailwind CSS**, with a contact form that stores submissions in Supabase and
forwards them to email via SMTP.

## Pages

| Route       | Purpose                                                        |
| ----------- | -------------------------------------------------------------- |
| `/`         | Home — hero, services overview, trust points, CTA              |
| `/services` | Detailed services: repairs, installations, painting, carpentry, pressure washing |
| `/about`    | About Drew Morrison                                            |
| `/contact`  | Contact form (Supabase + email forwarding) + phone CTA         |

SEO is optimized for **"New Hampshire handyman"** and **"New England handyman"**:
keyword-focused titles/H1s, meta descriptions, OpenGraph tags, `sitemap.xml`,
`robots.txt`, and JSON-LD `HomeAndConstructionBusiness` structured data.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev
```

The site runs without any env vars — the contact form just returns a friendly
"please call instead" error until Supabase and/or SMTP are configured.

## Setup

### 1. Supabase (stores contact submissions)

1. Create a free project at [supabase.com](https://supabase.com).
2. In the SQL Editor, run `supabase/migrations/0001_contact_submissions.sql`.
3. In **Settings → API**, copy the Project URL and `service_role` key into
   `.env.local` as `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

Submissions appear in the `contact_submissions` table (RLS is enabled, so only
the service role — i.e. the API route — can read them).

### 2. Email forwarding (Gmail / Nodemailer)

1. Turn on 2-Step Verification for the Gmail account.
2. Create an **App Password** (Google Account → Security → App passwords).
3. Set in `.env.local`:
   - `GMAIL_USER` = the Gmail address
   - `GMAIL_APP_PASSWORD` = the app password
   - `CONTACT_EMAIL` = where requests get delivered (defaults to
     drewmorrisonhandyman@gmail.com if unset)

### 3. Deploy

The easiest path is [Vercel](https://vercel.com): import the repo, add the same
environment variables, and deploy. Set `NEXT_PUBLIC_SITE_URL` to the real
domain so sitemap/OG tags/JSON-LD use it.

After deploying, submit `https://YOUR-DOMAIN/sitemap.xml` in
[Google Search Console](https://search.google.com/search-console) and create a
[Google Business Profile](https://business.google.com) — the single highest-impact
local-SEO step for a service business.

## Swapping in real photos

Drop images into `public/images/`:

- `drew-morrison.jpg` — portrait on the About page (currently a placeholder)
- `pressure-washing-deck.jpg` — featured job photo (home + services)

## Build

```bash
npm run build && npm start
```
