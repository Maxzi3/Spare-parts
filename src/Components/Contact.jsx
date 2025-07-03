import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaBuilding,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="flex flex-col items-start justify-center w-11/12 gap-10 mx-auto my-20 text-orange-600 md:flex-row">
      {/* Contact Info Card */}
      <div
        className="w-full overflow-hidden bg-center bg-cover rounded-lg shadow-lg md:w-96 bg-bg2"
        data-aos="flip-left"
      >
        <div className="h-full p-6 space-y-6 text-white bg-black bg-opacity-80">
          <h2 className="text-2xl font-bold text-center text-orange-500">
            CONTACT DETAILS
          </h2>

          <div className="flex items-start gap-3">
            <FaBuilding className="mt-1 text-xl" />
            <div>
              <h3 className="font-semibold">OUR OFFICE</h3>
              <p className="text-sm">23, Olakunle Street, Papa Ajao Mushin</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaPhone className="mt-1 text-xl" />
            <div>
              <h3 className="font-semibold">Tel:</h3>
              <p className="text-sm">08033056790</p>
              <p className="text-sm">07086368131</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="mt-1 text-xl" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm">ikwell2000@yahoo.com</p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <h3 className="mb-2 text-sm">Follow Our Social Media</h3>
            <div className="flex justify-center gap-4 text-orange-500">
              <FaFacebookF className="text-xl transition hover:text-white" />
              <FaTwitter className="text-xl transition hover:text-white" />
              <FaInstagram className="text-xl transition hover:text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Message Form */}
      <div
        className="flex-1 p-8 bg-gray-100 rounded-lg shadow-lg"
        data-aos="flip-right"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-secondary">
          Message Us — We’ll Get Back Shortly
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-md outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 border border-gray-300 rounded-md outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white transition bg-orange-600 rounded-md hover:bg-white hover:text-orange-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
