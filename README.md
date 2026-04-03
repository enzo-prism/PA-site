# Philippine Athletics Stakeholder Site

Private-share stakeholder and investor website for the **Philippine Athletics App**.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Small shadcn-style primitive layer for buttons, sheet, accordion, and form input

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Set `PH_SHARE_CODE` to the code you want to share privately.
3. Optionally add contact details, data room links, and final media asset URLs.
4. Install dependencies and run the app:

```bash
npm install
npm run dev
```

## Environment variables

- `PH_SHARE_CODE`
  Access code for the private-share gate. In development only, the app falls back to `champion` if this is unset.
- `NEXT_PUBLIC_CONTACT_EMAIL`
  Contact CTA destination used across the site.
- `NEXT_PUBLIC_DATA_ROOM_URL`
  Optional link to a deck, PDF, or deeper investor materials.
- `NEXT_PUBLIC_SITE_URL`
  Optional canonical URL used for metadata base.
- `NEXT_PUBLIC_OVERVIEW_VIDEO_URL`
  Optional final explainer video source.
- `NEXT_PUBLIC_OVERVIEW_VIDEO_POSTER_URL`
  Optional poster image for the explainer video.
- `NEXT_PUBLIC_PLATFORM_AUDIO_URL`
  Optional audio narration file for the platform page.
- `NEXT_PUBLIC_ECOSYSTEM_AUDIO_URL`
  Optional audio narration file for the ecosystem page.
- `NEXT_PUBLIC_BUSINESS_AUDIO_URL`
  Optional audio narration file for the business page.

## Notes

- The site is intentionally `noindex` and serves a `robots.txt` that disallows crawling.
- Access is enforced through `src/proxy.ts` using a cookie-based private-share flow.
- All core copy, metrics, media slot metadata, and page structure live in typed local content files so the site can be iterated quickly without adding CMS overhead.
