import React from "react";
import {} from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Aos from "aos";

const About = () => {
   useEffect(() => {
     Aos.init({
       duration: 1000, // Animation duration in milliseconds
       once: true,
     });
   }, []);
  return (
    <div className="flex md:flex-row items-center flex-col gap-10 md:w-11/12 w-full md:mx-auto md:p-10 my-10 text-orange-600 shadow-lg ">
      <div
        className="bg-bg2 w-9/12 h-96 md:mx-10 mb-10 bg-center bg-cover relative"
        data-aos="flip-left"
      >
        <img
          className="md:w-2/3 absolute -bottom-10 left-10 md:left-60"
          src="/img-3.jpeg"
          alt=""
        />
      </div>
      <div className="md:w-1/2 md:mx-auto" data-aos="fade-up">
        <h1 className="line-before font-medium text-center md:text-xl">
          ABOUT US
        </h1>
        <h1 className="md:text-2xl md:mt-10 text-sm md:w-full w-9/12 mx-auto text-center font-extrabold mb-4 capitalize">
          We are a team of passionate individuals Working together get your car
          up and running
        </h1>
        <div className="flex flex-row my-5 items-center">
          <>
            <FaUserLarge className=" w-14 h-14 text-8xl bg-orange-600 text-white md:p-3 p-2  rounded-full mx-4" />
          </>
          <div>
            <h1 className="py-2 px-4 font-bold">Auto Part Store</h1>
            <p className="px-4 mx-auto font-normal">
              Our Stores are Accesible anytime
            </p>
          </div>
        </div>
        <div className="flex flex-row my-5 items-center ">
          <>
            <FaUserLarge className="w-14 h-14 text-8xl bg-orange-600 text-white md:p-3 p-2  rounded-full mx-4" />
          </>
          <div>
            <h1 className="py-2 px-4 font-bold">Auto Service</h1>
            <p className="px-4 mx-auto font-normal">Our Service is 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
