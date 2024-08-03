import React from 'react'
import { FaLightbulb } from "react-icons/fa6";
import { FaHackerrank } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";


const Section6 = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 w-10/12 mx-auto shadow-lg">
      <div className="text-orange-600 p-4">
        <FaLightbulb className="text-4xl mb-4" />
        <h1 className="font-bold text-xl mb-2">Our Vision</h1>
        <p className="w-10/12">
          Our vision is to create a world where everyone has access to quality
          parts, regardless of their location and car type.
        </p>
      </div>
      <div className="text-orange-600 p-4">
        <FaHackerrank className="text-4xl mb-4" />
        <h1 className="font-bold text-xl mb-2">Our Histroy</h1>
        <p className="w-11/12">
          Our history is a story of passion, dedication, and a commitment to
          making a difference in the region
        </p>
      </div>
      <div className="text-orange-600 p-4">
        <FaChartSimple className="text-4xl mb-4" />
        <h1 className="font-bold text-xl mb-2">Our Mission</h1>
        <p className="w-10/12">
          Our mission is to provide quality and reliable parts to the region,
          reducing the wear and tear of cars in the region
        </p>
      </div>
    </div>
  );
}

export default Section6
