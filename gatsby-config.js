module.exports = {
  siteMetadata: {
    title: `V4Neo-v01`,
    siteUrl: `https://www.doEzi.com.au`
  },
  plugins: ["gatsby-plugin-styled-components",
   "gatsby-plugin-image",
   "gatsby-plugin-react-helmet",
   "gatsby-plugin-sitemap",
   "gatsby-plugin-sharp",
   "gatsby-transformer-sharp",
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: "images",
      path: "./src/images/"
    },
    __key: "images"
  },
  {
    resolve:'gatsby-source-filesystem',
    options: {
      name: "blogs",
      path: `${__dirname}/blog`
    },
  }
]
};