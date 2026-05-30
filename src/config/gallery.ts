export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

// Project gallery. To add photos: drop the files into `public/images/gallery/`
// and list them here. The <Gallery> component renders these as a responsive
// grid; while the list is empty it shows branded placeholder tiles instead.
//
// Example:
//   { src: '/images/gallery/machinery-shed-bungendore.jpg',
//     alt: 'Custom machinery shed built in Bungendore',
//     category: 'Rural & farm' },
export const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/shed-01.jpg',
    alt: 'Bushmans rural water tanks loaded on a truck for delivery to a property in the Canberra region',
    category: 'Rural & farm',
  },
  {
    src: '/images/gallery/shed-02.jpg',
    alt: 'Round poly rainwater tank installed on a prepared pad on a rural block',
    category: 'Rural & farm',
  },
  {
    src: '/images/gallery/shed-03.jpg',
    alt: 'Large corrugated rural water tank delivered and positioned beside the delivery truck',
    category: 'Rural & farm',
  },
  {
    src: '/images/gallery/shed-04.jpg',
    alt: 'Interior of an open-bay machinery shed with steel framing and a concrete floor',
    category: 'Rural & farm',
  },
  {
    src: '/images/gallery/shed-05.jpg',
    alt: 'Charcoal Colorbond steel shed built on a rural acreage block',
    category: 'Rural & farm',
  },
  {
    src: '/images/gallery/shed-06.jpg',
    alt: 'Black multi-bay steel garage with roller doors and a gravel apron',
    category: 'Domestic',
  },
  {
    src: '/images/gallery/shed-07.jpg',
    alt: 'Custom black steel garage with roller doors built on a country property',
    category: 'Domestic',
  },
  {
    src: '/images/gallery/shed-08.jpg',
    alt: 'Steel portal frame part-clad in Colorbond during construction of a custom shed',
    category: 'Commercial',
  },
  {
    src: '/images/gallery/shed-09.jpg',
    alt: 'Wide low-profile cream Colorbond farm shed in a rural paddock',
    category: 'Rural & farm',
  },
  {
    src: '/images/gallery/shed-10.jpg',
    alt: 'Pre-punched steel purlins and framing components laid out on site ready to assemble',
    category: 'Custom',
  },
  {
    src: '/images/gallery/shed-11.jpg',
    alt: 'Large steel portal frame being erected for a wide-span shed under a clear sky',
    category: 'Commercial',
  },
  {
    src: '/images/gallery/shed-12.jpg',
    alt: 'Inside a large clear-span steel shed with roller doors and a polished concrete floor',
    category: 'Commercial',
  },
  {
    src: '/images/gallery/shed-13.jpg',
    alt: 'Two-tone cream and grey Colorbond shed with an attached awning on a rural property',
    category: 'Rural & farm',
  },
  {
    src: '/images/gallery/shed-14.jpg',
    alt: 'Custom Colorbond steel work on a Canberra-region property',
    category: 'Custom',
  },
  {
    src: '/images/gallery/shed-15.jpg',
    alt: 'Green Colorbond farm shed with a freshly poured concrete slab during construction',
    category: 'Rural & farm',
  },
  {
    src: '/images/gallery/shed-16.jpg',
    alt: 'Steel shed framing and roof structure viewed from inside during construction',
    category: 'Custom',
  },
  {
    src: '/images/gallery/shed-17.jpg',
    alt: 'Large two-storey American barn-style steel shed with an open carport awning',
    category: 'Rural & farm',
  },
  {
    src: '/images/gallery/shed-18.jpg',
    alt: 'Wide grey Colorbond steel shed with roller doors on a cleared rural block',
    category: 'Commercial',
  },
  {
    src: '/images/gallery/shed-19.jpg',
    alt: 'Cream skillion-roof garage with multiple black roller doors on a grassed block',
    category: 'Domestic',
  },
  {
    src: '/images/gallery/shed-20.jpg',
    alt: 'Grey Colorbond shed with a dark roller door and gravel surround',
    category: 'Domestic',
  },
  {
    src: '/images/gallery/shed-21.jpg',
    alt: 'Inside a completed steel workshop with a smooth concrete floor and roller-door access',
    category: 'Custom',
  },
];
