import React from 'react'
import about from '../assets/logo/about-1.jpg'
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
    
    <div className="w-full md:w-1/2 text-gray-800">
        <h2 className="text-5xl font-bold mb-4">About Us</h2>
        <h2 className="text-2xl font-bold mb-4">We Strive to Offer Intelligent Business Solutions</h2>
        <p className="mb-4">Khyatishield is one of the leading ISO 9001:2015 certified security company providing, guarding, digital surveillance, facility management, and job consultancy services to a large number of corporates today.</p>
        <p className="mb-4">Nowadays, safety-security provisions are considered in the very initial stages of project implementation and even included in the project feasibility report itself.</p>
        <p>We believe in commitment to quality with its potential team that brings on board their expertise from security and surveillance industry with our trained security personnel, we ensure the safety of your land, property, assets and you.</p>
    </div>
    <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
        <img src={about} alt="About Us" className="rounded-lg shadow-lg w-full md:w-auto" />
    </div>
</div>
  )
}

export default About