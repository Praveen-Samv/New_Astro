// "use client";
// import React, { useEffect, useRef } from "react";

// const AstroPremium = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const cardWidth = 420; // Card width plus gap

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         const maxScrollLeft =
//           scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

//         // Scroll right by the width of one card
//         if (
//           scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
//           scrollRef.current.scrollWidth
//         ) {
//           // Reset to the start if reached the end
//           scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           // Otherwise, continue scrolling to the right
//           scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
//         }
//       }
//     }, 3000); // Slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const cards = [
//     {
//       id: 1,
//       title: "ASTRO-BRANDING",
//       image: "https://image-resource.creatie.ai/146256977394650/146256977394652/16b8ed602622fc00c181632807718983.jpg",
//     },
//     {
//       id: 2,
//       title: "ASTRO-MANAGEMENT",
//       image: "https://image-resource.creatie.ai/146256977394650/146256977394652/b6dd8af070a44c78af12f389af43ff63.jpg",
//     },
//     {
//       id: 3,
//       title: "ASTRO-STAFFING",
//       image: "https://image-resource.creatie.ai/146256977394650/146256977394652/79521640ee8029bbedbdbdee65332db2.jpeg",
//     },
//     {
//       id: 4,
//       title: "VASTU & VIBRATIONS",
//       image: "https://image-resource.creatie.ai/146256977394650/146256977394652/941209b10a065cb7c88c5af75b61bf09.jpg",
//     },
//     {
//       id: 5,
//       title: "PERSONAL CONSULTATION",
//       image: "https://image-resource.creatie.ai/146256977394650/146256977394652/2d2d8b22c9bbed2117f3e1b8ec617145.webp",
//     },
//   ];

//   return (
//     <div className="w-full overflow-hidden">
//       <div
//         ref={scrollRef}
//         className="flex items-start gap-6 mt-10 overflow-x-auto no-scrollbar"
//       >
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="card relative w-[415px] h-[260px] rounded-[30px] flex flex-col justify-end p-6 overflow-hidden"
//           >
//             <img
//               src={card.image}
//               className="absolute inset-0 w-full h-full rounded-[16px] object-cover"
//               alt={card.title}
//             />
//             <div className="absolute inset-x-0 bottom-0 h-[222px] bg-gradient-to-t from-[#ec6e28] to-transparent"></div>
//             <div className="content">
//               <div className="title-area">
//                 <div className="text-white font-bold text-[20px] leading-[24px]">
//                   {card.title}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AstroPremium;



import  { useEffect, useRef } from "react";

const AstroPremium = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 420; // Adjusted width of each card (including gap)

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          // Reset to the start if at the end
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll right by the width of one card
          scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      id: 1,
      title: "ASTRO-BRANDING",
      image:
        "https://image-resource.creatie.ai/146256977394650/146256977394652/16b8ed602622fc00c181632807718983.jpg",
    },
    {
      id: 2,
      title: "ASTRO-MANAGEMENT",
      image:
        "https://image-resource.creatie.ai/146256977394650/146256977394652/b6dd8af070a44c78af12f389af43ff63.jpg",
    },
    {
      id: 3,
      title: "ASTRO-STAFFING",
      image:
        "https://image-resource.creatie.ai/146256977394650/146256977394652/79521640ee8029bbedbdbdee65332db2.jpeg",
    },
    {
      id: 4,
      title: "VASTU & VIBRATIONS",
      image:
        "https://image-resource.creatie.ai/146256977394650/146256977394652/941209b10a065cb7c88c5af75b61bf09.jpg",
    },
    {
      id: 5,
      title: "PERSONAL CONSULTATION",
      image:
        "https://image-resource.creatie.ai/146256977394650/146256977394652/2d2d8b22c9bbed2117f3e1b8ec617145.webp",
    },
  ];

  return (
    <div className="w-full overflow-hidden py-12 bg-gray-100">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Premium Astro Services
      </h2>
      <div
        ref={scrollRef}
        className="flex items-start gap-6 overflow-x-auto no-scrollbar px-6"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-[400px] h-[260px] flex-shrink-0 rounded-lg overflow-hidden"
          >
            {/* Card Image */}
            <img
              src={card.image}
              className="absolute inset-0 w-full h-full object-cover"
              alt={card.title}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            {/* Card Content */}
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstroPremium;
