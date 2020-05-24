import React from "react"
import Layout from "../components/layout"
import { Row, Col, Hidden, Visible } from "react-grid-system"
import { Person } from "../icons/index"
import Introduction from "../components/Introduction"

export default () => (
  <Layout>
    <Row>
      <Visible xs sm>
        <Col align="center" sm={12} xs={12}>
          <Person className="person"></Person>
        </Col>
        <Col offset={{ md: 1 }} sm={12} xs={12}>
          <Introduction />
        </Col>
      </Visible>
      <Hidden xs sm>
        <Col lg={7} md={7}>
          <Introduction />
        </Col>
        <Col offset={{ lg: 1 }} md={4} align="end" lg={4}>
          <Person className="person"></Person>
        </Col>
      </Hidden>
    </Row>
  </Layout>
)
