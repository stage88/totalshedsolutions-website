'use client';

import { motion } from 'motion/react';
import { BadgeCheck, Ruler, Snowflake, Truck } from 'lucide-react';

const points = [
  {
    icon: BadgeCheck,
    title: '100% Australian-made',
    description:
      'Australian BlueScope steel and Colorbond cladding — made to last in our conditions. No imported off-cuts, no cut corners.',
  },
  {
    icon: Snowflake,
    title: 'Engineered for the ACT',
    description:
      'Site-specific structural engineering for local wind and snow loads. Built to code, certified and ready for council.',
  },
  {
    icon: Ruler,
    title: 'Made to order',
    description:
      'No fixed catalogue. Every span, bay, door and colour is chosen for your block and how you actually use the shed.',
  },
  {
    icon: Truck,
    title: 'Local, end to end',
    description:
      'One Canberra team from quote and design to delivery and install — plus a hand with slab and council when you need it.',
  },
];

export default function WhyUs() {
  return (
    <section className='relative overflow-hidden bg-steel-900 py-20 text-white sm:py-28'>
      <div className='pointer-events-none absolute inset-0' aria-hidden>
        <div className='relative mx-auto h-full max-w-7xl'>
          <div className='absolute -bottom-16 -left-12 size-96 rounded-full bg-amber-brand/10 blur-3xl' />
        </div>
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
        <div className='max-w-2xl'>
          <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-soft uppercase'>
            Why Total Shed Solutions
          </span>
          <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-balance sm:text-4xl lg:text-5xl'>
            A shed that&apos;s built once, and built right.
          </h2>
          <p className='mt-5 text-base/relaxed text-white/75 sm:text-lg'>
            A shed is a long-term investment, so we treat it like one. Quality Australian steel,
            proper engineering and a local team who&apos;ll still pick up the phone after it&apos;s
            up — that&apos;s the difference between a shed and a Total Shed.
          </p>
        </div>

        <div className='mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className='rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-amber-brand/50 hover:bg-white/8'>
              <span className='inline-flex size-12 items-center justify-center rounded-xl bg-amber-brand/15 text-amber-soft'>
                <point.icon className='size-6' aria-hidden />
              </span>
              <h3 className='mt-5 font-display text-lg font-bold text-white'>{point.title}</h3>
              <p className='mt-2 text-sm/relaxed text-white/70'>{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
