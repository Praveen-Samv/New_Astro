




// import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "../HomePages/Footer";

// const PremiumServices = () => {
//     return (
//         <div className="w-full bg-white">
//             {/* Breadcrumb */}
//             <div
//                 className="w-full h-52 bg-cover bg-center"
//                 style={{
//                     backgroundImage:
//                         "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
//                 }}
//             >
//                 <div className="flex flex-col items-center justify-center h-full text-white">
//                     <h1 className="text-4xl font-bold">Premium Services</h1>
//                     <div className="flex items-center space-x-2 text-lg mt-2">
                        
//                     </div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
//                 {[
//                     { title: "ASTRO-BRANDING", img: "16b8ed602622fc00c181632807718983.jpg", link: "/astro-branding" },
//                     { title: "ASTRO-MANAGEMENT", img: "6c08c4a56e6872da18b314b1d34899fc.jpg", link: "/astro-management" },
//                     { title: "ASTRO-STAFFING", img: "e178726edd465c43062061759e4b2593.jpg", link: "/astro-staffing" },
//                     { title: "VASTU & VIBRATIONS", img: "52d31b9983023bc39e0818f8a391f500.jpg", link: "/vastu-vibrations" },
//                     { title: "PERSONAL CONSULTATION", img: "ae4b8399578a212e220948aa8fd9dc05.jpg", link: "/personal-consultation" },
                    

                    


//                 ].map((card, index) => (
//                     <Link
//                         to={card.link}
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
//                     >
//                         <img
//                             src={`https://image-resource.creatie.ai/146256977394650/146256977394652/${card.img}`}
//                             alt={card.title}
//                             className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                         <div className="absolute bottom-4 left-4 text-white">
//                             <h2 className="text-lg font-semibold">{card.title}</h2>
//                         </div>
//                     </Link>
//                 ))}
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default PremiumServices;



// import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "../HomePages/Footer";

// const PremiumServices = () => {
//     return (
//         <div className="w-full bg-white">
//             {/* Breadcrumb */}
//             <div
//                 className="w-full h-52 bg-cover bg-center"
//                 style={{
//                     backgroundImage:
//                         "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
//                 }}
//             >
//                 <div className="flex flex-col items-center justify-center h-full text-white">
//                     <h1 className="text-4xl font-bold">Premium Services</h1>
//                     <div className="flex items-center space-x-2 text-lg mt-2">
                        
//                     </div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
//                 {[
//                     { title: "ASTRO-BRANDING", img: "16b8ed602622fc00c181632807718983.jpg", link: "/astro-branding" },
//                     { title: "ASTRO-MANAGEMENT", img: "6c08c4a56e6872da18b314b1d34899fc.jpg", link: "/astro-management" },
//                     { title: "ASTRO-STAFFING", img: "e178726edd465c43062061759e4b2593.jpg", link: "/astro-staffing" },
//                     { title: "VASTU & VIBRATIONS", img: "52d31b9983023bc39e0818f8a391f500.jpg", link: "/vastu-vibrations" },
//                     { title: "PERSONAL CONSULTATION", img: "ae4b8399578a212e220948aa8fd9dc05.jpg", link: "/personal-consultation" },
//                 ].map((card, index) => (
//                     <Link
//                         to={card.link}
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
//                     >
//                         <img
//                             src={`https://image-resource.creatie.ai/146256977394650/146256977394652/${card.img}`}
//                             alt={card.title}
//                             className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                         <div className="absolute bottom-4 left-4 text-white">
//                             <h2 className="text-lg font-semibold">{card.title}</h2>
//                         </div>
//                         {/* Subscription Button - Strict Top Right Corner */}
//                         <button
//                             className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg text-sm hover:bg-blue-600 transition-colors duration-300"
//                             onClick={(e) => {
//                                 e.preventDefault(); // Prevent the link from navigating
//                                 alert(`Subscribed to ${card.title}`);
//                             }}
//                         >
//                             Premium
//                         </button>
//                     </Link>
//                 ))}
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default PremiumServices;



// import { Link } from "react-router-dom";
// import Footer from "../HomePages/Footer";
// import { FaCrown } from "react-icons/fa"; // Import the crown icon

// const PremiumServices = () => {
//     return (
//         <div className="w-full bg-white">
//             {/* Breadcrumb */}
//             <div
//                 className="w-full h-52 bg-cover bg-center"
//                 style={{
//                     backgroundImage:
//                         "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
//                 }}
//             >
//                 <div className="flex flex-col items-center justify-center h-full text-white mt-10">
//                     <h1 className="text-4xl font-bold">Premium Services</h1>
//                     <div className="flex items-center space-x-2 text-lg mt-2">
                        
//                     </div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
//                 {[
//                     { title: "ASTRO-BRANDING", img: "16b8ed602622fc00c181632807718983.jpg", link: "/astro-permium" },
//                     { title: "ASTRO-MANAGEMENT", img: "6c08c4a56e6872da18b314b1d34899fc.jpg", link: "/astro-permium" },
//                     { title: "ASTRO-STAFFING", img: "e178726edd465c43062061759e4b2593.jpg", link: "/astro-permium" },
//                     { title: "VASTU & VIBRATIONS", img: "52d31b9983023bc39e0818f8a391f500.jpg", link: "/astro-permium" },
//                     { title: "PERSONAL CONSULTATION", img: "ae4b8399578a212e220948aa8fd9dc05.jpg", link: "/astro-permium" },
//                 ].map((card, index) => (
//                     <Link
//                         to={card.link}
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
//                     >
//                         <img
//                             src={`https://image-resource.creatie.ai/146256977394650/146256977394652/${card.img}`}
//                             alt={card.title}
//                             className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                         <div className="absolute bottom-4 left-4 text-white">
//                             <h2 className="text-lg font-semibold">{card.title}</h2>
//                         </div>
//                         {/* Subscription Button - Strict Top Right Corner */}
//                         <button
//                             className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg text-sm hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-1"
//                             onClick={(e) => {
//                                 e.preventDefault(); // Prevent the link from navigating
//                                 alert(`Subscribed to ${card.title}`);
//                             }}
//                         >
//                             <FaCrown className="text-yellow-400" /> {/* Crown icon */}
//                             <span>Premium</span>
//                         </button>
//                     </Link>
//                 ))}
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default PremiumServices;



// import { Link } from "react-router-dom";
// import Footer from "../HomePages/Footer";
// import { FaCrown } from "react-icons/fa"; // Import the crown icon

// const PremiumServices = () => {
//     return (
//         <div className="w-full bg-white">
//             {/* Breadcrumb */}
           
//             <div
//                 className="w-full h-52 bg-cover bg-center"
//                 style={{
//                     backgroundImage:
//                         "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
//                 }}
//             >
//                 <div className="flex flex-col items-center justify-center h-full text-white mt-10">
//                     <h1 className="text-4xl font-bold">Premium Services</h1>
//                     <div className="flex items-center space-x-2 text-lg "></div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-10 py-6 sm:py-10">
//                 {[
//                     { title: "ASTRO-BRANDING", img: "https://astroson.com/wp-content/uploads/2017/05/cveta-znakov-zodiaka.png", link: "/astro-premium" },
//                     { title: "ASTRO-MANAGEMENT", img: "https://i.ytimg.com/vi/JdFINhb9KO8/maxresdefault.jpg", link: "/astro-premium" },
//                     { title: "ASTRO-STAFFING", img: "https://www.barahla.net/images/photo/2/20150808/6921590/big/143901509304128700_big.jpg", link: "/astro-premium" },
//                     { title: "VASTU & VIBRATIONS", img: "https://astrologersridev.com/wp-content/uploads/2022/10/vastu-shastra.jpg", link: "/astro-premium" },
//                     { title: "PERSONAL CONSULTATION", img: "https://liter.kz/cache/imagine/1200/uploads/news/2022/05/12/627cfcfb440b5839405136.png", link: "/astro-premium" },
//                 ].map((card, index) => (
//                     <Link
//                         to={card.link}
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
//                     >
//                         <img
//                             src={card.img}
//                             alt={card.title}
//                             className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                         <div className="absolute bottom-4 left-4 text-white">
//                             <h2 className="text-lg sm:text-xl font-semibold">{card.title}</h2>
//                         </div>
//                         {/* Subscription Button - Strict Top Right Corner */}
//                         <button
//                             className="absolute top-0 right-0 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-bl-lg text-xs sm:text-sm hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-1"
//                             onClick={(e) => {
//                                 e.preventDefault(); // Prevent the link from navigating
//                                 alert(`Subscribed to ${card.title}`);
//                             }}
//                         >
//                             <FaCrown className="text-yellow-400" /> {/* Crown icon */}
//                             <span>Premium</span>
//                         </button>
//                     </Link>
//                 ))}
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default PremiumServices;




import { Link } from "react-router-dom";
import Footer from "../HomePages/Footer";
import { FaCrown } from "react-icons/fa"; // Import the crown icon

const PremiumServices = () => {
    return (
        <div className="w-full bg-white">
            {/* Breadcrumb */}
            <div
                className="w-full h-52 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
                }}
            >
                <div className="flex flex-col items-center justify-center h-full text-white mt-10">
                    <h1 className="text-4xl font-bold">Premium Services</h1>
                    <div className="flex items-center space-x-2 text-lg "></div>
                </div>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-10 py-6 sm:py-10">
                {[
                    { title: "ASTRO-BRANDING", img: "https://astroson.com/wp-content/uploads/2017/05/cveta-znakov-zodiaka.png", link: "/astro-premium" },
                    { title: "ASTRO-MANAGEMENT", img: "https://i.ytimg.com/vi/JdFINhb9KO8/maxresdefault.jpg", link: "/astro-premium" },
                    { title: "ASTRO-STAFFING", img: "https://www.barahla.net/images/photo/2/20150808/6921590/big/143901509304128700_big.jpg", link: "/astro-premium" },
                    { title: "VASTU & VIBRATIONS", img: "https://astrologersridev.com/wp-content/uploads/2022/10/vastu-shastra.jpg", link: "/astro-premium" },
                    { title: "PERSONAL CONSULTATION", img: "https://liter.kz/cache/imagine/1200/uploads/news/2022/05/12/627cfcfb440b5839405136.png", link: "/astro-premium" },
                ].map((card, index) => (
                    <Link
                        to={card.link}
                        key={index}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        {/* Image Section */}
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                        {/* Card Title */}
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-lg sm:text-xl font-semibold">{card.title}</h2>
                        </div>

                        {/* Premium Button - Strict Top Right Corner */}
                        <button
                            className="absolute top-0 right-0 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-bl-lg text-xs sm:text-sm hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-1 transform hover:scale-105"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent the link from navigating
                                alert(`Subscribed to ${card.title}`);
                            }}
                        >
                            <FaCrown className="text-yellow-400" /> {/* Crown icon */}
                            <span>Premium</span>
                        </button>

                        {/* Hover Effect: Add a subtle glow */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 transition-all duration-300 rounded-lg"></div>
                    </Link>
                ))}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PremiumServices;

