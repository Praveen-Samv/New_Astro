






// import React, { useState, useEffect } from "react";

// // Define the type for card data
// type CardData = {
//   name: string;
//   role: string;
//   title: string;
//   description: string;
//   profileImage: string; // Add profile image URL
// };

// // Card data
// const cards: CardData[] = [
//   {
//     name: "Leo",
//     role: "Lead Designer",
//     title: "It was a very good experience",
//     description:
//       "Working with CORP ASTRO helped us reduce employee turnover and improve team collaboration through employee compatibility assessments. Highly recommend.",
//     profileImage:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Sample profile image
//   },
//   {
//     name: "Anachal Rathi",
//     role: "HR Director",
//     title: "Outstanding Service Quality",
//     description:
//       "Aanchal Rathi is a gifted Tarot Card Reader, Reiki Healer, and Feng Shui expert, renowned for her intuitive insights and healing touch. With a deep understanding of the mystical arts, she helps individuals navigate their life's journey.",
//     profileImage:
//       "https://corpastro.com/wp-content/uploads/2024/08/Aanchal-Raathi-astro-1.png", // Sample profile image
//   },
//   {
//     name: "Tamual Rathi",
//     role: "CEO",
//     title: "Game-Changing Results",
//     description:
//       "He is a young and modern Vedic Astrologer in India and excels as a consultant for corporate and business enterprises, using a scientific and practical methodology.He works with individuals seeking improvement and business owners creating successful, soul-centric enterprises. ",
//     profileImage:
//       "https://corpastro.com/wp-content/uploads/2024/08/Dr.-Tumul-Raathi-astrology.png", // Sample profile image
//   },
//   {
//     name: "Praveen Kumar",
//     role: "HR Director",
//     title: "Outstanding Service Quality",
//     description:
//       "CORP ASTRO's insights transformed our hiring process. Their compatibility assessments helped us build stronger teams and create a more positive workplace culture.",
//     profileImage:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Sample profile image
//   },
//   {
//     name: "Amith ",
//     role: "HR Director",
//     title: "Outstanding Service Quality",
//     description:
//       "CORP ASTRO's insights transformed our hiring process. Their compatibility assessments helped us build stronger teams and create a more positive workplace culture.",
//     profileImage:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Sample profile image
//   },
//   {
//     name: "Smith Jhon",
//     role: "HR Director",
//     title: "Outstanding Service Quality",
//     description:
//       "CORP ASTRO's insights transformed our hiring process. Their compatibility assessments helped us build stronger teams and create a more positive workplace culture.",
//     profileImage:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Sample profile image
//   },
// ];

// const ClientSuccessCards: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Auto-rotate the carousel every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % cards.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const goToNext = () => {
//     setActiveIndex((prev) => (prev + 1) % cards.length);
//   };

//   const goToPrev = () => {
//     setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
//   };

//   return (
//     <div className="py-12 bg-gray-100 relative overflow-hidden">
//       {/* Blurred Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url(https://tengrinews.kz/userdata/news/2023/news_519280/thumb_m/photo_454139.jpeg)",
//         }}
//       ></div>

//       {/* Semi-Transparent Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//       {/* Carousel Container */}
//       <div className="flex justify-center items-center h-[400px] relative">
//         {cards.map((card, index) => {
//           // Calculate the position of the card in the cylindrical layout
//           const angle = (360 / cards.length) * (index - activeIndex); // Angle for 360-degree rotation
//           const radius = 400; // Radius of the carousel circle
//           const offsetX = Math.sin((angle * Math.PI) / 180) * radius; // Horizontal offset
//           const offsetZ = -Math.cos((angle * Math.PI) / 180) * radius; // Depth offset
//           const rotateY = angle; // Rotation angle
//           const zIndex = cards.length - Math.abs(index - activeIndex); // Z-index for layering
//           const opacity = Math.abs(index - activeIndex) === 0 ? 100 : 30; // Opacity for side cards
//           const scale = Math.abs(index - activeIndex) === 0 ? 1.1 : 0.7; // Scale for front and side cards
//           const blur = Math.abs(index - activeIndex) === 0 ? 0 : 8; // Blur for side cards

//           return (
//             <div
//               key={index}
//               className="absolute w-[300px] h-[350px] bg-white shadow-md rounded-lg p-6 transition-all duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(${offsetX}px) translateZ(${offsetZ}px) rotateY(${rotateY}deg) scale(${scale})`,
//                 zIndex: zIndex,
//                 opacity: `${opacity}%`,
//                 filter: `blur(${blur}px)`, // Apply blur to side cards
//               }}
//             >
//               {/* Profile Section */}
//               <div className="flex items-center mb-4">
//                 {/* Profile Image */}
//                 <img
//                   src={card.profileImage}
//                   alt={card.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div className="ml-4">
//                   <p className="text-lg font-bold">{card.name}</p>
//                   <p className="text-sm text-gray-600">{card.role}</p>
//                 </div>
//                 {/* Star Ratings */}
//                 <div className="ml-auto flex gap-1">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <span key={i} className="text-yellow-500 text-sm">
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               {/* Title */}
//               <h3 className="text-xl font-bold mb-4">{card.title}</h3>
//               {/* Description */}
//               <p className="text-sm text-gray-700">{card.description}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={goToPrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
//       >
//         &larr;
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
//       >
//         &rarr;
//       </button>
//     </div>
//   );
// };

// export default ClientSuccessCards;




import React, { useState, useEffect } from "react";

// Define the type for card data
type CardData = {
  name: string;
  role: string;
  title: string;
  description: string;
  profileImage: string; // Add profile image URL
};

// Card data
const cards: CardData[] = [
  {
    name: "Leo",
    role: "Lead Designer",
    title: "It was a very good experience",
    description:
      "Working with CORP ASTRO helped us reduce employee turnover and improve team collaboration through employee compatibility assessments. Highly recommend.",
    profileImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Sample profile image
  },
  {
    name: "Anachal Rathi",
    role: "HR Director",
    title: "Outstanding Service Quality",
    description:
      "Aanchal Rathi is a gifted Tarot Card Reader, Reiki Healer, and Feng Shui expert, renowned for her intuitive insights and healing touch. With a deep understanding of the mystical arts, she helps individuals navigate their life's journey.",
    profileImage:
      "https://corpastro.com/wp-content/uploads/2024/08/Aanchal-Raathi-astro-1.png", // Sample profile image
  },
  {
    name: "Tamual Rathi",
    role: "CEO",
    title: "Game-Changing Results",
    description:
      "He is a young and modern Vedic Astrologer in India and excels as a consultant for corporate and business enterprises, using a scientific and practical methodology.He works with individuals seeking improvement and business owners creating successful, soul-centric enterprises. ",
    profileImage:
      "https://corpastro.com/wp-content/uploads/2024/08/Dr.-Tumul-Raathi-astrology.png", // Sample profile image
  },
  {
    name: "Praveen Kumar",
    role: "HR Director",
    title: "Outstanding Service Quality",
    description:
      "CORP ASTRO's insights transformed our hiring process. Their compatibility assessments helped us build stronger teams and create a more positive workplace culture.",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Sample profile image
  },
  {
    name: "Amith ",
    role: "HR Director",
    title: "Outstanding Service Quality",
    description:
      "CORP ASTRO's insights transformed our hiring process. Their compatibility assessments helped us build stronger teams and create a more positive workplace culture.",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Sample profile image
  },
  {
    name: "Smith Jhon",
    role: "HR Director",
    title: "Outstanding Service Quality",
    description:
      "CORP ASTRO's insights transformed our hiring process. Their compatibility assessments helped us build stronger teams and create a more positive workplace culture.",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Sample profile image
  },
];

const ClientSuccessCards: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="py-12 bg-gray-100 relative overflow-hidden">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/src/assets/home/photo_454139.jpeg)",
        }}
      ></div>

      {/* Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Carousel Container */}
      <div className="flex justify-center items-center h-[400px] relative">
        {cards.map((card, index) => {
          // Calculate the position of the card in the cylindrical layout
          const angle = (360 / cards.length) * (index - activeIndex); // Angle for 360-degree rotation
          const radius = 400; // Radius of the carousel circle
          const offsetX = Math.sin((angle * Math.PI) / 180) * radius; // Horizontal offset
          const offsetZ = -Math.cos((angle * Math.PI) / 180) * radius; // Depth offset
          const rotateY = angle; // Rotation angle
          const zIndex = cards.length - Math.abs(index - activeIndex); // Z-index for layering
          const opacity = Math.abs(index - activeIndex) === 0 ? 100 : 30; // Opacity for side cards
          const scale = Math.abs(index - activeIndex) === 0 ? 1.1 : 0.7; // Scale for front and side cards
          const blur = Math.abs(index - activeIndex) === 0 ? 0 : 8; // Blur for side cards

          return (
            <div
              key={index}
              className="absolute w-[280px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[350px] bg-white shadow-md rounded-lg p-6 transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${offsetX}px) translateZ(${offsetZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex: zIndex,
                opacity: `${opacity}%`,
                filter: `blur(${blur}px)`, // Apply blur to side cards
              }}
            >
              {/* Profile Section */}
              <div className="flex items-center mb-4">
                {/* Profile Image */}
                <img
                  src={card.profileImage}
                  alt={card.name}
                  className="w-10 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-lg font-bold">{card.name}</p>
                  <p className="text-sm font-normal text-gray-600">{card.role}</p>
                </div>
                {/* Star Ratings */}
                <div className="ml-auto flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-700">{card.description}</p>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        &larr;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        &rarr;
      </button>
    </div>
  );
};

export default ClientSuccessCards;
