import React from "react";
import Header from "../../components/Header/Header";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./HomePage.css";
import { Button } from "@mui/material";
import { FaBath, FaSearch } from "react-icons/fa";
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

  const listings = [
    {
      id: 1,
      title: "Luxury Villa",
      type: "Villa",
      area: 350,
      bedrooms: 4,
      bathrooms: 3,
      amenities: ["Swimming Pool", "Parking", "Wi-Fi"],
      description: "A luxurious villa with modern amenities.",
      contact: "John Doe",
      contactNumber: "1234567890",
    },
    {
      id: 2,
      title: "Residential Apartment",
      type: "Residential",
      area: 120,
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["Wi-Fi", "Parking"],
      description: "A cozy apartment in a great location.",
      contact: "Jane Smith",
      contactNumber: "0987654321",
    },
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
            
            {listings.map((listing) => (
              <div key={listing.id} className="card">
                <h3>{listing.title}</h3>
                <div className="row">
                  <p>
                    {" "}
                    <span>{listing.type}</span>
                  </p>
                  <p>
                    {" "}
                    <span>{listing.area} sqm</span>
                  </p>
                  <p>
                    <span>{listing.bedrooms}bhk</span>
                  </p>
                  <p>
                    <span>
                      {listing.bathrooms} <FaBath />
                    </span>
                  </p>
                </div>

                <p> {listing.amenities.join(" | ")}</p>

                <div className="row">
                  <p>{listing.contact}</p>
                  <p> {listing.contactNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
