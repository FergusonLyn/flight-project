import React from 'react'

// importing images
// import takeoff from '../assets/takeoff.jpg'
import takeoff from '../assets/takeoff1.png'
import video from '../assets/video1.mp4'

const Home = () => {
  return (
    <div className='home flex container'>
        <div className="mainText">
          <h1>Create Ever-lasting Memories With Us</h1>
        </div>

        <div className="homeImages flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop className='video'></video>
          </div>

          <img src={takeoff} className='plane' alt="" />
        </div>
    </div>
  )
}

export default Home

