/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jocelyn's Life - A Journey of Learning & Discovery`,
    description: `Personal website of Jocelyn, a lifelong learner exploring technology, science, and knowledge. Discover my blog posts, goals, and insights on various topics.`,
    author: `Jocelyn`,
    siteUrl: `https://hellojocelyn.github.io/`,
    image: `/images/icon.png`,
    twitterUsername: `@jocelyn`,
    keywords: [
      'Jocelyn',
      'personal blog',
      'technology',
      'learning',
      'science',
      'quantum computing',
      'robotics',
      'finance',
      'music',
      'lifelong learning'
    ]
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    'gatsby-plugin-postcss',
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": `blogs`,
        "path": `${__dirname}/blogs`
      },
      __key: "blogs"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": `${__dirname}/images`
      }
    }]
};