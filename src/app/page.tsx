import React from 'react';
import Footer from '../components/footer';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function IndexPage() {
  const { constactEmail, constactNumber, facebookUrl } = useSiteMetadata();

  return (
    <>
      <section id='one'>
        <div>→ Domestic</div>
        <div>→ Rural</div>
        <div>→ Comercial</div>

        <div>
          <a href={`tel:${constactNumber}`}>{constactNumber}</a>
        </div>
        <div>
          <a href={`mailto:${constactEmail}`}>{constactEmail}</a>
        </div>
        <div>
          <a href={facebookUrl}>Visit us on Facebook</a>
        </div>
      </section>
      <Footer />
    </>
  );
}
