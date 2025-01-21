// import React from "react";
// import {
//   FaTelegramPlane,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";
// import Footer from "../HomePages/Footer";

// const Contact = () => {
//   React.useEffect(() => {
//     // Initialize the code
//     return () => {};
//   }, []);

//   return (
//     <div className="w-full bg-white overflow-hidden">
//       {/* Breadcrumb */}
//       <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)' }}>
//                 <div className="flex flex-col items-center justify-center h-full text-white">
//                     <h1 className="text-4xl font-bold">Contact US</h1>
//                     <div className="flex items-center space-x-2 text-lg mt-2">
//                         {/* <span>Home</span>
//                         <span>&gt;</span>
//                         <span>Services</span> */}
//                     </div>
//                 </div>
//         </div>

//       {/* Contact Form Section */}
//       <div className="contact-us max-w-screen-lg mx-auto p-8">
//         <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
//           <h2 className="text-orange-600 text-xl font-medium mb-4">Have A Question?</h2>
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <input
//               type="text"
//               placeholder="Phone Number"
//               className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>
//           <textarea
//             placeholder="Message"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
//             rows={5}
//           ></textarea>
//           <button className="w-full bg-yellow-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-yellow-600">
//             SUBMIT
//           </button>
//         </div>
//       </div>

//       {/* Contact Information Section */}
//       <div className="max-w-screen-lg mx-auto p-8 text-gray-700">
//         <div className="grid grid-cols-2 gap-8">
//           <div>
//             <h3 className="text-orange-600 text-xl font-medium">Call Us</h3>
//             <p className="text-lg">+91 9000090000</p>
//           </div>
//           <div>
//             <h3 className="text-orange-600 text-xl font-medium">Mail Us</h3>
//             <p className="text-lg">Corpastro@gmail.com</p>
//           </div>
//           <div>
//             <h3 className="text-orange-600 text-xl font-medium">Address</h3>
//             <p className="text-lg">
//               502, Lalithanjali Apartment, 6-3-347/11, Dwarakapuri Colony,
//               Punjagutta, Hyderabad, Telangana, India - 500082.
//             </p>
//           </div>
//         </div>
//       </div>

      

//       {/* Footer Section */}
//      <div className="mt-20">
//       <Footer />
//      </div>

      
//     </div>
//   );
// };

// export default Contact;



// import React from "react";

// import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
// import Footer from "../HomePages/Footer";

// // Google Map default center
// const defaultCenter = {
//   lat: 17.422907, // Latitude for Punjagutta, Hyderabad
//   lng: 78.447729, // Longitude for Punjagutta, Hyderabad
// };

// // Google Maps container style
// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };

// // Custom marker icon URL
// const locationIcon = "https://maps.google.com/mapfiles/kml/shapes/placemark_circle.png";

// const Contact: React.FC = () => {
//   const [selectedPlace, setSelectedPlace] = React.useState(false);

//   return (
//     <div className="w-full bg-white overflow-hidden">
//       {/* Breadcrumb */}
//       <div
//         className="w-full h-48 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
//         }}
//       >
//         <div className="flex flex-col items-center justify-center h-full text-white">
//           <h1 className="text-4xl font-bold">Contact US</h1>
//         </div>
//       </div>

//       {/* Contact Form Section */}
//       <div className="contact-us max-w-screen-lg mx-auto p-8">
//         <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
//           <h2 className="text-orange-600 text-xl font-medium mb-4">
//             Have A Question?
//           </h2>
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <input
//               type="text"
//               placeholder="Phone Number"
//               className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>
//           <textarea
//             placeholder="Message"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
//             rows={5}
//           ></textarea>
//           <button className="w-full bg-yellow-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-yellow-600">
//             SUBMIT
//           </button>
//         </div>
//       </div>

//       {/* Contact Information Section */}
//       <div className="max-w-screen-lg mx-auto p-8 text-gray-700">
//         <div className="grid grid-cols-2 gap-8">
//           <div>
//             <h3 className="text-orange-600 text-xl font-medium">Call Us</h3>
//             <p className="text-lg">+91 9000090000</p>
//           </div>
//           <div>
//             <h3 className="text-orange-600 text-xl font-medium">Mail Us</h3>
//             <p className="text-lg">Corpastro@gmail.com</p>
//           </div>
//           <div>
//             <h3 className="text-orange-600 text-xl font-medium">Address</h3>
//             <p className="text-lg">
//               502, Lalithanjali Apartment, 6-3-347/11, Dwarakapuri Colony,
//               Punjagutta, Hyderabad, Telangana, India - 500082.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Google Map Section */}
//       <div className="max-w-screen-lg mx-auto p-8">
//         <h3 className="text-orange-600 text-xl font-medium mb-4">
//           Our Location
//         </h3>
//         <LoadScript googleMapsApiKey="AIzaSyA9qviqi7tO8nndT6WAP_O5qr3NrfpILl0">
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             center={defaultCenter}
//             zoom={15}
//           >
//             <Marker
//               position={defaultCenter}
//               icon={locationIcon}
//               onClick={() => setSelectedPlace(true)}
//             />
//             {selectedPlace && (
//               <InfoWindow
//                 position={defaultCenter}
//                 onCloseClick={() => setSelectedPlace(false)}
//               >
//                 <div>
//                   <h4>Panjagutta, Hyderabad</h4>
//                   <p>
//                     502, Lalithanjali Apartment, 6-3-347/11, Dwarakapuri Colony,
//                     Punjagutta, Hyderabad, Telangana, India - 500082
//                   </p>
//                 </div>
//               </InfoWindow>
//             )}
//           </GoogleMap>
//         </LoadScript>
//       </div>

//       {/* Footer Section */}
//       <div className="mt-20">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker, InfoWindow, Circle } from "@react-google-maps/api";
import Footer from "../HomePages/Footer";

// Google Map default center
const defaultCenter = {
  lat: 17.422907, // Latitude for Punjagutta, Hyderabad
  lng: 78.447729, // Longitude for Punjagutta, Hyderabad
};

// Google Maps container style
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Custom marker icon URL
const locationIcon = "https://maps.google.com/mapfiles/kml/shapes/placemark_circle.png";

const Contact: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = React.useState(false);

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Breadcrumb */}
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold mt-16">Contact US</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-us max-w-screen-lg mx-auto p-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-orange-600 text-xl font-medium mb-4">Have A Question?</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
            rows={5}
          ></textarea>
          <button className="w-full bg-yellow-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-yellow-600">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-screen-lg mx-auto p-8 text-gray-700">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-orange-600 text-xl" />
            <div>
              <h3 className="text-orange-600 text-xl font-medium">Call Us</h3>
              <p className="text-lg">+91 9000090000</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-orange-600 text-xl" />
            <div>
              <h3 className="text-orange-600 text-xl font-medium">Mail Us</h3>
              <p className="text-lg">Corpastro@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 col-span-2">
            <FaMapMarkerAlt className="text-orange-600 text-xl" />
            <div>
              <h3 className="text-orange-600 text-xl font-medium">Address</h3>
              <p className="text-lg">
                502, Lalithanjali Apartment, 6-3-347/11, Dwarakapuri Colony,
                Punjagutta, Hyderabad, Telangana, India - 500082.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="max-w-screen-lg mx-auto p-8">
        <h3 className="text-orange-600 text-xl font-medium mb-4">Our Location</h3>
        <LoadScript googleMapsApiKey="AIzaSyA9qviqi7tO8nndT6WAP_O5qr3NrfpILl0">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={defaultCenter}
            zoom={15}
          >
            <Marker
              position={defaultCenter}
              icon={locationIcon}
              onClick={() => setSelectedPlace(true)}
            />
            <Circle
              center={defaultCenter}
              radius={100}
              options={{
                fillColor: "#FFCCCB",
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
            {selectedPlace && (
              <InfoWindow
                position={defaultCenter}
                onCloseClick={() => setSelectedPlace(false)}
              >
                <div>
                  <h4>Panjagutta, Hyderabad</h4>
                  <p>
                    502, Lalithanjali Apartment, 6-3-347/11, Dwarakapuri Colony,
                    Punjagutta, Hyderabad, Telangana, India - 500082
                  </p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Footer Section */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

