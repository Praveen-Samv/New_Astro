import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../HomePages/Footer";

const AstroBranding: React.FC = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/book"); // Navigate to the booking page
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-64 text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            "url('https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold">Services</h1>
        <nav className="text-sm mt-2">
          <span className="text-gray-200">Home</span>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-200">Services</span>
          <span className="mx-2">&gt;</span>
          <span>Astro Branding</span>
        </nav>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Business Astro Diagnostics
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Astro-Branding is a mystical approach to brand development that aligns
          a company’s identity, messaging, and design with astrological
          principles. By drawing on the symbolic energy of zodiac signs,
          planetary transits, and cosmic archetypes, brands can create an
          emotional, intuitive connection with their audience. This method goes
          beyond aesthetics — it taps into the collective consciousness, making
          brands feel more meaningful, authentic, and aligned with universal
          energies.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://image-resource.creatie.ai/145720426227716/145720426227718/ee893977173d6b7cae471575a43ea654.jpg"
              alt="Astro Diagnostics"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Business Astro Diagnostics
              </h3>
              <p className="text-lg text-gray-600 my-4">
                ₹3000 <span className="text-sm font-medium">/Person</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Taxes and fees included
              </p>
              <button
                onClick={handleBooking}
                className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
              >
                Book Now
              </button>
              <p className="mt-4 text-sm text-gray-500">Member Flexible Rate</p>
              <a href="#" className="text-orange-500 text-sm font-medium">
                Rate Details
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://image-resource.creatie.ai/145720426227716/145720426227718/ee893977173d6b7cae471575a43ea654.jpg"
              alt="Astro Diagnostics"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Business Astro Diagnostics
              </h3>
              <p className="text-lg text-gray-600 my-4">
                ₹3000 <span className="text-sm font-medium">/Person</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Taxes and fees included
              </p>
              <button
                onClick={handleBooking}
                className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
              >
                Book Now
              </button>
              <p className="mt-4 text-sm text-gray-500">Member Flexible Rate</p>
              <a href="#" className="text-orange-500 text-sm font-medium">
                Rate Details
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AstroBranding;
