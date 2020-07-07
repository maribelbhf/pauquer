/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from "../components/footer"
import "../assets/sass/main.scss"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faInstagram, faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Background from '../components/background'

library.add(fab, faInstagram, faBehance, faLinkedin)
config.autoAddCss = false;

const Layout = ({ children }) => {


  return (
    <>

      <Background />

      <div className="grid">
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>

      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
