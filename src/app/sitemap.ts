import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sumeet-urban-nest.sumitinfracon6.workers.dev";
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/home-2`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
