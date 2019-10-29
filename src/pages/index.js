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
    <Video data={data}/>
    <About data={data}/>
    <WhoWhatWhere data={data}/>
    <Approach data={data}/>
    <Development data={data}/>
    <Focus data={data}/>
    <Illustration data={data}/>
    <TeacherHighlight data={data}/>
    <LogoWall data={data}/>
    <Contact data={data}/>
  </Layout>
)

export const query = graphql`
  query {
    prismicFocus {
      data {
        contact {
          text
        }
        content_content {
          html
        }
        fysiek {
          text
        }
        fysiek_content {
          html
        }
        resultaatgericht {
          text
        }
        resultaatgericht_content {
          html
        }
        stem {
          text
        }
        stem_content {
          html
        }
      }
    }
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
          data {
            logo {
              url
            }
            name {
              text
            }
            testimonial {
              html
            }
          }
          id
        }
      }
    }
    prismicContact {
      data {
        content {
          html
        }
      }
    }
    prismicDevelopment {
      data {
        image {
          url
        }
        content {
          html
        }
        ontwikkeling {
          text
        }
      }
    }
    prismicAbout {
      data {
        who {
          text
        }
        content {
          html
        }
      }
    }
    prismicVideo {
      data {
        youtube {
          url
        }
      }
    }
    prismicWhoWhatWhy {
      data {
        waarom {
          text
        }
        waarom_content {
          html
        }
        wat {
          text
        }
        wat_content {
          html
        }
        wie {
          text
        }
        wie_content {
          html
        }
      }
    }
    prismicHomepageSubHeader {
      data {
        subheader {
          html
        }
      }
    }
    prismicApproach {
    data {
      basisvaardigheden__title {
        text
      }
      basisvaardigheden_image {
        url
      }
      basisvaardigheden_aan_de_hand_van {
        html
      }
      basisvaardigheden_wat_je_leert {
        html
      }
      expertvaardigheden_aan_de_hand_van {
        html
      }
      expertvaardigheden_image {
        url
      }
      expertvaardigheden_title {
        text
      }
      expertvaardigheden_wat_je_leert {
        html
      }
      story_skills_image {
        url
      }
      story_skills_aan_de_hand_van {
        html
      }
      story_skills_title {
        text
      }
      story_skills_wat_je_leert {
        html
      }
    }
  }
}`

export default IndexPage