import React from "react";
import Logo from '../assets/logo/logo.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#0d1321] text-white py-10 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Information */}
        <div>
          <img
            src={Logo} // Replace with the logo's path
            alt="Khyati Shield Logo"
            className="mb-4"
          />
          <p className="mb-4 text-sm">
            We believe in commitment to quality with its potential team that
            brings on board their expertise from security and surveillance
            industry with our trained security personnel. We ensure the safety
            of your land, property, assets, and you.
          </p>
          <div className="space-y-2">
            <p>
              <span className="font-bold">📍</span> G-84, Sector 63 Noida Uttar
              Pradesh India-201301
            </p>
            <p>
              <span className="font-bold">📞</span> +91-9599186595,
              +91-9599186598, +91-120 313 0555
            </p>
            <p>
              <span className="font-bold">✉️</span> Info@khyatishield.com
            </p>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">OUR IMPORTANT LINKS</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Gallery</li>
            <li className="cursor-pointer">Career</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">NEWSLETTER</h3>
          <p className="text-sm mb-4">Subscribe to our latest newsletter.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 p-2 rounded-l-md text-black"
            />
            <button className="bg-orange-500 text-white h-10 px-4 rounded-r-md">
              SEND
            </button>
          </div>
          <h3 className="font-bold text-lg mt-6">FIND US IN</h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-3xl">
              <i className="fab fa-whatsapp"><FaWhatsapp/></i>
            </a>
            <a href="#" className="text-3xl">
              <i className="fab fa-facebook"><FaFacebookF/></i>
            </a>
            <a href="#" className="text-3xl">
              <i className="fab fa-instagram"><FaInstagram/></i>
            </a>
            <a href="#" className="text-3xl">
              <i className="fab fa-linkedin"><CiLinkedin/></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
