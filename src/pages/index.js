import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from '../components/pagesComponents/Homepage';

const IndexPage = () => (
  <Layout>
    <SEO title="Refacc - Lancement des JFAC 2020" />
    <Homepage/>
  </Layout>
)

export default IndexPage
