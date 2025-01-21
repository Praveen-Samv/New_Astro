import React from "react";

const Muhurathas: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      {/* Business Predictions Section */}
      <div className="mt-8 text-2xl font-bold text-center">
        Business Predictions
      </div>

      {/* Favourable Muhurats Section */}
      <div className="mt-8 text-2xl font-bold text-center">
        Favourable Muhurats & Days
      </div>

      {/* Cards Section */}
      <div className="mt-4 space-y-4">
        {/* Card 1 */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">Date of Birth*</div>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="w-full text-[16px] text-gray-900 leading-[19px] outline-none mt-1"
          />
        </div>

        {/* Card 2 */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">Full Name*</div>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full text-[16px] text-gray-900 leading-[19px] outline-none mt-1"
          />
        </div>
      </div>

      {/* Do's and Don'ts Section */}
      <div className="mt-8 text-2xl font-bold text-center">
        Do's and Don'ts
      </div>

      {/* Do's and Don'ts Cards */}
      <div className="mt-4 space-y-4">
        {/* Do's Card */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">Do's</div>
          <div className="mt-2 text-gray-900">
            <ul className="list-disc list-inside">
              <li>Start your day with meditation.</li>
              <li>Focus on tasks that require attention to detail.</li>
            </ul>
          </div>
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/2cf56bc54b68286ec1a7e4d2d66f176b.png"
            alt="Do's Icon"
            className="w-6 h-6 mt-2"
          />
        </div>

        {/* Don'ts Card */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">Don'ts</div>
          <div className="mt-2 text-gray-900">
            <ul className="list-disc list-inside">
              <li>Avoid making hasty financial decisions.</li>
              <li>Refrain from starting new ventures during Rahu Kaal.</li>
            </ul>
          </div>
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/d479b4cb31da90db4591866fac77b6d6.png"
            alt="Don'ts Icon"
            className="w-6 h-6 mt-2"
          />
        </div>
      </div>

      {/* Personalised Business Reports Section */}
      <div className="mt-8 text-2xl font-bold text-center">
        Personalised Business Reports
      </div>

      {/* Report Cards */}
      <div className="mt-4 space-y-4">
        {/* Daily Report Card */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">Daily Business Insights</div>
          <div className="mt-2 text-gray-900">
            Get precise, real-time updates on your daily business operations.
          </div>
          <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors">
            View Report
          </button>
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/b4d7258c58fc81e4b84e6ff75c1e3609.jpg"
            alt="Daily Report"
            className="w-full h-48 object-cover mt-4 rounded-lg"
          />
        </div>

        {/* Weekly Report Card */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">Weekly Business Review</div>
          <div className="mt-2 text-gray-900">
            Analyze your weekly business trends with actionable insights.
          </div>
          <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors">
            View Report
          </button>
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/70209d9c9176abb993881b84f993c8d1.jpg"
            alt="Weekly Report"
            className="w-full h-48 object-cover mt-4 rounded-lg"
          />
        </div>

        {/* Monthly Report Card */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">Monthly Performance Report</div>
          <div className="mt-2 text-gray-900">
            Dive deep into your business outlook for the month.
          </div>
          <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors">
            View Report
          </button>
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/177def2c2b0df5271cf86ef922b51a4e.jpg"
            alt="Monthly Report"
            className="w-full h-48 object-cover mt-4 rounded-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 py-6 bg-gray-100 w-full text-center">
        <div className="text-gray-600">
          © 2023 CorpAstro. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Muhurathas;