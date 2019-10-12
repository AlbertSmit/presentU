import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArtikelenPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Artikelen</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArtikelenPage
