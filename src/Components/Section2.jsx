import { FaWallet, FaFileLines, FaLock, FaPhoneVolume } from "react-icons/fa6";
import Aos from "aos";
import { useEffect } from "react";

const Section2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaPhoneVolume className="mb-4 text-4xl" />,
      title: " Free Shipping",
      desc: "We offer free shipping on all orders over N1000.",
    },
    {
      icon: <FaWallet className="mb-4 text-4xl" />,
      title: "Secure Payment",
      desc: "We accept all major credit cards and bank transfers.",
    },
    {
      icon: <FaFileLines className="mb-4 text-4xl" />,
      title: "30 Days Warranty",
      desc: " We offer a 30-day warranty on all our products.",
    },
    {
      icon: <FaLock className="mb-4 text-4xl" />,
      title: " 24/7 Support",
      desc: "We offer 24/7 support to all our customers..",
    },
  ];

  return (
    <section className="px-4 py-20 text-orange-600" data-aos="fade-up">
      <h1 className="mb-12 text-3xl font-bold text-center uppercase md:text-4xl text-secondary">
        Our Services
      </h1>

      <div className="grid gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-6 py-8 text-center transition border rounded-lg shadow hover:shadow-md"
          >
            {service.icon}
            <h2 className="mb-2 text-lg font-semibold">{service.title}</h2>
            <p className="text-sm ">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
