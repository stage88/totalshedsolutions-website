'use client';

import { motion } from 'motion/react';
import { ClipboardCheck, MessageSquare, Truck, Wrench } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: 'Step 1',
    title: 'Talk & free quote',
    description:
      'Tell us what the shed is for and where it&apos;s going. We&apos;ll talk through options and send back a clear, itemised quote — no obligation.',
  },
  {
    icon: ClipboardCheck,
    step: 'Step 2',
    title: 'Design & engineer',
    description:
      'We finalise the size, layout, doors and colours, then engineer it to your site and ACT/NSW codes — including plans for council or DA where needed.',
  },
  {
    icon: Wrench,
    step: 'Step 3',
    title: 'Australian-made build',
    description:
      'Your shed is manufactured from quality Australian steel and Colorbond, cut and pre-punched to spec for a clean, accurate fit on site.',
  },
  {
    icon: Truck,
    step: 'Step 4',
    title: 'Deliver & install',
    description:
      'We deliver across the Capital region and install — or supply a kit if you&apos;d rather build it yourself. Either way, you finish with a shed done right.',
  },
];

export default function Process() {
  return (
    <section className='bg-surface-2 py-20 transition-colors duration-300 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
        <div className='max-w-3xl'>
          <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
            How it works
          </span>
          <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl'>
            From first sketch to finished shed.
          </h2>
          <p className='mt-5 max-w-2xl text-base/relaxed text-muted sm:text-lg'>
            A straightforward process with one local point of contact the whole way through.
          </p>
        </div>

        <div className='mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className='relative flex flex-col rounded-3xl border border-line bg-card p-7'>
              <span className='inline-flex size-12 items-center justify-center rounded-2xl bg-amber-brand text-steel-900'>
                <s.icon className='size-6' aria-hidden />
              </span>
              <span className='mt-6 font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
                {s.step}
              </span>
              <h3 className='mt-1 font-display text-lg font-bold text-foreground'>{s.title}</h3>
              <p
                className='mt-2 text-sm/relaxed text-muted'
                dangerouslySetInnerHTML={{ __html: s.description }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
