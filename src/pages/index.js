import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/landing";
import About from "../components/about";
import WhoWhatWhere from "../components/whowhatwhere";
import Focus from "../components/focus";
import Illustration from "../components/illustration";
import TeacherHighlight from "../components/teacherhighlight";
import LogoWall from "../components/logowall";
import Contact from "../components/contact";
import Approach from "../components/approach";
import Development from "../components/development";
import Video from "../components/video";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Landing data={data}/>
    <Video />
    <About data={data}/>
    <WhoWhatWhere data={data}/>
    <Approach />
    <Development />
    <Focus data={data}/>
    <Illustration data={data}/>
    <TeacherHighlight data={data}/>
    <LogoWall data={data}/>
    <Contact data={data}/>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export const query = graphql`
  query {
  allPrismicTeacher {
    edges {
      node {
        data {
          image {
            url
            alt
          }
          mailto {
            text
          }
          name {
            text
          }
          story {
            html
          }
        }
      }
    }
  }
  allPrismicClient {
    edges {
      node {
        id
        data {
          logo {
            url
          }
          name {
            text
          }
          testimonial {
            html
            text
          }
        }
      }
    }
  }
  prismicFocus {
    data {
      content {
        html
      }
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

export default IndexPage