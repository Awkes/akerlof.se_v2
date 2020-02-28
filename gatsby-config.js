require("dotenv").config({ path: "./.env" })

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.GATSBY_WP_BASE_URL,
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
      }
    }
  ]
}
