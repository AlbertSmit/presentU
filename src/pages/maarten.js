import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Maarten = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Maarten page</h1>
    <p>Welcome to page x</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Maarten
