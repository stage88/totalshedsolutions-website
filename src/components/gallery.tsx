'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ImageIcon } from 'lucide-react';

import { galleryImages, type GalleryImage } from '@/config/gallery';
import { shedCategories } from '@/config/sheds';

// Branded placeholder tiles shown until real project photos are added to
// `galleryImages`. They cycle the shed categories so the layout reads as
// intentional rather than broken.
const placeholders = [0, 1, 2, 3, 4, 5].map(i => shedCategories[i % shedCategories.length]);

export default function Gallery({
  images = galleryImages,
  limit,
}: {
  images?: GalleryImage[];
  limit?: number;
}) {
  const shown = typeof limit === 'number' ? images.slice(0, limit) : images;

  if (shown.length === 0) {
    const tiles = typeof limit === 'number' ? placeholders.slice(0, limit) : placeholders;
    return (
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6'>
        {tiles.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
            className='relative flex aspect-4/3 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-line bg-linear-to-br from-steel-800 to-steel-900 text-center'>
            <span className='inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-amber-soft'>
              <cat.icon className='size-6' aria-hidden />
            </span>
            <span className='px-3 font-display text-sm font-bold text-white'>{cat.title}</span>
            <span className='inline-flex items-center gap-1.5 text-[0.7rem] tracking-wider text-white/50 uppercase'>
              <ImageIcon className='size-3.5' aria-hidden />
              Photos coming soon
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6'>
      {shown.map((img, i) => (
        <motion.figure
          key={img.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
          className='group relative aspect-4/3 overflow-hidden rounded-2xl border border-line bg-surface-2'>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes='(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw'
            className='object-cover transition duration-500 group-hover:scale-105'
          />
          {img.category && (
            <figcaption className='absolute bottom-0 left-0 m-3 rounded-full bg-steel-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm'>
              {img.category}
            </figcaption>
          )}
        </motion.figure>
      ))}
    </div>
  );
}
