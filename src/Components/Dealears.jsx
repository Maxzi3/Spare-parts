import React from 'react'
import { useEffect } from "react";
import Aos from "aos";

const Dealears = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,
    });
  }, []);
  return (
    <>
      <div className="flex md:flex-row justify-center md:gap-20 flex-col items-center shamd:mt-20 relative md:top-0 ktop-96 my-32">
        <h1
          className="md:text-4xl text-2xl font-bold text-orange-600 "
          data-aos="flip-left"
        >
          OFFICIAL DISTRIBUTOR
        </h1>
        <img
          src="/img-4.jpeg"
          alt="Dealers"
          className="md:w-1/2 w-full"
          data-aos="flip-right"
        />
      </div>
      <div
        className=" relative md:bottom-80 bottom-60 md:right-5 block mx-auto w-80"
        data-aos="fade-up"
        >
        <h1 className="text-7xl text-white bg-blue-950 font-bold p-5 rounded-md font-serif">
          VOLVO
        </h1>
        <p className="text-center font-semibold text-orange-600">
          GENUINE VOLVO PARTS
        </p>
      </div>
    </>
  );
}

export default Dealears
