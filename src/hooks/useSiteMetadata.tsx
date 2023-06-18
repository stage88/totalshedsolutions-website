import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  site: {
    siteMetadata: {
      title: string;
      name: string;
      description: string;
      siteUrl: string;
      author: string;
      authorUrl: string;
      sourceUrl: string;
      siteImage: string;
      constactEmail: string;
      constactNumber: string;
      facebookUrl: string;
    };
  };
};

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          name
          description
          siteUrl
          author
          sourceUrl
          siteImage
          authorUrl
          constactEmail
          constactNumber
          facebookUrl
        }
      }
    }
  `);

  // console.log(data);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
