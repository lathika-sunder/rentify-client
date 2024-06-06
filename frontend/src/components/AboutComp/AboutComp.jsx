import React from "react";
import "./AboutComp.css";
import { RoughNotation } from "react-rough-notation";

const AboutComp = () => {
  return (
    <div className="about">
      <div className="circle"></div>
      <div className="row">
        
          <div className="text-container">
            <RoughNotation type="highlight" show={true} color="rgba(166, 205, 237, 0.4)"><h1>Discover Your Dream Home with Us</h1></RoughNotation> 
            <p>Rentify is your ultimate destination for finding the perfect property. Whether you're looking to buy or rent, our app offers a seamless experience with detailed listings and personalized recommendations. Our advanced search filters help you narrow down your options to find exactly what you're looking for. With Rentify, you can connect directly with property owners and schedule viewings at your convenience. Start your journey towards your dream home with Rentify today!</p>
          </div>
        
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bJx7_1rWC6U"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
