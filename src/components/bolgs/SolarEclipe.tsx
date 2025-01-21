import React from 'react';
import Footer from '../HomePages/Footer';

const SolarEclipse: React.FC = () => {
  const zodiacEffects = [
    {
      sign: 'Aries',
      effect: 'The solar eclipse will energize your career sector. Expect new opportunities and a push toward your goals. This is a great time to take initiative and start new projects.',
      tip: 'Focus on leadership and assertiveness.',
    },
    {
      sign: 'Taurus',
      effect: 'This eclipse will bring transformation in your beliefs and long-term plans. Be open to new perspectives and consider revising your goals.',
      tip: 'Embrace change and explore new philosophies.',
    },
    {
      sign: 'Gemini',
      effect: 'Your financial sector is activated. Expect changes in shared resources or investments. This is a good time to review your budget and financial plans.',
      tip: 'Communicate openly about money matters.',
    },
    {
      sign: 'Cancer',
      effect: 'Relationships will be in focus. Partnerships may transform, bringing new beginnings or endings. Pay attention to emotional connections.',
      tip: 'Nurture your closest relationships.',
    },
    {
      sign: 'Leo',
      effect: 'Health and daily routines will be highlighted. Time to adopt healthier habits and streamline your schedule.',
      tip: 'Focus on self-care and organization.',
    },
    {
      sign: 'Virgo',
      effect: 'Creativity and romance are emphasized. Embrace new passions or projects that bring you joy.',
      tip: 'Express yourself creatively and emotionally.',
    },
    {
      sign: 'Libra',
      effect: 'Home and family matters will take center stage. Expect shifts in your living situation or family dynamics.',
      tip: 'Create harmony in your domestic life.',
    },
    {
      sign: 'Scorpio',
      effect: 'Communication and learning are highlighted. New ideas and connections will emerge, especially in your local community.',
      tip: 'Engage in meaningful conversations.',
    },
    {
      sign: 'Sagittarius',
      effect: 'Your finances will be in focus. A shift in income or spending habits is likely. Plan for long-term stability.',
      tip: 'Be mindful of your financial decisions.',
    },
    {
      sign: 'Capricorn',
      effect: 'The eclipse will activate your personal identity. Time for self-reflection and reinvention.',
      tip: 'Set clear intentions for personal growth.',
    },
    {
      sign: 'Aquarius',
      effect: 'Your subconscious mind will be highlighted. Pay attention to dreams and intuition for guidance.',
      tip: 'Spend time in meditation or journaling.',
    },
    {
      sign: 'Pisces',
      effect: 'Friendships and social networks will transform. New alliances may form, bringing fresh perspectives.',
      tip: 'Be open to new social connections.',
    },
  ];

  const eclipseImageUrl = 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1v5Zea.img?w=1280&h=720&m=4&q=39'; // Replace with your image URL

  return (

    <>
    <div className="min-h-screen bg-white text-gray-800 p-8 mt-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">
          Solar Eclipse 2023: How It Will Transform Your Zodiac Sign
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A solar eclipse is a powerful celestial event that symbolizes new beginnings and transformations. Astrologically, it can bring significant shifts in your life, depending on your zodiac sign. Here's a detailed guide on how the upcoming solar eclipse might impact you.
        </p>
      </div>

      {/* Centered Image */}
      <div className="flex justify-center mb-12 hover:scale-105 transition-transform duration-300">
        <img
          src={eclipseImageUrl}
          alt="Solar Eclipse"
          className="rounded-lg shadow-lg w-full max-w-2xl"
        />
      </div>

      {/* Zodiac Effects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {zodiacEffects.map(({ sign, effect, tip }) => (
          <div key={sign} className="bg-purple-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-purple-900 mb-4">{sign}</h2>
            <p className="text-gray-700 mb-4">{effect}</p>
            <p className="text-sm text-purple-700 font-medium">Tip: {tip}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">
          Want to Learn More?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Explore our in-depth astrology guides and personalized readings to uncover how the solar eclipse will influence your life.
        </p>
        {/* <button className="bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors">
          Discover Your Eclipse Reading
        </button> */}
      </div>

      {/* Footer */}
      {/* <footer className="text-center mt-12 text-gray-500">
        <p>© 2025 Astrology Insights. All rights reserved.</p>
      </footer> */}
      
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
};

export default SolarEclipse;