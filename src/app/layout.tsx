import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import JsonLd from '@/components/json-ld';
import { ThemeProvider } from '@/components/theme-provider';
import { siteMetadata } from '@/config/site';

import './globals.css';

// Runs before first paint to set the theme class on <html>, preventing a flash
// of the wrong theme. Mirrors ThemeProvider: stored 'dark'/'light' wins, 'system'
// follows the OS, and the default (no stored preference) is light.
const themeInitScript = `(function(){try{var k='tss-ui-theme';var t=localStorage.getItem(k);var c=t==='light'||t==='dark'?t:t==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):'light';document.documentElement.classList.add(c);}catch(e){}})();`;

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: `${siteMetadata.title} — Custom Sheds, Canberra`,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    type: 'website',
    locale: 'en_AU',
    images: [siteMetadata.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  icons: {
    icon: siteMetadata.icon,
    apple: siteMetadata.icon,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#11161d' },
    { media: '(prefers-color-scheme: dark)', color: '#11161d' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en-AU'
      className={`${sans.variable} ${display.variable}`}
      suppressHydrationWarning>
      <body className='min-h-screen bg-surface text-foreground antialiased'>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <JsonLd />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={siteMetadata.gaId} />
    </html>
  );
}
