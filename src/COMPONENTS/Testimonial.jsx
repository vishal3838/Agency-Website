import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "We have many branches throughout North India, and for many years now Khyati Shield has been serving us with housekeeping, security, labor. Whenever we need it, they are easy to reach and contact. We wish them happiness.",
      author: "Dr. Richa",
    },
    {
      quote:
        "We would be pleased to recommend your company for security services to anyone in need of protection. We have been using your services for a long time and found very helpful, skilled and attentive security guards. We will continue to use your services to keep us safe in the future.",
      author: "Rahul Malik",
    },
    {
      quote:
        "Your supervisor of security is doing a good job. they are good at solving on-site problems. Great  job Khyati Shield.",
      author: "Dhruv Kumar",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div >

        <span className="flex font-bold justify-center text-orange-500">What Client Says</span>
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-6 underline ">
        {/* <br /> */}
        Testimonial
      </h1>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg italic">"{testimonials[currentIndex].quote}"</p>
        <p className="mt-4 font-bold">- {testimonials[currentIndex].author}</p>
      </div>
    </div>
  );
};

export default Testimonial;
