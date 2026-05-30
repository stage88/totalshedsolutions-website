import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import CtaBand from '@/components/cta-band';
import Gallery from '@/components/gallery';
import { galleryImages } from '@/config/gallery';
import { siteMetadata } from '@/config/site';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A gallery of custom steel sheds built by Total Shed Solutions Australia across Canberra, Queanbeyan and the surrounding region — domestic garages, rural and farm sheds, and commercial structures.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery | Total Shed Solutions Australia',
    description:
      'Custom sheds, garages and rural structures built across the Canberra region.',
    url: '/gallery',
    images: [siteMetadata.ogImage],
  },
};

export default function GalleryPage() {
  const hasImages = galleryImages.length > 0;

  return (
    <>
      <section className='relative isolate overflow-hidden bg-steel-900 pt-32 pb-16 text-white sm:pt-40 sm:pb-20 lg:pt-44'>
        <div
          className='absolute inset-0 -z-10 bg-linear-to-br from-steel-950 via-steel-900 to-steel-800'
          aria-hidden
        />
        <div
          className='absolute -top-32 -left-32 -z-10 size-96 rounded-full bg-amber-brand/15 blur-3xl'
          aria-hidden
        />

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white'>
            <ArrowRight className='size-4 rotate-180' aria-hidden />
            Back home
          </Link>
          <div className='mt-6 max-w-3xl'>
            <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-soft uppercase'>
              Our work
            </span>
            <h1 className='mt-3 font-display text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-5xl lg:text-6xl'>
              Sheds we&apos;ve designed and built.
            </h1>
            <p className='mt-5 text-base/relaxed text-white/75 sm:text-lg'>
              A look at custom garages, workshops, farm sheds and commercial structures built for
              clients across Canberra, Queanbeyan, Googong, Bungendore, Yass and surrounds.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-surface py-16 transition-colors duration-300 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          {!hasImages && (
            <p className='mb-10 rounded-2xl border border-line bg-surface-2 p-5 text-sm text-muted sm:text-base'>
              We&apos;re putting together a gallery of recent builds. In the meantime, give{' '}
              {siteMetadata.phoneOwner} a call on{' '}
              <a
                href={`tel:${siteMetadata.phone.replace(/\s/g, '')}`}
                className='font-semibold text-amber-deep dark:text-amber-soft'>
                {siteMetadata.phone}
              </a>{' '}
              to talk through examples like yours.
            </p>
          )}
          <Gallery />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
