import { useState } from "react"
import styled from "styled-components"

function App() {
  return (
    <VideoBackground>
      <Video src="/production-ID-4990242.mp4" autoPlay loop />
      <H1>DRIVIUM</H1>
    </VideoBackground>
  )
}

export default App

const VideoBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  background-color: blue;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  overflow: hidden;
`

const Video = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
`

const H1 = styled.h1`
  font-weight: 800;
  color: white;
  font-size: 128px;
  z-index: 1000;
  font-family: "Montserrat", sans-serif;
`
