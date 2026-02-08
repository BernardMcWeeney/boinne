# Bóinne

Astro + Tailwind CSS v4.1 starter for a Boyne Valley history wiki.

## Quick Start

```bash
npm install
npm run dev
```

## Content Model

Data lives in `src/content` using Astro content collections:

- `eras`: timeline entities (e.g. Neolithic, Early Medieval)
- `locations`: places (e.g. Newgrange, Dowth)
- `posts`: field notes

Relationships:

- A location can belong to multiple eras (`locations[].eras`)
- A post belongs to one location and can belong to multiple eras (`posts[].location`, `posts[].eras`)
- A post can reference other posts (`posts[].related`)

This allows you to model layered sites where one place spans different historical phases.

## Map Modeling

The map uses `lat` and `lng` from each location entry and projects them into an SVG coordinate system.

To add a location:

1. Create `src/content/locations/<slug>.md`
2. Set `lat` and `lng`
3. Add at least one era reference

Markers on `/map/` automatically update and show note counts by location.

## Starter Routes

- `/` homepage
- `/map/` map + site register
- `/locations/` + `/locations/[slug]/`
- `/eras/` + `/eras/[slug]/`
- `/notes/` + `/notes/[slug]/`
