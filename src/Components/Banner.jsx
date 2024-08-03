import React from "react";

const Banner = ({ title, paragraph }) => {  
  return (
    <div className="md:bg-custom-bg2 bg-custom-bg w-full h-auto bg-left bg-fixed md:bg-cover">
      <div className="bg-black md:bg-gray-900 md:opacity-80 opacity-80 w-full h-auto">
        <h1 className="md:text-left text-right md:w-1/2 w-full text-orange-500 text-2xl md:text-4xl font-bold md:font-bold pt-40 md:pt-52 pb-4 md:ml-8 ">
          {title}
        </h1>
        <p className="text-orange-600 md:text-left text-right md:w-1/2  font-semibold md:font-medium px-1 md:px-0 text-lg md:text-xl pb-44 md:ml-8 ml-24">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Banner;
