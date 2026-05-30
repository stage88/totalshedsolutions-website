import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

import Logo from '@/components/logo';
import { siteMetadata } from '@/config/site';

// lucide-react dropped brand glyphs, so the Facebook icon is an inline SVG drawn
// in the same outline style (stroke, round caps) as the lucide icons beside it.
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden
      className={className}>
      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
  );
}

const phoneHref = `tel:${siteMetadata.phone.replace(/\s/g, '')}`;
const mailHref = `mailto:${siteMetadata.email}`;

const sheds = [
  { href: '/sheds#domestic', label: 'Domestic & garages' },
  { href: '/sheds#rural', label: 'Rural & farm sheds' },
  { href: '/sheds#commercial', label: 'Commercial & industrial' },
  { href: '/sheds#custom', label: 'Custom & made-to-order' },
  { href: '/#water-tanks', label: 'Bushmans water tanks' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-steel-900 text-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-12'>
          <div className='lg:col-span-4'>
            <Link href='/' className='inline-block text-white'>
              <Logo className='h-18 w-auto sm:h-20' />
            </Link>
            <p className='mt-5 max-w-sm text-sm/relaxed text-white/70'>
              Custom-made, 100% Australian steel sheds — designed, engineered and built for
              Canberra and the surrounding region. Domestic, rural, commercial and made to order.
            </p>
          </div>

          <div className='lg:col-span-3'>
            <h3 className='font-display text-xs font-bold tracking-[0.2em] text-amber-soft uppercase'>
              Get in touch
            </h3>
            <a
              href={phoneHref}
              className='mt-4 flex items-start gap-3 text-white transition hover:text-amber-soft'>
              <Phone className='mt-1 size-5 shrink-0' aria-hidden />
              <span>
                <span className='block text-xs tracking-wider text-white/60 uppercase'>
                  {siteMetadata.phoneOwner}
                </span>
                <span className='font-display text-xl font-bold'>{siteMetadata.phone}</span>
              </span>
            </a>
            <a
              href={mailHref}
              className='mt-5 flex items-start gap-3 text-white transition hover:text-amber-soft'>
              <Mail className='mt-1 size-5 shrink-0' aria-hidden />
              <span className='text-sm break-all'>{siteMetadata.email}</span>
            </a>
            <a
              href={siteMetadata.address.mapUrl}
              target='_blank'
              rel='noreferrer noopener'
              className='mt-5 flex items-start gap-3 text-white transition hover:text-amber-soft'>
              <MapPin className='mt-1 size-5 shrink-0' aria-hidden />
              <span className='text-sm'>{siteMetadata.address.full}</span>
            </a>
            <a
              href={siteMetadata.facebook}
              target='_blank'
              rel='noreferrer noopener'
              className='mt-5 flex items-start gap-3 text-white transition hover:text-amber-soft'>
              <FacebookIcon className='mt-1 size-5 shrink-0' />
              <span className='text-sm'>Facebook</span>
            </a>
          </div>

          <div className='lg:col-span-2'>
            <h3 className='font-display text-xs font-bold tracking-[0.2em] text-amber-soft uppercase'>
              Sheds
            </h3>
            <ul className='mt-4 space-y-2 text-sm text-white/80'>
              {sheds.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className='transition hover:text-amber-soft'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='lg:col-span-3'>
            <h3 className='font-display text-xs font-bold tracking-[0.2em] text-amber-soft uppercase'>
              Service areas
            </h3>
            <ul className='mt-4 space-y-1.5 text-sm text-white/80'>
              {siteMetadata.serviceAreas.map(area => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p className='mt-5 text-xs tracking-wider text-white/50 uppercase'>
              {siteMetadata.hours.weekdays}
            </p>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-10'>
          <p className='text-center sm:text-left'>
            {`© ${year} ${siteMetadata.title}.`}
            <span className='ml-2 text-white/40'>
              {siteMetadata.legalName} · ABN {siteMetadata.abn}
            </span>
          </p>
          <p>
            Built by{' '}
            <a
              href={siteMetadata.author.url}
              target='_blank'
              rel='noreferrer noopener'
              className='text-white/70 hover:text-amber-soft'>
              {siteMetadata.author.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
