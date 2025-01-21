import React, { useEffect } from "react";

const AstroDiagonstic: React.FC = () => {
  useEffect(() => {
    // Initialize logic if needed
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Main content area */}
      <div className="flex-grow bg-white">
        {/* Services Section */}
        <div className="bg-cover bg-center py-20 px-12" style={{ backgroundImage: `url('https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg')` }}>
          <div className="text-center text-white text-4xl font-semibold">Services</div>
          <div className="flex justify-center items-center gap-5 mt-4 text-white">
            <span className="text-lg font-semibold">Home</span>
            <span>&#62;</span>
            <span className="text-lg font-semibold">Services</span>
            <span>&#62;</span>
            <span className="text-lg font-semibold">Astro Branding</span>
            <span>&#62;</span>
            <span className="text-lg font-semibold">Business Astro Diagnostics</span>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-2 gap-10 w-3/4">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">First Name *</label>
              <input type="text" className="border rounded-md p-2 mt-2" defaultValue="A.harshavardhan" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Last Name *</label>
              <input type="text" className="border rounded-md p-2 mt-2" defaultValue="A.harshavardhan" />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="font-semibold text-gray-700">Phone Number *</label>
              <input type="text" className="border rounded-md p-2 mt-2" defaultValue="9618037020" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">D-O-B *</label>
              <input type="text" className="border rounded-md p-2 mt-2" defaultValue="12-07-2002" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Email *</label>
              <input type="email" className="border rounded-md p-2 mt-2" defaultValue="Harsha@gmail.com" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md">Submit</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <img src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png" alt="Logo" className="h-12" />
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email to get the latest news..."
                className="border p-2 rounded-md w-64"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Search</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <h4 className="font-bold text-gray-700 mb-4">Column One</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Twenty One</li>
                <li className="text-gray-600">Thirty Two</li>
                <li className="text-gray-600">Forty Three</li>
                <li className="text-gray-600">Fifty Four</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-4">Column Two</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Sixty Five</li>
                <li className="text-gray-600">Seventy Six</li>
                <li className="text-gray-600">Eighty Seven</li>
                <li className="text-gray-600">Ninety Eight</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-4">Column Three</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">One Two</li>
                <li className="text-gray-600">Three Four</li>
                <li className="text-gray-600">Five Six</li>
                <li className="text-gray-600">Seven Eight</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-4">Column Four</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Join Us</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t pt-4 text-center text-gray-600">
            Corpastro © 2025. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AstroDiagonstic;
