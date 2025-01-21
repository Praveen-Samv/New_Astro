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
import FreeServiceCards from "./FreeServiceCards";

// import supabase from "../config/supabaseClient";
// import { useNavigate } from 'react-router-dom';
// import React, {useEffect} from 'react';


function Home() {

  // const navigate = useNavigate();
  // useEffect(() => {
  //   // Check if the user is logged in
  //   const checkUser = async () => {
  //     const { data: { user } } = await supabase.auth.getUser();
  //     if (!user) {
  //       navigate('/login'); // Redirect to login if not authenticated
  //     }
  //   };

  //   checkUser();
  // }, [navigate]);

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

// function useEffect(arg0: () => void, arg1: any[]) {
//   throw new Error("Function not implemented.");
// }
  