export function PersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammed Jasim M C',
    jobTitle: 'TypeScript MERN Stack Developer | Full Stack Developer',
    description:
      'TypeScript-focused Full Stack Developer specializing in MERN stack, React, Node.js, and scalable cloud deployments. Currently working as Software Developer at SolutionsChamps Technologies, Coimbatore.',
    url: 'https://jasim-sct.vercel.app',
  image: 'https://jasim-sct.vercel.app/og-image.png',
    sameAs: [
      'https://github.com/mjasimmc',
      'https://linkedin.com/in/mjasimmc',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Brototype',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'SolutionsChamps Technologies',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
    },
    knowsAbout: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'MERN Stack',
      'Full Stack Development',
      'Cloud Deployment',
      'DevOps',
      'Nginx',
      'AWS',
      'DigitalOcean',
    ],
    email: 'mjasimmc@gmail.com',
    telephone: '+91-9778218906',
  }
}

export function WebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Muhammed Jasim M C - Portfolio',
  url: 'https://jasim-sct.vercel.app',
    description:
      'Portfolio website of Muhammed Jasim M C, a TypeScript-focused Full Stack Developer specializing in MERN stack development.',
    author: {
      '@type': 'Person',
      name: 'Muhammed Jasim M C',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://jasim-sct.vercel.app?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function OrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SolutionsChamps Technologies',
  url: 'https://solutionschamps.com',
    logo: 'https://jasim-sct.vercel.app/og-image.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9778218906',
        contactType: 'customer support',
        areaServed: 'IN',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
  }
}

export function ProjectSchema(project: {
  name: string
  description: string
  tech: string[]
  year?: string
  url?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Person',
      name: 'Muhammed Jasim M C',
    },
    datePublished: project.year || '2024',
    programmingLanguage: project.tech,
    url: project.url || 'https://jasim-sct.vercel.app/projects',
  }
}

export function BreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function LocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Muhammed Jasim M C',
    url: 'https://jasim-sct.vercel.app',
    telephone: '+91-9778218906',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      postalCode: '',
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: ['https://github.com/mjasimmc', 'https://linkedin.com/in/mjasimmc'],
  }
}

