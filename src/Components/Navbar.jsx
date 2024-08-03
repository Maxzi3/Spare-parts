import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const linkclass = ({ isActive }) =>
    isActive
      ? " mr-5 hover:text-orange-800 overline"
      : "mr-5 hover:text-orange-800 ";
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 text-white body-font w-full bg-orange-600">
        <div className="container mx-auto flex flex-wrap p-1 flex-row items-center justify-between">
          <NavLink
            to="/"
            className="flex flex-col  text-white font-medium items-center ml-3 text-sm  hover:text-orange-800  hover:bg-white"
          >
            <span className="text-xl">IKW</span>{" "}
            <span className="border-t-2  border-orange-800 hover:border-white p-1"> VENTURES</span>
          </NavLink>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-3xl text-primary mr-3" />
              ) : (
                <FaBars className="text-3xl text-primary mr-3" />
              )}
            </button>
          </div>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row items-center text-base justify-center w-full md:w-auto`}
          >
            <NavLink
              to="/"
              className={linkclass}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={linkclass}
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/Product"
              className={linkclass}
              onClick={toggleMenu}
            >
              Products
            </NavLink>
            <NavLink
              to="/Contact"
              className={linkclass}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
