import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Row, Col } from "react-grid-system"
import { motion } from "framer-motion"
import { LinkedIn, Github, Twitter, Logo } from "../icons/index"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navigation">
      <Row justify="between">
        <Col align="start" xs={6} sm={6} lg={6}>
          <Logo />
        </Col>
        <Col className="social-icons" align="end" xs={6} sm={6} lg={6}>
          <motion.div
            variants={{
              hidden: { y: -50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <a href="https://twitter.com/Prakashio" target="_blank">
              <Twitter />
            </a>
            <a href="https://github.com/Prakash106" target="_blank">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/prakash-kumar-2a257990/"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </motion.div>
        </Col>
      </Row>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
