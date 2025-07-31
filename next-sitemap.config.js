/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://inciotoyedekparca.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://inciotoyedekparca.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom transformation for specific pages
    const customPaths = {
      '/': {
        changefreq: 'daily',
        priority: 1.0,
      },
      '/hakkimizda': {
        changefreq: 'monthly',
        priority: 0.8,
      },
      '/hizmetler': {
        changefreq: 'monthly',
        priority: 0.8,
      },
      '/urunler': {
        changefreq: 'weekly',
        priority: 0.9,
      },
      '/iletisim': {
        changefreq: 'monthly',
        priority: 0.7,
      },
    };

    return {
      loc: path,
      changefreq: customPaths[path]?.changefreq || 'monthly',
      priority: customPaths[path]?.priority || 0.6,
      lastmod: new Date().toISOString(),
    };
  },
}; 