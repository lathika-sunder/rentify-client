import React from "react";
import Header from "../../components/Header/Header";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./HomePage.css";
const HomePage = () => {
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
    <div>
      <div className="">
        <Header />
      </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
