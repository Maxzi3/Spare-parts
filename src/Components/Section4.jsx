import React from "react";
import {} from "react-icons/fa6";

const Section4 = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10 md:w-11/12 w-full md:mx-auto md:p-10 my-14 text-orange-600 shadow-lg ">
      <div className="md:w-1/2 md:mx-auto mx-14">
        <h1 className="line-before font-medium md:text-center md:text-xl">
          Why Choose Us
        </h1>
        <h1 className="md:text-2xl text-sm text-center font-extrabold mb-4">
          We Assign The best Engineer/Mechanical for The Job
        </h1>
        <ul className="list-disc md:py-4 md:text-xl text-gray-800">
          <li className="mb-4">
            We have a team of highly skilled and experienced engineers who are
            experts in their respective fields.
          </li>
          <li className="mb-4">
            Our engineers are well-versed in the latest technologies and tools,
            ensuring that your project is completed efficiently and effectively.
          </li>
          <li className="mb-4">
            We have a proven track record of delivering high-quality projects on
            time and within budget.
          </li>
          <li className="mb-4">
            Our engineers are passionate about their work and are committed to
            providing exceptional
          </li>
        </ul>
      </div>
      <div className="bg-bg2 md:w-8/12 w-full h-96 md:h-auto md:mx-10 mb-10 bg-center bg-cover relative">
        <img
          className="md:w-1/2 absolute -bottom-10 -left-10 border-8 border-white"
          src="/img-1.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section4;
