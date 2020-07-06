module.exports = {
  siteMetadata: {
    title: `Pauquer`,
    description: `Leandry Pauquer website`,
    author: `@maribelbhf`,
    url: `www.pauquer.com`,
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
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `/assets/img`, // Where the animated svgs are.
        }
      }
    },



    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
