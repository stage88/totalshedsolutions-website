'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

import { siteMetadata } from '@/config/site';

const phoneHref = `tel:${siteMetadata.phone.replace(/\s/g, '')}`;

export default function CtaBand() {
  return (
    <section className='relative isolate overflow-hidden bg-surface py-20 transition-colors duration-300 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className='relative overflow-hidden rounded-3xl bg-amber-brand p-8 sm:rounded-4xl sm:p-14 lg:p-20'>
          <div
            className='absolute -top-24 -right-24 size-80 rounded-full bg-white/20 blur-3xl'
            aria-hidden
          />
          <div
            className='absolute -bottom-20 -left-20 size-64 rounded-full bg-steel-900/15 blur-3xl'
            aria-hidden
          />

          <div className='relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
            <div className='max-w-2xl'>
              <span className='font-display text-xs font-bold tracking-[0.2em] text-steel-900/70 uppercase'>
                Planning a shed?
              </span>
              <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-balance text-steel-900 sm:text-4xl lg:text-5xl'>
                Get a free, no-obligation quote.
              </h2>
              <p className='mt-4 text-base text-steel-900/80 sm:text-lg'>
                From a backyard garage in Googong to a machinery shed out past Yass — tell us what
                you need and we&apos;ll work out the right shed with you.
              </p>
            </div>

            <div className='flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:items-end'>
              <a
                href={phoneHref}
                className='inline-flex items-center justify-center gap-2 rounded-full bg-steel-900 px-7 py-4 text-base font-bold whitespace-nowrap text-white shadow-xl transition hover:bg-steel-800'>
                <Phone className='size-5' aria-hidden />
                {siteMetadata.phone}
              </a>
              <Link
                href='/contact'
                className='group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold whitespace-nowrap text-steel-900 shadow-xl transition hover:bg-white/90'>
                Request a quote
                <ArrowRight className='size-5 transition group-hover:translate-x-0.5' aria-hidden />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
