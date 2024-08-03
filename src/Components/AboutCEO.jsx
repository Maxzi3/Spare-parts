import React from "react";

const AboutCEO = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-10 items-center p-10  rounded-lg md:w-3/4 w-full shadow-lg mx-auto text-orange-600">
      <img
        src="https://via.placeholder.com/150"
        alt="IK Ben"
        className="rounded-full mb-4"
      />
      <div >
        <h1 className="text-3xl font-bold text-secondary mb-2">IK WELL</h1>
        <h2 className="text-xl font-semibold text-secondary mb-2">
          FOUNDER AND CEO OF IYKEWELL VENTURES
        </h2>
        <p className="md:text-lg text-sm ">
          IK(IKECHUKWU) has been in the business for over 20 years, bringing a wealth
          of experience and expertise to IYKewell Ventures. Known for his
          visionary leadership and innovative approach, IK has led the company
          to new heights, establishing it as a leader in the industry. His
          commitment to excellence, customer satisfaction, and ethical business
          practices have been the cornerstone of the company’s success. IK is
          also a strong advocate for community development and sustainability,
          ensuring that the company’s growth is aligned with positive social
          impact.
        </p>
      </div>
    </div>
  );
};

export default AboutCEO;
