import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Droplets,
  HardHat,
  MapPin,
  Ruler,
  Truck,
  Users,
} from 'lucide-react';

import { siteMetadata } from '@/config/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Total Shed Solutions Australia is a Canberra-based custom shed specialist building 100% Australian-made steel sheds for domestic, rural and commercial customers across the ACT and surrounding NSW.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Total Shed Solutions Australia',
    description:
      'Canberra-based custom shed specialists — Australian-made steel, local engineering, and one team from quote to install.',
    url: '/about',
    images: [siteMetadata.ogImage],
  },
};

const credentials = [
  { icon: BadgeCheck, label: 'Australian-made', detail: 'BlueScope steel & Colorbond cladding' },
  { icon: Ruler, label: 'Engineered & certified', detail: 'Site-specific for ACT & NSW' },
  { icon: Truck, label: 'Supply & install', detail: 'Delivered across the region' },
  { icon: MapPin, label: 'Locally based', detail: 'Canberra & surrounds' },
];

const whoWeAre = [
  'A Canberra-based custom shed specialist, part of the PA & KS Contractors group.',
  'Building 100% Australian-made steel sheds for domestic, rural and commercial clients.',
  'Backed by years of hands-on construction and property experience in the ACT.',
  'Trusted to handle everything from a backyard garage to a large machinery shed.',
];

const howWeWork = [
  'One local point of contact from first quote to final handover.',
  'Honest, itemised quoting — you know what you are paying for.',
  'Made to order, engineered to your site, built to last.',
  'Supply-and-install or a kit for the DIY builder — your call.',
];

const partners = [
  {
    icon: Droplets,
    name: 'Bushmans Water Tanks',
    href: 'https://www.bushmantanks.com.au/tank-stockist/total-shed-solutions/',
    detail:
      'Authorised reseller of Bushmans Australian-made poly water tanks — supplied and delivered alongside your shed.',
  },
  {
    icon: HardHat,
    name: 'Stewieworks',
    href: 'https://www.stewieworks.com.au/',
    detail:
      'Excavation and slab preparation — site works done properly before the first sheet of steel goes up.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className='relative isolate overflow-hidden bg-steel-900 pt-32 pb-16 text-white sm:pt-40 sm:pb-24 lg:pt-44'>
        <div
          className='absolute inset-0 -z-10 bg-linear-to-br from-steel-950 via-steel-900 to-steel-800'
          aria-hidden
        />
        <div
          className='absolute -top-32 -right-32 -z-10 size-96 rounded-full bg-amber-brand/15 blur-3xl'
          aria-hidden
        />

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white'>
            <ArrowRight className='size-4 rotate-180' aria-hidden />
            Back home
          </Link>
          <div className='mt-6 grid gap-10 lg:grid-cols-12 lg:items-end'>
            <div className='lg:col-span-7'>
              <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-soft uppercase'>
                About us
              </span>
              <h1 className='mt-3 font-display text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-5xl lg:text-6xl'>
                Local shed builders who treat your shed like our own.
              </h1>
            </div>
            <p className='text-base/relaxed text-white/75 sm:text-lg lg:col-span-5'>
              Total Shed Solutions Australia builds custom steel sheds for Canberra and the
              surrounding region — quality Australian materials, proper engineering, and a team
              that&apos;s here before, during and after the build.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-surface pt-16 transition-colors duration-300 sm:pt-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
            <div>
              <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
                Who we are
              </span>
              <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-foreground sm:text-4xl'>
                Canberra-based, Australian-made.
              </h2>
              <ul className='mt-6 space-y-4'>
                {whoWeAre.map(item => (
                  <li key={item} className='flex gap-3 text-base text-muted'>
                    <Users className='mt-1 size-5 shrink-0 text-amber-deep dark:text-amber-soft' aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
                How we work
              </span>
              <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-foreground sm:text-4xl'>
                Straight answers, built to last.
              </h2>
              <ul className='mt-6 space-y-4'>
                {howWeWork.map(item => (
                  <li key={item} className='flex gap-3 text-base text-muted'>
                    <BadgeCheck className='mt-1 size-5 shrink-0 text-amber-deep dark:text-amber-soft' aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-surface py-16 transition-colors duration-300 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
            <h2 className='font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl'>
              What you can count on
            </h2>
            <p className='text-sm text-muted'>The things that make a shed worth keeping.</p>
          </div>
          <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {credentials.map(c => (
              <div
                key={c.label}
                className='flex items-start gap-4 rounded-2xl border border-line bg-card p-5'>
                <span className='inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-brand/15 text-amber-deep dark:text-amber-soft'>
                  <c.icon className='size-5' aria-hidden />
                </span>
                <div>
                  <h3 className='font-display text-base font-bold text-foreground'>{c.label}</h3>
                  <p className='mt-1 text-sm text-muted'>{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-surface py-16 transition-colors duration-300 sm:py-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='max-w-3xl'>
            <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
              Trusted partners
            </span>
            <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-foreground sm:text-4xl'>
              The right people for every part of the job.
            </h2>
            <p className='mt-5 text-base/relaxed text-muted sm:text-lg'>
              We work with specialists we trust so your project runs smoothly from the ground up.
            </p>
          </div>
          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            {partners.map(p => (
              <a
                key={p.name}
                href={p.href}
                target='_blank'
                rel='noreferrer noopener'
                className='group flex items-start gap-4 rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-amber-brand/50 hover:shadow-card'>
                <span className='inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-brand/15 text-amber-deep dark:text-amber-soft'>
                  <p.icon className='size-6' aria-hidden />
                </span>
                <div>
                  <h3 className='flex items-center gap-1.5 font-display text-lg font-bold text-foreground'>
                    {p.name}
                    <ArrowUpRight
                      className='size-4 text-amber-deep transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-amber-soft'
                      aria-hidden
                    />
                  </h3>
                  <p className='mt-1.5 text-sm/relaxed text-muted'>{p.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-surface-2 py-16 transition-colors duration-300 sm:py-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-card p-8 sm:flex-row sm:items-center sm:p-10'>
            <div>
              <h3 className='font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl'>
                Ready when you are.
              </h3>
              <p className='mt-2 text-base text-muted'>
                Talk to {siteMetadata.phoneOwner} about your shed — anywhere across Canberra,
                Queanbeyan, Googong, Bungendore and Yass.
              </p>
            </div>
            <Link
              href='/contact'
              className='group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-brand px-7 py-4 text-base font-bold text-steel-900 shadow-cta transition hover:bg-amber-brand-hover'>
              Contact us
              <ArrowRight className='size-5 transition group-hover:translate-x-0.5' aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
