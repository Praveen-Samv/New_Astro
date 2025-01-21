import React, { useState } from "react";

const FavorableColor: React.FC = () => {
  // State for input fields
  const [industry, setIndustry] = useState<string>("");
  const [foundationDate, setFoundationDate] = useState<string>("");
  const [results, setResults] = useState<{
    favorableColors: string[];
    unfavorableColors: string[];
  } | null>(null);

  // Handle industry input change
  const handleIndustryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndustry(e.target.value);
  };

  // Handle foundation date input change
  const handleFoundationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoundationDate(e.target.value);
  };

  // Handle button click to generate color guide
  const handleGetColorGuide = () => {
    // Mock logic to generate color guide based on inputs
    const favorableColors = ["#007BFF", "#28A745", "#FFD700"]; // Blue, Green, Yellow
    const unfavorableColors = ["#FF4136", "#6C757D"]; // Red, Gray

    setResults({
      favorableColors,
      unfavorableColors,
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
        <h1 className="text-4xl text-center mt-4 font-bold">Favourable Colour Combinations</h1>
        <div className="flex justify-center items-center mt-4">
          {/* Add symbols here */}
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full max-w-2xl p-4">
        <p className="text-gray-700 text-sm leading-relaxed text-justify">
          The Favourable Colour Combinations tool helps businesses choose the ideal colours for their branding and marketing to attract success. By using insights from colour psychology, numerology, and industry standards, the tool offers personalized suggestions based on your business type or founding date.
        </p>
      </div>

      {/* Image Card */}
      <div className="w-full max-w-2xl p-4">
        <div className="w-full h-48 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/ec3d5a1990dc823879c597668178ec61.webp"
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
            <label className="block text-sm text-gray-600 mb-1">Select Service*</label>
            <input
              type="text"
              placeholder="Select Your Industry"
              value={industry}
              onChange={handleIndustryChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Business Foundation Date*</label>
            <input
              type="date"
              value={foundationDate}
              onChange={handleFoundationDateChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            onClick={handleGetColorGuide}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get Your Colour Guide
          </button>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <div className="w-full max-w-2xl p-4">
          <div className="text-center">
            <div className="text-gray-800 text-lg font-semibold underline mb-4">
              Favourable Colours
            </div>
            <div className="space-y-4">
              {results.favorableColors.map((color, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                  <div className="text-gray-800">
                    {color === "#007BFF"
                      ? "Trust and reliability"
                      : color === "#28A745"
                      ? "Growth and balance"
                      : "Prosperity and success"}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="text-gray-800 text-lg font-semibold underline mb-4">
              Unfavourable Colours
            </div>
            <div className="space-y-4">
              {results.unfavorableColors.map((color, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                  <div className="text-gray-800">
                    {color === "#FF4136"
                      ? "Aggression in calming industries"
                      : "Lack of energy or innovation"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavorableColor;