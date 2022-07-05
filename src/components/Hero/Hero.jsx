import React from "react";
import Cards from "../Cards/Cards";
import Trip from "../Trip/Trip";
import planet from "../../assets/planeta_obezyan.png";

import "./HeroStyles.scss";

const Hero = () => {
  return (
    <div className="hero-screen">
      <div className="container hero-screen__container">
        <Trip />
        <Cards />
        <img src={planet} className="hero-screen__planet" alt="planet" />
      </div>
    </div>
  );
};

export default Hero;
