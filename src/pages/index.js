import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h4>I'm making this by following the Gatsby Tutorial.</h4>
      <StaticImage 
      //  src="../images/david-marcu.jpg"
      //  alt="forests"
        src="https://upload.wikimedia.org/wikipedia/commons/d/dc/2020_Porsche_Taycan_4S_79kWh_Front.jpg"
        alt="porsche taycan"
       />
    </Layout>
  )
}

export default IndexPage
