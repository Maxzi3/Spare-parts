import React from "react";
import {  FaPhoneVolume, FaWallet, FaFileLines, FaLock } from "react-icons/fa6";
// import useIntersectionObserver from "./useIntersectionObserver";

const Section2 = () => {
//   const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <div
    //   ref={ref}
    //   className={`${isIntersecting ? "animate-fadeInBottom" : ""}`}
    >
      <h1 className="text-center line-before text-2xl text-orange-600 font-bold pt-14">
        Our Services
      </h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-4 py-14 w-4/5 m-auto">
        <div className="">
          <FaPhoneVolume className=" text-orange-600 text-5xl m-auto" />
          <h1 className="text-xl p-4 font-semibold text-orange-600 text-center">
            Free Shipping
          </h1>
          <p className="text-center text-md text-gray-600 font-medium">
            We offer free shipping on all orders over N1000.
          </p>
        </div>
        <div className="">
          <FaWallet className="text-orange-600 text-5xl m-auto" />
          <h1 className="text-xl p-4 font-semibold text-orange-600 text-center">
            Secure Payment
          </h1>
          <p className="text-center text-md text-gray-600 font-medium">
            We accept all major credit cards and bank transfers.
          </p>
        </div>
        <div className="">
          <FaFileLines className="text-orange-600 text-5xl m-auto" />
          <h1 className="text-xl pt-4 pb-4 font-semibold text-orange-600 text-center">
            30 Days Warranty
          </h1>
          <p className="text-center text-md text-gray-600 font-medium">
            We offer a 30-day warranty on all our products.
          </p>
        </div>
        <div className="">
          <FaLock className="text-orange-600 text-5xl m-auto" />
          <h1 className="text-xl py-4 font-semibold text-orange-600 text-center">
            24/7 Support
          </h1>
          <p className="text-center text-md text-gray-600 font-medium">
            We offer 24/7 support to all our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
