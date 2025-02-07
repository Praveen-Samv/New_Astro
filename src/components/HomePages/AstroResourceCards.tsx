// import React, { useRef, useEffect } from "react";

// const AstroResourceCards = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     const autoSlide = setInterval(() => {
//       if (sliderRef.current) {
//         sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
//       }
//     }, 3000);

//     return () => clearInterval(autoSlide);
//   }, []);

//   return (
//     <div className="relative mt-10 flex flex-col items-center">
//       {/* Navigation Buttons */}
//       <div className="w-full flex justify-between px-8">
//         <button
//           onClick={scrollLeft}
//           className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
//         >
//           &#8592;
//         </button>
//         <button
//           onClick={scrollRight}
//           className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
//         >
//           &#8594;
//         </button>
//       </div>

//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         className="mt-4 flex gap-6 overflow-x-auto no-scrollbar px-8"
//       >
//         {Array.from({ length: 5 }).map((_, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-[300px] h-[400px] shadow-lg rounded-[16px] flex flex-col justify-start items-start overflow-hidden bg-white"
//           >
//             <img
//               src="https://image-resource.creatie.ai/146256977394650/146256977394652/cb38bd710d96f57d34fea8aef5036ef9.jpg"
//               alt="resource-thumbnail"
//               className="flex-shrink-0 w-[300px] h-[180px] object-cover"
//             />
//             <div className="relative w-[300px] h-[220px] p-4">
//               <div className="flex flex-col gap-2">
//                 <h3 className="text-[#0A0A0A] font-bold text-[18px] leading-[24px]">
//                   Rahu Enters Cancer And Ketu Enters Capricorn
//                 </h3>
//                 <p className="text-[#292929] opacity-50 text-[14px] leading-[20px] font-normal">
//                   Learn the top tips to become a successful blogger.
//                 </p>
//               </div>

//               <div className="absolute bottom-4 left-4 w-[120px] h-[32px] flex justify-center items-center rounded-full bg-[#FF9500] px-[20px] py-[6px]">
//                 <span className="text-white text-[14px] font-semibold">
//                   Read More
//                 </span>
//               </div>

//               <div className="flex items-center gap-2 mt-4">
//                 <img
//                   src="https://image-resource.creatie.ai/146256977394650/146256977394652/70adbcfb04a4defb2a640175250026bb.jpeg"
//                   alt="author-avatar"
//                   className="w-[30px] h-[30px] rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="text-[#989898] text-[14px] font-semibold">
//                     Harsha Vardhan
//                   </p>
//                   <p className="text-[#525252] opacity-50 text-[12px]">
//                     Created on October 10, 2023
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AstroResourceCards;



// import  { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const AstroResourceCards = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const cards = [
//     {
//       title: "Rahu Enters Cancer And Ketu Enters Capricorn",
//       description: "Learn the top tips to become a successful blogger.",
//       author: "Harsha Vardhan",
//       date: "October 10, 2023"
//     },
//     {
//       title: "Rahu Enters Cancer And Ketu Enters Capricorn",
//       description: "Learn the top tips to become a successful blogger.",
//       author: "Harsha Vardhan",
//       date: "October 10, 2023"
//     },
//     {
//       title: "Rahu Enters Cancer And Ketu Enters Capricorn",
//       description: "Learn the top tips to become a successful blogger.",
//       author: "Harsha Vardhan",
//       date: "October 10, 2023"
//     },
//     {
//       title: "Rahu Enters Cancer And Ketu Enters Capricorn",
//       description: "Learn the top tips to become a successful blogger.",
//       author: "Harsha Vardhan",
//       date: "October 10, 2023"
//     },
//     {
//       title: "Rahu Enters Cancer And Ketu Enters Capricorn",
//       description: "Learn the top tips to become a successful blogger.",
//       author: "Harsha Vardhan",
//       date: "October 10, 2023"
//     }
//   ];

//   const totalSlides = Math.ceil(cards.length / 3);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full max-w-[2037px] px-4 py-8 mx-auto mt-3">
//       {/* Navigation Buttons */}
//       <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-10">
//         <button
//           onClick={prevSlide}
//           className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
//         >
//           <ChevronLeft className="w-6 h-6 text-gray-600" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
//         >
//           <ChevronRight className="w-6 h-6 text-gray-600" />
//         </button>
//       </div>

//       {/* Cards Container */}
//       <div className="overflow-hidden">
//         <div 
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, groupIndex) => (
//             <div key={groupIndex} className="flex-none w-full flex gap-[78px]">
//               {cards.slice(groupIndex * 3, groupIndex * 3 + 3).map((card, index) => (
//                 <div
//                   key={index}
//                   className="flex-none w-[345px] h-[440px] bg-white rounded-2xl shadow-lg overflow-hidden"
//                 >
//                   {/* Card Image */}
//                   <img
//                                 src="https://image-resource.creatie.ai/146256977394650/146256977394652/cb38bd710d96f57d34fea8aef5036ef9.jpg"

//                     alt="card-image"
//                     className="w-[345px] h-[220px] object-cover"
//                   />
                  
//                   {/* Card Content */}
//                   <div className="relative w-[345px] h-[220px]">
//                     {/* Author Info */}
//                     <div className="absolute top-[14px] left-6 flex items-center gap-2">
//                       <img
//                         // src="/api/placeholder/31/30"
//                                       src="https://image-resource.creatie.ai/146256977394650/146256977394652/cb38bd710d96f57d34fea8aef5036ef9.jpg"

//                         alt="author"
//                         className="w-[31px] h-[30px] rounded-full object-cover"
//                       />
//                       <div>
//                         <p className="text-[15px] font-semibold text-[#989898]">
//                           {card.author}
//                         </p>
//                         <div className="flex gap-1 text-xs text-[#525252] opacity-50">
//                           <span>Created on</span>
//                           <span>{card.date}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Card Info */}
//                     <div className="absolute top-14 left-6 space-y-2">
//                       <h3 className="text-lg font-normal text-[#0A0A0A] w-[297px]">
//                         {card.title}
//                       </h3>
//                       <p className="text-sm text-[#292929] opacity-50 w-[297px] truncate">
//                         {card.description}
//                       </p>
//                     </div>

//                     {/* Read More Button */}
//                     <button className="absolute bottom-7 left-3 px-5 py-[6px] bg-[#FF9500] text-white rounded-full">
//                       <span className="text-sm font-semibold">Read More</span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center gap-2 mt-4">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full transition-colors duration-200 ${
//               currentSlide === index ? 'bg-[#FF9500]' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AstroResourceCards;



// Responsive interface
// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const AstroResourceCards = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const cards = [
//     {
//       date: 'January 01, 2025',
//       title: 'Zodiac Sign',
//       author: 'Srikant Todalagoppa',
//       image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1v5Zea.img?w=1280&h=720&m=4&q=39',
//       link: '/blog/Zodiac', // Link to the blog detail page
//       description : " A solar eclipse is a powerful celestial event that symbolizes new beginnings and transformations. "
//     },
//     {
//       date: 'January 5, 2025',
//       title: 'Career and Love Horoscopes',
//       author: 'Gowtham',
//       image: 'https://avatars.mds.yandex.net/i?id=5d4e3ab968fc5e1ebe0b4b2d3dbd01745e3b01ad-8209833-images-thumbs&n=13',
//       link: '/blog/astrology-chakras-psychic-energy',
//       description : "The alignment of the stars and planets can have a profound impact on your career and love life."
//     },
//     {
//       date: 'Javuary 06, 2025',
//       title: 'Mercury Retrograde',
//       author: 'Vikram Lohe',
//       image: 'https://static.life.ru/ip/unsafe/rs:fill:1200:/gravity:ce/q:100/czM6Ly9saWZlLXN0YXRpYy9wdWJsaWNhdGlvbnMvMjAyMy8xMi8xNC8xMjE5NTQ2MTEyNzI3LjIyMS53ZWJw',
//       link: '/blog/mercury-retro',
//       description : "Mercury retrograde is a phenomenon that often gets a bad reputation, but it’s not all doom and gloom."
//     },
//     {
//       date: 'January 06, 2025',
//       title: 'Finacial-Astrology',
//       author: 'Thota Praveen Kumar',
//       image: 'https://avatars.mds.yandex.net/i?id=d72525ac728fd161d807a9f5c591897a314c1d0d-12636876-images-thumbs&n=13',
//       link: '/blog/finacial-astrology',
//       description : "Discover how planetary movements can influence stock market trends and guide your financial decisions."
//     },
//     {
//       date: 'January, 07, 2025',
//       title: 'Unlocking the Secrets of Astrology',
//       author: 'Goutham Krishna',
//       image: 'https://i.ytimg.com/vi/WV6EMOK8sG4/maxresdefault.jpg',
//       link: '/blog/astrology-educational',
//       description : "Astrology is more than just horoscopes. It's a fascinating study of celestial bodies and their influence on human behavior and events."
//     },
//     {
//       date: 'Janyary 9, 2025',
//       title: 'Major Astrological Shifts in 2025',
//       author: 'Praveen Kumar Thota',
//       image: 'https://static1.smi2.net/img/1200x630/7917851.jpeg',
//       link: '/blog/astrology-shift-2025',
//       description : "2025 is set to be a transformative year in astrology, with significant planetary movements and alignments that will impact our lives."
//     },
//   ];

//   const totalSlides = Math.ceil(cards.length / 3);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full max-w-[2037px] px-4 py-8 mx-auto mt-3">
//       {/* Navigation Buttons */}
//       <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-10">
//         <button
//           onClick={prevSlide}
//           className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
//         >
//           <ChevronLeft className="w-6 h-6 text-gray-600" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
//         >
//           <ChevronRight className="w-6 h-6 text-gray-600" />
//         </button>
//       </div>

//       {/* Cards Container */}
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, groupIndex) => (
//             <div key={groupIndex} className="flex-none w-full flex gap-[78px]">
//               {cards.slice(groupIndex * 3, groupIndex * 3 + 3).map((card, index) => (
//                 <Link
//                   key={index}
//                   to={card.link} // Use the `link` property for navigation
//                   className="flex-none w-[345px] h-[440px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                 >
//                   {/* Card Image */}
//                   <img
//                     src={card.image}
//                     alt="card-image"
//                     className="w-[345px] h-[220px] object-cover"
//                   />

//                   {/* Card Content */}
//                   <div className="relative w-[345px] h-[220px]">
//                     {/* Author Info */}
//                     <div className="absolute top-[14px] left-6 flex items-center gap-2">
//                       <img
//                         src="https://image-resource.creatie.ai/146256977394650/146256977394652/cb38bd710d96f57d34fea8aef5036ef9.jpg"
//                         alt="author"
//                         className="w-[31px] h-[30px] rounded-full object-cover"
//                       />
//                       <div>
//                         <p className="text-[15px] font-semibold text-[#989898]">
//                           {card.author}
//                         </p>
//                         <div className="flex gap-1 text-xs text-[#525252] opacity-50">
//                           <span>Created on</span>
//                           <span>{card.date}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Card Info */}
//                     <div className="absolute top-14 left-6 space-y-2">
//                       <h3 className="text-lg font-normal text-[#0A0A0A] w-[297px]">
//                         {card.title}
//                       </h3>
//                       <p className="text-sm text-[#292929] opacity-50 w-[297px] ">
//                         {card.description}
//                       </p>
//                     </div>

//                     {/* Read More Button */}
//                     <div className="absolute bottom-7 left-3 px-5 py-[6px] bg-[#FF9500] text-white rounded-full">
//                       <span className="text-sm font-semibold">Read More</span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center gap-2 mt-4">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full transition-colors duration-200 ${
//               currentSlide === index ? 'bg-[#FF9500]' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AstroResourceCards;




import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AstroResourceCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      date: 'January 01, 2025',
      title: 'Zodiac Sign',
      author: 'Srikant Todalagoppa',
      image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1v5Zea.img?w=1280&h=720&m=4&q=39',
      link: '/blog/Zodiac',
      description: "A solar eclipse is a powerful celestial event that symbolizes new beginnings and transformations."
    },
    {
      date: 'January 5, 2025',
      title: 'Career and Love Horoscopes',
      author: 'Gowtham',
      image: 'https://avatars.mds.yandex.net/i?id=5d4e3ab968fc5e1ebe0b4b2d3dbd01745e3b01ad-8209833-images-thumbs&n=13',
      link: '/blog/astrology-chakras-psychic-energy',
      description: "The alignment of the stars and planets can have a profound impact on your career and love life."
    },
    {
      date: 'January 06, 2025',
      title: 'Mercury Retrograde',
      author: 'Vikram Lohe',
      image: 'https://static.life.ru/ip/unsafe/rs:fill:1200:/gravity:ce/q:100/czM6Ly9saWZlLXN0YXRpYy9wdWJsaWNhdGlvbnMvMjAyMy8xMi8xNC8xMjE5NTQ2MTEyNzI3LjIyMS53ZWJw',
      link: '/blog/mercury-retro',
      description: "Mercury retrograde is a phenomenon that often gets a bad reputation, but it’s not all doom and gloom."
    },
    {
      date: 'January 06, 2025',
      title: 'Finacial-Astrology',
      author: 'Thota Praveen Kumar',
      image: 'https://avatars.mds.yandex.net/i?id=d72525ac728fd161d807a9f5c591897a314c1d0d-12636876-images-thumbs&n=13',
      link: '/blog/finacial-astrology',
      description: "Discover how planetary movements can influence stock market trends and guide your financial decisions."
    },
    {
      date: 'January, 07, 2025',
      title: 'Unlocking the Secrets of Astrology',
      author: 'Goutham Krishna',
      image: 'https://i.ytimg.com/vi/WV6EMOK8sG4/maxresdefault.jpg',
      link: '/blog/astrology-educational',
      description: "Astrology is more than just horoscopes. It's a fascinating study of celestial bodies and their influence on human behavior and events."
    },
    {
      date: 'January 9, 2025',
      title: 'Major Astrological Shifts in 2025',
      author: 'Praveen Kumar Thota',
      image: 'https://static1.smi2.net/img/1200x630/7917851.jpeg',
      link: '/blog/astrology-shift-2025',
      description: "2025 is set to be a transformative year in astrology, with significant planetary movements and alignments that will impact our lives."
    },
  ];

  const totalSlides = Math.ceil(cards.length / 3); // Adjust to 3 cards per slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[2037px] px-4 py-8 mx-auto mt-3">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-10">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Cards Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex-none w-full flex gap-[24px] md:gap-[32px] justify-center">
              {cards.slice(groupIndex * 3, groupIndex * 3 + 3).map((card, index) => (
                <Link
                  key={index}
                  to={card.link}
                  className="flex-none w-full sm:w-[280px] md:w-[300px] lg:w-[320px] h-[440px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Card Image */}
                  <img
                    src={card.image}
                    alt="card-image"
                    className="w-full h-[220px] object-cover"
                  />

                  {/* Card Content */}
                  <div className="relative w-full h-[220px] px-4 py-2">
                    {/* Author Info */}
                    <div className="absolute top-3 left-4 flex items-center gap-2">
                      <img
                        src="https://image-resource.creatie.ai/146256977394650/146256977394652/cb38bd710d96f57d34fea8aef5036ef9.jpg"
                        alt="author"
                        className="w-[30px] h-[30px] rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[14px] font-semibold text-[#989898]">
                          {card.author}
                        </p>
                        <div className="flex gap-1 text-xs text-[#525252] opacity-50">
                          <span>Created on</span>
                          <span>{card.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="absolute top-[90px] left-4 space-y-2">
                      <h3 className="text-lg font-normal text-[#0A0A0A]">{card.title}</h3>
                      <p className="text-sm text-[#292929] opacity-60">{card.description}</p>
                    </div>

                    {/* Read More Button */}
                    <div className="absolute bottom-6 left-4 px-5 py-[6px] bg-[#FF9500] text-white rounded-full">
                      <span className="text-sm font-semibold">Read More</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-[#FF9500]' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AstroResourceCards;
















