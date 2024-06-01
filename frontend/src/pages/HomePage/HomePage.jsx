import React from "react";
import Header from "../../components/Header/Header";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FaBath, FaSearch } from "react-icons/fa";
import { useQuery } from "react-query";
import axios from "axios";

import "./HomePage.css";
import PreLoader from "../../components/PreLoader/PreLoader";

const HomePage = () => {
  const iconStyle = {
    paddingLeft: "3vh",
  };

  // React Query: Fetch listings data
  const {
    data: listings,
    isLoading,
    isError,
  } = useQuery("listings", async () => {
    const response = await axios.get(
      "http://localhost:4040/api/v1/rentify/listings/getListings"
    );
    return response.data;
  });

  const storeLike = async (listingId) => {
    try {
      await axios.post(
        "http://localhost:4040/api/v1/rentify/listings/postLike",
        { listingId },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log("Liked successfully!");
    } catch (error) {
      console.error("Error liking the listing:", error);
    }
  };
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

  if (isLoading) return <PreLoader />;

  if (isError) return <p>Error fetching listings...</p>;

  return (
    <div className="home-page">
      <div className="">
        <div className="hero-container">
          <div className="hero-text">
            <h1>One stop for renting a perfect property</h1>
            <p>
              Find your perfect property in your budget. We are leading real
              estate agents. Pick the right choice with us.
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
              options={["Residential", "Commercial"]}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Property Type" />
              )}
            />
          </div>
          <div className="buttons">
            <button className="btn-primary">
              Find Now <FaSearch style={iconStyle} />
            </button>
          </div>
        </div>
        <div className="recent-properties">
          <h1>Recently Added</h1>
          <div className="cards-container">
            {listings.map((listing) => (
              <div key={listing._id} className="card">
                
                <div className="">
                <h3>{listing.title}</h3>
                <div className="row">
                  <p>
                    <span>{listing.type}</span>
                  </p>
                  <p>
                    <span>{listing.area} sqm</span>
                  </p>
                  <p>
                    <span>{listing.bedrooms} bhk</span>
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
                <div className="btn">
                  <button
                    className="btn-primary"
                    onClick={()=>storeLike(listing._id)}
                  >
                    I'm Interested
                  </button>
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
