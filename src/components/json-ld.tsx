import { siteMetadata } from '@/config/site';

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteMetadata.siteUrl}/#business`,
    name: siteMetadata.title,
    legalName: siteMetadata.legalName,
    description: siteMetadata.longDescription,
    url: siteMetadata.siteUrl,
    image: `${siteMetadata.siteUrl}${siteMetadata.ogImage}`,
    logo: `${siteMetadata.siteUrl}${siteMetadata.siteImage}`,
    telephone: `+61${siteMetadata.phone.replace(/\D/g, '').replace(/^0/, '')}`,
    email: siteMetadata.email,
    priceRange: '$$',
    sameAs: [siteMetadata.facebook],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteMetadata.address.street,
      addressLocality: siteMetadata.address.suburb,
      addressRegion: siteMetadata.address.state,
      postalCode: siteMetadata.address.postcode,
      addressCountry: siteMetadata.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteMetadata.address.lat,
      longitude: siteMetadata.address.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    areaServed: siteMetadata.serviceAreas.map(area => ({
      '@type': 'Place',
      name: area,
    })),
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'ABN',
      value: siteMetadata.abn,
    },
    knowsAbout: [
      'custom steel sheds',
      'garages and carports',
      'farm and machinery sheds',
      'barns and stables',
      'commercial and industrial sheds',
      'Australian made steel',
      'Colorbond cladding',
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domestic sheds & garages' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rural & farm sheds' } },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Commercial & industrial sheds' },
      },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom made-to-order sheds' } },
    ],
  };

  return (
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
