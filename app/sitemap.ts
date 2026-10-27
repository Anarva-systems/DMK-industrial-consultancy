import { MetadataRoute } from "next";
import { SITE_DATA } from "@/constants/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_DATA.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
