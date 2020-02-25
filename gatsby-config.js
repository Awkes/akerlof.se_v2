module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `akerlof.esy.es`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
      }
    }
  ]
}
