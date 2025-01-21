import React from 'react';
import Footer from '../HomePages/Footer';

const CarrerInfo: React.FC = () => {
  const horoscopeImageUrl = 'https://avatars.mds.yandex.net/i?id=5d4e3ab968fc5e1ebe0b4b2d3dbd01745e3b01ad-8209833-images-thumbs&n=13'; // Replace with your image URL

  return (
    <>
    <div className="min-h-screen bg-white text-gray-800 p-8 mt-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">
          Career and Love Horoscopes: What the Stars Say
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The alignment of the stars and planets can have a profound impact on your career and love life. Here’s a detailed look at what the cosmos has in store for you this month.
        </p>
      </div>

      {/* Centered Image */}
      <div className="flex justify-center mb-12">
        <img
          src={horoscopeImageUrl}
          alt="Astrology"
          className="rounded-lg shadow-lg w-full max-w-2xl"
        />
      </div>

      {/* Career Horoscope Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Career Horoscope</h2>
        <p className="text-gray-700 mb-4">
          This month, the stars are aligning to bring new opportunities and challenges in your professional life. Whether you're seeking a promotion, starting a new job, or launching a business, the cosmic energy is on your side.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>**New Opportunities**: Be on the lookout for unexpected job offers or projects that align with your passions.</li>
          <li>**Networking**: Your social skills will shine, making it the perfect time to connect with influential people in your industry.</li>
          <li>**Work-Life Balance**: The stars remind you to prioritize self-care and avoid burnout.</li>
          <li>**Leadership**: Step up and take charge of situations. Your confidence will inspire others.</li>
        </ul>
      </div>

      {/* Love Horoscope Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Love Horoscope</h2>
        <p className="text-gray-700 mb-4">
          Love is in the air this month! Whether you're single or in a relationship, the stars are bringing positive energy to your romantic life. Here’s what you need to know:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>**New Connections**: Singles may meet someone special through friends or social events.</li>
          <li>**Deeper Bonds**: Couples will experience a stronger emotional connection. Plan a romantic date to celebrate your love.</li>
          <li>**Communication**: Open and honest conversations will resolve any misunderstandings.</li>
          <li>**Self-Love**: Don’t forget to nurture your relationship with yourself. Confidence is your best accessory.</li>
        </ul>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">
          Want to Dive Deeper?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Explore personalized horoscopes and detailed astrological readings to uncover what the stars have in store for you.
        </p>
        {/* <button className="bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors">
          Get Your Personalized Reading
        </button> */}
      </div>

      {/* Footer */}
      {/* <footer className="text-center mt-12 text-gray-500">
        <p>© 2025 Astrology Insights. All rights reserved.</p>
      </footer> */}
      
    </div>
    <Footer />
    </>
  );
};

export default CarrerInfo;