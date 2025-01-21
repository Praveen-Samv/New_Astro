import React from 'react';
import Footer from '../HomePages/Footer';

const Mercury: React.FC = () => {
  const mercuryImageUrl = 'https://static.life.ru/ip/unsafe/rs:fill:1200:/gravity:ce/q:100/czM6Ly9saWZlLXN0YXRpYy9wdWJsaWNhdGlvbnMvMjAyMy8xMi8xNC8xMjE5NTQ2MTEyNzI3LjIyMS53ZWJw '; // Replace with your image URL

  return (
    <>
    <div className="min-h-screen bg-white text-gray-800 p-8 mt-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">
          Mercury Retrograde Means for You
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Mercury retrograde is a phenomenon that often gets a bad reputation, but it’s not all doom and gloom. Learn what it means, how it affects you, and how to navigate it with ease.
        </p>
      </div>

      {/* Centered Image */}
      <div className="flex justify-center mb-12">
        <img
          src={mercuryImageUrl}
          alt="Mercury Retrograde"
          className="rounded-lg shadow-lg w-full max-w-2xl"
        />
      </div>

      {/* What is Mercury Retrograde? */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">What is Mercury Retrograde?</h2>
        <p className="text-gray-700 mb-4">
          Mercury retrograde occurs when the planet Mercury appears to move backward in its orbit from our perspective on Earth. While it’s an optical illusion, astrologically, it’s believed to influence communication, technology, and decision-making.
        </p>
        <p className="text-gray-700">
          This phenomenon happens three to four times a year, each lasting about three weeks. During this time, misunderstandings, delays, and technical glitches are more common.
        </p>
      </div>

      {/* How Does Mercury Retrograde Affect You? */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">How Does Mercury Retrograde Affect You?</h2>
        <p className="text-gray-700 mb-4">
          Mercury retrograde can impact various areas of your life, depending on your zodiac sign and personal circumstances. Here’s what you might experience:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>**Communication**: Misunderstandings and miscommunications are more likely. Double-check emails and conversations.</li>
          <li>**Technology**: Expect glitches, delays, or malfunctions with electronic devices. Back up your data regularly.</li>
          <li>**Travel**: Delays and cancellations are common. Plan ahead and allow extra time for your journeys.</li>
          <li>**Relationships**: Old friends or ex-partners may reappear. Reflect on past connections but avoid rushing into decisions.</li>
          <li>**Decision-Making**: Avoid signing contracts or making major decisions. Take time to review and reconsider.</li>
        </ul>
      </div>

      {/* Tips for Navigating Mercury Retrograde */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Tips for Navigating Mercury Retrograde</h2>
        <p className="text-gray-700 mb-4">
          While Mercury retrograde can be challenging, it’s also an opportunity for reflection and growth. Here’s how to make the most of it:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>**Slow Down**: Take your time with tasks and decisions. Rushing can lead to mistakes.</li>
          <li>**Review and Reflect**: Revisit old projects, relationships, or goals. This is a great time for introspection.</li>
          <li>**Backup Data**: Protect your important files by backing them up regularly.</li>
          <li>**Communicate Clearly**: Be patient and clear in your conversations to avoid misunderstandings.</li>
          <li>**Stay Flexible**: Expect the unexpected and adapt to changes with a positive mindset.</li>
        </ul>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">
          Want to Learn More?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Dive deeper into astrology and discover how planetary movements influence your life. Get personalized insights and guidance.
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
    <div className='max-w-screen-2xl '>
    <Footer />
</div>
    </>
  );
};

export default Mercury;