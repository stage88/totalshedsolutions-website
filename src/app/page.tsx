import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import CtaBand from '@/components/cta-band';
import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import Process from '@/components/process';
import RecentBuilds from '@/components/recent-builds';
import ShedRange from '@/components/shed-range';
import WaterTanks from '@/components/water-tanks';
import WhyUs from '@/components/why-us';
import { siteMetadata } from '@/config/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Total Shed Solutions Australia — Custom Sheds, Canberra & Queanbeyan',
  },
  description: siteMetadata.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShedRange />
      <WhyUs />
      <Process />
      <RecentBuilds />

      <section className='bg-surface py-20 transition-colors duration-300 sm:py-28'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
            <div className='max-w-2xl'>
              <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
                Gallery
              </span>
              <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl'>
                A closer look at the work.
              </h2>
            </div>
            <Link
              href='/gallery'
              className='group inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-amber-deep dark:text-amber-soft'>
              View the full gallery
              <ArrowRight className='size-4 transition group-hover:translate-x-0.5' aria-hidden />
            </Link>
          </div>

          <div className='mt-10 sm:mt-12'>
            <Gallery limit={6} />
          </div>
        </div>
      </section>

      <WaterTanks />
      <CtaBand />
    </>
  );
}
