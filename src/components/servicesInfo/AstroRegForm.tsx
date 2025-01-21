import React from "react";

const AstroRegForm: React.FC = () => {
  React.useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden bg-gray-50 flex flex-col items-center justify-center">
      {/* Header Section */}
      <div
        className="relative w-full h-[200px] flex flex-col items-center justify-center gap-4 p-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
        }}
      >
        <h1 className="text-4xl font-bold text-white">Services</h1>
        <div className="flex items-center gap-2 text-lg text-white">
          <span>Home</span>
          <span>&gt;</span>
          <span>Services</span>
          <span>&gt;</span>
          <span>Astro Branding</span>
          <span>&gt;</span>
          <span>Business Astro Diagnostics</span>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl w-full mt-10 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Fill Your Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full h-12 px-4 mt-2 border rounded-lg text-gray-600 focus:ring focus:ring-orange-200 focus:outline-none"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full h-12 px-4 mt-2 border rounded-lg text-gray-600 focus:ring focus:ring-orange-200 focus:outline-none"
              placeholder="Enter your last name"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full h-12 px-4 mt-2 border rounded-lg text-gray-600 focus:ring focus:ring-orange-200 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full h-12 px-4 mt-2 border rounded-lg text-gray-600 focus:ring focus:ring-orange-200 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="col-span-2 flex flex-col">
            <label className="text-sm font-semibold text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full h-12 px-4 mt-2 border rounded-lg text-gray-600 focus:ring focus:ring-orange-200 focus:outline-none"
              placeholder="Enter your email address"
            />
          </div>
        </form>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button className="px-10 py-3 bg-orange-500 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-orange-600 focus:ring focus:ring-orange-200">
            Submit
          </button>
        </div>
      </div>

    
    </div>
    
  );
};

export default AstroRegForm;
