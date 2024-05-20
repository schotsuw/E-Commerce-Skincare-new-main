import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/new.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <div className="hero-hand-icon">
            <p>KOREAN</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>COLLECTIONS</p>
          <p>buy now</p>
        </div>
        <div className="hero-latest-btn">
          <div>SEE MORE</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
