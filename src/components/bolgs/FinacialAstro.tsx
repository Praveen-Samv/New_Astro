import React from 'react';
import Footer from '../HomePages/Footer';

const FinacialAstro: React.FC = () => {
  const astrologyFinanceImageUrl = 'https://avatars.mds.yandex.net/i?id=d72525ac728fd161d807a9f5c591897a314c1d0d-12636876-images-thumbs&n=13'; // Replace with your image URL

  return (
    <>
    <div className="min-h-screen bg-white text-gray-800 p-8 mt-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">
          Astrology and Finance: Predicting Stock Market Trends
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how planetary movements can influence stock market trends and guide your financial decisions. Learn how to align your investments with the stars for better outcomes.
        </p>
      </div>

      {/* Centered Image */}
      <div className="flex justify-center mb-12">
        <img
          src={astrologyFinanceImageUrl}
          alt="Astrology and Finance"
          className="rounded-lg shadow-lg w-full max-w-2xl"
        />
      </div>

      {/* Introduction Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">The Connection Between Astrology and Finance</h2>
        <p className="text-gray-700 mb-4">
          Astrology has been used for centuries to predict events and trends, including those in the financial world. By analyzing planetary movements, astrologers can identify patterns that may influence market behavior and individual financial decisions.
        </p>
        <p className="text-gray-700">
          While astrology should not replace traditional financial analysis, it can provide unique insights and help you make more informed decisions.
        </p>
      </div>

      {/* How Planetary Movements Affect the Stock Market */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">How Planetary Movements Affect the Stock Market</h2>
        <p className="text-gray-700 mb-4">
          Certain planetary alignments are believed to have a significant impact on market trends. Here’s how:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>**Mercury Retrograde**: Known for causing communication breakdowns, Mercury retrograde can lead to market volatility and unclear trends. Avoid making impulsive financial decisions during this time.</li>
          <li>**Venus Transits**: Venus governs wealth and luxury. Positive Venus transits can boost consumer confidence and spending, benefiting retail and luxury sectors.</li>
          <li>**Saturn Transits**: Saturn represents discipline and structure. Its transits often coincide with market corrections and long-term investments.</li>
          <li>**Jupiter Expansions**: Jupiter is associated with growth and abundance. Its favorable transits can lead to bullish markets and profitable opportunities.</li>
          <li>**Mars Energy**: Mars governs energy and aggression. Its transits can lead to sudden market movements, both positive and negative.</li>
        </ul>
      </div>

      {/* Tips for Aligning Financial Decisions with Astrology */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Tips for Aligning Financial Decisions with Astrology</h2>
        <p className="text-gray-700 mb-4">
          Here’s how you can use astrology to guide your financial decisions:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>**Track Planetary Transits**: Stay informed about major planetary movements and their potential impact on the market.</li>
          <li>**Avoid Mercury Retrograde**: Postpone signing contracts or making major investments during Mercury retrograde.</li>
          <li>**Leverage Jupiter’s Energy**: Invest in growth-oriented sectors during favorable Jupiter transits.</li>
          <li>**Be Cautious During Mars Transits**: Avoid risky investments during Mars transits, as they can lead to sudden losses.</li>
          <li>**Consult an Astrologer**: Work with a financial astrologer to create a personalized investment strategy based on your birth chart.</li>
        </ul>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">
          Ready to Explore Astrology and Finance?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Unlock the power of astrology to make smarter financial decisions. Get personalized insights and guidance tailored to your birth chart.
        </p>
        
      </div>

      {/* Footer */}
      {/* <footer className="text-center mt-12 text-gray-500">
        <p>© 2025 Astrology Insights. All rights reserved.</p>
      </footer> */}
      
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
};

export default FinacialAstro;