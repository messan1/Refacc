module.exports = {
  siteMetadata: {
    title: `Refac - Réseau des Experts`,
    description: `Le réseau des Experts africains pour les Forêt l'agriculture,l'énergie et les changements climatiques, en abrégé REFACC est une association non lucrative créée par un consortion d'expert africains en vue de renforcerle dialogue et la coopération avec les acteurs des pays africains. Ce réseau apolitique se propose d'apporter une dynamique à la lutte contre les changements climatiques dans les collectivités et aider les communautés rurales les plus vulnérables.`,
    author: `@MessanChristian`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#3F9F42`,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
    
        typeName: "DataRefac",
      
        fieldName: "Refacc",
      
        url: "https://api-euwest3.graphcms.com/v1/cjyd6vwtk1z5201d7vd764uv3/master",
      },
    },
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
        icon: `src/images/logorefacc.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
