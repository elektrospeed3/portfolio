import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/_next/', '/favicon.ico']
        },
        sitemap: 'https://elektrospeed3.pl/sitemap.xml'
    }
}