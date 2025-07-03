import  { useEffect } from "react";
import Aos from "aos";

const Section4 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full px-6 py-16 bg-white md:px-16 text-primary">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl mx-auto shadow-md rounded-lg overflow-hidden bg-[#fff9f5]">
        {/* Text Section */}
        <div className="w-full px-4 py-8 md:w-1/2 md:px-10" data-aos="fade-up">
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-orange-600 uppercase line-before md:text-base">
            Why Choose Us
          </h2>
          <h1 className="mb-6 text-xl font-extrabold leading-snug text-center text-orange-600 md:text-3xl md:text-left">
            We Assign the Best Engineer/Mechanic for the Job
          </h1>
          <ul className="space-y-4 text-sm text-gray-700 list-disc list-inside md:text-lg">
            <li>
              Highly skilled and experienced engineers specialized in various
              fields.
            </li>
            <li>
              Experts in the latest tools and technologies for efficient
              delivery.
            </li>
            <li>
              Proven record of delivering top-notch projects on time and within
              budget.
            </li>
            <li>
              Our team is passionate, dedicated, and driven by excellence.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div
          className="relative w-full bg-center bg-cover md:w-1/2 h-80 md:h-auto"
          style={{ backgroundImage: `url('/img-1.jpeg')` }}
          data-aos="flip-right"
        >
          <div className="absolute inset-0 bg-black rounded-lg bg-opacity-30" />
          <img
            src="/img-1.jpeg"
            alt="Choose Us"
            className="absolute w-3/4 md:w-1/2 border-[6px] border-white rounded-lg shadow-lg bottom-[-40px] left-4 md:left-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
