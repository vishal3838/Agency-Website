import React from "react";
import no1 from '../assets/brands/1.png'
import no2 from '../assets/brands/2.png'
import no3 from '../assets/brands/3.png'
import no4 from '../assets/brands/4.png'
import no5 from '../assets/brands/5.png'
import no6 from '../assets/brands/6.jpg'
// import no61 from '../assets/brands/6.png'
import no7 from '../assets/brands/7.jpg'
import no8 from '../assets/brands/8.jpg'
import no9 from '../assets/brands/9.jpg'
import no10 from '../assets/brands/10.jpg'
const TrustedBrands = () => {
  const brands = [
    { id: 1, logo: no1 },
    { id: 2, logo: no2 },
    { id: 3, logo: no3 },
    { id: 4, logo: no4 },
    { id: 5, logo: no5 },
    { id: 6, logo: no6 },
    // { id: 61, logo: no6 },
    { id: 7, logo: no7 },
    { id: 8, logo: no8 },
    { id: 9, logo: no9 },
    { id: 10, logo: no10 },
    
  ];

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Who Trusts Us</h2>
      <div >
        <div className="flex items-center gap-6 px-4 w-max animate-scroll ">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-md"
            >
              <img
                src={brand.logo}
                alt={`Brand ${brand.id}`}
                className="w-auto h-auto max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
