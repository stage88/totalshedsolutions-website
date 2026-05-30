import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Factory, Palette, Ruler, ShieldCheck } from 'lucide-react';

import CtaBand from '@/components/cta-band';
import Faq, { type FaqItem } from '@/components/faq';
import { shedCategories } from '@/config/sheds';
import { siteMetadata } from '@/config/site';

export const metadata: Metadata = {
  title: 'Our Sheds',
  description:
    'Custom domestic, rural, commercial and made-to-order steel sheds — garages, workshops, machinery sheds, barns and industrial structures, built in Australian steel across Canberra and the surrounding region.',
  alternates: { canonical: '/sheds' },
  openGraph: {
    title: 'Our Sheds | Total Shed Solutions Australia',
    description:
      'Domestic, rural, commercial and custom steel sheds — made to order in Australian steel, engineered for ACT conditions.',
    url: '/sheds',
    images: [siteMetadata.ogImage],
  },
};

const materials = [
  {
    icon: ShieldCheck,
    title: 'Australian steel & Colorbond',
    description:
      'BlueScope steel frames and genuine Colorbond cladding — Australian-made, durable and backed by manufacturer warranties.',
  },
  {
    icon: Ruler,
    title: 'Engineered & certified',
    description:
      'Every shed is engineered to your site for ACT and NSW wind and snow loads, with documentation ready for council.',
  },
  {
    icon: Factory,
    title: 'Doors & access to suit',
    description:
      'Roller doors, sliding doors, PA doors, windows, skylights and mezzanines — specified around how you use the space.',
  },
  {
    icon: Palette,
    title: 'Full colour range',
    description:
      'Choose walls, roof and trims from the complete Colorbond palette to match the house, the brand or the landscape.',
  },
];

const faqs: FaqItem[] = [
  {
    question: 'What types of sheds do you build?',
    answer:
      'We build domestic garages, carports and workshops; rural hay, machinery and farm sheds, barns and stables; commercial and industrial structures; and fully custom designs. Every shed is made to order rather than picked from a fixed range.',
  },
  {
    question: 'Are your sheds Australian made?',
    answer:
      'Yes. We build in 100% Australian-made steel, using BlueScope steel frames and genuine Colorbond cladding so your shed is made to last in Australian conditions.',
  },
  {
    question: 'Can I customise the size, layout and colours?',
    answer:
      'Absolutely — that is the point of a custom shed. You choose the footprint, height, number of bays, door and window positions, roof style and the full Colorbond colour range. We tailor it to your block and how you will use it.',
  },
  {
    question: 'Are the sheds engineered for Canberra conditions?',
    answer:
      'Yes. Each shed is engineered to your specific site for local wind and snow loads and built to the relevant Australian Standards, with certified plans suitable for council or DA submission.',
  },
  {
    question: 'Do you deliver and install, or can I build it myself?',
    answer:
      'Both. We deliver across the Capital region and can install your shed for you, or supply it as a pre-punched kit with instructions if you would prefer to build it yourself.',
  },
  {
    question: 'Will my shed need council or DA approval?',
    answer:
      'It depends on the size, location and zoning of your property. Many sheds do require approval. We provide engineered plans and can point you in the right direction so the process is straightforward.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'Canberra, Queanbeyan, Googong, Bungendore, Yass and the surrounding ACT and NSW region. If you are nearby and not sure, just ask.',
  },
  {
    question: 'How do I get a quote?',
    answer: `Call ${siteMetadata.phoneOwner} on ${siteMetadata.phone} or send your details through the contact page and we will put together a free, itemised quote with no obligation.`,
  },
];

export default function ShedsPage() {
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
                Our sheds
              </span>
              <h1 className='mt-3 font-display text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-5xl lg:text-6xl'>
                Custom steel sheds for every job on the block.
              </h1>
            </div>
            <p className='text-base/relaxed text-white/75 sm:text-lg lg:col-span-5'>
              Four starting points, one approach — made to order in Australian steel and engineered
              for local conditions. Find the closest fit, then we tailor it to you.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-surface transition-colors duration-300'>
        <div className='mx-auto max-w-7xl space-y-16 px-4 py-16 sm:space-y-24 sm:px-6 sm:py-24 lg:px-10'>
          {shedCategories.map((cat, i) => (
            <div
              key={cat.id}
              id={cat.id}
              className='grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-16'>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <span className='inline-flex size-14 items-center justify-center rounded-2xl bg-amber-brand/15 text-amber-deep dark:text-amber-soft'>
                  <cat.icon className='size-7' aria-hidden />
                </span>
                <h2 className='mt-5 font-display text-3xl/tight font-black tracking-tight text-foreground sm:text-4xl'>
                  {cat.title}
                </h2>
                <p className='mt-4 text-base/relaxed text-muted sm:text-lg'>{cat.description}</p>
                <ul className='mt-6 grid gap-3 sm:grid-cols-2'>
                  {cat.examples.map(example => (
                    <li
                      key={example}
                      className='flex items-start gap-2.5 text-sm text-foreground sm:text-base'>
                      <Check
                        className='mt-0.5 size-5 shrink-0 text-amber-deep dark:text-amber-soft'
                        aria-hidden
                      />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href='/contact'
                  className='group mt-8 inline-flex items-center gap-2 rounded-full bg-amber-brand px-6 py-3.5 text-sm font-bold text-steel-900 shadow-cta transition hover:bg-amber-brand-hover'>
                  Quote a {cat.title.toLowerCase()} shed
                  <ArrowRight
                    className='size-4 transition group-hover:translate-x-0.5'
                    aria-hidden
                  />
                </Link>
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className='relative aspect-4/3 overflow-hidden rounded-3xl border border-line bg-surface-2'>
                  <Image
                    src={cat.image}
                    alt={`${cat.title} steel shed by Total Shed Solutions`}
                    fill
                    sizes='(min-width: 1024px) 50vw, 100vw'
                    className='object-cover'
                  />
                  <span className='absolute bottom-4 left-4 rounded-full bg-steel-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm'>
                    {cat.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-surface-2 py-16 transition-colors duration-300 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='max-w-3xl'>
            <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
              Built to last
            </span>
            <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-balance text-foreground sm:text-4xl'>
              Quality materials, proper engineering.
            </h2>
          </div>
          <div className='mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4'>
            {materials.map(m => (
              <div key={m.title} className='rounded-2xl border border-line bg-card p-6'>
                <span className='inline-flex size-11 items-center justify-center rounded-xl bg-amber-brand/15 text-amber-deep dark:text-amber-soft'>
                  <m.icon className='size-5' aria-hidden />
                </span>
                <h3 className='mt-5 font-display text-base font-bold text-foreground'>{m.title}</h3>
                <p className='mt-2 text-sm/relaxed text-muted'>{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-surface py-16 transition-colors duration-300 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='mx-auto mb-10 max-w-3xl text-center sm:mb-12'>
            <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
              Good to know
            </span>
            <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-balance text-foreground sm:text-4xl'>
              Frequently asked questions
            </h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
