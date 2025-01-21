import React from 'react';
import Footer from '../HomePages/Footer';

const AstrologyShift: React.FC = () => {
  return (

    <>
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 mt-24">
      {/* Title */}
      <h1 className="text-5xl font-bold text-orange-600 mb-8 text-center">
        Major Astrological Shifts in 2025
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl">
        2025 is set to be a transformative year in astrology, with significant planetary movements and alignments that will impact our lives. From rare conjunctions to powerful retrogrades, here's what you need to know.
      </p>

      {/* Image */}
      <div className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img
          src="https://static1.smi2.net/img/1200x630/7917851.jpeg"
          alt="Astrological Shifts 2025"
          className="w-full h-auto"
        />
      </div>

      {/* Educational Content */}
      <div className="mt-12 max-w-4xl space-y-8">
        <h2 className="text-3xl font-semibold text-blue-800">
          Pluto Enters Aquarius
        </h2>
        <p className="text-lg text-gray-700">
          In March 2025, Pluto will move into Aquarius, marking the beginning of a transformative era. This shift will bring profound changes in technology, society, and collective consciousness. Aquarius, ruled by Uranus, is associated with innovation and revolution, so expect breakthroughs in science, communication, and social structures.
        </p>

        <h2 className="text-3xl font-semibold text-blue-800 mt-8">
          Saturn-Neptune Conjunction
        </h2>
        <p className="text-lg text-gray-700">
          A rare Saturn-Neptune conjunction will occur in June 2025, blending the energies of structure and dreams. This alignment encourages us to balance practicality with imagination, making it an ideal time for creative projects and long-term planning. However, it may also bring challenges in distinguishing reality from illusion.
        </p>

        <h2 className="text-3xl font-semibold text-blue-800 mt-8">
          Jupiter in Gemini
        </h2>
        <p className="text-lg text-gray-700">
          Jupiter's entry into Gemini in September 2025 will expand communication and intellectual pursuits. This transit favors learning, networking, and exploring new ideas. It's a great time to start a course, write a book, or engage in meaningful conversations.
        </p>

        <h2 className="text-3xl font-semibold text-blue-800 mt-8">
          Lunar Nodes Shift
        </h2>
        <p className="text-lg text-gray-700">
          The North and South Nodes will move into Aries and Libra, respectively, in October 2025. This shift emphasizes the balance between self (Aries) and relationships (Libra). It's a time to focus on personal growth while nurturing partnerships and collaborations.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-blue-50 p-8 rounded-2xl text-center max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Stay Prepared for 2025!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Astrological shifts can influence our lives in profound ways. Stay informed and prepared by following our monthly astrology updates.
        </p>
        {/* <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300">
          Subscribe Now
        </button> */}
      </div>

      {/* Footer */}
      {/* <footer className="mt-16 text-sm text-gray-500">
        © 2025 AstroInsights. All rights reserved.
      </footer> */}
      
    </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AstrologyShift;