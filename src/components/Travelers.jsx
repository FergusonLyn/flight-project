import React, {useEffect} from 'react'

// importing destinations images
import paris from '../assets/paris.jpg'
import nyc from '../assets/nyc.jpg'
import london from '../assets/london.jpg'

// importing traveler images
import traveler1 from '../assets/traveler1.jpeg'
import traveler2 from '../assets/traveler2.jpg'
import traveler3 from '../assets/traveler3.jpg'

// importing AOS
import Aos from 'aos'
import 'aos/dist/aos.css'



const travelers = [
    {
        id: 1 ,
        destinationImage: paris ,
        travelerImage: traveler1,
        travelerName: 'FergusonT.',
        socialLink: '@FergusonLyn'
    },
    {
        id: 2 ,
        destinationImage: nyc ,
        travelerImage: traveler2,
        travelerName: 'FergusonT.',
        socialLink: '@FergusonLyn'
    },
    {
        id: 3 ,
        destinationImage: london ,
        travelerImage: traveler3,
        travelerName: 'FergusonT.',
        socialLink: '@FergusonLyn'
    },
    {
        id: 4 ,
        destinationImage: london ,
        travelerImage: traveler3,
        travelerName: 'FergusonT.',
        socialLink: '@FergusonLyn'
    },
]



const Travelers = () => {
    // useEffect to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='travelers container section'>
        <div className="sectionContainer">
            <h2 data-aos='fade-down' data-aos-duration='2500' >
                Top travelers of this month!
            </h2>

            <div className="travelersContainer grid">

                
                {
                    travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
                        return (
                            // {/* single passenger card */}
                            <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                                <img src={destinationImage} className='destinationImage'/>
                                <div className="travelerDetails">
                                    <div className="travelerPicture">
                                        <img src={travelerImage} className='travelerImage' />
                                    </div>
                                    <div className="travelerName">
                                        <span>{travelerName}</span>
                                        <p>{socialLink}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
      
    </div>
  )
}

export default Travelers
