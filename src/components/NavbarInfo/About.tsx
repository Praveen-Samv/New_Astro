import React from "react";

import Footer from "../HomePages/Footer";

const About = () => {
  React.useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* About Us Header */}
      <div className="w-full h-48 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://image-resource.creatie.ai/145721118291381/145721118291383/66ea4685e864e08f190bd9ac09179cf6.jpg')" }}>
        <div className="text-white text-xl md:text-2xl font-medium flex items-center gap-4">
          
          <span className="text-4xl mt-16">About US</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto py-12 px-6 flex flex-col lg:flex-row gap-12 items-start">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img src="https://image-resource.creatie.ai/146256977394650/146256977394652/799f87b7b858138e22480b8d6fb642c1.png" alt="Astro" className="w-full max-w-sm" />
            <img src="https://image-resource.creatie.ai/146256977394650/146256977394652/707af02e68e6faf61f4bf2c2c92a4ea6.png" alt="Sun" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2" />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <p className="text-gray-800 text-lg  mt-20 leading-7">
            At Corp Astro, we specialize in leveraging the power of the cosmos to enhance your business success through astro-branding, astro staffing, and Vastu services. Led by renowned astrologers Dr. Tumul Raathi and Aanchal Rathi, we align your business strategies with astrological insights to boost profits, optimize sales, and improve employee dynamics. Our expert team provides personalized, holistic solutions that harmonize your brand, team, and workspace with cosmic energies, ensuring growth and prosperity. Partner with Corp Astro to unlock the celestial potential of your business.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-6 flex flex-col lg:flex-row gap-12 items-start">
        

        {/* Text section Tamual Rathi. */}
        <div className="group-39440 flex flex-col items-center gap-2 mt-10">
      {/* Section Heading */}
     
    </div>
        <div className="flex-1">
        <h2 className="text-[#C75807] text-[40px] font-bold leading-[24px] mb-6 mr-6 whitespace-nowrap text-center">
        Mr. Tamual Rathi
      </h2>

      {/* Underline */}
      <img
        src="https://image-resource.creatie.ai/146256977394650/146256977394652/dc645f8e9ad238de31610a43d734a52f.webp"
        className="w-[323px] h-[18px] object-cover ml-16 mb-4"
        alt="Underline"
      />
          <p className="text-gray-800 text-lg mt-26  leading-7">
          Based in Hyderabad, he is a young and modern Vedic Astrologer in India, known for his effective and unconventional approach. He excels as a consultant for corporate and business enterprises, using a scientific and practical methodology.
          His expertise includes Vedic Astrology, Numerology, Nameology, Commercial Vaastu, and Signature Analysis, combining these disciplines for problem-solving. Tech-savvy, well-traveled, and driven to guide others, he has a sharp, logical mind.
          With experience in both business and spiritual realms, he helps clients balance professional needs with spiritual values. He works with individuals seeking improvement and business owners creating successful, soul-centric enterprises.
          He sees astrology as a guiding science, not just predictive, believing a good astrologer can lead individuals to a better, more prosperous life.          </p>
        </div>
        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img 
              src="https://image-resource.creatie.ai/146256977394650/146256977394652/799f87b7b858138e22480b8d6fb642c1.png" 
              alt="Astro" 
              className="w-full max-w-sm mt-12 animate-spin" 
              style={{animation: 'spin 5s linear infinite'}}
            />
            <img src="https://image-resource.creatie.ai/145721118291381/145721118291383/2fe61fbdaadbdff1506609fcea528dfb.png" alt="Sun" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-6 flex flex-col lg:flex-row gap-12 items-start">

        {/* Image Section Anachal Rathi. */}
        <div className="flex-shrink-0">
        <h2 className="text-[#C75807] text-[40px] font-bold leading-[24px] mb-6 mr-6 whitespace-nowrap text-center">
        Mr. Anachal Rathi
      </h2>

      {/* Underline */}
      <img
        src="https://image-resource.creatie.ai/146256977394650/146256977394652/dc645f8e9ad238de31610a43d734a52f.webp"
        className="w-[323px] h-[18px] object-cover"
        alt="Underline"/>
          <div className="relative">
            <img 
              src="https://image-resource.creatie.ai/146256977394650/146256977394652/799f87b7b858138e22480b8d6fb642c1.png" 
              alt="Astro" 
              className="w-full max-w-sm mt-16 animate-spin" 
              style={{animation: 'spin 5s linear infinite'}}/>
            <img src="https://corpastro.com/wp-content/uploads/2024/08/Aanchal-Raathi-astro-1.png" alt="Sun" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <p className="text-gray-800 text-lg  mt-32 leading-7">
          Aanchal Rathi is a gifted Tarot Card Reader, Reiki Healer, and Feng Shui expert, renowned for her intuitive insights and healing 
          touch. With a deep understanding of the mystical arts, she helps individuals navigate their life's journey, offering clarity and 
          guidance through her tarot readings. As a Reiki healer, Aanchal harnesses universal energy to promote physical, emotional, and 
          spiritual well-being, creating a harmonious balance in her clients' lives. Her expertise in Feng Shui further enhances this 
          balance by optimizing the flow of energy in homes and workplaces, fostering environments that support prosperity, health, and happiness. Aanchal’s compassionate approach and profound wisdom make her a trusted guide for those seeking enlightenment, healing, and harmony.
          </p>
        </div>
      </div>
     

       {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
