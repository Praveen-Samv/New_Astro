

const AstroBusinessTrust = () => {
  return (
    <div className="why-choose-us flex flex-row justify-start items-center gap-[189px] px-14 pt-10">
      {/* Image Section */}
      <img
        src="https://image-resource.creatie.ai/146256977394650/146256977394652/49c19135e11d7ffa0d2d1e30ce7581c8.png"
        className="about w-[267px] h-[314px] object-cover"
        alt="Why Choose Us"
      />

      {/* Content Section */}
      <div className="group-39442 w-[712px]">
        {/* Section Heading */}
        <div className="group-39441 flex flex-col gap-2">
          <h2 className="section-heading text-[#C75807] mb-4 font-bold text-[40px] leading-[24px]">
            Why Businesses Trust CORP ASTRO
          </h2>
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/dc645f8e9ad238de31610a43d734a52f.webp"
            className="undrline w-[323px] h-[18px] object-cover"
            alt="Underline"
          />
        </div>

        {/* Description Section */}
        <div className="text-black font-semibold text-[18px] leading-[22px] mt-8 space-y-4">
          <p>
            <span className="font-bold ">  󰀠   Expert Astrologers</span>: Over 25 years of experience in
            corporate astrology and business consulting.
          </p>
          <p>
            <span className="font-bold">󰀠   Tailored Services</span>: Personalized advice based on your
            business needs, astrology, and Vastu.
          </p>
          <p>
            <span className="font-bold">󰀠  Proven Results</span>: Helping businesses grow, improve
            workforce harmony, and increase profitability.
          </p>
          <p>
            <span className="font-bold">󰀠  Trusted by Leading Companies</span>: Trusted by top-tier
            clients for astrological guidance and workplace optimization.
          </p>
        </div>

        {/* Button */}
        <div className="button mt-6 w-[145px] h-[40px] flex justify-center items-center bg-[#F17506] rounded-full cursor-pointer">
          <span className="read-more text-white font-semibold text-[16px] leading-[20px]">
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};

export default AstroBusinessTrust;
