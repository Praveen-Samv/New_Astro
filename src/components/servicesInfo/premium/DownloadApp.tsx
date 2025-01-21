import React from "react";

const DownloadApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4 mt-16"> {/* Added mt-16 for margin-top */}
      {/* Container */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row h-[90vh] pt-12">
        {/* Smartphone Mockup */}
        <div className="flex-1 p-8 flex items-center justify-center bg-gray-50">
          <img
            src="https://c7.alamy.com/450v/2ceab9n/download-page-of-the-mobile-app-empty-screen-smartphone-for-you-app-download-buttons-vector-illustration-2ceab9n.jpg"
            alt="Smartphone Mockup"
            className="w-64 h-auto"
          />
        </div>

        {/* Download Section */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Download Our App
          </h1>
          <p className="text-gray-600 mb-6">
            Get the best experience by downloading our app. Available on both iOS
            and Android platforms.
          </p>

          {/* Download Buttons */}
          <div className="space-y-4">
            <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Download for iOS
            </button>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Download for Android
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;