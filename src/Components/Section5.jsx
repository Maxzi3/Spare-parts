/* eslint-disable react/prop-types */
import  { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Aos from "aos";
import Product from "../Products.json";

const Section5 = ({ isHome }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const recentProducts = isHome ? Product.slice(0, 4) : Product;

  return (
    <section className="w-full px-4 py-16 bg-white">
      {/* Title */}
      <div className="mb-12 text-center">
        <h2 className="pt-10 text-3xl font-bold text-orange-600 underline md:text-4xl underline-offset-8 decoration-primary">
          Our Products
        </h2>
      </div>

      {/* Grid of Products */}
      <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-primary border-opacity-60 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            data-aos="fade-up"
          >
            <img
              className="object-cover object-center w-full h-48"
              src={product.image}
              alt={product.productName}
            />
            <div className="p-5">
              <h3 className="mb-1 text-xs text-gray-500 uppercase">
                {product.vehicleType}
              </h3>
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                {product.productName}
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                {product.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <Link
                  to="/Contact"
                  className="flex items-center gap-1 font-medium transition-all text-secondary hover:text-primary"
                >
                  Buy <FaArrowRight className="text-xs animate-bounce" />
                </Link>
                <span className="text-gray-500">{product.partNumber}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
