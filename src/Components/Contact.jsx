import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaBuilding,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex md:flex-row flex-col text-orange-600 my-20 justify-center">
      <div className="bg-bg2 md:w-96 w-full h-auto md:mx-10 mb-10 bg-center bg-cover">
        <div className="bg-black h-auto text-white opacity-70">
          <h1 className="text-center text-2xl text-orange-500 py-6 font-bold">
            CONTACT DETAILS
          </h1>
          <div className="flex gap-2 mx-10 pb-10">
            <FaBuilding className="text-3xl" />
            <div>
              <h1 className="">OUR OFFICE</h1>
              <p className="w-40">23, Olakunle Str Papa Ajao Mushin.</p>
            </div>
          </div>
          <div className="flex gap-2 mx-10 pb-10">
            <FaPhone className="text-3xl" />
            <div>
              <h1>Tel:</h1>
              <p>08033056790</p>
              <p>07086368131</p>
            </div>
          </div>
          <div className="flex gap-2 mx-10 pb-10">
            <FaEnvelope className="text-3xl" />
            <div>
              <h1>Email</h1>
              <p>ikwell2000@yahoo.com</p>
            </div>
          </div>
          <div>
            <h1 className="text-center">Follow Our Social Media</h1>
            <span className="flex flex-row gap-5 justify-center  pt-5 pb-20 md:pb-44">
              <FaFacebookF className="text-3xl" />
              <FaTwitter className="text-3xl" />
              <FaInstagram className="text-3xl" />
              <FaGithub className="text-3xl" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-10 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-secondary mb-4">
          Message Us, we will be with you shortly
        </h1>
        <form className="w-full max-w-lg">
          <div className="mb-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold mb-2">
                Name
              </label>
              <input
                className="border border-gray-300 outline-none p-3 w-full mb-4 rounded-md"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg font-semibold mb-2">
              Email
            </label>
            <input
              className="border border-gray-300 outline-none p-3 w-full mb-4 rounded-md"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="text-lg font-semibold mb-2">
              Phone
            </label>
            <input
              className="border border-gray-300 outline-none p-3 w-full mb-4 rounded-md"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              className="border border-gray-300 outline-none p-3 w-full h-32 rounded-md"
              id="message"
              name="message"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white hover:bg-white hover:text-orange-600 font-semibold py-2 px-4 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
