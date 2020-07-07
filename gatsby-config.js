module.exports = {
  siteMetadata: {
    title: `Pauquer`,
    description: `Graphic designer specialized in Branding: Visual Identity and naming. Also in ArtCover Design, packaging, editorial, digital, web e illustration.`,
    author: `@maribelbhf`,
    url: `https://www.pauquer.com`,
    siteUrl: `https://www.pauquer.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `/assets/img`, // Where the animated svgs are.
        }
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.pauquer.com',
        sitemap: 'https://www.pauquer.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],

      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
