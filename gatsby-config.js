module.exports = {
  siteMetadata: {
    title: 'CodeBrie',
    author: 'Brie Howell',
    description: 'Brie Howells personal/ professional blog.',
    siteUrl: 'https://codebrie.com/',
    social: {
      twitter: 'chrisddonaldson',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: ['gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },

          {
            resolve: 'gatsby-remark-smartypants',
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-source-custom-api',
    //   options: {
    //     url: 'http://localhost:8080/api/food-graphql',
    //     rootKey: 'foods',
    //     imageKeys: ['images'],
    //     schemas: {
    //       foods: `
    //        _id: String
    //         name: String
    //         carbs: String
    //         sugars: String
    //         protein: String
    //         fats: String
    //         fiber: String
    //         totalCals: String
    //           `,
    //     },
    //   },
    // },

    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     url: 'https://cms.codebrie.com/graphql',
    //   },
    // },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Code Brie',
        short_name: 'CodeBrie',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
  ],
};
