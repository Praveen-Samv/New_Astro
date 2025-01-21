// import React, { useState } from "react";

// const Numerology: React.FC = () => {
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [numerologyNumber, setNumerologyNumber] = useState<number | null>(null);

//   const handleCalculate = () => {
//     // Simple numerology calculation logic (for demonstration)
//     if (dateOfBirth && fullName) {
//       const sum = dateOfBirth.split("").reduce((acc, char) => {
//         if (!isNaN(Number(char))) {
//           return acc + Number(char);
//         }
//         return acc;
//       }, 0);
//       setNumerologyNumber(sum % 9 || 9); // Ensure the result is between 1 and 9
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center p-4">
//       {/* Top Status Bar */}
//       <div className="w-full h-12 bg-gray-100 flex items-center justify-between px-4">
//         <div className="w-16 h-6 bg-gray-300 rounded"></div>
//         <div className="flex space-x-2">
//           <div className="w-6 h-6 bg-gray-300 rounded"></div>
//           <div className="w-6 h-6 bg-gray-300 rounded"></div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="w-full max-w-full mt-8">
//         {/* Our Services Title */}
//         {/* <div className="text-2xl font-bold text-center">Our Services</div> */}

//         {/* Card */}
//         <div className="mt-8 shadow-lg rounded-lg overflow-hidden">
//           <img
//             src="https://image-resource.creatie.ai/146256977394650/146256977394652/f29a13260ac250cbcba3fe34b2151e16.webp"
//             alt="Numerology"
//             className="w-full h-48 object-cover"
//           />
//         </div>

//         {/* Numerology Calculator Title */}
//         <div className="mt-4 text-2xl font-bold text-center">
//           Numerology Calculator
//         </div>

//         {/* Description */}
//         <div className="mt-4 text-center text-gray-600">
//           The Numerology Calculator is an engaging and interactive tool designed to help users uncover the hidden meanings behind their name and birthdate. By inputting these details, users can discover their unique numerology number and gain personalized insights into their personality, life path, and potential career directions.
//         </div>


//         {/* Fill the Below Details */}
//         <div className="mt-8 text-lg font-bold text-center">
//           Fill the below details
//         </div>

//         {/* Input Fields */}
//         <div className="mt-4 space-y-4">
//           {/* Date of Birth Input */}
//           <div className="p-4 border border-gray-300 rounded-lg">
//             <label className="text-sm text-gray-500">Date of Birth*</label>
//             <input
//               type="text"
//               placeholder="DD/MM/YYYY"
//               value={dateOfBirth}
//               onChange={(e) => setDateOfBirth(e.target.value)}
//               className="w-full text-[16px] text-gray-900 leading-[19px] outline-none mt-1"
//             />
//           </div>

//           {/* Full Name Input */}
//           <div className="p-4 border border-gray-300 rounded-lg">
//             <label className="text-sm text-gray-500">Full Name*</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="w-full text-[16px] text-gray-900 leading-[19px] outline-none mt-1"
//             />
//           </div>
//         </div>

//         {/* Calculate Button */}
//         <div className="mt-8">
//           <button
//             onClick={handleCalculate}
//             className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
//           >
//             Calculate
//           </button>
//         </div>

//         {/* Numerology Result */}
//         {numerologyNumber !== null && (
//           <div className="mt-8 text-center text-lg">
//             <div className="text-gray-900">
//               Your Numerology number is:{" "}
//               <span className="font-bold">{numerologyNumber}</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <footer className="mt-8 py-6 bg-gray-100 w-full text-center">
//         <div className="text-gray-600">
//           © 2023 CorpAstro. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Numerology;


import React, { useState } from "react";

const Numerology: React.FC = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fullName, setFullName] = useState("");
  const [numerologyNumber, setNumerologyNumber] = useState<number | null>(null);

  // Handle date of birth input change
  const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedValue = "";

    if (value.length > 0) {
      formattedValue += value.slice(0, 2); // DD
    }
    if (value.length > 2) {
      formattedValue += "/" + value.slice(2, 4); // MM
    }
    if (value.length > 4) {
      formattedValue += "/" + value.slice(4, 8); // YYYY
    }

    setDateOfBirth(formattedValue);
  };

  // Validate date of birth
  const isValidDate = (date: string) => {
    const [day, month, year] = date.split("/").map(Number);
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
      return false;
    }
    const dateObj = new Date(year, month - 1, day);
    return (
      dateObj.getFullYear() === year &&
      dateObj.getMonth() + 1 === month &&
      dateObj.getDate() === day
    );
  };

  // Handle calculation
  const handleCalculate = () => {
    if (!dateOfBirth || !fullName) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isValidDate(dateOfBirth)) {
      alert("Please enter a valid date of birth (DD/MM/YYYY).");
      return;
    }

    // Simple numerology calculation logic
    const sum = dateOfBirth
      .replace(/\D/g, "")
      .split("")
      .reduce((acc, char) => acc + Number(char), 0);
    setNumerologyNumber(sum % 9 || 9); // Ensure the result is between 1 and 9
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      {/* Top Status Bar */}
      <div className="w-full h-12 bg-gray-100 flex items-center justify-between px-4">
        <div className="w-16 h-6 bg-gray-300 rounded"></div>
        <div className="flex space-x-2">
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-full mt-8">
        {/* Card */}
        <div className="mt-8 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://image-resource.creatie.ai/146256977394650/146256977394652/f29a13260ac250cbcba3fe34b2151e16.webp"
            alt="Numerology"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Numerology Calculator Title */}
        <div className="mt-4 text-2xl font-bold text-center">
          Numerology Calculator
        </div>

        {/* Description */}
        <div className="mt-4 text-center text-gray-600">
          The Numerology Calculator is an engaging and interactive tool designed to help users uncover the hidden meanings behind their name and birthdate. By inputting these details, users can discover their unique numerology number and gain personalized insights into their personality, life path, and potential career directions.
        </div>

        {/* Fill the Below Details */}
        <div className="mt-8 text-lg font-bold text-center">
          Fill the below details
        </div>

        {/* Input Fields */}
        <div className="mt-4 space-y-4">
          {/* Date of Birth Input */}
          <div className="p-4 border border-gray-300 rounded-lg">
            <label className="text-sm text-gray-500">Date of Birth*</label>
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              maxLength={10}
              className="w-full text-[16px] text-gray-900 leading-[19px] outline-none mt-1"
            />
          </div>

          {/* Full Name Input */}
          <div className="p-4 border border-gray-300 rounded-lg">
            <label className="text-sm text-gray-500">Full Name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full text-[16px] text-gray-900 leading-[19px] outline-none mt-1"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <div className="mt-8">
          <button
            onClick={handleCalculate}
            className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
          >
            Calculate
          </button>
        </div>

        {/* Numerology Result */}
        {numerologyNumber !== null && (
          <div className="mt-8 text-center text-lg">
            <div className="text-gray-900">
              Your Numerology number is:{" "}
              <span className="font-bold">{numerologyNumber}</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-8 py-6 bg-gray-100 w-full text-center">
        <div className="text-gray-600">
          © 2023 CorpAstro. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Numerology;