require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Whitebrick`,
    siteUrl: `https://whitebrick.com`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
  pathPrefix: `/gatsby`,
};

export default config;
