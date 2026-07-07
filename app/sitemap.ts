import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/caravan-site/",
    "/walks/",
    "/jets/",
    "/history/",
    "/find-us/",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "yearly",
    priority: path === "" ? 1 : 0.8,
  }));
}
