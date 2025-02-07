


import React from "react";

const InfoAstro: React.FC = () => {
  return (
    <div className="why-choose-us flex items-center justify-center gap-[440px] p-0">
      {/* Content Section */}
      <div className="group-39442 flex-shrink-0 w-[712px] h-[260px] relative">
        {/* Title and Underline */}
        <div className="group-39441 flex flex-col items-start gap-2 w-[673px] absolute top-0 left-0">
          <h2 className="text-[#C75807] text-[40px] font-bold leading-[40px]">
            Transform Your Business with Astrology, Vastu, and Numerology
          </h2>
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/dc645f8e9ad238de31610a43d734a52f.webp"
            className="w-[323px] h-[18px] object-cover"
            alt="Underline"
          />
        </div>

        {/* Description */}
        <p className="absolute top-[118px] left-0 text-black text-[18px] leading-[25px] font-normal w-[712px]">
          At CORP ASTRO, we offer expert corporate astrology consultations and
          Vastu services designed to align your business with positive cosmic
          energy. Whether you are a startup or an established enterprise, we
          help you optimize your operations, attract the right talent, and
          create harmonious working environments.
        </p>

        {/* Button */}
        <button className="absolute top-[240px] left-[4px] flex items-center justify-center px-[29px] py-[10px] w-[145px] h-[40px] rounded-full bg-[#F17506] text-white text-[16px] font-semibold">
          Read More
        </button>
      </div>

      {/* Image Section */}
      <img
        src="https://image-resource.creatie.ai/146256977394650/146256977394652/74dd079819054a0da6dfe5ae34c8f492.jpg"
        className="flex-shrink-0 w-[326px] h-[314px] object-cover rounded-[15px]"
        alt="About Us"
      />
    </div>
  );
};

export default InfoAstro;




