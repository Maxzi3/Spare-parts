import  { useEffect } from "react";
import { FaLightbulb, FaHackerrank, FaChartSimple } from "react-icons/fa6";
import Aos from "aos";

const Section6 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const info = [
    {
      icon: <FaLightbulb className="mb-4 text-4xl text-orange-600" />,
      title: "Our Vision",
      text: "To create a world where everyone has access to quality parts, regardless of location and car type.",
    },
    {
      icon: <FaHackerrank className="mb-4 text-4xl text-orange-600" />,
      title: "Our History",
      text: "A story of passion, dedication, and commitment to making a difference in the region.",
    },
    {
      icon: <FaChartSimple className="mb-4 text-4xl text-orange-600" />,
      title: "Our Mission",
      text: "To provide reliable parts that reduce wear and tear and extend vehicle life in our region.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white" data-aos="fade-up">
      <div className="grid grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-3">
        {info.map((item, idx) => (
          <div
            key={idx}
            className="p-6 text-center transition duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
          >
            {item.icon}
            <h2 className="mb-2 text-xl font-bold text-gray-800">
              {item.title}
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
