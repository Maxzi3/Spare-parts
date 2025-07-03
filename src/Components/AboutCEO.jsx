import { useEffect } from "react";
import Aos from "aos";

const AboutCEO = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="flex flex-col items-center max-w-6xl gap-10 p-6 mx-auto rounded-lg md:flex-row bg-secondary text-primary">
        <img
          src="./ceo.jpeg"
          alt="IK Well"
          className="object-cover object-center w-48 h-48 border-4 border-white rounded-full shadow-lg md:w-64 md:h-64"
          data-aos="zoom-in"
        />
        <div data-aos="fade-up" className="text-center md:text-left">
          <h1 className="mb-2 text-2xl font-bold md:text-3xl text-primary">
            IK WELL
          </h1>
          <h2 className="mb-4 text-lg font-semibold text-orange-600 md:text-xl">
            FOUNDER & CEO, IYKEWELL VENTURES
          </h2>
          <p className="text-sm leading-relaxed text-orange-600 md:text-base">
            IK (Ikechukwu) has been in the business for over 20 years, bringing
            a wealth of experience and expertise to IYKewell Ventures. Known for
            his visionary leadership and innovative approach, IK has led the
            company to new heights, establishing it as a leader in the industry.
            <br />
            <br />
            His commitment to excellence, customer satisfaction, and ethical
            business practices have been the cornerstone of the company’s
            success. He is also a strong advocate for community development and
            sustainability, ensuring that the company’s growth is aligned with
            positive social impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;
