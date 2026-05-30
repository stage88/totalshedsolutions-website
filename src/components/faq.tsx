'use client';

import { useRef, useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

// Accessible accordion using native <details> (works without client JS) plus
// FAQPage structured data for rich results. The "expand all" control is a
// progressive enhancement — it toggles the open state of every item at once.
export default function Faq({ items }: { items: FaqItem[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [allOpen, setAllOpen] = useState(false);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const toggleAll = () => {
    const next = !allOpen;
    listRef.current?.querySelectorAll('details').forEach(d => {
      d.open = next;
    });
    setAllOpen(next);
  };

  // Keep the button label honest when items are opened or closed individually.
  const syncState = () => {
    const all = listRef.current?.querySelectorAll('details');
    if (!all || all.length === 0) return;
    setAllOpen(Array.from(all).every(d => d.open));
  };

  return (
    <div className='mx-auto max-w-3xl'>
      <div className='mb-4 flex justify-end'>
        <button
          type='button'
          onClick={toggleAll}
          aria-expanded={allOpen}
          className='inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-bold tracking-wide text-amber-deep uppercase transition hover:bg-amber-brand/10 dark:text-amber-soft'>
          {allOpen ? <Minus className='size-3.5' aria-hidden /> : <Plus className='size-3.5' aria-hidden />}
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      <div
        ref={listRef}
        className='divide-y divide-line overflow-hidden rounded-3xl border border-line bg-card'>
        {items.map(item => (
          <details key={item.question} className='group' onToggle={syncState}>
            <summary className='flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-display text-base font-bold text-foreground transition hover:text-amber-deep sm:text-lg dark:hover:text-amber-soft'>
              {item.question}
              <Plus
                className='size-5 shrink-0 text-amber-deep transition group-open:rotate-45 dark:text-amber-soft'
                aria-hidden
              />
            </summary>
            <p className='px-6 pb-6 text-sm/relaxed text-muted sm:text-base'>{item.answer}</p>
          </details>
        ))}
      </div>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
