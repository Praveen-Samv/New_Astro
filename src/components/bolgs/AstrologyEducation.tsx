import React from 'react';

import Footer from '../HomePages/Footer';

const AstrologyEducation: React.FC = () => {
  return (
    <>
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 mt-24">
      {/* Title */}
      <h1 className="text-5xl font-bold text-purple-800 mb-8 text-center">
        Unlocking the Secrets of Astrology
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl">
        Astrology is more than just horoscopes. It's a fascinating study of celestial bodies and their influence on human behavior and events. Dive into the world of zodiac signs, planets, and houses to understand yourself and the universe better.
      </p>

      {/* Image */}
      <div className="max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img
          src="https://i.ytimg.com/vi/WV6EMOK8sG4/maxresdefault.jpg"
          alt="Astrology Chart"
          className="w-full h-auto"
        />
      </div>

      {/* Educational Content */}
      <div className="mt-12 max-w-3xl space-y-6">
        <h2 className="text-3xl font-semibold text-purple-700">
          What is Astrology?
        </h2>
        <p className="text-lg text-gray-700">
          Astrology is an ancient practice that studies the movements and positions of celestial bodies, such as the sun, moon, planets, and stars, to understand their influence on human lives and natural events. It is divided into various branches, including natal astrology, mundane astrology, and electional astrology.
        </p>

        <h2 className="text-3xl font-semibold text-purple-700 mt-8">
          The Zodiac Signs
        </h2>
        <p className="text-lg text-gray-700">
          The zodiac is divided into 12 signs, each representing specific personality traits and characteristics. These signs are Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. Your sun sign, determined by your birth date, is the most commonly known aspect of astrology.
        </p>

        <h2 className="text-3xl font-semibold text-purple-700 mt-8">
          Planets and Their Meanings
        </h2>
        <p className="text-lg text-gray-700">
          In astrology, each planet represents a different aspect of life. For example:
          <ul className="list-disc list-inside mt-2">
            <li><strong>Sun:</strong> Self, identity, and vitality</li>
            <li><strong>Moon:</strong> Emotions, instincts, and subconscious</li>
            <li><strong>Mercury:</strong> Communication, intellect, and reasoning</li>
            <li><strong>Venus:</strong> Love, beauty, and relationships</li>
            <li><strong>Mars:</strong> Energy, passion, and drive</li>
          </ul>
        </p>
      </div>

      {/* Footer */}
      {/* <footer className="mt-16 text-sm text-gray-500">
        © 2023 Astrology Insights. All rights reserved.
      </footer> */}
      
    </div>
      <div>
          <Footer />
      </div>
    </>
  );
};

export default AstrologyEducation;