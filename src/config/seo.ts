import { DefaultSeoProps } from 'next-seo';

export const seoConfig: DefaultSeoProps = {
  title: 'İnci Oto Yedek Parça | Profesyonel ve Güvenilir Hizmet',
  description: 'İnci Oto Yedek Parça ile kaliteli ve orijinal oto yedek parçaları. Uzman ekibimiz ve geniş ürün yelpazemiz ile hizmetinizdeyiz. Hızlı teslimat, uygun fiyat.',
  canonical: 'https://inciotoyedekparca.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://inciotoyedekparca.vercel.app',
    title: 'İnci Oto Yedek Parça | Profesyonel ve Güvenilir Hizmet',
    description: 'İnci Oto Yedek Parça ile kaliteli ve orijinal oto yedek parçaları. Uzman ekibimiz ve geniş ürün yelpazemiz ile hizmetinizdeyiz. Hızlı teslimat, uygun fiyat.',
    site_name: 'İnci Oto Yedek Parça',
    images: [
      {
        url: 'https://inciotoyedekparca.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'İnci Oto Yedek Parça - Profesyonel Hizmet',
      },
    ],
  },
  twitter: {
    handle: '@inciotoyedek',
    site: '@inciotoyedek',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#3b82f6',
    },
    {
      name: 'author',
      content: 'İnci Oto Yedek Parça',
    },
    {
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
    {
      name: 'keywords',
      content: 'oto yedek parça, araba parçası, otomotiv, İnci Oto, kaliteli parça, güvenilir servis, orijinal parça, uygun fiyat',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
}; 