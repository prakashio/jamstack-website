import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Row, Col } from "react-grid-system"
import { Logo } from "../icons/index"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navigation">
      <Row justify="between">
        <Col align="start" xs={6} sm={6} lg={6}>
          <Link to="/">
            <Logo />
          </Link>
        </Col>
        <Col align="end" xs={6} sm={6} lg={6}>
          <Link to="/blogs">Blogs</Link>
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