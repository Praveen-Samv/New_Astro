import React, { useState } from 'react';

const DosandDonot: React.FC = () => {
  // State to track which section is clicked in each card
  const [activeSections, setActiveSections] = useState<{
    daily: 'dos' | 'donts' | null;
    weekly: 'dos' | 'donts' | null;
    monthly: 'dos' | 'donts' | null;
  }>({
    daily: null,
    weekly: null,
    monthly: null,
  });

  // Function to handle Do's click for a specific card
  const handleDosClick = (card: 'daily' | 'weekly' | 'monthly') => {
    setActiveSections((prev) => ({
      ...prev,
      [card]: prev[card] === 'dos' ? null : 'dos', // Toggle Do's
    }));
  };

  // Function to handle Don'ts click for a specific card
  const handleDontsClick = (card: 'daily' | 'weekly' | 'monthly') => {
    setActiveSections((prev) => ({
      ...prev,
      [card]: prev[card] === 'donts' ? null : 'donts', // Toggle Don'ts
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Top Status Bar */}
      <div className="w-full h-[52px] bg-gray-100 relative">
        <div className="absolute top-0 left-0 right-0 bottom-[51px]"></div>
        <svg id="1756:70135" className="absolute top-[20px] right-[14px] w-[66.66px] h-[11.34px]"></svg>
        <svg id="1756:70151" className="absolute top-[16px] left-[3px] w-[54px] h-[21px]"></svg>
      </div>

      {/* Full-Width Header Section */}
      <div className="w-full bg-cover h-48 bg-center bg-[url('https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg')] p-12 text-white text-center">
        <h1 className="text-4xl font-bold">Do's & Don'ts</h1>
        <div className="flex justify-center items-center mt-4">
          {/* Add any additional content here */}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl flex flex-col gap-6 mt-8 p-4">
        {/* Daily Section */}
        <div className="w-full rounded-lg bg-gray-200 p-4 shadow-lg">
          <div className="w-[90px] h-[35px] shadow-md rounded-lg flex items-center gap-2 p-2 bg-gray-300 border border-orange-500">
            {/* Sun Icon for Daily */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <div className="text-black font-inter text-sm font-bold">Daily</div>
          </div>
          <div className="mt-4">
            <div className="text-black font-inter text-sm font-bold">Today's Recommendations</div>
            <div className="mt-2 flex gap-2">
              {/* Do's Section */}
              <div
                className={`w-[57px] h-[24px] rounded-l-lg flex items-center justify-center relative cursor-pointer ${
                  activeSections.daily === 'dos' ? 'bg-green-600' : 'bg-green-300'
                }`}
                onClick={() => handleDosClick('daily')}
              >
                <img
                  src="https://image-resource.creatie.ai/146256977394650/146256977394652/2cf56bc54b68286ec1a7e4d2d66f176b.png"
                  className="w-[14px] h-[14px] absolute left-[10px] top-[6px]"
                  alt="Do's icon"
                />
                <div className="text-white font-poppins text-xs font-bold absolute left-[27px] top-[4px]">
                  Do's
                </div>
              </div>
              {/* Don'ts Section */}
              <div
                className={`w-[33px] h-[24px] rounded-r-lg flex items-center justify-center relative cursor-pointer ${
                  activeSections.daily === 'donts' ? 'bg-red-600' : 'bg-red-300'
                }`}
                onClick={() => handleDontsClick('daily')}
              >
                <img
                  src="https://image-resource.creatie.ai/146256977394650/146256977394652/d479b4cb31da90db4591866fac77b6d6.png"
                  className="w-[14px] h-[14px] absolute left-[10px] top-[5px]"
                  alt="Don't icon"
                />
              </div>
            </div>
            <div className="mt-4 text-black font-inter text-sm leading-5">
              <div>
                <span>
                  Start your day with meditation or a brief planning session to align your energy.
                  Focus on tasks that require attention to detail and precision.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Section */}
        <div className="w-full rounded-lg bg-gray-200 p-4 shadow-lg">
          <div className="w-[107px] h-[35px] shadow-md rounded-lg flex items-center gap-2 p-2 bg-gray-300 border border-orange-500">
            {/* Calendar Icon for Weekly */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div className="text-black font-inter text-sm font-bold">Weekly</div>
          </div>
          <div className="mt-4">
            <div className="text-black font-inter text-sm font-bold">This Week’s Guidelines</div>
            <div className="mt-2 flex gap-2">
              {/* Do's Section */}
              <div
                className={`w-[57px] h-[24px] rounded-l-lg flex items-center justify-center relative cursor-pointer ${
                  activeSections.weekly === 'dos' ? 'bg-green-600' : 'bg-green-300'
                }`}
                onClick={() => handleDosClick('weekly')}
              >
                <img
                  src="https://image-resource.creatie.ai/146256977394650/146256977394652/2cf56bc54b68286ec1a7e4d2d66f176b.png"
                  className="w-[14px] h-[14px] absolute left-[10px] top-[6px]"
                  alt="Do's icon"
                />
                <div className="text-white font-poppins text-xs font-bold absolute left-[27px] top-[4px]">
                  Do's
                </div>
              </div>
              {/* Don'ts Section */}
              <div
                className={`w-[33px] h-[24px] rounded-r-lg flex items-center justify-center relative cursor-pointer ${
                  activeSections.weekly === 'donts' ? 'bg-red-600' : 'bg-red-300'
                }`}
                onClick={() => handleDontsClick('weekly')}
              >
                <img
                  src="https://image-resource.creatie.ai/146256977394650/146256977394652/d479b4cb31da90db4591866fac77b6d6.png"
                  className="w-[14px] h-[14px] absolute left-[10px] top-[5px]"
                  alt="Don't icon"
                />
              </div>
            </div>
            <div className="mt-4 text-black font-inter text-sm leading-5">
              <div>
                <span>
                  Start your day with meditation or a brief planning session to align your energy.
                  Focus on tasks that require attention to detail and precision.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Section */}
        <div className="w-full rounded-lg bg-gray-200 p-4 shadow-lg">
          <div className="w-[112px] h-[35px] shadow-md rounded-lg flex items-center gap-2 p-2 bg-gray-300 border border-orange-500">
            {/* Chart Icon for Monthly */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div className="text-black font-inter text-sm font-bold">Monthly</div>
          </div>
          <div className="mt-4">
            <div className="text-black font-inter text-sm font-bold">This Month’s Recommendations</div>
            <div className="mt-2 flex gap-2">
              {/* Do's Section */}
              <div
                className={`w-[30px] h-[24px] rounded-l-lg flex items-center justify-center relative cursor-pointer ${
                  activeSections.monthly === 'dos' ? 'bg-green-600' : 'bg-green-300'
                }`}
                onClick={() => handleDosClick('monthly')}
              >
                <img
                  src="https://image-resource.creatie.ai/146256977394650/146256977394652/2cf56bc54b68286ec1a7e4d2d66f176b.png"
                  className="w-[14px] h-[14px] absolute left-[10px] top-[5px]"
                  alt="Do's icon"
                />
              </div>
              {/* Don'ts Section */}
              <div
                className={`w-[57px] h-[24px] rounded-r-lg flex items-center justify-center relative cursor-pointer ${
                  activeSections.monthly === 'donts' ? 'bg-red-600' : 'bg-red-300'
                }`}
                onClick={() => handleDontsClick('monthly')}
              >
                <img
                  src="https://image-resource.creatie.ai/146256977394650/146256977394652/d479b4cb31da90db4591866fac77b6d6.png"
                  className="w-[14px] h-[14px] absolute left-[5px] top-[6px]"
                  alt="Don't icon"
                />
                <div className="text-white font-poppins text-xs font-bold absolute left-[22px] top-[4px]">
                  Don't
                </div>
              </div>
            </div>
            <div className="mt-4 text-black font-inter text-sm leading-5">
              <div>
                <span>
                  Avoid making hasty decisions, especially related to finances. Refrain from starting
                  any new ventures or signing contracts during Rahu Kaal.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DosandDonot;