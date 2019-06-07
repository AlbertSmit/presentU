import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Landing from "../components/landing";
import About from "../components/about";
import WhoWhatWhere from "../components/whowhatwhere";
import Focus from "../components/focus";
import Illustration from "../components/illustration";
import TeacherHighlight from "../components/teacherhighlight";
import LogoWall from "../components/logowall";
import Contact from "../components/contact";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <WhoWhatWhere data={data}/>
    <Focus />
    <Illustration />
    <TeacherHighlight />
    <LogoWall />
    <Contact />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    prismicWhoWhatWhere {
    data {
      waarom {
        text
      }
      waarom_content {
        text
      }
      wie {
        text
      }
      wie_content {
        text
      }
      wat {
        text
      }
      wat_content {
        text
      }
    }
  }
}`

export default IndexPage