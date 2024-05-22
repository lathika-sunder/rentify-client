import React from "react";
import Header from "../../components/Header/Header";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./HomePage.css";
import { Button } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const HomePage = () => {

  const iconStyle={
    paddingLeft:"3vh"

  }
  const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
  ];

  return (
    <div className="home-page">
      
      <div className="">
        <div className="hero-container">
          <div className="hero-text">
            <h1>One stop for renting a perfect property</h1>
            <p>
              Find your perfect property in your budget . We are leading real
              estate agents. Pick the right choice with us
            </p>
          </div>
          <div className="search-container">
            <Autocomplete
              id="combo-box-demo"
              options={cities}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Cities" />}
              
            />
            <Autocomplete
              id="combo-box-demo"
              options={cities}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Property Type" />}
              
            />
          </div>
          <div className="buttons">
            <button className="btn-primary">Find Now    <FaSearch style={iconStyle}/></button>
          </div>

          
        </div>
        <div className="recent-properties">
          <h1>Recently Added</h1>
          <div className="cards-container">
            <div className="card">
              <div className="card-image"></div>
              <div className="card-text">
                <h2>Buy</h2>
                <p>Buy your dream home with us</p>
                <Link to="/buy">Learn More</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-image"></div>
              <div className="card-text">
                <h2>Buy</h2>
                <p>Buy your dream home with us</p>
                <Link to="/buy">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
