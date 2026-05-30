'use client';

import { useSyncExternalStore } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

import { useTheme } from '@/components/theme-provider';

// `true` only after the component has hydrated on the client. Used to gate the
// theme-specific icon, since the server doesn't know the stored theme yet.
const emptySubscribe = () => () => {};
const useHasMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

const NEXT = { light: 'dark', dark: 'system', system: 'light' } as const;
const LABEL = { light: 'Light', dark: 'Dark', system: 'System' } as const;

export default function ModeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useHasMounted();

  const label = mounted ? `${LABEL[theme]} theme — click to change` : 'Toggle theme';
  const Icon = !mounted || theme === 'system' ? Monitor : theme === 'light' ? Sun : Moon;

  return (
    <button
      type='button'
      onClick={() => setTheme(NEXT[theme])}
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 ${className}`}>
      <Icon className='size-5' aria-hidden />
    </button>
  );
}
