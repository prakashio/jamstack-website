import React from "react"
import { LinkedIn, Github, Twitter } from "../assets"

export default () => (
  <div className="social-icons">
    <a href="https://twitter.com/Prakashio" rel="noreferrer" target="_blank">
      <Twitter />
    </a>
    <a href="https://github.com/Prakash106" rel="noreferrer" target="_blank">
      <Github />
    </a>
    <a
      href="https://www.linkedin.com/in/prakash-kumar-2a257990/"
      rel="noreferrer"
      target="_blank"
    >
      <LinkedIn />
    </a>
  </div>
)
