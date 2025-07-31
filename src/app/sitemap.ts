// app/sitemap.ts

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://grobalsite.vercel.app'; // あなたのサイトのURL

    return [
        {
            url: baseUrl, // トップページのURL
            lastModified: new Date(), // 最終更新日
        },
        // 例：もし `/about` というページがあれば、以下のように追加します
        // {
        //   url: `${baseUrl}/about`,
        //   lastModified: new Date(),
        // },
    ];
}