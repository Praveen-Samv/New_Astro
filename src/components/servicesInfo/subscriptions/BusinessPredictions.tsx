import React, { useEffect } from 'react';

const BusinessPredictions: React.FC = () => {
  useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Status Bar */}
      <div className="w-full h-[52px] bg-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-[51px]"></div>
        <svg id="1756:69967" className="absolute top-[20px] right-[14px] w-[66.66px] h-[11.34px]"></svg>
        <svg id="1756:69983" className="absolute top-[16px] left-[3px] w-[54px] h-[21px]"></svg>
      </div>

      

       {/* Header Section */}
       <div className="bg-cover h-48 bg-center bg-[url('https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg')] p-12 text-white text-center">
        <h1 className="text-4xl text-center mt-4 font-bold">Business Predictions</h1>
        <div className="flex justify-center items-center  mt-4">
          
            </div>
        </div>

      {/* Main Content */}
      <div className="w-full p-4 flex flex-col gap-4">
        {/* Daily Section */}
        <div className="w-full rounded-lg bg-gray-200 p-4">
          <div className="w-[88px] h-[35px] shadow-md rounded-lg flex items-center gap-2 p-2 bg-gray-300 border border-orange-500">
            {/* Sun Icon for Daily */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[22px] h-[22px] text-orange-500"
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
            <div className="text-black font-inter text-sm font-bold">
              Daily
            </div>
          </div>
          <div className="mt-4">
            <div className="text-black font-inter text-sm leading-5">
              <div>
                <span>Start your day with personalized insights to guide your business decisions. Today’s alignment of </span>
                <span className="font-semibold">Mercury</span>
                <span> and </span>
                <span className="font-semibold">Jupiter</span>
                <span> suggests a positive environment, potentially affecting communication and financial opportunities. The day’s numerological number, </span>
                <span className="font-semibold">6</span>
                <span>, highlights creativity and harmony, encouraging you to brainstorm new ideas and focus on team collaboration. Focus on </span>
                <span className="font-semibold">strengthening</span>
                <span> client relations and </span>
                <span className="font-semibold">streamlining</span>
                <span> processes, and be cautious of miscommunications or overextending financially.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Section */}
        <div className="w-full rounded-lg bg-gray-200 p-4">
          <div className="w-[102px] h-[35px] shadow-md rounded-lg flex items-center gap-2 p-2 bg-gray-300 border border-orange-500">
            {/* Calendar Icon for Weekly */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px] text-orange-500"
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
            <div className="text-black font-inter text-sm font-bold">
              Weekly
            </div>
          </div>
          <div className="mt-4">
            <div className="text-black font-inter text-sm leading-5">
              <div>
                <span>The movement of </span>
                <span className="font-semibold">Venus</span>
                <span> and </span>
                <span className="font-semibold">Saturn</span>
                <span> this week suggests a focus on </span>
                <span className="font-semibold">stability</span>
                <span> and </span>
                <span className="font-semibold">growth</span>
                <span>, potentially affecting relationships and long-term financial planning. The numerological number for the week, </span>
                <span className="font-semibold">8</span>
                <span>, encourages discipline and ambition, motivating you to stay focused on strategic goals and business expansion. Focus on financial planning and team-building, and be aware of potential challenges on </span>
                <span className="font-semibold">Wednesday</span>
                <span> and </span>
                <span className="font-semibold">Friday</span>
                <span>, when you may face delays or miscommunications. Stay aligned with your goals while embracing growth opportunities and partnership building.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Section */}
        <div className="w-full rounded-lg bg-gray-200 p-4">
          <div className="w-[108px] h-[35px] shadow-md rounded-lg flex items-center gap-2 p-2 bg-gray-300 border border-orange-500">
            {/* Chart Icon for Monthly */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px] text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div className="text-black font-inter text-sm font-bold">
              Monthly
            </div>
          </div>
          <div className="mt-4">
            <div className="text-black font-inter text-sm leading-5">
              <div>
                <span>The month brings a transformational energy due to </span>
                <span className="font-semibold">Uranus</span>
                <span>’ transit in </span>
                <span className="font-semibold">Taurus</span>
                <span>, which suggests changes in how you approach innovation and risk-taking. The numerological number, </span>
                <span className="font-semibold">4</span>
                <span>, suggests a focus on </span>
                <span className="font-semibold">stability</span>
                <span>, </span>
                <span className="font-semibold">structure</span>
                <span>, and </span>
                <span className="font-semibold">discipline</span>
                <span>. Key opportunities arise around the middle of the month, and it’s a good time to prioritize long-term strategies like scaling your business or securing partnerships. Be mindful of financial overspending and unexpected changes, and align your actions with building a strong, sustainable foundation for the future.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPredictions;