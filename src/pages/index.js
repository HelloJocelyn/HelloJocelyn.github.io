import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import HeaderNav from '../components/headerNav'
import { Router, Link } from "@reach/router"



const IndexPage = () => {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/1.jpg"
        />
      </Layout>
    </div>

  );
}



export default IndexPage

export const Head = () => <Seo title="Home Page" />
