import React from "react"
import SocialLinks from "./socialLinks"

export default () => {
  return (
    <div className="intro">
      <div>
        <h1>
          <span role="img" aria-label="wave">
            👋🏽
          </span>
          <br />
          Hey there
          <br /> I'm a javascript developer and passionate learner.
        </h1>
        <h3 className="margin-0">Introduction</h3>
        <p>
          I am a developer who loves problem solving and with a background in
          engineering and creative coding, originally from new delhi, currently
          living in bengaluru and working as Javascript Engineer for{" "}
          <b>Active.ai</b>. In my spare time, I like to explore new
          technologies, ideas and other playful experiences for the web.
          <br />
        </p>
        <h3>Connect</h3>
        <SocialLinks />
      </div>
    </div>
  )
}
