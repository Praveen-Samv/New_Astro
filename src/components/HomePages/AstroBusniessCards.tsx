

// const AstroBusinessCards = () => {
//   return (
//     <div className="list flex flex-row gap-4 px-12 py-12 bg-gray-100 mt-12">
//       {/* Step 1 */}
//       <div className="formitem flex flex-col gap-1">
//         <div className="time flex items-center gap-4">
//           <div className="time-1 flex justify-center items-center bg-gray-200 rounded px-2 py-1">
//             <span className="step-1 text-gray-500 text-sm font-semibold">Step 1</span>
//           </div>
//           <div className="divider flex-grow h-[2px] bg-gray-300"></div>
//         </div>
//         <div className="task flex flex-row items-end">
//           <div className="task-1 bg-white shadow-md rounded-lg flex p-5 gap-4">
//             <svg
//               className="checkbox-multiple-fill w-6 h-6 text-gray-600"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="..."></path>
//             </svg>
//             <div className="text flex flex-col gap-2">
//               <h3 className="choose-your-service text-gray-700 text-lg font-semibold">
//                 Choose Your Service
//               </h3>
//               <p className="text-lg text-gray-500">
//                 Explore our range of services from Business Diagnostics to Vastu Consultations. Pick
//                 the one that best suits your business needs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Step 2 */}
//       <div className="formitem flex flex-col gap-1">
//         <div className="time flex items-center gap-4">
//           <div className="time-2 flex justify-center items-center bg-orange-500 rounded px-2 py-1">
//             <span className="step-2 text-white text-sm font-semibold">Step 2</span>
//           </div>
//           <div className="divider flex-grow h-[2px] bg-gray-300"></div>
//         </div>
//         <div className="task flex flex-row items-end">
//           <div className="task-1 bg-orange-500 text-white shadow-md rounded-lg flex p-5 gap-4">
//             <svg
//               className="slideshow-fill w-6 h-6 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="..."></path>
//             </svg>
//             <div className="text flex flex-col gap-2">
//               <h3 className="provide-your-business-details text-lg font-semibold">
//                 Provide Your Business Details
//               </h3>
//               <p className="text-lg">
//                 Simply fill out a form with your business information to get personalized
//                 astrological reports and remedies.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Step 3 */}
//       <div className="formitem flex flex-col gap-1">
//         <div className="time flex items-center gap-4">
//           <div className="time-3 flex justify-center items-center bg-blue-100 rounded px-2 py-1">
//             <span className="step-3 text-orange-500 text-sm font-semibold">Step 3</span>
//           </div>
//           <div className="divider flex-grow h-[2px] bg-gray-300"></div>
//         </div>
//         <div className="task flex flex-row items-end">
//           <div className="task-1 bg-white shadow-md rounded-lg flex p-5 gap-4">
//             <svg
//               className="file-chart-2-fill w-6 h-6 text-gray-600"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="..."></path>
//             </svg>
//             <div className="text flex flex-col gap-2">
//               <h3 className="receive-your-customized-report text-lg font-semibold">
//                 Receive Your Customized Report
//               </h3>
//               <p className="text-lg text-gray-500">
//                 After your payment is processed, receive a detailed, easy-to-understand PDF report
//                 with actionable recommendations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Step 4 */}
//       <div className="formitem flex flex-col gap-1">
//         <div className="time flex items-center gap-4">
//           <div className="time-4 flex justify-center items-center bg-blue-100 rounded px-2 py-1">
//             <span className="step-4 text-orange-500 text-sm font-semibold">Step 4</span>
//           </div>
//           <div className="divider flex-grow h-[2px] bg-gray-300"></div>
//         </div>
//         <div className="task flex flex-row items-end">
//           <div className="task-1 bg-white shadow-md rounded-lg flex p-5 gap-4">
//             <svg
//               className="checkbox-circle-fill w-6 h-6 text-gray-600"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="..."></path>
//             </svg>
//             <div className="text flex flex-col gap-2">
//               <h3 className="implement-and-succeed text-lg font-semibold">
//                 Implement and Succeed
//               </h3>
//               <p className="text-lg text-gray-500">
//                 Put the expert advice into action and watch your business thrive with the power of
//                 astrology and Vastu.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AstroBusinessCards;




// responsive 
const AstroBusinessCards = () => {
  return (
    <div className="list flex flex-col md:flex-row gap-6 px-6 md:px-12 py-8 bg-gray-100 mt-12">
      {[
        {
          step: "Step 1",
          title: "Choose Your Service",
          description:
            "Explore our range of services from Business Diagnostics to Vastu Consultations. Pick the one that best suits your business needs.",
          bgColor: "bg-gray-200",
          textColor: "text-gray-500",
          cardBg: "bg-white",
          cardText: "text-gray-700",
          iconColor: "text-gray-600",
        },
        {
          step: "Step 2",
          title: "Provide Your Business Details",
          description:
            "Simply fill out a form with your business information to get personalized astrological reports and remedies.",
          bgColor: "bg-orange-500",
          textColor: "text-white",
          cardBg: "bg-orange-500",
          cardText: "text-white",
          iconColor: "text-white",
        },
        {
          step: "Step 3",
          title: "Receive Your Customized Report",
          description:
            "After your payment is processed, receive a detailed, easy-to-understand PDF report with actionable recommendations.",
          bgColor: "bg-blue-100",
          textColor: "text-orange-500",
          cardBg: "bg-white",
          cardText: "text-gray-700",
          iconColor: "text-gray-600",
        },
        {
          step: "Step 4",
          title: "Implement and Succeed",
          description:
            "Put the expert advice into action and watch your business thrive with the power of astrology and Vastu.",
          bgColor: "bg-blue-100",
          textColor: "text-orange-500",
          cardBg: "bg-white",
          cardText: "text-gray-700",
          iconColor: "text-gray-600",
        },
      ].map((item, index) => (
        <div key={index} className="formitem flex flex-col gap-2 w-full md:w-1/4">
          {/* Step Indicator */}
          <div className="time flex items-center gap-4">
            <div className={`flex justify-center items-center rounded px-3 py-1 ${item.bgColor}`}>
              <span className={`text-sm font-semibold ${item.textColor}`}>{item.step}</span>
            </div>
            <div className="hidden md:block flex-grow h-[2px] bg-gray-300"></div>
          </div>

          {/* Task Card */}
          <div className={`task ${item.cardBg} shadow-md rounded-lg flex p-5 gap-4`}>
            <svg className={`w-6 h-6 ${item.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="..." />
            </svg>
            <div className="text flex flex-col gap-2">
              <h3 className={`text-lg font-semibold ${item.cardText}`}>{item.title}</h3>
              <p className={`text-sm md:text-lg ${item.cardText}`}>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AstroBusinessCards;
