

// import { Link } from "react-router-dom";
// import Footer from "../HomePages/Footer";

// const SubstrictionServices = () => {
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
//                 <div className="flex flex-col items-center justify-center h-full mt-10 text-white">
//                     <h1 className="text-4xl font-bold">Substriction Services</h1>
//                     <div className="flex items-center space-x-2 text-lg mt-2">
                        
//                     </div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
//                 {[
//                     { title: "Business Predictions", img: "3e4fe40eacf896d69c666e357c390f70.jpg", link: "/astro-service" },
//                     { title: "Favourable Muhurats & Days", img: "e38dd5d4e9d1fb0a0270c3f723c0ab9a.jpg", link: "/astro-service" },
//                     { title: "Dos & Don'ts", img: "2568009482740a2271b7bdaa59fe6340.jpg", link: "/astro-service" },
//                     { title: "Monthly Business Reports", img: "93b4d05fa9efffa4df8c48f0e2d9b409.jpg", link: "/astro-service" },
//                     { title: "AI-Powered Query Support", img: "3840082117d32e6ecd2c8bc2d33bbc18.jpg", link: "/astro-service" },
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
//                             Subscription
//                         </button>
//                     </Link>
//                 ))}
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default SubstrictionServices;



// import { Link } from "react-router-dom";
// import Footer from "../HomePages/Footer";

// const SubstrictionServices = () => {
//     return (
//         <div className="w-full bg-white">
            
//             <div
//                 className="w-full h-52 bg-cover bg-center"
//                 style={{
//                     backgroundImage:
//                         "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
//                 }}
//             >
//                 <div className="flex flex-col items-center justify-center h-full text-white mt-10">
//                     <h1 className="text-4xl font-bold">Subscription Services</h1>
//                     <div className="flex items-center space-x-2 text-lg "></div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16 py-10">
//                 {[
//                     { title: "Business Predictions", img: "https://image.hurimg.com/i/hurriyet/75/866x494/64f0aada4e3fe016506f8fff.jpg", link: "/astro-service" },
//                     { title: "Favourable Muhurats & Days", img: "https://avatars.dzeninfra.ru/get-zen_doc/1895332/pub_638047d6aca2f726ab725368_6380489750b5c14119380e5b/scale_1200", link: "/astro-service" },
//                     { title: "Dos & Don'ts", img: "https://i.ytimg.com/vi/QfrCQxXZqsU/maxresdefault.jpg", link: "/astro-service" },
//                     { title: "Monthly Business Reports", img: "https://cdn.culture.ru/images/6881a612-40d5-5502-bdaf-76b6f03ad526", link: "/astro-service" },
//                     { title: "AI-Powered Query Support", img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202109/astrology-sixteen_nine.jpg", link: "/astro-service" },
//                 ].map((card, index) => (
//                     <Link
//                         to={card.link}
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
//                     >
//                         {/* Image Section */}
//                         <img
//                             src={card.img}
//                             alt={card.title}
//                             className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                         />

//                         {/* Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

//                         {/* Card Title */}
//                         <div className="absolute bottom-4 left-4 text-white">
//                             <h2 className="text-lg font-semibold">{card.title}</h2>
//                         </div>

//                         {/* Subscription Button */}
//                         <button
//                             className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg text-sm hover:bg-blue-600 transition-colors duration-300"
//                             onClick={(e) => {
//                                 e.preventDefault(); // Prevent the link from navigating
//                                 alert(`Subscribed to ${card.title}`);
//                             }}
//                         >
//                             Subscription
//                         </button>
//                     </Link>
//                 ))}
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default SubstrictionServices;




// import { Link } from "react-router-dom";
// import Footer from "../HomePages/Footer";

// const SubstrictionServices = () => {
//     return (
//         <div className="w-full bg-white">

//             <div
//                 className="w-full h-52 bg-cover bg-center"
//                 style={{
//                     backgroundImage:
//                         "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
//                 }}
//             >
//                 <div className="flex flex-col items-center justify-center h-full text-white mt-10">
//                     <h1 className="text-4xl font-bold">Subscription Services</h1>
//                     <div className="flex items-center space-x-2 text-lg "></div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16 py-10">
//                 {[
//                     { title: "Business Predictions", img: "https://image.hurimg.com/i/hurriyet/75/866x494/64f0aada4e3fe016506f8fff.jpg", link: "/astro-service" },
//                     { title: "Favourable Muhurats & Days", img: "https://avatars.dzeninfra.ru/get-zen_doc/1895332/pub_638047d6aca2f726ab725368_6380489750b5c14119380e5b/scale_1200", link: "/astro-service" },
//                     { title: "Dos & Don'ts", img: "https://i.ytimg.com/vi/QfrCQxXZqsU/maxresdefault.jpg", link: "/astro-service" },
//                     { title: "Monthly Business Reports", img: "https://cdn.culture.ru/images/6881a612-40d5-5502-bdaf-76b6f03ad526", link: "/astro-service" },
//                     { title: "AI-Powered Query Support", img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202109/astrology-sixteen_nine.jpg", link: "/astro-service" },
//                 ].map((card, index) => (
//                     <Link
//                         to={card.link}
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//                     >
//                         {/* Image Section */}
//                         <img
//                             src={card.img}
//                             alt={card.title}
//                             className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
//                         />

//                         {/* Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

//                         {/* Card Title */}
//                         <div className="absolute bottom-4 left-4 text-white">
//                             <h2 className="text-lg font-semibold">{card.title}</h2>
//                         </div>

//                         {/* Subscription Button */}
//                         <button
//                             className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg text-sm hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
//                             onClick={(e) => {
//                                 e.preventDefault(); // Prevent the link from navigating
//                                 alert(`Subscribed to ${card.title}`);
//                             }}
//                         >
//                             Subscription
//                         </button>
//                     </Link>
//                 ))}
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default SubstrictionServices;


import { Link } from "react-router-dom";
import Footer from "../HomePages/Footer";

const SubstrictionServices = () => {
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <div
                className="w-full h-52 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
                }}
            >
                <div className="flex flex-col items-center justify-center h-full text-white mt-10">
                    <h1 className="text-4xl font-bold">Subscription Services</h1>
                    <div className="flex items-center space-x-2 text-lg "></div>
                </div>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16 py-10">
                {[
                    { title: "Business Predictions", img: "https://image.hurimg.com/i/hurriyet/75/866x494/64f0aada4e3fe016506f8fff.jpg", link: "/astro-service" },
                    { title: "Favourable Muhurats & Days", img: "https://avatars.dzeninfra.ru/get-zen_doc/1895332/pub_638047d6aca2f726ab725368_6380489750b5c14119380e5b/scale_1200", link: "/astro-service" },
                    { title: "Dos & Don'ts", img: "https://repository-images.githubusercontent.com/322884370/4f301200-421c-11eb-964f-bdb41c1d4f93", link: "/astro-service" },
                    { title: "Monthly Business Reports", img: "https://cdn.culture.ru/images/6881a612-40d5-5502-bdaf-76b6f03ad526", link: "/astro-service" },
                    { title: "AI-Powered Query Support", img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202109/astrology-sixteen_nine.jpg", link: "/astro-service" },
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
                            <h2 className="text-lg font-semibold">{card.title}</h2>
                        </div>

                        {/* Subscription Button */}
                        <button
                            className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg text-sm hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent the link from navigating
                                alert(`Subscribed to ${card.title}`);
                            }}
                        >
                            Subscription
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

export default SubstrictionServices;