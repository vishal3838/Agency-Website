import React from "react";
import manpower from "../assets/Gallery/manpower-service-1570218202-5105560.jpg";
import cap from "../assets/Gallery/cap.png";
import Gard from "../assets/Gallery/guard-copy-696x465.jpg";

const PhotoGallery = () => {
  const photos = [
    {
      image: manpower,
      // author: 'Manpower',
    },
    {
      image: cap,
      // author: 'Manpower',
    },
    {
      image: Gard,
      // author: 'Manpower',
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
        Photo Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            <img
              src={photo.image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg font-semibold">{photo.author}</p>
            </div> */}
          </div>
        ))}
      </div>
      <div className="mt-12 p-6 bg-orange-400 text-center">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 ">
          "WE PROVIDE MOST EFFECTIVE AND TRUSTED MANPOWER SERVICE"
          <br />
          <br />
          You can call us on +91-9599186595, +91-9599186598, +91-1203130555 to
          discuss your manpower requirement
        </h1>
        <div className="flex justify-center">

        <button className="flex bg-white text-black px-4 py-2 rounded hover:bg-orange-600">
          Send Enquiry
        </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
