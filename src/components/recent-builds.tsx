'use client';

import { motion } from 'motion/react';
import { Ruler } from 'lucide-react';

// Real recent projects from Total Shed Solutions' own job history — used as
// proof points. Sizes and locations only; the photos live in the gallery.
const builds = [
  { size: '11 × 15 × 5.3m', type: 'Rural & commercial shed', meta: 'Sutton, NSW' },
  {
    size: '30 × 12m',
    type: 'Our biggest build to date',
    meta: '5m awnings each side + internal mezzanine',
  },
  { size: '18 × 10m', type: 'Hay shed', meta: 'Installed in just 2 days', highlight: true },
  { size: '6 × 9m', type: 'Garage & carport', meta: 'Wamboin, NSW' },
];

export default function RecentBuilds() {
  return (
    <section className='bg-surface-2 py-20 transition-colors duration-300 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
        <div className='max-w-3xl'>
          <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
            Proven on site
          </span>
          <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl'>
            Real sheds, recently built around the region.
          </h2>
          <p className='mt-5 max-w-2xl text-base/relaxed text-muted sm:text-lg'>
            From a backyard garage to our biggest build yet — every one made to order in Australian
            steel, and some up faster than you would think.
          </p>
        </div>

        <div className='mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
          {builds.map((b, i) => (
            <motion.div
              key={b.size + b.type}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={
                b.highlight
                  ? 'flex flex-col rounded-3xl border border-transparent bg-amber-brand p-7'
                  : 'flex flex-col rounded-3xl border border-line bg-card p-7'
              }>
              <Ruler
                className={
                  b.highlight
                    ? 'size-6 text-steel-900'
                    : 'size-6 text-amber-deep dark:text-amber-soft'
                }
                aria-hidden
              />
              <span
                className={
                  b.highlight
                    ? 'mt-6 font-display text-3xl font-black tracking-tight text-steel-900'
                    : 'mt-6 font-display text-3xl font-black tracking-tight text-foreground'
                }>
                {b.size}
              </span>
              <h3
                className={
                  b.highlight
                    ? 'mt-2 font-display text-base font-bold text-steel-900'
                    : 'mt-2 font-display text-base font-bold text-foreground'
                }>
                {b.type}
              </h3>
              <p
                className={
                  b.highlight
                    ? 'mt-1 text-sm/relaxed text-steel-900/80'
                    : 'mt-1 text-sm/relaxed text-muted'
                }>
                {b.meta}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
