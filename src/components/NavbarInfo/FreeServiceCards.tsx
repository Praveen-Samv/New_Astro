// import  { useEffect, useRef } from "react";

// const FreeServiceCards = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const cardWidth = 420; // Adjusted width of each card (including gap)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
        
//           scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

//         if (
//           scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
//           scrollRef.current.scrollWidth
//         ) {
//           // Reset to the start if at the end
//           scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           // Scroll right by the width of one card
//           scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
//         }
//       }
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const cards = [
//     {
//       id: 1,
//       title: "ASTRO-BRANDING",
//       image:
//         "https://image-resource.creatie.ai/146256977394650/146256977394652/16b8ed602622fc00c181632807718983.jpg",
//     },
//     {
//       id: 2,
//       title: "ASTRO-MANAGEMENT",
//       image:
//         "https://image-resource.creatie.ai/146256977394650/146256977394652/b6dd8af070a44c78af12f389af43ff63.jpg",
//     },
//     {
//       id: 3,
//       title: "ASTRO-STAFFING",
//       image:
//         "https://image-resource.creatie.ai/146256977394650/146256977394652/79521640ee8029bbedbdbdee65332db2.jpeg",
//     },
//     {
//       id: 4,
//       title: "VASTU & VIBRATIONS",
//       image:
//         "https://image-resource.creatie.ai/146256977394650/146256977394652/941209b10a065cb7c88c5af75b61bf09.jpg",
//     },
//     {
//       id: 5,
//       title: "PERSONAL CONSULTATION",
//       image:
//         "https://image-resource.creatie.ai/146256977394650/146256977394652/2d2d8b22c9bbed2117f3e1b8ec617145.webp",
//     },
//   ];

//   return (
//     <div className="w-full overflow-hidden py-12 bg-gray-100">
//       <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
//         Free Astro Services
//       </h2>
//       <div
//         ref={scrollRef}
//         className="flex items-start gap-6 overflow-x-auto no-scrollbar px-6"
//       >
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="relative w-[400px] h-[260px] flex-shrink-0 rounded-lg overflow-hidden"
//           >
//             {/* Card Image */}
//             <img
//               src={card.image}
//               className="absolute inset-0 w-full h-full object-cover"
//               alt={card.title}
//             />
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
//             {/* Card Content */}
//             <div className="absolute bottom-4 left-4">
//               <h3 className="text-white text-lg font-semibold">{card.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FreeServiceCards;




import { useEffect, useRef, useState } from "react";

const FreeServiceCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const cardWidth = 420; // Adjusted width of each card (including gap)

  const cards = [
    {
      id: 1,
      title: "Company Name Number Calculator",
      image:
        "https://image-resource.creatie.ai/146256977394650/146256977394652/b3b02691dfe6e5452c8037623dff37ae.png",
    },
    {
      id: 2,
      title: "Brand Name Number Calculator",
      image:
        "https://cdn-edge.kwork.ru/pics/t3/51/7865032-1592132951.jpg",
    },
    {
      id: 3,
      title: "Favourable Colour Combinations",
      image:
        "https://i.pinimg.com/originals/48/b7/eb/48b7ebbaa504a369ffcd056d652dd28f.jpg",
    },
    {
      id: 4,
      title: "Company Logo Suggestions",
      image:
        "https://image-resource.creatie.ai/146256977394650/146256977394652/22c272e5b7b252dce03a99ffeba0768a.png",
    },
    {
      id: 5,
      title: "Company Tagline Analysis",
      image:
        "https://www.depts.ttu.edu/research/imms/images/slider/dashboard-performance.jpg",
    },
  ];

  // Function to scroll to the next card
  const scrollNext = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft >= maxScroll) {
        // Reset to the start if at the end
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll right by the width of one card
        scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  // Function to scroll to the previous card
  const scrollPrev = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;

      if (scrollLeft <= 0) {
        // Scroll to the end if at the start
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        // Scroll left by the width of one card
        scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && scrollRef.current) {
        scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="w-full overflow-hidden py-12 bg-gray-100 relative">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Free Astro Services
      </h2>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
      >
        &lt;
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
      >
        &gt;
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex items-start gap-6 overflow-x-hidden no-scrollbar px-6 transition-transform duration-500 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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

export default FreeServiceCards;