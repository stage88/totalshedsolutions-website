'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, Phone, X } from 'lucide-react';

import RoofMark from '@/components/roof-mark';
import ModeToggle from '@/components/mode-toggle';
import { siteMetadata } from '@/config/site';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/sheds', label: 'Sheds' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const phoneHref = `tel:${siteMetadata.phone.replace(/\s/g, '')}`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-steel-900/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
        }`}>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10'>
          <Link href='/' className='text-white' aria-label={siteMetadata.title}>
            <RoofMark className='h-8 w-auto sm:h-9' />
          </Link>

          <nav className='hidden items-center gap-1 lg:flex'>
            {nav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className='rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-white/90 transition hover:bg-white/10 hover:text-white'>
                {item.label}
              </Link>
            ))}
            <ModeToggle className='ml-2 size-10' />
            <a
              href={phoneHref}
              className='ml-2 inline-flex items-center gap-2 rounded-full bg-amber-brand px-5 py-2.5 text-sm font-bold text-steel-900 shadow-cta transition hover:bg-amber-brand-hover'>
              <Phone className='size-4' aria-hidden />
              {siteMetadata.phone}
            </a>
          </nav>

          <div className='flex items-center gap-2 lg:hidden'>
            <ModeToggle className='size-11' />
            <a
              href={phoneHref}
              className='inline-flex size-11 items-center justify-center rounded-full bg-amber-brand text-steel-900 shadow-cta transition hover:bg-amber-brand-hover'
              aria-label={`Call ${siteMetadata.phoneOwner} on ${siteMetadata.phone}`}>
              <Phone className='size-5' aria-hidden />
            </a>
            <button
              type='button'
              onClick={() => setOpen(true)}
              className='inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm'
              aria-label='Open menu'>
              <Menu className='size-6' aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className='fixed inset-0 z-60 lg:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
            <button
              type='button'
              className='absolute inset-0 bg-steel-950/70 backdrop-blur-sm'
              onClick={() => setOpen(false)}
              aria-label='Close menu'
            />
            <motion.div
              className='absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-steel-800 pb-6 shadow-2xl'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}>
              <div className='flex items-center justify-between px-4 py-3 text-white sm:px-6'>
                <span role='img' aria-label={siteMetadata.title} className='inline-flex'>
                  <RoofMark className='h-8 w-auto' />
                </span>
                <button
                  type='button'
                  onClick={() => setOpen(false)}
                  className='inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white'
                  aria-label='Close menu'>
                  <X className='size-6' aria-hidden />
                </button>
              </div>

              <nav className='mt-8 flex flex-col gap-1 px-4 sm:px-6'>
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className='block rounded-2xl p-4 font-display text-2xl font-bold text-white transition hover:bg-white/10'>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <a
                href={phoneHref}
                className='mx-4 mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-brand px-6 py-4 text-base font-bold text-steel-900 shadow-cta sm:mx-6'>
                <Phone className='size-5' aria-hidden />
                Call {siteMetadata.phoneOwner} — {siteMetadata.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
