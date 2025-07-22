import React from "react";
import Hero from "../Components/Hero";
import ConsultingLandingPage from "../Components/ConsultingLandingPage";
import Testimonials from "../Components/Testimonials";
import AboutUs from "../Components/AboutUs";
import TrustedBrand from "../Components/TrustedBrand";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <TrustedBrand />
      <Testimonials />
      <ConsultingLandingPage />
    </div>
  );
};

export default Home;
