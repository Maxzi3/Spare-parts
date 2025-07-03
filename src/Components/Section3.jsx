
import {  useEffect } from "react";
import Aos from "aos";

const Section3 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,
    });
  }, []);
  return (
    <div className="relative w-full bg-fixed opacity-100 bg-bg1 h-96 md:top-0 top-96 md:mb-0 mb-96">
      <div className="w-full bg-black opacity-80 h-96">
        <h1 className="pt-24 text-xl font-bold text-center text-orange-500 md:text-5xl">
          Car Parts That Exceed Your Expectations
        </h1>
        <p className="px-16 pt-8 pb-8 text-sm font-extrabold text-center text-orange-500 md:px-56 md:text-xl">
          Our car parts are designed to provide you with the best driving
          experience. From engine components to suspension
        </p>
      </div>
      <div
        className="absolute flex flex-col w-10/12 gap-8 p-4 mx-8 text-white bg-orange-500 bottom-80 md:relative md:bottom-40 md:flex-row md:w-11/12 md:my-32 md:mx-16 md:gap-5 md:p-2"
        data-aos="fade-up"
      >
        <div className="flex items-center gap-4 px-12 py-5 border-r-2">
          <h1 className="text-4xl font-bold">200+</h1>
          <h1 className="w-24 text-xl">Brand Product</h1>
        </div>
        <div className="flex items-center gap-4 px-12 py-2 border-r-2 md:p-4">
          <h1 className="text-4xl font-bold">
            99<span>%</span>
          </h1>
          <h1 className="w-24 pr-32 text-xl">Customer Satisfaction</h1>
        </div>
        <div className="flex items-center gap-10 px-20 py-2 border-r-2 md:p-4 ">
          <h1 className="text-4xl font-bold">2</h1>
          <h1 className="w-24 pr-32 text-xl">Offline Store</h1>
        </div>
        <div className="flex items-center gap-4 px-12 py-2 md:p-4 ">
          <h1 className="text-4xl font-bold">
            5<span>+</span>
          </h1>
          <h1 className="text-xl w-28">Professional Team</h1>
        </div>
      </div>
    </div>
  );
}

export default Section3
