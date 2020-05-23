module.exports = {
  siteMetadata: {
    title: `prakashkumar`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Jost\:700`],
      },
    },
  ],
}
