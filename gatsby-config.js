module.exports = {
  siteMetadata: {
    title: 'Aashvi Nagendra',
    description: 'Aakash Mudigonda is a Cybersecurity Master’s student at University of Maryland with a focus on Offensive security - all things Red Teaming and AppSec',
    siteUrl: 'https://brittanychiang.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@bchiang7',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Brittany Chiang',
        short_name: 'Brittany Chiang',
        start_url: '/',
        background_color: '#020c1b',
        theme_color: '#0a192f',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `blogs`,
    //     path: `${__dirname}/content/projects`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `certifications`,
    //     path: `${__dirname}/content/certifications`,
    //   },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `conferences`,
        path: `${__dirname}/content/conferences`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recommendations`,
        path: `${__dirname}/content/recommendations`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: '#64ffda' },
            },
          },
          'gatsby-remark-code-titles',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-45666519-2',
      },
    },
  ],
};