require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'presentU',
    description: 'Presenteren vanuit theatervorm.',
    author: '@albertsmit',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif']
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        // The name of your prismic.io repository. This is required.
        repositoryName: 'presentu',

        // An API access token to your prismic.io repository. This is required.
        accessToken: 'MC5YYmRUaXhZQUFDY0E5Zmtu.ACZ877-977-977-9fO-_vSxV77-9Oe-_vXJf77-9Jgtf77-9Qi_vv73vv70bJg0y77-977-977-977-9',

        // Set a link resolver function used to process links in your content.
        // Fields with rich text formatting or links to internal content use this
        // function to generate the correct link URL.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different link resolver logic for each field if necessary.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: ({ node, key, value }) => (doc) => {
          // Your link resolver
        },

        // Set a list of links to fetch and be made available in your link
        // resolver function.
        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        fetchLinks: [
          // Your list of links
        ],

        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children,
        ) => {
          // Your HTML serializer
        },

        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. Providing the schemas allows you to query for fields present in
        // your custom types even if they are unused in your documents.
        schemas: {
          // Your custom types mapped to schemas
        },

        // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
        lang: '*',

        // Set a function to determine if images are downloaded locally
        shouldNormalizeImage: ({ node, key, value }) => {
          // Return true to normalize the image or false to skip.
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
