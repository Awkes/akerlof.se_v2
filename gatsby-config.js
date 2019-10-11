require("dotenv").config({path: '.env'});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_TOKEN,
        previewMode: false,
        disableLiveReload: false,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`
  ]
}
