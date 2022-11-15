import React from "react";
import ReactPlayer from 'react-player'
import '../styles/style.css'

export default function ComponenteHome(){
    return(
    <div className="lorem">
        <ReactPlayer
      url={require('../images/gol-maradona.mp4')}
      className='reproductor-video'
      playing
      width='100%'
      height='50vh'
      loop='true'
      volume={0}
     />
    </div>
    )
}
