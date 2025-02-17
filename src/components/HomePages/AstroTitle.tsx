

// const AstroTitle = () => {
//   return (
//     <div className="group-39431 flex flex-col items-center gap-2  mt-10">
//       {/* Section Heading */}
//       <h2 className="text-[#C75807] text-[40px] font-bold leading-[24px] mb-4 whitespace-nowrap">
//         Our Premium Services to Propel Your Business Forward
//       </h2>
      
//       {/* Underline Image */}
//       <img
//         src="https://image-resource.creatie.ai/146256977394650/146256977394652/dc645f8e9ad238de31610a43d734a52f.webp"
//         className="w-[323px] h-[18px] object-cover"
//         alt="Underline"
//       />
//     </div>
//   );
// };

// export default AstroTitle;



// Responsive way :

const AstroTitle = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-10 px-4 text-center">
      {/* Section Heading */}
      <h2 className="text-[#C75807] text-2xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight mb-4">
        Our Premium Services to Propel Your Business Forward
      </h2>

      {/* Underline Image */}
      <img
        src="src\assets\home\dc645f8e9ad238de31610a43d734a52f.webp"
        className="w-40 md:w-64 lg:w-[323px] h-auto object-cover"
        alt="Underline"
      />
    </div>
  );
};

export default AstroTitle;
