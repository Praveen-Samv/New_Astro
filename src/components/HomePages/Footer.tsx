



// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div
//       className="relative z-10 shadow-md"
//       style={{
//         backgroundImage: `url('https://news.store.rambler.ru/img/74938c1226f9b698b9ed2ca14d5a7ec5')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay with blur effect */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

//       {/* Footer Container */}
//       <div className="relative z-20 flex flex-col items-start p-8 gap-8 max-w-6xl mx-auto">
//         {/* Top Section */}
//         <div className="flex w-full items-center gap-6">
//           <img
//             src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//             alt="CorpAstro Logo"
//             className="w-40 h-auto object-cover"
//           />
//           <div className="flex-grow flex items-center justify-end gap-4">
//             <div className="flex border border-gray-300 rounded-md overflow-hidden">
//               <input
//                 type="email"
//                 placeholder="Enter your email to get the latest news..."
//                 className="px-4 py-2 text-white bg-transparent w-64 focus:outline-none placeholder:text-gray-300"
//               />
//               <button className="bg-orange-500 px-4 text-white text-lg font-medium hover:bg-orange-600">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-gray-300"></div>

//         {/* Columns Section */}
//         <div className="flex flex-wrap justify-between gap-8 w-full">
//           {/* Column 1 */}
//           <div className="flex flex-col gap-2">
//             <h3 className="text-lg font-semibold text-white">Corporate Info</h3>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               Privacy Policy
//             </a>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               Terms & Conditions
//             </a>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               Contact Us
//             </a>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               About Us
//             </a>
//           </div>

//           {/* Column 2 */}
//           <div className="flex flex-col gap-2">
//             <h3 className="text-lg font-semibold text-white">Services</h3>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               Astro-Branding
//             </a>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               Astro-Management
//             </a>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               Astro-Staffing
//             </a>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               Vastu & Vibrations
//             </a>
//           </div>

//           {/* Column 3 */}
//           <div className="flex flex-col gap-2">
//             <h3 className="text-lg font-semibold text-white">Quick Links</h3>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               About Us
//             </a>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               Blogs
//             </a>
//             <a href="#" className="text-sm text-gray-300 hover:text-white">
//               Contact Us
//             </a>
//           </div>

//           {/* Column 4 */}
//           <div className="flex flex-col gap-4">
//             <h3 className="text-lg font-semibold text-white">Join Us</h3>
//             {/* Follow Us Section */}
//             <div className="flex justify-start space-x-4 text-gray-300">
//               <FaFacebookF className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
//               <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
//               <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
//               <FaLinkedinIn className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
//               <FaYoutube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px -mb-4 bg-gray-300"></div>

//         {/* Bottom Section */}
//         <div className="flex justify-center items-center w-full py-4">
//           <p className="text-sm -mb-6 text-gray-300">
//             Corpastro © 2025. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


// Responisve 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="relative z-10 shadow-md"
      style={{
        backgroundImage: `url('https://news.store.rambler.ru/img/74938c1226f9b698b9ed2ca14d5a7ec5')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with blur effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Footer Container */}
      <div className="relative z-20 flex flex-col items-start p-8 gap-8 max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row w-full items-center gap-6 sm:gap-4">
          <img
            src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
            alt="CorpAstro Logo"
            className="w-40 h-auto object-cover"
          />
          <div className="flex-grow flex items-center justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email to get the latest news..."
                className="px-4 py-2 text-white bg-transparent w-64 focus:outline-none placeholder:text-gray-300"
              />
              <button className="bg-orange-500 px-4 text-white text-lg font-medium hover:bg-orange-600">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200"></div>

        {/* Columns Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">Corporate Info</h3>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Contact Us
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              About Us
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Astro-Branding
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Astro-Management
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Astro-Staffing
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Vastu & Vibrations
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              About Us
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Blogs
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Contact Us
            </a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Join Us</h3>
            {/* Follow Us Section */}
            <div className="flex justify-center sm:justify-start space-x-4 text-gray-300">
              <FaFacebookF className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
              <FaLinkedinIn className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
              <FaYoutube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px -mb-4 bg-gray-200"></div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center w-full py-4">
          <p className="text-sm -mb-6 text-gray-300">
            Corpastro © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;






// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <div 
//       className="relative z-10 shadow-md"
//       style={{
//         backgroundImage: `url('')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       {/* Overlay with blur effect */}
//       <div 
//         className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
//       ></div>

//       {/* Footer Container */}
//       <div className="relative z-20 flex flex-col items-start p-12 gap-12 max-w-6xl max-w-full">
//         {/* Top Section */}
//         <div className="flex w-full items-center gap-8">
//           <img
//             src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//             alt="CorpAstro Logo"
//             className="w-52 h-auto object-cover"
//           />
//           <div className="flex-grow flex items-center justify-end gap-4">
//             <div className="flex border border-gray-300 rounded-md overflow-hidden">
//               <input
//                 type="email"
//                 placeholder="Enter your email to get the latest news..."
//                 className="px-4 py-2 text-gray-600 w-72 focus:outline-none"
//               />
//               <button className="bg-orange-500 px-4 text-white text-lg font-medium hover:bg-orange-600">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-gray-300 -mt-4"></div>

//         {/* Columns Section */}
//         <div className="flex flex-wrap justify-between -mt-4 gap-12">
//           {/* Column 1 */}
//           <div className="flex flex-col gap-3">
//             <h3 className="text-lg font-semibold text-gray-800">Corporate Info</h3>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</a>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Terms & Conditions</a>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Contact Us</a>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">About Us</a>
//           </div>

//           {/* Column 2 */}
//           <div className="flex flex-col gap-3">
//             <h3 className="text-lg font-semibold text-gray-800">Services</h3>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Astro-Branding</a>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Astro-Management</a>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Astro-Staffing</a>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Vastu & Vibrations</a>
//           </div>

//           {/* Column 3 */}
//           <div className="flex flex-col gap-3">
//             <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">About Us</a>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Blogs</a>
//             <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Contact Us</a>
//           </div>

//           {/* Column 4 */}
//           <div className="flex flex-col gap-6 ml-56">
//             <h3 className="text-lg font-semibold text-gray-800">Join Us</h3>
//             {/* <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600">
//               Sign Up
//             </button> */}

//             {/* Follow Us Section */}
//             <div className="py-8">
//               <div className="max-w-screen-lg mx-auto text-center">
//                 {/* <h3 className="text-orange-600 text-xl font-medium mb-4">Follow Us</h3> */}
//                 <div className="flex justify-center space-x-6 text-gray-700">
//                   <FaFacebookF className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
//                   <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
//                   <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
//                   <FaLinkedinIn className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
//                   <FaYoutube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px -mt-4 bg-gray-300"></div>

//         {/* Bottom Section */}
//         <div className="flex justify-center -mt-6 items-center w-full">
//           <p className="text-sm text-gray-600">
//             Corpastro © 2025. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;