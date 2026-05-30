import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarClock, Mail, MapPin, Phone } from 'lucide-react';

import { siteMetadata } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get a free quote on a custom shed — call ${siteMetadata.phoneOwner} on ${siteMetadata.phone}, email ${siteMetadata.email}, or visit us at ${siteMetadata.address.full}. Serving Canberra, Queanbeyan, Googong, Bungendore and Yass.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Total Shed Solutions Australia',
    description: `Talk to ${siteMetadata.phoneOwner} on ${siteMetadata.phone} or email ${siteMetadata.email}. Custom sheds across Canberra and surrounds.`,
    url: '/contact',
    images: [siteMetadata.ogImage],
  },
};

const phoneHref = `tel:${siteMetadata.phone.replace(/\s/g, '')}`;
const mailHref = `mailto:${siteMetadata.email}?subject=Shed%20quote%20request`;

const quickCards = [
  {
    icon: Phone,
    title: `Call ${siteMetadata.phoneOwner}`,
    primary: siteMetadata.phone,
    secondary: 'The fastest way to get a quote',
    href: phoneHref,
    cta: 'Tap to call',
  },
  {
    icon: Mail,
    title: 'Email us',
    primary: siteMetadata.email,
    secondary: 'Send your sizes and site details — we&apos;ll reply within a business day',
    href: mailHref,
    cta: 'Send email',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    primary: siteMetadata.address.full,
    secondary: 'By appointment — give us a heads-up first',
    href: siteMetadata.address.mapUrl,
    cta: 'Open in Maps',
    external: true,
  },
];

export default function ContactPage() {
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
              Get in touch
            </span>
            <h1 className='mt-3 font-display text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-5xl lg:text-6xl'>
              Let&apos;s talk about your shed.
            </h1>
            <p className='mt-5 text-base/relaxed text-white/75 sm:text-lg'>
              Whether you know exactly what you want or you&apos;re still sketching it out, the
              quickest way to get moving is a quick call. We build across Canberra, Queanbeyan,
              Googong, Bungendore, Yass and the surrounding region.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-surface py-16 transition-colors duration-300 sm:py-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='grid gap-4 sm:gap-6 lg:grid-cols-3'>
            {quickCards.map(card => (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noreferrer noopener' : undefined}
                className='group flex flex-col rounded-3xl border border-line bg-card p-7 transition hover:-translate-y-1 hover:border-amber-brand hover:shadow-card sm:p-8'>
                <span className='inline-flex size-12 items-center justify-center rounded-2xl bg-amber-brand/15 text-amber-deep transition group-hover:bg-amber-brand group-hover:text-steel-900 dark:text-amber-soft'>
                  <card.icon className='size-6' aria-hidden />
                </span>
                <h2 className='mt-6 font-display text-xl font-bold text-foreground'>{card.title}</h2>
                <p className='mt-2 font-display text-lg/snug font-semibold wrap-break-word text-foreground'>
                  {card.primary}
                </p>
                <p
                  className='mt-2 text-sm text-muted'
                  dangerouslySetInnerHTML={{ __html: card.secondary }}
                />
                <span className='mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-amber-deep dark:text-amber-soft'>
                  {card.cta}
                  <ArrowRight
                    className='size-4 transition group-hover:translate-x-0.5'
                    aria-hidden
                  />
                </span>
              </a>
            ))}
          </div>

          <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4'>
            <div className='rounded-2xl bg-surface-2 p-6'>
              <div className='flex items-center gap-2 text-amber-deep dark:text-amber-soft'>
                <CalendarClock className='size-5' aria-hidden />
                <h3 className='font-display text-sm font-bold tracking-wider uppercase'>Hours</h3>
              </div>
              <p className='mt-3 text-base font-semibold text-foreground'>
                {siteMetadata.hours.weekdays}
              </p>
              <p className='mt-1 text-sm text-muted'>{siteMetadata.hours.saturday}</p>
            </div>

            <div className='rounded-2xl bg-surface-2 p-6'>
              <div className='flex items-center gap-2 text-amber-deep dark:text-amber-soft'>
                <Phone className='size-5' aria-hidden />
                <h3 className='font-display text-sm font-bold tracking-wider uppercase'>Quotes</h3>
              </div>
              <p className='mt-3 text-base font-semibold text-foreground'>
                {siteMetadata.hours.quotes}
              </p>
              <p className='mt-1 text-sm text-muted'>Free & no obligation</p>
            </div>

            <div className='rounded-2xl bg-surface-2 p-6 sm:col-span-2'>
              <div className='flex items-center gap-2 text-amber-deep dark:text-amber-soft'>
                <MapPin className='size-5' aria-hidden />
                <h3 className='font-display text-sm font-bold tracking-wider uppercase'>
                  Service areas
                </h3>
              </div>
              <p className='mt-3 text-base font-semibold text-foreground'>
                {siteMetadata.serviceAreas.join(' · ')}
              </p>
              <p className='mt-2 text-xs text-muted'>
                {siteMetadata.legalName} · ABN {siteMetadata.abn}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-surface pb-20 transition-colors duration-300 sm:pb-28'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='overflow-hidden rounded-3xl border border-line shadow-card'>
            <iframe
              src={siteMetadata.address.embedUrl}
              title='Total Shed Solutions Australia — Fyshwick location map'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='block aspect-16/10 w-full sm:aspect-16/7'
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
