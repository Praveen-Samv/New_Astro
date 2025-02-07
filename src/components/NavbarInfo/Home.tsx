import AstroBusinessTitle from "../HomePages/AstroBusinessTitle";
import AstroPremium from "../HomePages/AstroPremium";
import AstroTitle from "../HomePages/AstroTitle";
import AstroBusinessTrust from "../HomePages/AstroBusinessTrust";
import AstroBusinessCards from "../HomePages/AstroBusniessCards";
import AstroResource from "../HomePages/AstroResource";
import AstroResourceCards from "../HomePages/AstroResourceCards";
import AstroTransform from "../HomePages/AstroTransform";
import ClientSuccessCards from "../HomePages/ClientSuccesCards";
import ClienSuccessTitle from "../HomePages/ClientSuccesTitle";
import InfoAstro from "../HomePages/InfoAstro";
import Hero from "../HomePages/Hero";
import FreeTitle from "../HomePages/FreeTitle";
import FreeServiceCards from "../HomePages/FreeServiceCards";




function Home() {



    return (
        <div className="flex flex-col space-y-12">
        <Hero />
        <InfoAstro />
        <FreeTitle />
        <FreeServiceCards />
        <AstroTitle />
        <AstroPremium />
        <AstroBusinessTitle />
        <AstroBusinessCards />
        <AstroBusinessTrust />
        <ClienSuccessTitle />
        <ClientSuccessCards />
        <AstroResource />
        <AstroResourceCards />
        <AstroTransform />

      </div>
    );
  }

  export default Home;


// import React from 'react';
// import AstroBusinessTitle from "../HomePages/AstroBusinessTitle";
// import AstroPremium from "../HomePages/AstroPremium";
// import AstroTitle from "../HomePages/AstroTitle";
// import AstroBusinessTrust from "../HomePages/AstroBusinessTrust";
// import AstroBusinessCards from "../HomePages/AstroBusniessCards";
// import AstroResource from "../HomePages/AstroResource";
// import AstroResourceCards from "../HomePages/AstroResourceCards";
// import AstroTransform from "../HomePages/AstroTransform";
// import ClientSuccessCards from "../HomePages/ClientSuccesCards";
// import ClienSuccessTitle from "../HomePages/ClientSuccesTitle";
// import InfoAstro from "../HomePages/InfoAstro";
// import Hero from "../HomePages/Hero";
// import FreeTitle from "../HomePages/FreeTitle";
// import FreeServiceCards from "../HomePages/FreeServiceCards";


// const Home = () => {
//   const sections = [
//     { Component: Hero, spacing: 'mb-8' },
//     { Component: InfoAstro, spacing: 'mb-6' },
//     { Component: FreeTitle, spacing: 'mb-4' },
//     { Component: FreeServiceCards, spacing: 'mb-8' },
//     { Component: AstroTitle, spacing: 'mb-4' },
//     { Component: AstroPremium, spacing: 'mb-8' },
//     { Component: AstroBusinessTitle, spacing: 'mb-4' },
//     { Component: AstroBusinessCards, spacing: 'mb-8' },
//     { Component: AstroBusinessTrust, spacing: 'mb-8' },
//     { Component: ClienSuccessTitle, spacing: 'mb-4' },
//     { Component: ClientSuccessCards, spacing: 'mb-8' },
//     { Component: AstroResource, spacing: 'mb-4' },
//     { Component: AstroResourceCards, spacing: 'mb-8' },
//     { Component: AstroTransform, spacing: 'mb-8' }
//   ];

//   return (
//     <div className="flex flex-col px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
//       {sections.map(({ Component, spacing }, index) => (
//         <div key={index} className={`w-full ${spacing}`}>
//           <Component />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;




