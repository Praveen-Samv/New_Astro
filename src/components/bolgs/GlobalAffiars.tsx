import React from 'react';
import Footer from '../HomePages/Footer';

const GlobalAffairs: React.FC = () => {
  const astrologyGlobalAffairsImageUrl = 'https://i.haberglobal.com.tr/storage/files/images/2024/02/19/shutterstock-2068173092-qova.jpg'; // Replace with your image URL

  return (

    <>
    <div className="min-h-screen bg-white text-gray-800 p-8 mt-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">
          Astrological Events and Their Influence on Global Affairs
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Astrology has long been used to understand and predict events on a global scale. Discover how planetary movements and astrological events shape world politics, economies, and cultural trends.
        </p>
      </div>

      {/* Centered Image */}
      <div className="flex justify-center mb-12">
        <img
          src={astrologyGlobalAffairsImageUrl}
          alt="Astrology and Global Affairs"
          className="rounded-lg shadow-lg w-full max-w-2xl"
        />
      </div>

      {/* Introduction Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">The Role of Astrology in Global Affairs</h2>
        <p className="text-gray-700 mb-4">
          Astrology provides a unique lens through which we can analyze global events. By examining the positions and movements of celestial bodies, astrologers can identify patterns that may influence political decisions, economic trends, and societal shifts.
        </p>
        <p className="text-gray-700">
          While astrology is not a replacement for traditional analysis, it offers valuable insights into the timing and nature of global events.
        </p>
      </div>

      {/* Key Astrological Events and Their Impact */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Key Astrological Events and Their Impact</h2>
        <p className="text-gray-700 mb-4">
          Certain astrological events are known to have a significant influence on global affairs. Here are some examples:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>**Eclipses**: Solar and lunar eclipses often coincide with major political changes, economic shifts, and natural disasters. They are seen as times of transformation and revelation.</li>
          <li>**Mercury Retrograde**: Known for causing communication breakdowns, Mercury retrograde can lead to diplomatic misunderstandings, technological failures, and market volatility.</li>
          <li>**Saturn-Pluto Conjunctions**: These rare alignments are associated with major structural changes, such as the rise and fall of governments, economic reforms, and social upheavals.</li>
          <li>**Jupiter-Saturn Conjunctions**: These events mark the beginning of new eras, influencing cultural, economic, and political trends for decades.</li>
          <li>**Mars Retrogrades**: Mars retrogrades can escalate conflicts, wars, and geopolitical tensions due to heightened aggression and impulsivity.</li>
        </ul>
      </div>

      {/* Historical Examples of Astrological Influence */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Historical Examples of Astrological Influence</h2>
        <p className="text-gray-700 mb-4">
          Throughout history, astrological events have coincided with significant global events. Here are a few notable examples:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>**The Fall of the Berlin Wall (1989)**: Coincided with a Saturn-Neptune conjunction, symbolizing the end of division and the rise of unity.</li>
          <li>**The 2008 Financial Crisis**: Occurred during a Saturn-Uranus opposition, reflecting tension between tradition and innovation in the financial sector.</li>
          <li>**The COVID-19 Pandemic (2020)**: Began during a Saturn-Pluto conjunction, representing a profound transformation of global systems.</li>
          <li>**The Arab Spring (2011)**: Aligned with a Uranus-Pluto square, symbolizing revolutionary change and the fight for freedom.</li>
        </ul>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">
          Want to Learn More About Astrology and Global Affairs?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Explore how astrology can provide insights into global trends and events. Get personalized readings and in-depth analyses tailored to your interests.
        </p>
        {/* <button className="bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors">
          Explore Astrology Readings
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

export default GlobalAffairs;