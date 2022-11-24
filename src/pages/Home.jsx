import React from "react";
import '../styles/style.css';
import CallToAction from "../components/CallToAction";
// import ReactPlayer from 'react-player'




export default function Home() {
  return (
    <div className="contenedor-home">
      <div className="container-componente-home">
        <div className="container-callToAction">
          <CallToAction />
        </div>
        <div className="container-carousel">
          <p>carousel</p>
        </div>
      </div>
    </div>
  )
}
/* <ReactPlayer
url={require('../images/gol-maradona.mp4')}
className='reproductor-video'
playing
width='100%'
height='50vh'
loop='true'
volume={0}
/> */

