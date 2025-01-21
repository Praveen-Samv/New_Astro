import React from "react";

const BusinessNumber: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      {/* Top Status Bar */}
      <div className="w-full h-12 bg-gray-100 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0"></div>
        <svg className="absolute top-5 right-3 w-16 h-3"></svg>
        <svg className="absolute top-4 left-1 w-14 h-5"></svg>
      </div>

      {/* Full Width Header Section */}
      <div className="w-screen bg-cover h-48 bg-center bg-[url('https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg')] p-12 text-white text-center">
        <h1 className="text-4xl text-center mt-4 font-bold">Brand Number Calculator</h1>
        <div className="flex justify-center items-center mt-4">
          {/* Add symbols here */}
        </div>
      </div>

        {/* Image Card */}
      <div className="w-full max-w-2xl p-4">
        <div className="w-full h-48 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/ba00544ebfe83441a6f96a93469469d6.png"
            alt="Numerology"
            className="w-full h-full object-cover"
          />
        </div>
      </div>


      {/* Description Section */}
      <div className="w-full max-w-2xl p-4">
        <p className="text-gray-700 text-sm leading-relaxed text-justify">
          A Company Name Number Calculator is a tool that analyzes the numerological significance of a company's name. Using systems like Pythagorean or Chaldean, it assigns numerical values to each letter, revealing insights into the company’s potential, strengths, challenges, and destiny.
        </p>
      </div>

      

      {/* Input Section */}
      <div className="w-full max-w-2xl p-4">
        <div className="text-lg font-bold text-gray-800 mb-4">
          Fill the below details
        </div>
        <div className="w-full">
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Business Name*</label>
            <input
              type="text"
              placeholder="Corp Astro"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Calculate Compatibility
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full max-w-2xl p-4">
        <div className="text-center">
          <div className="text-gray-800 text-lg mb-2">
            Your Business Name Number is: <span className="text-orange-600 font-bold">5</span>
          </div>
          <div className="text-gray-800 text-lg mb-4">
            Compatibility: <span className="text-orange-600 font-semibold">Highly Compatible</span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-gray-800 text-lg font-semibold underline mb-2">
            Alternative Name Suggestions:
          </div>
          <div className="text-gray-800 text-sm">
            <div>Bright Horizons Corp Astro - 6</div>
            <div>Quantum Ventures Corp Astro - 3</div>
            <div>Innovate Solutions Corp Astro - 8</div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default BusinessNumber;