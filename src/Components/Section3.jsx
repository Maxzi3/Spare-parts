import React from 'react'

const Section3 = () => {
  return (
    <div className="bg-bg1 w-full h-96 bg-fixed opacity-100 relative md:top-0  top-96 md:mb-0 mb-96">
      <div className="bg-black opacity-80 w-full h-96">
        <h1 className="text-center pt-24 text-orange-500 md:text-5xl text-xl font-bold">
          Car Parts That Exceed Your Expectations
        </h1>
        <p className="text-center pt-8 md:px-56 px-16 pb-8 text-orange-500 md:text-xl text-sm font-extrabold">
          Our car parts are designed to provide you with the best driving
          experience. From engine components to suspension
        </p>
      </div>
      <div className="absolute bottom-80 md:relative md:bottom-40 flex md:flex-row flex-col md:w-11/12 w-10/12 md:my-32 md:mx-16 mx-8 md:gap-5 gap-8 text-white bg-orange-500 md:p-2 p-4">
        <div className="flex items-center gap-4 py-5 px-12 border-r-2">
          <h1 className="text-4xl font-bold">2500+</h1>
          <h1 className="text-xl w-24">Brand Product</h1>
        </div>
        <div className="flex  items-center gap-4 md:p-4 px-12 py-2 border-r-2">
          <h1 className="text-4xl font-bold">
            97<span>%</span>
          </h1>
          <h1 className="text-xl w-24 pr-32">Customer Satisfaction</h1>
        </div>
        <div className="flex items-center gap-10 md:p-4 px-20  py-2 border-r-2 ">
          <h1 className="text-4xl font-bold">2</h1>
          <h1 className="text-xl w-24 pr-32">Offline Store</h1>
        </div>
        <div className="flex items-center gap-4 md:p-4 px-12 py-2 ">
          <h1 className="text-4xl font-bold">
            75<span>+</span>
          </h1>
          <h1 className="text-xl w-28">Professional Team</h1>
        </div>
      </div>
    </div>
  );
}

export default Section3
