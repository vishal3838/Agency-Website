import React from "react";
import Logo from "../src/assets/logo/logo.png";

const Navbar = () => {
  return (
    <nav className=" text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          <div className="flex items-center">
            <h1 className="text-xl font-bold">
              <img src={Logo} alt="" />
            </h1>
          </div>
          <div className=" md:flex space-x-12 font-semibold font-serif font text-xl items-center">
            <a href="#home" className="hover:text-orange-500">
              Home
            </a>
            <a href="#about" className="hover:text-orange-500">
              About
            </a>
            <a href="#services" className="hover:text-orange-500">
              Services
            </a>
            <a href="#testimonial" className="hover:text-orange-500">
              Testimonial
            </a>
            <a href="#contact" className="hover:text-orange-500">
            Contact
            </a>
          </div>
          <div className="flex md:hidden items-center">
            <button className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
