

// const FreeTitle = () => {
//     return (
//       <div className="group-39431 flex flex-col items-center gap-2  mt-10">
//         {/* Section Heading */}
//         <h2 className="text-[#C75807] text-[40px] font-bold leading-[24px] mb-4 whitespace-nowrap">
//           Try Our Free Services 
//         </h2>
        
//         {/* Underline Image */}
//         <img
//           src="https://image-resource.creatie.ai/146256977394650/146256977394652/dc645f8e9ad238de31610a43d734a52f.webp"
//           className="w-[323px] h-[18px] object-cover"
//           alt="Underline"
//         />
//       </div>
//     );
//   };
  
//   export default FreeTitle;
  



//  Responsive way 
const FreeTitle = () => {
  return (
    <div className="group-39431 flex flex-col items-center gap-2 mt-10 px-4 md:px-0">
      {/* Section Heading */}
      <h2 className="text-[#C75807] text-3xl md:text-4xl font-bold leading-tight mb-4 text-center">
        Try Our Free Services
      </h2>

      {/* Underline Image */}
      <img
        src="src\assets\home\dc645f8e9ad238de31610a43d734a52f.webp"
        className="w-[200px] md:w-[323px] h-auto object-cover"
        alt="Underline"
      />
    </div>
  );
};

export default FreeTitle;
