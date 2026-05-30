'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Check, Droplets } from 'lucide-react';

// Total Shed Solutions is a listed Bushmans Water Tanks reseller — these are
// the tank types they stock, mirroring the Bushmans reseller page.
const tankTypes = [
  'Water storage tanks',
  'Household rainwater tanks',
  'Industrial chemical tanks',
  'Fertiliser tanks',
];

const bushmansUrl = 'https://www.bushmantanks.com.au/tank-stockist/total-shed-solutions/';

export default function WaterTanks() {
  return (
    <section id='water-tanks' className='bg-surface py-20 transition-colors duration-300 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
        <div className='grid items-center gap-10 lg:grid-cols-2 lg:gap-16'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className='relative aspect-4/3 overflow-hidden rounded-3xl border border-line bg-surface-2'>
            <Image
              src='/images/gallery/shed-03.jpg'
              alt='Bushmans rural water tank supplied and delivered by Total Shed Solutions'
              fill
              sizes='(min-width: 1024px) 50vw, 100vw'
              className='object-cover'
            />
          </motion.div>

          <div>
            <span className='inline-flex items-center gap-2 font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
              <Droplets className='size-4' aria-hidden />
              Also available
            </span>
            <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-balance text-foreground sm:text-4xl'>
              Authorised Bushmans water tank reseller.
            </h2>
            <p className='mt-5 text-base/relaxed text-muted sm:text-lg'>
              As a listed Bushmans stockist, we supply and deliver quality Australian-made poly
              water tanks alongside your shed — ideal when you are setting up a rural block or
              adding rainwater storage at home.
            </p>
            <ul className='mt-6 grid gap-3 sm:grid-cols-2'>
              {tankTypes.map(t => (
                <li
                  key={t}
                  className='flex items-start gap-2.5 text-sm text-foreground sm:text-base'>
                  <Check
                    className='mt-0.5 size-5 shrink-0 text-amber-deep dark:text-amber-soft'
                    aria-hidden
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6'>
              <Link
                href='/contact'
                className='group inline-flex items-center gap-2 rounded-full bg-amber-brand px-6 py-3.5 text-sm font-bold text-steel-900 shadow-cta transition hover:bg-amber-brand-hover'>
                Ask about water tanks
                <ArrowRight className='size-4 transition group-hover:translate-x-0.5' aria-hidden />
              </Link>
              <a
                href={bushmansUrl}
                target='_blank'
                rel='noreferrer noopener'
                className='group inline-flex items-center gap-1.5 text-sm font-bold text-amber-deep dark:text-amber-soft'>
                See our Bushmans listing
                <ArrowUpRight
                  className='size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
