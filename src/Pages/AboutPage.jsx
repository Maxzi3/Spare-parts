import React from 'react'
import Banner from '../Components/Banner'
import AboutCEO from '../Components/AboutCEO'
import About from '../Components/About'
import Section6 from '../Components/Section6'
import Dealears from '../Components/Dealears'

const AboutPage = () => {
  return (
    <div>
        <Banner title="About Us" />
        <About />
        <Section6/>
        <Dealears/>
        <AboutCEO />
      
    </div>
  )
}

export default AboutPage
