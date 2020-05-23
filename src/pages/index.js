import React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { Row, Col } from "react-grid-system"
import { Person } from "../icons/index"

export default () => (
  <Layout>
    <Row>
      <Col sm={7}>
        <div className="intro">
          <div>
            <motion.h1
              variants={{
                hidden: { y: 50, opacity: 1 },
                visible: { y: 0, opacity: 1 }
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              👋🏽
              <br />
              Hey there
              <br /> I'm a javascript developer and passionate learner.
            </motion.h1>
            <h3 className="margin-0">Introduction</h3>
            <p>
              I am a developer who loves problem solving and with a background
              in engineering and creative coding, originally from new delhi,
              currently living in bengaluru and working as Javascript Engineer
              for <a href="">Active.ai</a>. In my spare time, I like to explore
              new technologies, ideas and other playful experiences for the web.
              <br />
              <a href=""> Email Me</a>
            </p>
          </div>
        </div>
      </Col>
      <Col offset={{ sm: 1 }} align="end" sm={4}>
        <Person className="person"></Person>
      </Col>
    </Row>
  </Layout>
)
