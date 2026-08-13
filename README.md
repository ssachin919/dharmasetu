# Dharmasetu

Marketing site for **Dharmasetu** — a trust-first platform that connects devotees with verified Vedic Pandits in Kashi, Prayag, Haridwar, Ujjain, Vrindavan, and Ayodhya. Phase 1 is virtual-only: remote Sankalpa, live-streamed Havans where listed, video proof, and E-Prasad.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build    # production build
pnpm start    # serve the build
pnpm lint
```

Deploy on Vercel from this repo. No extra env vars are required for the marketing UI.

## Brand tokens

This project uses **Tailwind CSS v4**. Tokens live in `app/globals.css` (`:root` + `@theme inline`), not a v3 `tailwind.config.ts`.

| Token | Hex | Use |
|---|---|---|
| `setu-indigo` | `#1B2A5B` | Nav, hero, footer, headings on light |
| `sacred-cream` | `#F6F1E4` | Page background — never pure white |
| `temple-saffron` | `#E38A29` | CTAs, key stats — sparingly |
| `ink-indigo` | `#2A3355` | Body copy — never `#000000` |
| `tulsi-green` | `#5C7A5A` | Verified badges, secondary CTAs |

Fonts (via `next/font` in `app/layout.tsx`): **Fraunces** (headings), **Inter** (body), **Noto Serif / Sans Devanagari** (Sanskrit/Hindi).

Brand story and UVP: `brand-dharmasetu/`. Logo assets: `public/logo-transparent.png` and `public/logo-mark-transparent.png` (keep as-is).

## Where to swap real data

| What | Where |
|---|---|
| Rituals, prices, FAQs | `lib/rituals.ts` |
| Sacred hubs | `lib/hubs.ts` |
| Nav, WhatsApp, testimonials, steps | `lib/site.ts` |
| Ghat / Pandit photography | Replace `components/GhatStill.tsx` and `components/ProofFrame.tsx` with `next/image` stills. Do not use generic “spiritual” stock. |
| WhatsApp number | `contact.whatsappNumber` in `lib/site.ts` (+91 92891 94055) |
| Social URLs | `contact` in `lib/site.ts` (**TODO**) |

## Booking and payment (**TODO**)

The flow at `/book` collects ritual, form of the seva, hub, Name, Gotra, wish, date, and address, then hands off to WhatsApp.

- Wire a booking API (persist Sankalpa details).
- Add Razorpay / Stripe (or equivalent) once dakshina can be taken online.
- Until then, confirmation stays WhatsApp-first, as designed.

Search the codebase for `TODO` to find these stubs.

## Voice

Reverent, authentic, clear, warm. No “order,” “cart,” “package,” “customer,” “checkout,” or discount language. Solemn rites (health Jaap) are never upsold.
