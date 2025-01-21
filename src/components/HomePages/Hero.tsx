// import React, { useState, useEffect } from 'react';

// const Hero: React.FC = () => {
//   const slides = [
//     {
//       image: "https://image-resource.creatie.ai/146256977394649/146256977394651/b6dd8af070a44c78af12f389af43ff63.jpg",
//       title: "Transform Your Business Through Cosmic Wisdom",
//       content: "Harness the power of astrology and vastu to unlock unprecedented business growth and success",
//       // gradient: "from-purple-900/80 to-indigo-900/80"
//     },
//     {
//       image: "https://image-resource.creatie.ai/146256977394649/146256977394651/16b8ed602622fc00c181632807718983.jpg",
//       title: "Strategic Decisions Aligned with the Stars",
//       content: "Make informed business decisions backed by ancient wisdom and modern business analytics",
//       // gradient: "from-indigo-900/80 to-blue-900/80"
//     },
//     {
//       image: "https://image-resource.creatie.ai/146256977394649/146256977394651/af03b6a761835a1af1b30d1cb2630ff4.webp",
//       title: "Harmonize Your Workspace",
//       content: "Create a powerful, balanced environment that amplifies success through vastu principles",
//       // gradient: "from-blue-900/80 to-purple-900/80"
//     },
//     {
//       image: "https://cdn.prod.website-files.com/64d9c06eb20aa28a284c6beb/65f2dbee8e4952eda329b460_The%20Relationship%20between%20Karma%20and%20Astrology.jpg",
//       title: "Harmonize Your Workspace",
//       content: "Create a powerful, balanced environment that amplifies success through vastu principles",
//       // gradient: "from-blue-900/80 to-purple-900/80"
//     },
//     {
//       image: "https://cdn.prod.website-files.com/64d9c06eb20aa28a284c6beb/65eab9d382f40667bf4c28d3_Mahashivratri.jpg",
//       title: "Harmonize Your Workspace",
//       content: "Create a powerful, balanced environment that amplifies success through vastu principles",
//       // gradient: "from-blue-900/80 to-purple-900/80"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="relative w-full h-screen overflow-hidden -z-10">
//       {/* Full-screen background with overlay */}
//       <div className="absolute inset-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
//           style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//         />
//         <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentIndex]}`} />
//       </div>

//       {/* Content Container */}
//       <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
//         {/* Left Content */}
//         <div className="w-1/2 space-y-8">
//           <h1 className="text-5xl font-bold text-white leading-tight animate-fadeIn">
//             {slides[currentIndex].title}
//           </h1>
//           <p className="text-xl text-gray-200 animate-fadeIn delay-200">
//             {slides[currentIndex].content}
//           </p>
//           <div className="flex gap-4 animate-fadeIn delay-300">
//             <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
//               Get Started
//             </button>
//             <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right Content - Floating Card */}
//         <div className="w-1/2 flex justify-center items-center">
//           <div className="w-[400px] h-[500px] bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl animate-float">
//             <img
//               src={slides[currentIndex].image}
//               alt={slides[currentIndex].title}
//               className="w-full h-64 object-cover rounded-xl mb-6"
//             />
//             <h3 className="text-2xl font-semibold text-white mb-4">
//               {slides[currentIndex].title}
//             </h3>
//             <p className="text-gray-200">
//               {slides[currentIndex].content}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentIndex === index 
//                 ? "bg-white scale-125" 
//                 : "bg-white/50 hover:bg-white/75"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;













// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Hero: React.FC = () => {
//   const [backgroundImage, setBackgroundImage] = useState(
//     'https://image-resource.creatie.ai/146256977394649/146256977394651/b6dd8af070a44c78af12f389af43ff63.jpg'
//   );

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     afterChange: (current: number) => {
//       // Update the background image based on the current slide index
//       setBackgroundImage(services[current].image);
//     },
//   };

//   const services = [
//     {
//       title: 'Service 1',
//       description: 'Description for service 1',
//       image: 'https://image-resource.creatie.ai/146256977394649/146256977394651/b6dd8af070a44c78af12f389af43ff63.jpg',
//     },
//     {
//       title: 'Service 2',
//       description: 'Description for service 2',
//       image: 'https://image-resource.creatie.ai/146256977394649/146256977394651/16b8ed602622fc00c181632807718983.jpg',
//     },
//     {
//       title: 'Service 3',
//       description: 'Description for service 3',
//       image: 'https://image-resource.creatie.ai/146256977394650/146256977394652/6e51027dba348583de149cd5ce2e6876.webp',
//     },
//     {
//       title: 'Service 4',
//       description: 'Description for service 4',
//       image: 'https://image-resource.creatie.ai/146256977394650/146256977394652/dc892b02f8ddf1e1f86be94f0888ea99.webp',
//     },
//     {
//       title: 'Service 5',
//       description: 'Description for service 5',
//       image: 'https://cdn.prod.website-files.com/64d9c06eb20aa28a284c6beb/65eab9d382f40667bf4c28d3_Mahashivratri.jpg',
//     },
//   ];

//   return (
//     <div
//       className="bg-cover bg-center min-h-screen transition-all duration-500 "
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Flex container to align content and services side by side */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
//         {/* Left Side: Content */}
//         <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 text-white">
//           <h1 className="text-4xl font-bold">Unlock Your Business Potential with Astrology & Vastu Insights</h1>
//           <p className="mt-4">
//             Enhance decision-making, improve workforce compatibility, and boost business success with personalized
//             astrological consultations tailored for your corporate needs.
//           </p>
//           <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded">Get Started</button>
//         </div>

//         {/* Right Side: Services Slider */}
//         <div className="w-full md:w-1/3 mt-52">
//           <Slider {...sliderSettings}>
//             {services.map((service, index) => (
//               <div key={index} className="p-4">
//                 <div className="p-4  rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-80 object-cover rounded-t-lg"
//                   />
                  
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    'https://image-resource.creatie.ai/146256977394649/146256977394651/b6dd8af070a44c78af12f389af43ff63.jpg'
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (current: number) => {
      // Update the background image based on the current slide index
      setBackgroundImage(services[current].image);
    },
  };

  const services = [
    {
      title: 'Service 1',
      description: 'Description for service 1',
      image: 'https://image-resource.creatie.ai/146256977394649/146256977394651/b6dd8af070a44c78af12f389af43ff63.jpg',
    },
    {
      title: 'Service 2',
      description: 'Description for service 2',
      image: 'https://image-resource.creatie.ai/146256977394649/146256977394651/16b8ed602622fc00c181632807718983.jpg',
    },
    {
      title: 'Service 3',
      description: 'Description for service 3',
      image: 'https://image-resource.creatie.ai/146256977394650/146256977394652/6e51027dba348583de149cd5ce2e6876.webp',
    },
    {
      title: 'Service 4',
      description: 'Description for service 4',
      image: 'https://newseu.cgtn.com/news/2021-01-11/World-famous-astrologer-shares-her-optimism-for-2021-WTw73sf3iM/img/d388cbf9ca204134981c21b215bdffef/d388cbf9ca204134981c21b215bdffef-1280.png',
    },
    {
      title: 'Service 5',
      description: 'Description for service 5',
      image: 'https://media.zenfs.com/es/el_nuevo_herald_986/3ad16804f99f34318526d3ed3bff6ad7',
    },
  ];

  return (
    <div
      className="bg-cover bg-center min-h-screen transition-all duration-500 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>

      {/* Flex container to align content and services side by side */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 relative z-10">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 text-white">
          <h1 className="text-4xl font-bold">Unlock Your Business Potential with Astrology & Vastu Insights</h1>
          <p className="mt-4">
            Enhance decision-making, improve workforce compatibility, and boost business success with personalized
            astrological consultations tailored for your corporate needs.
          </p>
          <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded">Get Started</button>
        </div>

        {/* Right Side: Services Slider */}
        <div className="w-full md:w-1/3 mt-52">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div key={index} className="p-4">
                <div className="p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-t-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;




