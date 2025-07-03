import { FaCar } from "react-icons/fa6";
import { useEffect } from "react";
import Aos from "aos";
import { FaTools } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full py-20 bg-white">
      <div className="flex flex-col items-center max-w-6xl gap-10 px-4 mx-auto text-orange-600 md:flex-row">
        {/* Image & Background */}
        <div
          className="relative w-full overflow-hidden bg-center bg-cover rounded-lg md:w-1/2 h-96 bg-bg2"
          data-aos="flip-left"
        >
          <img
            src="/img-3.jpeg"
            alt="About"
            className="absolute w-64 md:w-3/4 left-8 bottom-[-40px] md:left-24 rounded-md shadow-lg border-4 border-white"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2" data-aos="fade-up">
          <h1 className="text-xl font-semibold text-center uppercase line-before">
            About Us
          </h1>
          <h2 className="mt-4 mb-6 text-2xl font-bold text-center text-orange-600 md:text-3xl">
            We are a team of passionate individuals working to get your car up
            and running
          </h2>

          {/* Features */}
          <div className="flex items-start gap-4 mb-6">
            <FaTools className="p-3 text-white bg-orange-600 rounded-full w-14 h-14" />
            <div>
              <h3 className="text-lg font-bold">Auto Part Store</h3>
              <p className="text-gray-700">
                Our stores are accessible anytime.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCar className="p-3 text-white bg-orange-600 rounded-full w-14 h-14" />
            <div>
              <h3 className="text-lg font-bold">Auto Service</h3>
              <p className="text-gray-700">Our service is available 24/7.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
