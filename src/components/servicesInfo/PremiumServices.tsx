




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
                    <div className="flex items-center space-x-2 text-lg mt-2">
                        
                    </div>
                </div>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
                {[
                    { title: "ASTRO-BRANDING", img: "16b8ed602622fc00c181632807718983.jpg", link: "/astro-permium" },
                    { title: "ASTRO-MANAGEMENT", img: "6c08c4a56e6872da18b314b1d34899fc.jpg", link: "/astro-permium" },
                    { title: "ASTRO-STAFFING", img: "e178726edd465c43062061759e4b2593.jpg", link: "/astro-permium" },
                    { title: "VASTU & VIBRATIONS", img: "52d31b9983023bc39e0818f8a391f500.jpg", link: "/astro-permium" },
                    { title: "PERSONAL CONSULTATION", img: "ae4b8399578a212e220948aa8fd9dc05.jpg", link: "/astro-permium" },
                ].map((card, index) => (
                    <Link
                        to={card.link}
                        key={index}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
                    >
                        <img
                            src={`https://image-resource.creatie.ai/146256977394650/146256977394652/${card.img}`}
                            alt={card.title}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-lg font-semibold">{card.title}</h2>
                        </div>
                        {/* Subscription Button - Strict Top Right Corner */}
                        <button
                            className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg text-sm hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-1"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent the link from navigating
                                alert(`Subscribed to ${card.title}`);
                            }}
                        >
                            <FaCrown className="text-yellow-400" /> {/* Crown icon */}
                            <span>Premium</span>
                        </button>
                    </Link>
                ))}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PremiumServices;