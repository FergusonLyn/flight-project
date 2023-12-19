import React, {useEffect} from 'react'

// importing images
// import takeoff from '../assets/takeoff.jpg'
import takeoff from '../assets/takeoff1.png'
import video from '../assets/video1.mp4'

// importing AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  // useEffect to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='home flex container'>
        <div className="mainText">
          <h1 data-aos='fade-up' data-aos-duration='2500' >Create Ever-lasting Memories With Us</h1>
        </div>

        <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop className='video'></video>
          </div>

          <img src={takeoff} className='plane' alt="" />
        </div>
    </div>
  )
}

export default Home

