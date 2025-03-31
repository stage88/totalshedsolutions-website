'use client';
import { GoogleTagManager } from '@next/third-parties/google';

import '../assets/scss/main.scss';

import Header from '@/components/header';
import SEO from '@/components/seo';
import useSiteMetadata from '@/hooks/useSiteMetadata';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { gtmId } = useSiteMetadata();
  
  return (
    <html suppressHydrationWarning={true} className='scroll-smooth!' lang='en'>
      <head>
        <SEO />
      </head>
      <GoogleTagManager gtmId={gtmId} />

      <body>
        <div className='site-container'>
          <Header />
          <div id='main'>{children}</div>
        </div>
      </body>
    </html>
  );
}
