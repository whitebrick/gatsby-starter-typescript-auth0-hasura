require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-starter-typescript-auth0-hasura`,
    siteUrl: `https://github.com/whitebrick/gatsby-starter-typescript-auth0-hasura`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
  pathPrefix: `/gatsby`,
};

export default config;
