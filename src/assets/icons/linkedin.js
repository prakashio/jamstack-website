import React from "react"
import styled from "styled-components"

const LinkedinIconWrapper = styled.svg`
  width: 32px;
  height: 32px;
`

const LinkedIn = () => (
  <LinkedinIconWrapper aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 23.9854H20.685V18.7974C20.685 17.5604 20.663 15.9694 18.962 15.9694C17.237 15.9694 16.974 17.3174 16.974 18.7094V23.9854H13.662V13.3174H16.84V14.7764H16.886C17.328 13.9374 18.41 13.0524 20.023 13.0524C23.38 13.0524 24 15.2614 24 18.1344V23.9854ZM9.924 11.8604C8.859 11.8604 8 10.9984 8 9.9374C8 8.8764 8.859 8.0144 9.924 8.0144C10.984 8.0144 11.845 8.8764 11.845 9.9374C11.845 10.9984 10.984 11.8604 9.924 11.8604ZM11.582 23.9854H8.263V13.3174H11.582V23.9854ZM0 32.0004H32V0.000396729H0V32.0004Z"
      fill="#2b2e4a"
    />
  </LinkedinIconWrapper>
)

export default LinkedIn
