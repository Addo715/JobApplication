import React from 'react'
import Hero from '../Components/Hero'
import ConsultingLandingPage from '../Components/ConsultingLandingPage'
import Testimonials from '../Components/Testimonials'
import AboutUs from '../Components/AboutUs'


const Home = () => {
  return (
    <div>
       <Hero/>
        <AboutUs/>
       <Testimonials/>
       <ConsultingLandingPage/>
     
    </div>
  )
}

export default Home