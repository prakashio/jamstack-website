import React from "react"
import Layout from "../components/layout"
import { Row, Col, Hidden } from "react-grid-system"
import { Person } from "../icons/index"
import Introduction from "../components/Introduction"

export default () => (
  <Layout>
    <Row>
      <Col sm={7}>
        <Introduction />
      </Col>
      <Col offset={{ sm: 1 }} align="end" sm={4}>
        <Hidden xs sm>
          <Person className="person"></Person>
        </Hidden>
      </Col>
    </Row>
  </Layout>
)
