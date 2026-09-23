import type { MetadataRoute } from "next";
import { products } from "@/lib/site-data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mizavaraglobal.com";
  const routes = [
    "",
    "/about",
    "/products",
    "/services",
    "/export-import",
    "/contact",
    "/privacy-policy",
    "/terms",
    ...products.map((product) => `/products/${product.slug}`),
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
