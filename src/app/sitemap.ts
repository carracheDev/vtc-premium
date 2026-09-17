import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vtc-premium-seven.vercel.app";

const pages: MetadataRoute.Sitemap = [
  { url: `${siteUrl}/`, priority: 1, changeFrequency: "weekly" },
  { url: `${siteUrl}/services`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${siteUrl}/zone-intervention`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${siteUrl}/contact`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${siteUrl}/chauffeur-prive-paris`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${siteUrl}/chauffeur-prive-boulogne-billancourt`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${siteUrl}/chauffeur-prive-neuilly-sur-seine`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${siteUrl}/chauffeur-prive-saint-denis`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${siteUrl}/chauffeur-prive-versailles`, priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({ ...page, lastModified: new Date() }));
}
