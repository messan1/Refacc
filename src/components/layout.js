
import React from "react"
import PropTypes from "prop-types"
import "../css/index.css"
import Footer from './Footer';
import App from "./App";

const Layout = ({ children }) => {


  return (
    <>
        <App/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
