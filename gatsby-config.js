module.exports = {
  siteMetadata: {
    title:"",
    description: `Le réseau des Experts africains pour les Forêt l'agriculture,l'énergie et les changements climatiques, en abrégé REFACC est une association non lucrative créée par un consortion d'expert africains en vue de renforcerle dialogue et la coopération avec les acteurs des pays africains. Ce réseau apolitique se propose d'apporter une dynamique à la lutte contre les changements climatiques dans les collectivités et aider les communautés rurales les plus vulnérables.`,
    author: `Messan Christian`,
    siteUrl: `https://refacc.com`,
    keywords:`['écologie','les JFAC','environnement','réchauffement climatique',''lutte contre le réchauffement climatique']`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144706102-1",

        head: false,

        anonymize: true,

        respectDNT: true,

        sampleRate: 5,
        siteSpeedSampleRate: 10,
        
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#3F9F42`,
        showSpinner: true,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/refacc.xml`,
        exclude: ["/404/*"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://refacc.com',
        sitemap: 'https://refacc.com/sitemap.xml',
        output:"/robot.txt",
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
