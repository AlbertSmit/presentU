import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Thanks from "../components/thanks"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Thanks />
  </Layout>
)

export default IndexPage