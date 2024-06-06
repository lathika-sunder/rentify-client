import React from "react";
import "./CityCategoriesComp.css";
import client from "../../assets/images/client.png";
import { RoughNotation } from "react-rough-notation";
import chennai from "../../assets/images/chennai.png";
import bangalore from "../../assets/images/bangalore.png";
import mumbai from "../../assets/images/mumbai.png";
import hyderabad from "../../assets/images/hyderabad.png";

const CityCategoriesComp = () => {
  return (
    <div className="city-categories">
          <div className="circle-right"></div>
        
      <div className="row">
        <img className="banner-img" src={client}></img>
        <div className="content">
          <div className="hero-text">
            <h1>
              Search{" "}
              <RoughNotation type="box" show={true}>
                by City
              </RoughNotation>
            </h1>
          </div>
         
          <div className="cards-container">
            <div className="row">
              <div className="city-card">
                <img src={chennai} />
              </div>
              <div className="city-card">
                <img src={bangalore} />
              </div>
            </div>
            <div className="row">
              <div className="city-card">
                <img src={mumbai} />
              </div>
              <div className="city-card">
                <img src={hyderabad} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCategoriesComp;
