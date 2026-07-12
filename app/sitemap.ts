import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aerixenergy.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Add your other pages here if you have them, for example:
    // {
    //   url: 'https://aerixenergy.com/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
