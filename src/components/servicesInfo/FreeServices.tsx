
// import { Link } from "react-router-dom";
// import Footer from "../HomePages/Footer";

// const FreeServices = () => {
//     return (
//         <div className="w-full bg-white fixed">
//             {/* Breadcrumb */}
//             <div
//                 className="w-full h-52 bg-cover bg-center"
//                 style={{
//                     backgroundImage:
//                         "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
//                 }}
//             >
//                 <div className="flex flex-col items-center justify-center h-full text-white mt-10">
//                     <h1 className="text-4xl font-bold">Free Services</h1>
//                     <div className="flex items-center space-x-2 text-lg ">
                        
//                     </div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-16 py-16">
//                 {[
//                     { title: "Company Name Number Calculator ", img: "b3b02691dfe6e5452c8037623dff37ae.png", link: "/compay-name" },
//                     { title: "Brand Name  Number Calculator", img: "013c1d62729c2d0f481cc94e3ea0ff88.png", link: "/brand-name" },
//                     { title: "Favourable Colour Combinations", img: "539ecbb8d3ce7db2498cdfd7d5700653.jpg", link: "/favourable-color" },
//                     { title: "Company Logo Suggestions", img: "22c272e5b7b252dce03a99ffeba0768a.png", link: "/company-logo" },
//                     { title: "Company Tagline Analysis", img: "28aae29f47a19eaed148eb2836c302e1.png", link: "/company-tagline" },
                    


//                 ].map((card, index) => (
//                     <Link
//                         to={card.link}
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
//                     >
//                         <img
//                             src={`https://image-resource.creatie.ai/146256977394650/146256977394652/${card.img}`}
//                             alt={card.title}
//                             className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                         <div className="absolute bottom-4 left-8 text-white">
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

// export default FreeServices;


// import { Link } from "react-router-dom";
// import Footer from "../HomePages/Footer";

// const FreeServices = () => {
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
//                     <h1 className="text-4xl font-bold">Free Services</h1>
//                     <div className="flex items-center space-x-2 text-lg "></div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-16 py-16">
//                 {[
//                     { title: "Company Name Number Calculator", img: "b3b02691dfe6e5452c8037623dff37ae.png", link: "/compay-name" },
//                     { title: "Brand Name Number Calculator", img: "013c1d62729c2d0f481cc94e3ea0ff88.png", link: "/brand-name" },
//                     { title: "Favourable Colour Combinations", img: "539ecbb8d3ce7db2498cdfd7d5700653.jpg", link: "/favourable-color" },
//                     { title: "Company Logo Suggestions", img: "22c272e5b7b252dce03a99ffeba0768a.png", link: "/company-logo" },
//                     { title: "Company Tagline Analysis", img: "28aae29f47a19eaed148eb2836c302e1.png", link: "/company-tagline" },
//                 ].map((card, index) => (
//                     <Link
//                         to={card.link}
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
//                     >
//                         <img
//                             src={`https://image-resource.creatie.ai/146256977394650/146256977394652/${card.img}`}
//                             alt={card.title}
//                             className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                         <div className="absolute bottom-4 left-8 text-white">
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

// export default FreeServices;



// import { useState, useEffect } from "react";
// import { To, useNavigate } from "react-router-dom";
// import Footer from "../HomePages/Footer";
// import  supabase  from "../config/supabaseClient"; // Import the Supabase client
// import LoginPopup from "../loginandReg/LoginPopup";

// const FreeServices = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [showLoginModal, setShowLoginModal] = useState(false);
//     const navigate = useNavigate();

//     // Check if the user is logged in on component mount
//     useEffect(() => {
//         const checkUser = async () => {
//             const { data: { user } } = await supabase.auth.getUser();
//             if (user) {
//                 setIsLoggedIn(true);
//             }
//         };
//         checkUser();
//     }, []);

//     // Handle card click
//     const handleCardClick = (link: To) => {
//         if (!isLoggedIn) {
//             setShowLoginModal(true); // Show login popup if not logged in
//         } else {
//             navigate(link); // Navigate to the link if logged in
//         }
//     };

//     // Close the login modal
//     const closeModal = () => {
//         setShowLoginModal(false);
//     };

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
//                     <h1 className="text-4xl font-bold">Free Services</h1>
//                     <div className="flex items-center space-x-2 text-lg "></div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-16 py-16">
//                 {[
//                     { title: "Company Name Number Calculator", img: "b3b02691dfe6e5452c8037623dff37ae.png", link: "/compay-name" },
//                     { title: "Brand Name Number Calculator", img: "013c1d62729c2d0f481cc94e3ea0ff88.png", link: "/brand-name" },
//                     { title: "Favourable Colour Combinations", img: "539ecbb8d3ce7db2498cdfd7d5700653.jpg", link: "/favourable-color" },
//                     { title: "Company Logo Suggestions", img: "22c272e5b7b252dce03a99ffeba0768a.png", link: "/company-logo" },
//                     { title: "Company Tagline Analysis", img: "28aae29f47a19eaed148eb2836c302e1.png", link: "/company-tagline" },
//                 ].map((card, index) => (
//                     <div
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer"
//                         onClick={() => handleCardClick(card.link)}
//                     >
//                         <img
//                             src={`https://image-resource.creatie.ai/146256977394650/146256977394652/${card.img}`}
//                             alt={card.title}
//                             className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                         <div className="absolute bottom-4 left-8 text-white">
//                             <h2 className="text-lg font-semibold">{card.title}</h2>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Login Modal */}
//             <LoginPopup showLoginModal={showLoginModal} closeModal={closeModal} />

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default FreeServices;



// // Responsive 
// import { useState, useEffect } from "react";
// import { To, useNavigate } from "react-router-dom";
// import Footer from "../HomePages/Footer";
// import supabase from "../config/supabaseClient"; // Import the Supabase client
// import LoginPopup from "../loginandReg/LoginPopup";

// const FreeServices = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [showLoginModal, setShowLoginModal] = useState(false);
//     const navigate = useNavigate();

//     // Check if the user is logged in on component mount
//     useEffect(() => {
//         const checkUser = async () => {
//             const { data: { user } } = await supabase.auth.getUser();
//             if (user) {
//                 setIsLoggedIn(true);
//             }
//         };
//         checkUser();
//     }, []);

//     // Handle card click
//     const handleCardClick = (link: To) => {
//         if (!isLoggedIn) {
//             setShowLoginModal(true); // Show login popup if not logged in
//         } else {
//             navigate(link); // Navigate to the link if logged in
//         }
//     };

//     // Close the login modal
//     const closeModal = () => {
//         setShowLoginModal(false);
//     };

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
//                     <h1 className="text-4xl font-bold">Free Services</h1>
//                     <div className="flex items-center space-x-2 text-lg "></div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 py-16">
//                 {[
//                     { title: "Company Name Number Calculator", img: "https://www.bestwatch.ru/review/images/tild3835-3261-4239-b937-313666353132__magia-zifr.jpg", link: "/compay-name" },
//                     { title: "Brand Name Number Calculator", img: "https://images.lifestyleasia.com/wp-content/uploads/sites/5/2023/05/26142505/numerology-2-1600x900.jpeg", link: "/brand-name" },
//                     { title: "Favourable Colour Combinations", img: "https://avatars.mds.yandex.net/i?id=93cb3c00540817aa375e5c83d7892d2b71f85007-5569020-images-thumbs&n=13", link: "/favourable-color" },
//                     { title: "Company Logo Suggestions", img: "https://sun9-55.userapi.com/impg/lXHAfiKpyiPzB88dosmW9i0DbftfXfNeH5mipg/mx0RLkfz8cs.jpg?size=807x529&quality=95&sign=5b7e5878fabfd838044a19131cf7105a&c_uniq_tag=o8qqbIlgJMOKcClAlmoJktMvUrUPP8pk2hzRnKNZ-ME&type=album", link: "/company-logo" },
//                     { title: "Company Tagline Analysis", img: "https://cdn.culture.ru/images/e699b5fc-be80-5c27-99e7-f17e3b644604", link: "/company-tagline" },
//                 ].map((card, index) => (
//                     <div
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer"
//                         onClick={() => handleCardClick(card.link)}
//                     >
//                         <img
//                             src={card.img}
//                             alt={card.title}
//                             className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                         <div className="absolute bottom-4 left-8 text-white">
//                             <h2 className="text-lg font-semibold">{card.title}</h2>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Login Modal */}
//             <LoginPopup showLoginModal={showLoginModal} closeModal={closeModal} />

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default FreeServices;




import { useState, useEffect } from "react";
import { To, useNavigate } from "react-router-dom";
import Footer from "../HomePages/Footer";
import supabase from "../config/supabaseClient"; // Import the Supabase client
import LoginPopup from "../loginandReg/LoginPopup";

const FreeServices = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate();

    // Check if the user is logged in on component mount
    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setIsLoggedIn(true);
            }
        };
        checkUser();
    }, []);

    // Handle card click
    const handleCardClick = (link: To) => {
        if (!isLoggedIn) {
            setShowLoginModal(true); // Show login popup if not logged in
        } else {
            navigate(link); // Navigate to the link if logged in
        }
    };

    // Close the login modal
    const closeModal = () => {
        setShowLoginModal(false);
    };

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
                    <h1 className="text-4xl font-bold">Free Services</h1>
                    <div className="flex items-center space-x-2 text-lg "></div>
                </div>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 py-16">
                {[
                    { title: "Company Name Number Calculator", img: "https://www.bestwatch.ru/review/images/tild3835-3261-4239-b937-313666353132__magia-zifr.jpg", link: "/compay-name" },
                    { title: "Brand Name Number Calculator", img: "https://images.lifestyleasia.com/wp-content/uploads/sites/5/2023/05/26142505/numerology-2-1600x900.jpeg", link: "/brand-name" },
                    { title: "Favourable Colour Combinations", img: "https://avatars.mds.yandex.net/i?id=93cb3c00540817aa375e5c83d7892d2b71f85007-5569020-images-thumbs&n=13", link: "/favourable-color" },
                    { title: "Company Logo Suggestions", img: "https://sun9-55.userapi.com/impg/lXHAfiKpyiPzB88dosmW9i0DbftfXfNeH5mipg/mx0RLkfz8cs.jpg?size=807x529&quality=95&sign=5b7e5878fabfd838044a19131cf7105a&c_uniq_tag=o8qqbIlgJMOKcClAlmoJktMvUrUPP8pk2hzRnKNZ-ME&type=album", link: "/company-logo" },
                    { title: "Company Tagline Analysis", img: "https://cdn.culture.ru/images/e699b5fc-be80-5c27-99e7-f17e3b644604", link: "/company-tagline" },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        onClick={() => handleCardClick(card.link)}
                    >
                        {/* Image Section */}
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                        {/* Card Title */}
                        <div className="absolute bottom-4 left-8 text-white">
                            <h2 className="text-lg font-semibold">{card.title}</h2>
                        </div>

                        {/* Hover Effect: Add a subtle glow */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 transition-all duration-300 rounded-lg"></div>
                    </div>
                ))}
            </div>

            {/* Login Modal */}
            <LoginPopup showLoginModal={showLoginModal} closeModal={closeModal} />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default FreeServices;











