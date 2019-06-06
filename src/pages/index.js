import React from "react"
import { Link } from "gatsby"

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
import Form from "../components/form";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <WhoWhatWhere />
    <Focus />
    <Illustration />
    <TeacherHighlight />
    <LogoWall />
    <Form />

    <h4> Bij PresentU geloven wij, 
        Maarten en Sus, 
        dat iedereen kneitergoed kan leren presenteren.</h4>
    <p>Dat wij je daarbij kunnen helpen, door precies de handvatten te geven die je nodig hebt om kundig en ontspannen te spreken.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
