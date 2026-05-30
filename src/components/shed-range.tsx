'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { shedCategories } from '@/config/sheds';

export default function ShedRange() {
  return (
    <section
      id='range'
      className='relative bg-surface py-20 transition-colors duration-300 sm:py-28 lg:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
        <div className='max-w-3xl'>
          <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-deep uppercase dark:text-amber-soft'>
            What we build
          </span>
          <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl'>
            One shed builder for the backyard, the farm and the business.
          </h2>
          <p className='mt-5 max-w-2xl text-base/relaxed text-muted sm:text-lg'>
            Every shed is made to order in 100% Australian-made steel. Pick a starting point below —
            then we tailor the size, layout, doors and colours to your site.
          </p>
        </div>

        <div className='mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:gap-8'>
          {shedCategories.map((cat, i) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}>
              <Link
                href={`/sheds#${cat.id}`}
                className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card p-7 transition hover:-translate-y-1 hover:border-transparent hover:shadow-card sm:p-9'>
                <div className='absolute top-7 right-7 font-display text-5xl font-black text-foreground/10 transition group-hover:text-amber-brand/30 sm:text-6xl'>
                  {cat.number}
                </div>
                <span className='inline-flex size-14 items-center justify-center rounded-2xl bg-amber-brand/15 text-amber-deep transition group-hover:bg-amber-brand group-hover:text-steel-900 dark:text-amber-soft'>
                  <cat.icon className='size-7' aria-hidden />
                </span>
                <h3 className='mt-6 max-w-xs font-display text-xl/tight font-bold text-balance text-foreground sm:text-2xl'>
                  {cat.title}
                </h3>
                <p className='mt-3 text-sm/relaxed text-muted sm:text-base'>{cat.tagline}</p>
                <span className='mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-amber-deep dark:text-amber-soft'>
                  Explore {cat.title.toLowerCase()}
                  <ArrowRight
                    className='size-4 transition group-hover:translate-x-0.5'
                    aria-hidden
                  />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
