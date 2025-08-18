import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [{
        url: "https://elektrospeed3.pl",
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
    }];
}