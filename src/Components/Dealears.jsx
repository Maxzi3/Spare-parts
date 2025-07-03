import  { useEffect } from "react";
import Aos from "aos";

const Dealears = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full px-6 py-16 bg-white md:py-32">
      {/* Distributor Info */}
      <div className="flex flex-col items-center justify-center gap-12 mx-auto md:flex-row max-w-7xl">
        <h1
          className="text-3xl font-bold text-center text-orange-600 uppercase md:text-5xl md:text-left"
          data-aos="flip-left"
        >
          Official Distributor
        </h1>
        <img
          src="/img-4.jpeg"
          alt="Dealers"
          className="w-full rounded-lg md:w-1/2"
          data-aos="flip-right"
        />
      </div>

      {/* VOLVO Badge Overlay */}
      <div
        className="mt-20 md:mt-[-6rem] w-72 mx-auto text-center relative z-10"
        data-aos="fade-up"
      >
        <div className="py-6 font-serif text-6xl font-bold text-white rounded-md shadow-lg bg-blue-950">
          VOLVO
        </div>
        <p className="mt-4 text-lg font-semibold text-orange-600">
          Genuine Volvo Parts
        </p>
      </div>
    </section>
  );
};

export default Dealears;
