import { defineCollection, reference, z } from "astro:content";

const eras = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    span: z.string(),
    order: z.number(),
    color: z.string().default("#6b7280"),
    summary: z.string(),
    featuredImage: z.string().optional(),
  }),
});

const locations = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    county: z.string(),
    teaser: z.string(),
    lat: z.number(),
    lng: z.number(),
    heroImage: z.string(),
    eras: z.array(reference("eras")).min(1),
    status: z.enum(["seed", "surveyed", "published"]).default("seed"),
    tags: z.array(z.string()).default([]),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    heroImage: z.string(),
    location: reference("locations"),
    eras: z.array(reference("eras")).min(1),
    related: z.array(reference("posts")).default([]),
    discoveryType: z
      .enum(["ruin", "landscape", "artefact", "oral-history", "event"])
      .default("landscape"),
  }),
});

export const collections = {
  eras,
  locations,
  posts,
};
