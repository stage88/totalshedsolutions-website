import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className='relative isolate flex min-h-[70vh] items-center overflow-hidden bg-steel-900 px-4 pt-32 pb-20 text-white sm:px-6 lg:px-10'>
      <div
        className='absolute -top-32 -right-32 -z-10 size-96 rounded-full bg-amber-brand/15 blur-3xl'
        aria-hidden
      />
      <div className='mx-auto w-full max-w-3xl text-center'>
        <span className='font-display text-xs font-bold tracking-[0.2em] text-amber-soft uppercase'>
          404
        </span>
        <h1 className='mt-3 font-display text-4xl/tight font-black tracking-tight text-balance sm:text-6xl'>
          Page not found.
        </h1>
        <p className='mt-5 text-base text-white/75 sm:text-lg'>
          That link didn&apos;t lead anywhere. Let&apos;s get you back on solid ground.
        </p>
        <Link
          href='/'
          className='group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-amber-brand px-7 py-4 text-base font-bold text-steel-900 shadow-cta transition hover:bg-amber-brand-hover'>
          Back home
          <ArrowRight className='size-5 transition group-hover:translate-x-0.5' aria-hidden />
        </Link>
      </div>
    </section>
  );
}
