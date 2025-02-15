/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `test-ga`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // plugins: [
  //   {
  //     resolve: `gatsby-plugin-google-gtag`,
  //     options: {
  //       // You can add multiple tracking ids and a pageview event will be fired for all of them.
  //       trackingIds: [
  //         "GTM-K65SG8W9",
  //         "G-HPB7SR9GY4"
  //       ],
  //       // This object gets passed directly to the gtag config command
  //       // This config will be shared across all trackingIds
  //       // gtagConfig: {
  //       //   optimize_id: "OPT_CONTAINER_ID",
  //       //   anonymize_ip: true,
  //       //   cookie_expires: 0,
  //       // },
  //       // This object is used for configuration specific to this plugin
  //       // pluginConfig: {
  //       //   // Puts tracking script in the head instead of the body
  //       //   head: false,
  //       //   // Setting this parameter is also optional
  //       //   respectDNT: true,
  //       //   // Avoids sending pageview hits from custom paths
  //       //   exclude: ["/preview/**", "/do-not-track/me/too/"],
  //       //   // Defaults to https://www.googletagmanager.com
  //       //   origin: "YOUR_SELF_HOSTED_ORIGIN",
  //       //   // Delays processing pageview events on route update (in milliseconds)
  //       //   delayOnRouteUpdate: 0,
  //       // },
  //     },
  //   },
  // ],
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "	GTM-K65SG8W9",
      }
    }
  ]
};
