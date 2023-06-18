import React from 'react';
import Footer from '../components/footer';
import Layout from '../components/layout';
import useSiteMetadata from '../hooks/useSiteMetadata';

// markup
const IndexPage = () => {
  const { constactEmail, constactNumber, facebookUrl } = useSiteMetadata();

  return (
    <Layout>
      <section id='one'>
        <div>→ Domestic</div>
        <div>→ Rural</div>
        <div>→ Comercial</div>
        
        <div><a href={`tel:${constactNumber}`}>{constactNumber}</a></div>
        <div><a href={`mailto:${constactEmail}`}>{constactEmail}</a></div>
        <div><a href={facebookUrl}>Visit us on Facebook</a></div>
      </section>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
