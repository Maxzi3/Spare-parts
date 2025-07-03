import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-orange-700 px-4 py-2 rounded-md font-semibold"
      : "text-white hover:text-orange-300 px-4 py-2";

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-orange-600 shadow-lg">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto md:py-4">
        {/* Logo */}
        <NavLink to="/" className="flex flex-col text-xl font-bold text-white">
          <span>IKW</span>
          <span className="pt-1 text-xs tracking-wide border-t border-white">
            VENTURES
          </span>
        </NavLink>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl text-white" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-6 md:flex">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/About" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/Product" className={linkClass}>
            Products
          </NavLink>
          <NavLink to="/Contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-3 px-4 pb-4 bg-orange-600 md:hidden">
          <NavLink to="/" className={linkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/About" className={linkClass} onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/Product" className={linkClass} onClick={closeMenu}>
            Products
          </NavLink>
          <NavLink to="/Contact" className={linkClass} onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
