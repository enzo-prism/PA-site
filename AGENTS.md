# Project Guide

## Canonical Repo

- GitHub repository: `https://github.com/enzo-prism/PA-site.git`
- Default branch: `main`
- Local project root: `/Users/enzo/ph`
- Git remote name: `origin`

## Project Purpose

This repository contains the private-share stakeholder and investor site for the Philippine Athletics App.

The brief is intentionally minimal, visual, and easy to understand. When making changes, prefer:

- sparse copy over dense explanation
- clear SVG/system diagrams over abstract decoration
- simple stakeholder flows over presentation-style complexity
- calm, modern UI with strong information hierarchy

## Local Workflow

- Install dependencies: `npm install`
- Start dev server: `npm run dev -- --hostname 127.0.0.1 --port 3000`
- Lint: `npm run lint`
- Production build: `npm run build`

## Product Notes

- The site is private-share and guarded by `src/proxy.ts`.
- Core content lives in `src/content/site-content.ts`.
- Shared public config lives in `src/lib/site-config.ts`.
- Most visual storytelling lives in `src/components/site/`.

## Important URLs

- Local app: `http://127.0.0.1:3000`
- Web app demo: `https://v0-philippine-athletics-design.vercel.app`

## Environment Notes

- `PH_SHARE_CODE` controls the private access gate.
- `NEXT_PUBLIC_WEB_APP_DEMO_URL` controls the external demo link targets.
- `NEXT_PUBLIC_DATA_ROOM_URL` can point to deeper investor materials.
- Media URLs are optional and can be configured through `.env.local`.
