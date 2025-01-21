import React, { useState } from "react";

const BrandNumber: React.FC = () => {
  // State for input and results
  const [brandName, setBrandName] = useState<string>("");
  const [results, setResults] = useState<{
    brandNumber: number | null;
    compatibility: string;
    alternativeNames: string[];
  } | null>(null);

  // Handle brand name input change
  const handleBrandNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrandName(e.target.value);
  };

  // Calculate brand number and compatibility
  const calculateBrandNumber = () => {
    if (!brandName.trim()) {
      alert("Please enter a brand name.");
      return;
    }

    // Mock logic to calculate brand number
    const brandNumber = brandName.length % 9 || 9; // Simple numerology calculation
    const compatibility =
      brandNumber === 7
        ? "Perfectly Aligned"
        : brandNumber >= 5
        ? "Highly Compatible"
        : "Needs Improvement";

    // Mock alternative brand name suggestions
    const alternativeNames = [
      `Astro Glow Corp - ${(brandNumber + 2) % 9 || 9}`,
      `Celestial Brands Corp - ${(brandNumber + 1) % 9 || 9}`,
      `Stellar Visions Corp - ${(brandNumber + 3) % 9 || 9}`,
    ];

    setResults({
      brandNumber,
      compatibility,
      alternativeNames,
    });
  };

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
        <h1 className="text-4xl text-center mt-4 font-bold">Business Number Calculator</h1>
        <div className="flex justify-center items-center mt-4">
          {/* Add symbols here */}
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full max-w-2xl p-4">
        <p className="text-gray-700 text-sm leading-relaxed text-justify">
          The Brand Name Number Calculator helps businesses and entrepreneurs uncover the numerological significance of their brand names. Using Chaldean Numerology, it offers insights into the vibrational energy and compatibility of a brand name with its purpose and audience.
        </p>
      </div>

      {/* Image Card */}
      <div className="w-full max-w-2xl p-4">
        <div className="w-full h-48 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/1d5f37f94708325bcc86e79e82b40653.png"
            alt="Numerology"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-2xl p-4">
        <div className="text-lg font-bold text-gray-800 mb-4">
          Fill the below details
        </div>
        <div className="w-full">
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Brand Name*</label>
            <input
              type="text"
              placeholder="Enter your brand name"
              value={brandName}
              onChange={handleBrandNameChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            onClick={calculateBrandNumber}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Calculate Brand Number
          </button>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <div className="w-full max-w-2xl p-4">
          <div className="text-center">
            <div className="text-gray-800 text-lg mb-2">
              Your Brand Name Number is:{" "}
              <span className="text-orange-600 font-bold">{results.brandNumber}</span>
            </div>
            <div className="text-gray-800 text-lg mb-4">
              Compatibility:{" "}
              <span className="text-orange-600 font-semibold">
                {results.compatibility}
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-gray-800 text-lg font-semibold underline mb-2">
              Alternative Brand Name Suggestions:
            </div>
            <div className="text-gray-800 text-sm">
              {results.alternativeNames.map((name, index) => (
                <div key={index}>{name}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandNumber;