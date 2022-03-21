import React from "react";
import About from "templates/about/about";
import Hero from "templates/hero/hero";
import Offer from "templates/offer/offer";
import Team from "templates/team/team";
import Welcome from "templates/welcome/welcome";
import WhyUs from "templates/why-us/why-us";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyUs />
      <Offer />
      <About />
      <Team />
    </>
  );
};

export default MainPage;
