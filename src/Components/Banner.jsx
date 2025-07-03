/* eslint-disable react/prop-types */
const Banner = ({ title, paragraph }) => {
  return (
    <section className="relative w-full text-orange-600 bg-fixed bg-left bg-cover bg-custom-bg2 md:bg-center">
      {/* Overlay */}
      <div className="w-full h-full bg-black bg-opacity-80">
        <div className="max-w-5xl px-6 py-32 mx-auto md:py-44">
          <h1 className="mb-6 text-3xl font-bold text-orange-500 md:text-5xl">
            {title}
          </h1>
          <p className="text-lg font-medium leading-relaxed text-orange-100 md:text-xl">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
