

// const AstroBusinessTitle = () => {
//   return (
//     <div className="group-39440 flex flex-col items-center gap-2 mt-10">
//       {/* Section Heading */}
//       <h2 className="text-[#C75807] text-[40px] font-bold leading-[24px] mb-4 whitespace-nowrap text-center">
//         How CORP ASTRO Works for Your Business
//       </h2>

//       {/* Underline */}
//       <img
//         src="https://image-resource.creatie.ai/146256977394650/146256977394652/dc645f8e9ad238de31610a43d734a52f.webp"
//         className="w-[323px] h-[18px] object-cover"
//         alt="Underline"
//       />
//     </div>
//   );
// };

// export default AstroBusinessTitle;


//  Responsive 
const AstroBusinessTitle = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-10 px-4 text-center">
      {/* Section Heading */}
      <h2 className="text-[#C75807] text-2xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight mb-4">
        How CORP ASTRO Works for Your Business
      </h2>

      {/* Underline */}
      <img
        src="src\assets\home\dc645f8e9ad238de31610a43d734a52f.webp"
        className="w-40 md:w-64 lg:w-[323px] h-auto object-cover"
        alt="Underline"
      />
    </div>
  );
};

export default AstroBusinessTitle;
