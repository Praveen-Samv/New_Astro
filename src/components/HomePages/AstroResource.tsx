import React from 'react';

const AstroResource = () => {
  React.useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <div className="relative mt-5 mx-auto w-[323px] h-[52px] flex flex-col justify-center items-center gap-[10px]">
      <div className="shrink-0 w-[209px] mb-4 h-[24px] text-[#C75807] whitespace-nowrap font-inter text-[40px] leading-[24px] font-bold text-center">
        Resources
      </div>
      <img
        src="https://image-resource.creatie.ai/146256977394650/146256977394652/dc645f8e9ad238de31610a43d734a52f.webp"
        alt="underline"
        className="shrink-0 w-[323px] h-[18px] object-cover"
      />
    </div>
  );
};

export default AstroResource;
