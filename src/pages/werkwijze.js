import React from "react";
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import WhoWhatWhere from "../components/whowhatwhere";

const WerkwijzePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <WhoWhatWhere data={data}/>
  </Layout>
)

export const query = graphql`
  query {
    prismicFocus {
    data {
      broodtekst {
        text
      }
      contact {
        text
      }
      contact_content {
        text
        html
      }
      fysiek {
        text
      }
      fysiek_content {
        text
        html
      }
      koptekst {
        text
      }
      over {
        text
      }
      over_content {
        text
        html
      }
      resultaat_content {
        text
        html
      }
      resultaatgericht {
        text
      }
      stem {
        text
      }
      stem_content {
        text
        html
      }
      waarom {
        text
      }
      waarom_content {
        text
        html
      }
      wat {
        text
      }
      wat_content {
        text
        html
      }
      wie {
        text
      }
      wie_content {
        text
        html
      }
    }
  }
}`

export default WerkwijzePage
