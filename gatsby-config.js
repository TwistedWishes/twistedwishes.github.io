/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "pxrbsjdrcYiKeJrrydSqC9",
        token: "cmU1Cv6fVH13SnBHOsdqgl4DvarmBiHk7qYKS3H4EkQ3mskdI1HusOn5v5HXUmyRzzs8Y2mjA8SThpRkr4t4tA",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
