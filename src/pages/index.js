import React from "react"
import Layout from "../components/layout"
import { Row, Col, Hidden, Visible } from "react-grid-system"
import { Illustrations } from "../assets"
import Introduction from "../components/Introduction"

export default () => (
  <Layout>
    <Row>
      <Visible xs sm>
        <Col align="center" sm={12} xs={12}>
          <img className="person" src={Illustrations.Person} alt="" />
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
          <img className="person" src={Illustrations.Person} alt="" />
        </Col>
      </Hidden>
    </Row>
  </Layout>
)
