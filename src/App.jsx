import { useState } from "react"
import styled from "styled-components"

function App() {
  return (
    <VideoBackground>
      <Div>
        <P>Freddy G Leiva - Co-Founder/CEO</P>
        <P>Joe Cash Lorenzo - Co-Founder/CTO</P>
        <P>Steven Money Peniche - Head of Product</P>
        <P>Mike Maybach Elias - Head of Public Relations</P>
        <P>Will Music Rockafeller - Head of Music</P>
      </Div>
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
  z-index: -1;
`

const H1 = styled.h1`
  font-weight: 900;
  color: white;
  font-size: 128px;
  z-index: 1000;
  font-family: "Montserrat", sans-serif;
`

const Div = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: black;
  padding: 10px;
  border-radius: 4px;
`

const P = styled.p`
  color: white;
  font-size: 18px;
  margin: 0;
`
