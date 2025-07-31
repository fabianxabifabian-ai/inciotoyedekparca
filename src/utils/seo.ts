interface Address {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface StructuredDataProps {
  type: string;
  name: string;
  description: string;
  url: string;
  telephone?: string;
  address?: Address;
  logo?: string;
  image?: string;
}

export function generateStructuredData(props: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': props.type,
    name: props.name,
    description: props.description,
    url: props.url,
    logo: props.logo || `${props.url}/logo.png`,
    image: props.image || `${props.url}/og-image.jpg`,
  };

  if (props.type === 'AutoPartsStore') {
    return {
      ...baseData,
      '@type': 'AutoPartsStore',
      telephone: props.telephone,
      address: props.address ? {
        '@type': 'PostalAddress',
        ...props.address,
      } : undefined,
      openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-16:00',
      priceRange: '$$',
      paymentAccepted: 'Cash, Credit Card',
      currenciesAccepted: 'TRY',
      sameAs: [
        'https://www.facebook.com/inciotoyedekparca',
        'https://www.instagram.com/inciotoyedekparca',
        'https://twitter.com/inciotoyedek',
      ],
    };
  }

  if (props.type === 'Organization') {
    return {
      ...baseData,
      '@type': 'Organization',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: props.telephone,
        contactType: 'customer service',
        availableLanguage: 'Turkish',
      },
    };
  }

  return baseData;
}

export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  brand: string;
  sku: string;
  price: number;
  currency: string;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: `https://schema.org/${product.availability}`,
      seller: {
        '@type': 'Organization',
        name: 'İnci Oto Yedek Parça',
      },
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
} 