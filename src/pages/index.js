import React from "react"
import Layout from "../components/layout"
import { Row, Col } from "react-grid-system"
import { Person } from "../icons/index"
import { LinkedIn, Github, Twitter, Logo } from "../icons/index"
export default () => (
  <Layout>
    <Row>
      <Col sm={7}>
        <div className="intro">
          <div>
            <h1>
              👋🏽
              <br />
              Hey there
              <br /> I'm a javascript developer and passionate learner.
            </h1>
            <h3 className="margin-0">Introduction</h3>
            <p>
              I am a developer who loves problem solving and with a background
              in engineering and creative coding, originally from new delhi,
              currently living in bengaluru and working as Javascript Engineer
              for <a href="">Active.ai</a>. In my spare time, I like to explore
              new technologies, ideas and other playful experiences for the web.
              <br />
            </p>
            <h3>Connect</h3>
            <div className="social-icons">
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
            </div>
          </div>
        </div>
      </Col>
      <Col offset={{ sm: 1 }} align="end" sm={4}>
        <Person className="person"></Person>
      </Col>
    </Row>
  </Layout>
)
