import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const More = () => {
  React.useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <div className="w-full h-auto bg-white">
      {/* Testimonials Section */}
      <div className="frame-01-testimonials">
        <div className="homeblogs relative w-full h-52 bg-cover bg-center" style={{ backgroundImage: "url(https://image-resource.creatie.ai/146534274493196/146534419197262/66ea4685e864e08f190bd9ac09179cf6.jpg)" }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="flex items-center justify-center space-x-4 bg-opacity-10 bg-white rounded-full px-8 py-2">
              <span className="text-yellow-600 font-medium">Home</span>
              <svg className="w-4 h-4 text-white">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
              <span className="text-white font-medium">Testimonials</span>
            </div>
            <h1 className="text-white text-4xl font-bold mt-4">Testimonials</h1>
          </div>
        </div>

        {/* Video Players */}
        <div className="flex justify-between mt-8 px-36">
          <div className="relative w-[546px] h-[405px] bg-gray-200">
            <img
              src="https://image-resource.creatie.ai/146534274493196/146534419197262/9f29bfbce48033f2eead9e544c770b8b.jpeg"
              alt="Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent h-14 flex items-center justify-between px-4">
              <FaPlay className="text-white w-6 h-6 cursor-pointer" />
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm">0:15</span>
                <div className="relative w-48 h-2 bg-white bg-opacity-30 rounded-full">
                  <div className="absolute top-0 left-0 h-2 w-10 bg-white rounded-full"></div>
                </div>
                <span className="text-white text-sm">4:30</span>
              </div>
              <FaPause className="text-white w-6 h-6 cursor-pointer" />
            </div>
          </div>

          <div className="relative w-[546px] h-[405px] bg-gray-200">
            <img
              src="https://image-resource.creatie.ai/146534274493196/146534419197262/9f29bfbce48033f2eead9e544c770b8b.jpeg"
              alt="Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent h-14 flex items-center justify-between px-4">
              <FaPlay className="text-white w-6 h-6 cursor-pointer" />
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm">0:15</span>
                <div className="relative w-48 h-2 bg-white bg-opacity-30 rounded-full">
                  <div className="absolute top-0 left-0 h-2 w-10 bg-white rounded-full"></div>
                </div>
                <span className="text-white text-sm">4:30</span>
              </div>
              <FaPause className="text-white w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Additional Images */}
        <div className="grid grid-cols-3 gap-8 mt-10 px-8">
          {["cf1ed498ef52e7ed7fa901453e665699", "b05effc662a44890e27b53c04d60d52e", "399562436b47afac687d46dec52d08e9", "a097623d5b59945f4cdb09fec00c69ae", "b4d5ac34faa8286795e4a821fd3f9e28", "a67aac4b44614d9f83def4a1e330ae9e", "6ab07abc4d6718ac864d2700e0810011"].map((id, index) => (
            <div key={index} className="bg-white shadow-lg">
              <img
                src={`https://image-resource.creatie.ai/146534274493196/146534419197262/${id}.jpg`}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-82 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Corporate Info</h4>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>Astro-Branding</li>
                <li>Astro-Management</li>
                <li>Astro-Staffing</li>
                <li>Vastu & Vibrations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Blogs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p>Corpastro © 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default More;
