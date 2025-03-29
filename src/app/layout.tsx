'use client';

import Header from '@/components/header';
import SEO from '@/components/seo';
import '../assets/scss/main.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} className='scroll-smooth!' lang='en'>
      <head>
        <SEO />
      </head>

      <body>
        <div className='site-container'>
          <Header />
          <div id='main'>{children}</div>
        </div>
      </body>
    </html>
  );
}
