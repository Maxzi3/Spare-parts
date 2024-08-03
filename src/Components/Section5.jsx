import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Product from "../Products.json";

const Section5 = ({ isHome}) => {
  const recentProducts = isHome ? Product.slice(0, 3) : Product;

  return (
    <div className="p-4 md:mt-40 mt-12 mb-10">
      <h1 className="line-before text-center md:p-10 p-5 text-2xl text-orange-600 font-bold">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12 mx-auto ">
        {recentProducts.map((product) => (
          <div
            key={product.id}
            className="border-2 border-primary shadow-lg border-opacity-60 rounded-lg overflow-hidden"
          >
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src="/Volvo.jpeg"
              alt={product.productName}
            ></img>
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                {product.vehicleType}
              </h2>
              <h1 className="title-font text-lg font-medium mb-3">
                {product.productName}
              </h1>
              <p className="leading-relaxed mb-3">{product.description}</p>
              <div className="flex justify-between items-center text-sm">
                <a
                  href="/Contact"
                  className="text-secondary hover:text-gray-900 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Buy <FaArrowRight className="ml-2 animate-bounce" />
                </a>
                <span>{product.partNumber}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
