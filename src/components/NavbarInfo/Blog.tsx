"use client";
import React from "react";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  return (
    <div className="max-w-[1440px] bg-white">
      {/* Header Section */}
      <div className="bg-cover h-48 bg-center bg-[url('https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg')] p-12 text-white text-center">
        <h1 className="text-4xl text-center font-bold">Our Blogs</h1>
        <div className="flex justify-center items-center  mt-4">
          
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg bg-white overflow-hidden"
          >
            <img
              src="https://image-resource.creatie.ai/146256977394650/146256977394652/cb38bd710d96f57d34fea8aef5036ef9.jpg"
              alt="Blog Cover"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://image-resource.creatie.ai/146256977394650/146256977394652/70adbcfb04a4defb2a640175250026bb.jpeg"
                  alt="Author"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-gray-600 font-medium">Harsha Vardhan</p>
                  <p className="text-sm text-gray-500">Created on October 10, {2023 + index}</p>
                </div>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-gray-800">
                Rahu Enters Cancer And Ketu Enters Capricorn
              </h2>
              <p className="mt-2 text-gray-600 text-sm">
                Learn the top tips to become a successful blogger.
              </p>
              <Link
                to={`/blog/one`}
                className="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center">
          <img
            src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
            alt="Logo"
            className="w-40 h-10"
          />
          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="border border-gray-300 p-2 rounded w-64"
            />
            <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
              Submit
            </button>
          </div>
        </div>
        <hr className="my-8" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-2">Corporate Info</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Services</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Astro-Branding</li>
              <li>Astro-Management</li>
              <li>Astro-Staffing</li>
              <li>Vastu & Vibrations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-gray-600">
              <li>About Us</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Join Us</h4>
            <p className="text-gray-600">Follow us on our social media channels.</p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">
          Corpastro © 2025. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Blog;
