
// const ClienSuccessTitle = () => {
//   return (
//     <div className="group-39432 flex flex-col items-center gap-2 pt-10">
//       {/* Section Heading */}
//       <h2 className="section-heading text-[#C75807] font-bold text-[40px] mb-4 leading-[24px] whitespace-nowrap">
//         Client Success Stories
//       </h2>

//       {/* Underline */}
//       <img
//         src="https://image-resource.creatie.ai/146256977394650/146256977394652/dc645f8e9ad238de31610a43d734a52f.webp"
//         className="undrline w-[323px] h-[18px] object-cover"
//         alt="Underline"
//       />

// <div className="mx-auto mt-10 w-[680px] h-[60px] text-[#292929] font-['Inter'] text-[20px] leading-[30px] font-normal text-center">
//       See how CORP ASTRO has helped businesses like yours thrive by aligning
//       astrological insights with business strategies.
//     </div>
//     </div>
//   );
// };

// export default ClienSuccessTitle;



// Responsive 
const ClientSuccessTitle = () => {
  return (
    <div className="group-39432 flex flex-col items-center gap-2 pt-10 px-4">
      {/* Section Heading */}
      <h2 className="section-heading text-[#C75807] font-bold text-2xl md:text-3xl lg:text-[40px] mb-4 leading-[32px] md:leading-[36px] lg:leading-[44px] text-center">
        Client Success Stories
      </h2>

      {/* Underline */}
      <img
        src="src\assets\home\dc645f8e9ad238de31610a43d734a52f.webp"
        className="w-[200px] md:w-[280px] lg:w-[323px] h-[14px] md:h-[16px] lg:h-[18px] object-cover"
        alt="Underline"
      />

      {/* Description */}
      <div className="mt-6 text-[#292929] text-sm md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8 text-center max-w-sm md:max-w-lg lg:max-w-2xl">
        See how CORP ASTRO has helped businesses like yours thrive by aligning
        astrological insights with business strategies.
      </div>
    </div>
  );
};

export default ClientSuccessTitle;
