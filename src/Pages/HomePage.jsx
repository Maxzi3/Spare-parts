import React from 'react'
import Banner from '../Components/Banner'
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Section4 from '../Components/Section4';
import Section5 from '../Components/Section5';
import ViewAll from '../Components/Viewall';
import Dealers from '../Components/Dealears';


const HomePage = () => {
  return (
    <div>
       
      <Banner
        title="Where car parts never compromise on quality"
        paragraph="We are the leading VOLVO parts supplier in the region"
      />
      <Section2 />
      <Section4 />
      <Dealers />
      <Section3 />  
      <Section5 isHome={true}/>
      <ViewAll />

     
    </div>
  )
}

export default HomePage
