import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const SEO: React.FC<{ children?: React.ReactNode }> = () => {
  const site = useSiteMetadata();

  const { title, description, siteUrl, author, siteImage } = site;

  return (
    <>
      <html lang={'en-US'} />
      <meta name='description' content={description} />
      <meta name='image' content={`${siteUrl}${siteImage}`} />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={siteUrl} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${siteUrl}${siteImage}`} />
      <meta property='og:type' content='website' />
      <meta property='og:image:alt' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:url' content={siteUrl} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={`${siteUrl}${siteImage}`} />
      <meta name='twitter:image:alt' content={description} />
      <meta name='twitter:creator' content={author} />
      <link rel='icon' type='image/png' href='/favicon.ico' />
      <link rel='apple-touch-icon' href='/favicon.ico' />
    </>
  );
};

export default SEO;
