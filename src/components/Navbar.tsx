// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isMoreOpen, setIsMoreOpen] = useState(false);

//   const servicesRef = useRef<HTMLDivElement>(null);
//   const moreRef = useRef<HTMLDivElement>(null);

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       servicesRef.current &&
//       !servicesRef.current.contains(event.target as Node)
//     ) {
//       setIsServicesOpen(false);
//     }
//     if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
//       setIsMoreOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Left Section: Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img
//                 src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//                 className="h-10 w-auto"
//                 alt="CorpAstro Logo"
//               />
//             </Link>
//           </div>

//           {/* Center Section: Navigation */}
//           <div className="hidden md:flex items-center justify-center space-x-4">
//             {/* Services Dropdown */}
//             <div ref={servicesRef} className="relative">
//               <button
//                 onClick={() => setIsServicesOpen(!isServicesOpen)}
//                 className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//               >
//                 Services
//                 <svg
//                   className="ml-2 h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
              
//               {isServicesOpen && (
//                 <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
//                   <div className="py-1" role="menu">
//                     {["Numerology", 'Subscription', 'Premium'].map((service) => (
//                       <Link
//                         key={service}
//                         to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         role="menuitem"
//                       >
//                         {service}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/consultation"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Consultation
//             </Link>

//             <Link
//               to="/blog"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Blog
//             </Link>

//             <Link
//               to="/about"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               About Us
//             </Link>

//             <Link
//               to="/contact"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Contact
//             </Link>

//             {/* More Dropdown */}
//             <div ref={moreRef} className="relative">
//               <button
//                 onClick={() => setIsMoreOpen(!isMoreOpen)}
//                 className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//               >
//                 More
//                 <svg
//                   className="ml-2 h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
              
//               {isMoreOpen && (
//                 <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
//                   <div className="py-1" role="menu">
//                     <Link
//                       to="/astro-business-diagnostic-report"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       role="menuitem"
//                     >
//                       Astro Business Diagnostic Report
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Section: Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               to="/login"
//               className="text-sm font-medium text-orange-600 hover:text-orange-500"
//             >
//               Login
//             </Link>
//             {/* <Link
//               to="/signup"
//               className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-colors"
//             >
//               Sign Up
//             </Link> */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isMoreOpen, setIsMoreOpen] = useState(false);

//   const servicesRef = useRef<HTMLDivElement>(null);
//   const moreRef = useRef<HTMLDivElement>(null);

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       servicesRef.current &&
//       !servicesRef.current.contains(event.target as Node)
//     ) {
//       setIsServicesOpen(false);
//     }
//     if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
//       setIsMoreOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Left Section: Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img
//                 src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//                 className="h-10 w-auto"
//                 alt="CorpAstro Logo"
//               />
//             </Link>
//           </div>

//           {/* Center Section: Navigation */}
//           <div className="hidden md:flex items-center justify-center space-x-4">
//             {/* Services Dropdown */}
//             <div ref={servicesRef} className="relative">
//               <button
//                 onClick={() => setIsServicesOpen(!isServicesOpen)}
//                 className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//               >
//                 Services
//                 <svg
//                   className="ml-2 h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               {isServicesOpen && (
//                 <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
//                   <div className="py-1" role="menu">
//                     {[
//                       { name: "Free-Services", path: "/numerology" },
//                       { name: "Subscription", path: "/subscription" },
//                       { name: "Premium", path: "/premium" },
//                     ].map((service) => (
//                       <Link
//                         key={service.name}
//                         to={service.path}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         role="menuitem"
//                       >
//                         {service.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* <Link
//               to="/consultation"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Consultation
//             </Link> */}

//             <Link
//               to="/blog"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Blog
//             </Link>

//             <Link
//               to="/about"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               About Us
//             </Link>

//             <Link
//               to="/contact"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//             >
//               Contact
//             </Link>

//             {/* More Dropdown */}
//             <div ref={moreRef} className="relative">
//               <button
//                 onClick={() => setIsMoreOpen(!isMoreOpen)}
//                 className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
//               >
//                 More
//                 <svg
//                   className="ml-2 h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               {isMoreOpen && (
//                 <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
//                   <div className="py-1" role="menu">
//                     <Link
//                       to="/astro-business-diagnostic-report"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       role="menuitem"
//                     >
//                       Astro Business Diagnostic Report
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Section: Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               to="/login"
//               className="text-sm font-medium text-orange-600 hover:text-orange-500"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





//////////////////////////////////////////////////////////////////
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Left Section: Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img
//                 src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//                 className="h-10 w-auto"
//                 alt="CorpAstro Logo"
//               />
//             </Link>
//           </div>

//           {/* Center Section: Navigation */}
//           <div className="hidden md:flex items-center justify-center space-x-4">
//             <Link
//               to="/numerology"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Free Tools
//             </Link>

//             <Link
//               to="/subscription"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Services
//             </Link>

//             <Link
//               to="/premium"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Consultations
//             </Link>

//             <Link
//               to="/blog"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Blog
//             </Link>

//             <Link
//               to="/about"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               About Us
//             </Link>

//             <Link
//               to="/contact"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Right Section: Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               to="/login"
//               className="text-sm font-medium text-orange-600 hover:text-orange-500"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import  supabase  from "./config/supabaseClient"; // Import the Supabase client

// const Navbar: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
//   const navigate = useNavigate();

//   // Check if the user is logged in on component mount
//   useEffect(() => {
//     const checkUser = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       if (user) {
//         setIsLoggedIn(true); // Set logged in state to true if user exists
//       }
//     };
//     checkUser();
//   }, []);

//   // Handle logout
//   const handleLogout = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (!error) {
//       setIsLoggedIn(false); // Update login state
//       navigate("/"); // Redirect to home page after logout
//     } else {
//       console.error("Logout error:", error.message);
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Left Section: Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img
//                 src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//                 className="h-10 w-auto"
//                 alt="CorpAstro Logo"
//               />
//             </Link>
//           </div>

//           {/* Center Section: Navigation */}
//           <div className="hidden md:flex items-center justify-center space-x-4">
//             <Link
//               to="/numerology"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Free Tools
//             </Link>

//             <Link
//               to="/subscription"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Services
//             </Link>

//             <Link
//               to="/premium"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Consultations
//             </Link>

//             <Link
//               to="/blog"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Blog
//             </Link>

//             <Link
//               to="/about"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               About Us
//             </Link>

//             <Link
//               to="/contact"
//               className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Right Section: Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             {isLoggedIn ? (
//               // Show logout button if user is logged in
//               <button
//                 onClick={handleLogout}
//                 className="text-sm font-medium text-orange-600 hover:text-orange-500"
//               >
//                 Logout
//               </button>
//             ) : (
//               // Show login button if user is not logged in
//               <Link
//                 to="/login"
//                 className="text-sm font-medium text-orange-600 hover:text-orange-500"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



//////////////////////
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import supabase from "./config/supabaseClient"; // Import the Supabase client

// const Navbar: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu
//   const navigate = useNavigate();

//   // Check if the user is logged in on component mount
//   useEffect(() => {
//     const checkUser = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       if (user) {
//         setIsLoggedIn(true); // Set logged in state to true if user exists
//       }
//     };
//     checkUser();
//   }, []);

//   // Handle logout
//   const handleLogout = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (!error) {
//       setIsLoggedIn(false); // Update login state
//       navigate("/"); // Redirect to home page after logout
//     } else {
//       console.error("Logout error:", error.message);
//     }
//   };

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 h-20 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Left Section: Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img
//                 src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//                 className="h-12 w-auto"
//                 alt="CorpAstro Logo"
//               />
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-gray-900 hover:text-orange-500 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           {/* Center Section: Navigation */}
//           <div className="hidden md:flex items-center justify-center space-x-4">
//             <Link
//               to="/numerology"
//               className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Free Tools
//             </Link>

//             <Link
//               to="/subscription"
//               className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Services
//             </Link>

//             <Link
//               to="/premium"
//               className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Consultations
//             </Link>

//             <Link
//               to="/blog"
//               className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Blog
//             </Link>

//             <Link
//               to="/about"
//               className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               About Us
//             </Link>

//             <Link
//               to="/contact"
//               className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Right Section: Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             {isLoggedIn ? (
//               // Show logout button if user is logged in
//               <button
//                 onClick={handleLogout}
//                 className="text-base font-medium text-orange-600 hover:text-orange-500"
//               >
//                 Logout
//               </button>
//             ) : (
//               // Show login button if user is not logged in
//               <Link
//                 to="/login"
//                 className="text-base font-medium text-orange-600 hover:text-orange-500"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden mt-4">
//             <div className="flex flex-col space-y-2">
//               <Link
//                 to="/numerology"
//                 className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 Free Tools
//               </Link>

//               <Link
//                 to="/subscription"
//                 className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 Services
//               </Link>

//               <Link
//                 to="/premium"
//                 className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 Consultations
//               </Link>

//               <Link
//                 to="/blog"
//                 className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 Blog
//               </Link>

//               <Link
//                 to="/about"
//                 className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 About Us
//               </Link>

//               <Link
//                 to="/contact"
//                 className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 Contact Us
//               </Link>

//               {isLoggedIn ? (
//                 <button
//                   onClick={handleLogout}
//                   className="px-4 py-2 rounded-full text-base font-medium text-orange-600 hover:text-orange-500"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <Link
//                   to="/login"
//                   className="px-4 py-2 rounded-full text-base font-medium text-orange-600 hover:text-orange-500"
//                 >
//                   Login
//                 </Link>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "./config/supabaseClient";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setIsLoggedIn(true);
      }
    };
    checkUser();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setIsLoggedIn(false);
      navigate("/");
    } else {
      console.error("Logout error:", error.message);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
                className="h-10 w-auto"
                alt="CorpAstro Logo"
              />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 hover:text-orange-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-4">
            {[
              { path: "/", label: "Home" },
              { path: "/numerology", label: "Free Tools" },
              { path: "/subscription", label: "Services" },
              { path: "/premium", label: "Consultations" },
              { path: "/blog", label: "Blog" },
              { path: "/about", label: "About Us" },
              { path: "/contact", label: "Contact Us" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-base font-medium text-orange-600 hover:text-orange-500"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-base font-medium text-orange-600 hover:text-orange-500"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/numerology", label: "Free Tools" },
                { path: "/subscription", label: "Services" },
                { path: "/premium", label: "Consultations" },
                { path: "/blog", label: "Blog" },
                { path: "/about", label: "About Us" },
                { path: "/contact", label: "Contact Us" },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="px-4 py-2 rounded-full text-base font-medium text-gray-900 hover:bg-orange-400 transition-colors"
                >
                  {label}
                </Link>
              ))}
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full text-base font-medium text-orange-600 hover:text-orange-500"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full text-base font-medium text-orange-600 hover:text-orange-500"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;







// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import supabase from "./config/supabaseClient"; // Import the Supabase client

// const Navbar: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false); // State for modal visibility

//   // Check if the user is logged in
//   useEffect(() => {
//     const checkUser = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       if (user) {
//         setIsLoggedIn(true); // User is logged in
//       } else {
//         setIsLoggedIn(false); // User is not logged in
//       }
//     };

//     checkUser();
//   }, []);

//   // Handle Free Tools click
//   const handleFreeToolsClick = () => {
//     if (!isLoggedIn) {
//       setShowLoginModal(true); // Show login modal if not logged in
//     }
//   };

//   // Close the modal
//   const closeModal = () => {
//     setShowLoginModal(false);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Left Section: Logo */}
//             <div className="flex-shrink-0">
//               <Link to="/">
//                 <img
//                   src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//                   className="h-10 w-auto"
//                   alt="CorpAstro Logo"
//                 />
//               </Link>
//             </div>

//             {/* Center Section: Navigation */}
//             <div className="hidden md:flex items-center justify-center space-x-4">
//               {/* Free Tools Link (Conditional Rendering) */}
//               {isLoggedIn ? (
//                 <Link
//                   to="/numerology"
//                   className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//                 >
//                   Free Tools
//                 </Link>
//               ) : (
//                 <span
//                   onClick={handleFreeToolsClick}
//                   className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 cursor-pointer hover:bg-gray-100 transition-colors"
//                   title="Login to access Free Tools"
//                 >
//                   Free Tools
//                 </span>
//               )}

//               <Link
//                 to="/subscription"
//                 className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 Services
//               </Link>

//               <Link
//                 to="/premium"
//                 className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 Consultations
//               </Link>

//               <Link
//                 to="/blog"
//                 className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 Blog
//               </Link>

//               <Link
//                 to="/about"
//                 className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 About Us
//               </Link>

//               <Link
//                 to="/contact"
//                 className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-orange-400 transition-colors"
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* Right Section: Auth Buttons */}
//             <div className="hidden md:flex items-center space-x-4">
//               {isLoggedIn ? (
//                 <button
//                   onClick={async () => {
//                     await supabase.auth.signOut(); // Log out the user
//                     setIsLoggedIn(false); // Update login state
//                   }}
//                   className="text-sm font-medium text-orange-600 hover:text-orange-500"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <Link
//                   to="/login"
//                   className="text-sm font-medium text-orange-600 hover:text-orange-500"
//                 >
//                   Login
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Login Modal */}
//       {showLoginModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">Login Required</h2>
//             <p className="text-gray-600 mb-6">
//               Please log in with your email to access Free Tools.
//             </p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 Cancel
//               </button>
//               <Link
//                 to="/login"
//                 className="px-4 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
//               >
//                 Go to Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;