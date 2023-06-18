module.exports = {
  siteMetadata: {
    title: 'Total Shed Solutions Australia: Custom-Made Australian Sheds in ACT Canberra and Queanbeyan',
    name: 'Total Shed Solutions',
    description:
      "We proudly stand as Canberra's leading custom shed specialists, committed to providing 100% Australian-made, high-quality sheds tailored to meet your specific needs. Whether you require a robust outdoor storage, a dedicated workshop, or a multifunctional garden shed, we have the expertise and resources to bring your vision to life. Explore our diverse range of designs, materials, and add-ons to create a shed that's as unique as your requirements. With Total Shed Solutions Australia, it's more than just a shed - it's a testament to Australian craftsmanship, designed for durability and built to last.",
    siteUrl: 'https://totalshedsolutions.com.au/',
    author: 'Sam Ilic',
    constactEmail: 'office@totalshedsolutions.com.au',
    constactNumber: '0411 777 877',
    authorUrl: 'https://github.com/stage88',
    sourceUrl: 'https://github.com/stage88/totalshedsolutions-website',
    siteImage: '/large-logo.png',
    facebookUrl: 'https://www.facebook.com/profile.php?id=100092559450393',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-DVKEWH6P8L'],
        pluginConfig: {
          head: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'common',
        path: `${__dirname}/src/assets/`,
      },
      __key: 'assets',
    },
    'gatsby-plugin-sass',
  ],
};
