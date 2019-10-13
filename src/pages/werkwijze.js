import React from "react";
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Approach from "../components/approach";

const WerkwijzePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Approach />
  </Layout>
)

export default WerkwijzePage
