'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

import { siteMetadata } from '@/config/site';

const phoneHref = `tel:${siteMetadata.phone.replace(/\s/g, '')}`;

const stats = [
  { label: 'Australian-made steel', value: '100%' },
  { label: 'Sizes & layouts', value: 'Made to order' },
  { label: 'Supplied & installed', value: 'Locally' },
];

export default function Hero() {
  return (
    <section className='relative isolate overflow-hidden bg-steel-900 text-white'>
      {/* Deep steel gradient base. Swap in a hero shed photo here when supplied. */}
      <div
        className='absolute inset-0 -z-20 bg-linear-to-br from-steel-950 via-steel-900 to-steel-800'
        aria-hidden
      />
      {/* Blueprint grid — subtle engineered texture. */}
      <div
        className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-size-[56px_56px] opacity-[0.12]'
        aria-hidden
      />
      <div
        className='absolute -top-32 right-0 -z-10 size-144 rounded-full bg-amber-brand/15 blur-3xl'
        aria-hidden
      />

      <div className='mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28 lg:px-10 lg:pt-44 lg:pb-36'>
        <div className='max-w-3xl'>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center gap-2 rounded-full border border-amber-brand/40 bg-amber-brand/10 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-amber-soft uppercase'>
            <span className='size-1.5 rounded-full bg-amber-brand' />
            Canberra · Queanbeyan · Yass · ACT & surrounds
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='mt-6 font-display text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-6xl lg:text-7xl'>
            Canberra&apos;s custom-made{' '}
            <span className='text-amber-brand'>Australian steel sheds</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mt-6 max-w-2xl text-base/relaxed text-white/80 sm:text-lg lg:text-xl'>
            Domestic, rural and commercial — designed, engineered and built for local conditions.
            100% Australian-made steel, made to order in any size, layout and Colorbond colour, then
            delivered and installed across the Capital region.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt-10 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <Link
              href='/contact'
              className='group inline-flex items-center justify-center gap-2 rounded-full bg-amber-brand px-7 py-4 text-base font-bold text-steel-900 shadow-cta transition hover:bg-amber-brand-hover'>
              Get a free quote
              <ArrowRight className='size-5 transition group-hover:translate-x-0.5' aria-hidden />
            </Link>
            <a
              href={phoneHref}
              className='inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/10'>
              <Phone className='size-5' aria-hidden />
              {siteMetadata.phoneOwner} — {siteMetadata.phone}
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:mt-20 sm:grid-cols-3'>
            {stats.map(stat => (
              <div key={stat.label}>
                <dt className='text-xs font-semibold tracking-widest text-white/60 uppercase'>
                  {stat.label}
                </dt>
                <dd className='mt-1 font-display text-2xl font-black text-white sm:text-3xl'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
