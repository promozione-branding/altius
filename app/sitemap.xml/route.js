import { NextResponse } from "next/server";
import { categories } from "@/Data/Data";

const BASE_URL = "https://www.altiuslighting.com";

export async function GET() {
  const now = new Date().toISOString();

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/products",
    "/contact",
    "/blogs",
    "/categories",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: now,
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? "1.0" : "0.8",
  }));

  // Category pages
  const categoryUrls = categories.map((category) => ({
    url: `${BASE_URL}/categories/${category.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: "0.8",
  }));

  // Product pages inside categories
  const productUrls = categories.flatMap((category) =>
    (category.products || []).map((product) => ({
      url: `${BASE_URL}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: "0.7",
    }))
  );

  // Combine all URLs
  const urls = [
    ...staticUrls,
    ...categoryUrls,
    ...productUrls,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastModified, changeFrequency, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}