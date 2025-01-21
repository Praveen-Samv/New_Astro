import React, { useState } from "react";

const CompanyTagline: React.FC = () => {
  // State for input fields
  const [businessName, setBusinessName] = useState<string>("");
  const [businessType, setBusinessType] = useState<string>("");
  const [foundationDate, setFoundationDate] = useState<string>("");
  const [taglineSuggestions, setTaglineSuggestions] = useState<string[]>([]);

  // Handle business name input change
  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessName(e.target.value);
  };

  // Handle business type input change
  const handleBusinessTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBusinessType(e.target.value);
  };

  // Handle foundation date input change
  const handleFoundationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoundationDate(e.target.value);
  };

  // Handle button click to generate tagline suggestions
  const handleGetTagline = () => {
    if (!businessName.trim() || !businessType || !foundationDate) {
      alert("Please fill in all fields.");
      return;
    }

    // Mock logic to generate tagline suggestions
    const mockTaglineSuggestions = [
      "Innovate. Inspire. Impact.",
      "Empowering Your Future.",
      "Where Vision Meets Reality.",
    ];

    setTaglineSuggestions(mockTaglineSuggestions);
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
        <h1 className="text-4xl text-center mt-4 font-bold">Company Tagline Analysis</h1>
        <div className="flex justify-center items-center mt-4">
          {/* Add symbols here */}
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full max-w-2xl p-4">
        <p className="text-gray-700 text-sm leading-relaxed text-justify">
          Company Tagline Analysis is a strategic process that evaluates the effectiveness and resonance of a company's tagline. The analysis focuses on how well the tagline aligns with the company’s mission, values, and target audience, while also exploring its connection to broader, often intangible, influences such as cosmic energies, brand messaging, and emotional impact.
        </p>
      </div>

      {/* Image Card */}
      <div className="w-full max-w-2xl p-4">
        <div className="w-full h-48 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/4b51222dcbaeb0c977ca5f47906977c3.jpg"
            alt="Company Tagline"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-2xl p-4">
        <div className="text-lg font-bold text-gray-800 mb-4">
          Fill the below details
        </div>
        <div className="w-full space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Business Name*</label>
            <input
              type="text"
              placeholder="Enter your business name"
              value={businessName}
              onChange={handleBusinessNameChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Select Business Type*</label>
            <select
              value={businessType}
              onChange={handleBusinessTypeChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Business type</option>
              <option value="Tech">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Retail">Retail</option>
              <option value="Healthcare">Healthcare</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Business Foundation Date*</label>
            <input
              type="date"
              value={foundationDate}
              onChange={handleFoundationDateChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            onClick={handleGetTagline}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get Your Tagline
          </button>
        </div>
      </div>

      {/* Tagline Suggestions Section */}
      {taglineSuggestions.length > 0 && (
        <div className="w-full max-w-2xl p-4">
          <div className="text-center text-gray-800 text-lg font-semibold underline mb-4">
            Tagline Suggestions
          </div>
          <div className="space-y-4">
            {taglineSuggestions.map((tagline, index) => (
              <div
                key={index}
                className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 text-center"
              >
                {tagline}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Home Indicator */}
      <div className="w-full h-8 flex justify-center items-center">
        <div className="w-24 h-1 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default CompanyTagline;