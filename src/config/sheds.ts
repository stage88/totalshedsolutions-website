import { Factory, House, PencilRuler, Tractor, type LucideIcon } from 'lucide-react';

export interface ShedCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  examples: string[];
  icon: LucideIcon;
  image: string;
}

// Single source of truth for the four shed categories — used by the home page
// cards (shed-range) and the detailed /sheds page sections.
export const shedCategories: ShedCategory[] = [
  {
    id: 'domestic',
    number: '01',
    title: 'Domestic & backyard',
    tagline: 'Garages, carports, workshops and storage built to suit your block and your council.',
    description:
      'From a tidy single garage to a proper home workshop, we build domestic sheds that fit the block, match the house and stand up to Canberra winters. Every shed is made to order, so the size, door positions and roof style are yours to choose — not picked from a fixed catalogue.',
    examples: [
      'Single, double & triple garages',
      'Carports, lean-tos & awnings',
      'Backyard workshops & hobby sheds',
      'Garden & general storage sheds',
    ],
    icon: House,
    image: '/images/gallery/shed-06.jpg',
  },
  {
    id: 'rural',
    number: '02',
    title: 'Rural & farm',
    tagline: 'Hay, machinery, barns and stables engineered for acreage and the elements.',
    description:
      'Sheds that earn their keep on the land. We design open-front hay sheds, enclosed machinery sheds, American barns and stables with the spans, heights and bay layouts rural properties around the ACT and NSW actually need — engineered for local wind and snow loads.',
    examples: [
      'Machinery & equipment sheds',
      'Hay sheds & open-front shelters',
      'American barns & stables',
      'Lean-tos, awnings & extensions',
    ],
    icon: Tractor,
    image: '/images/gallery/shed-17.jpg',
  },
  {
    id: 'commercial',
    number: '03',
    title: 'Commercial & industrial',
    tagline: 'Warehouses, depots and workshops with the clear spans your business needs.',
    description:
      'When the shed is part of the business, the details matter. We build warehouses, workshops, depots and industrial units with wide clear spans, high clearances and the access — roller shutters, PA doors, mezzanines — to keep the work moving. Built to spec and to code.',
    examples: [
      'Warehouses & storage facilities',
      'Workshops & trade depots',
      'Industrial units & factories',
      'High-clearance, wide-span structures',
    ],
    icon: Factory,
    image: '/images/gallery/shed-12.jpg',
  },
  {
    id: 'custom',
    number: '04',
    title: 'Custom & made-to-order',
    tagline: 'Site-specific engineering for any size, layout, opening and finish you can sketch.',
    description:
      "If you can draw it, we can usually build it. Every Total Shed Solutions shed is custom — so this is simply where we start from a blank page. Bring a rough sketch or a clear idea and we'll engineer it to your site, your purpose and the full Colorbond colour range.",
    examples: [
      'Site-specific structural engineering',
      'Any footprint, height & bay layout',
      'Roller doors, PA doors & windows',
      'Full Colorbond & Australian-made steel',
    ],
    icon: PencilRuler,
    image: '/images/gallery/shed-08.jpg',
  },
];
