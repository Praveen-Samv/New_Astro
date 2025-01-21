import React, { useEffect } from 'react';
import { FaSun, FaCalendarWeek, FaCalendarAlt } from 'react-icons/fa'; // Example icons from react-icons

const BusinessReport: React.FC = () => {
  useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      {/* Top Status Bar */}
      <div className="w-full h-[52px] bg-gray-100 relative">
        <div className="absolute top-0 left-0 right-0 bottom-[51px]"></div>
        <svg id="1639:74196" className="absolute top-[20px] right-[14px] w-[66.66px] h-[11.34px]"></svg>
        <svg id="1639:74193" className="absolute top-[16px] left-[3px] w-[54px] h-[21px]"></svg>
      </div>

      {/* Full Width Header Section */}
      <div className="w-screen bg-cover h-48 bg-center bg-[url('https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg')] p-12 text-white text-center">
        <h1 className="text-4xl text-center mt-4 font-bold">Personalize Business Report</h1>
        <div className="flex justify-center items-center mt-4">
          {/* Add symbols here */}
          
          
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl flex flex-col gap-6 mt-8">
        {/* Daily Section */}
        <div className="w-full rounded-lg bg-cover bg-center h-[312px]" style={{ backgroundImage: "url('https://image-resource.creatie.ai/146256977394650/146256977394652/b4d7258c58fc81e4b84e6ff75c1e3609.jpg')" }}>
          <div className="p-4">
            <div className="w-[91px] h-[35px] shadow-md rounded-lg flex items-center gap-2 p-2  border border-orange-500">
              <FaSun className="w-[24px] h-[24px] text-orange-500" /> {/* Daily Icon */}
              <div className="text-white font-inter text-sm font-bold">Daily</div>
            </div>
            <div className="mt-4">
              <div className="text-white font-open-sans text-lg font-semibold">Daily Business Insights</div>
              <div className="mt-2 text-white font-open-sans text-sm">
                Get precise, real-time updates on your daily business operations. Track performance metrics, resolve challenges, and ensure seamless productivity every single day.
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#F17506]"></div>
                  <div className="text-white font-open-sans text-sm font-semibold">Real-time performance tracking.</div>
                </div>
                <div className="w-full border-t border-[#D9D9DE]"></div>
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#F17506]"></div>
                  <div className="text-white font-open-sans text-sm font-semibold">Immediate solutions for daily challenges.</div>
                </div>
                <div className="w-full border-t border-[#D9D9DE]"></div>
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#F17506]"></div>
                  <div className="text-white font-open-sans text-sm font-semibold">Focus on daily operational efficiency.</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-[137px] h-[32px] rounded-full bg-[#DF6327] flex items-center justify-center">
                <div className="text-white font-open-sans text-sm font-bold">View Report</div>
              </button>
            </div>
          </div>
        </div>

        {/* Weekly Section */}
        <div className="w-full rounded-lg bg-cover bg-center h-[312px]" style={{ backgroundImage: "url('https://image-resource.creatie.ai/146256977394650/146256977394652/70209d9c9176abb993881b84f993c8d1.jpg')" }}>
          <div className="p-4">
            <div className="w-[108px] h-[35px] shadow-md rounded-lg flex items-center gap-2 p-2  border border-orange-500">
              <FaCalendarWeek className="w-[24px] h-[24px] text-orange-500" /> {/* Weekly Icon */}
              <div className="text-white font-inter text-sm font-bold">Weekly</div>
            </div>
            <div className="mt-4">
              <div className="text-white font-open-sans text-lg font-semibold">Weekly Business Review</div>
              <div className="mt-2 text-white font-open-sans text-sm">
                Analyze your weekly business trends with actionable insights. Optimize processes, monitor weekly growth, and prepare for the weeks ahead.
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#F17506]"></div>
                  <div className="text-white font-open-sans text-sm font-semibold">Trend analysis and weekly KPIs.</div>
                </div>
                <div className="w-full border-t border-[#D9D9DE]"></div>
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#F17506]"></div>
                  <div className="text-white font-open-sans text-sm font-semibold">Growth opportunities highlighted.</div>
                </div>
                <div className="w-full border-t border-[#D9D9DE]"></div>
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#F17506]"></div>
                  <div className="text-white font-open-sans text-sm font-semibold">Remedies for recurring issues.</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-[137px] h-[32px] rounded-full bg-[#DF6327] flex items-center justify-center">
                <div className="text-white font-open-sans text-sm font-bold">View Report</div>
              </button>
            </div>
          </div>
        </div>

        {/* Monthly Section */}
        <div className="w-full rounded-lg bg-cover bg-center h-[312px]" style={{ backgroundImage: "url('https://image-resource.creatie.ai/146256977394650/146256977394652/177def2c2b0df5271cf86ef922b51a4e.jpg')" }}>
          <div className="p-4">
            <div className="w-[114px] h-[35px] shadow-md rounded-lg flex items-center gap-2 p-2  border border-orange-500">
              <FaCalendarAlt className="w-[24px] h-[24px] text-orange-500" /> {/* Monthly Icon */}
              <div className="text-white font-inter text-sm font-bold">Monthly</div>
            </div>
            <div className="mt-4">
              <div className="text-white font-open-sans text-lg font-semibold">Monthly Performance Report</div>
              <div className="mt-2 text-white font-open-sans text-sm">
                Dive deep into your business outlook for the month. Assess key metrics, identify challenges, and implement tailored remedies for strategic growth.
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#F17506]"></div>
                  <div className="text-white font-open-sans text-sm font-semibold">Comprehensive monthly analysis.</div>
                </div>
                <div className="w-full border-t border-[#D9D9DE]"></div>
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#F17506]"></div>
                  <div className="text-white font-open-sans text-sm font-semibold">Forecasts and performance trends.</div>
                </div>
                <div className="w-full border-t border-[#D9D9DE]"></div>
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#F17506]"></div>
                  <div className="text-white font-open-sans text-sm font-semibold">Remedies for monthly challenges.</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-[137px] h-[32px] rounded-full bg-[#DF6327] flex items-center justify-center">
                <div className="text-white font-open-sans text-sm font-bold">View Report</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessReport;