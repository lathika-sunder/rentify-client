import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  FaBath,
  FaCar,
  FaHeart,
  FaSearch,
  FaSwimmingPool,
  FaWifi,
} from "react-icons/fa";
import { useQuery } from "react-query";
import axios from "axios";

import { annotate } from "https://unpkg.com/rough-notation?module";

import "./HomePage.css";
import PreLoader from "../../components/PreLoader/PreLoader";
import { IoBed } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { MdElevator } from "react-icons/md";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { RoughNotation } from "react-rough-notation";
import CityCategoriesComp from "../../components/CityCategories/CityCategoriesComp";
import AboutComp from "../../components/AboutComp/AboutComp";
import FooterComp from "../../components/FooterComp/FooterComp";

const HomePage = () => {
  const headingRef = useRef(null);
  const iconStyle = {
    paddingLeft: "3vh",
  };
  useEffect(() => {
    if (headingRef.current) {
      const annotation = annotate(headingRef.current, {
        type: "highlight",
        color: "yellow",
        padding: 15,
      });
      annotation.show();
    }
  }, []);

  const [page, setPage] = useState(1);

  const {
    data: listings,
    isLoading,
    isError,
  } = useQuery(["listings", page], async () => {
    const response = await axios.get(
      `http://localhost:4040/api/v1/rentify/listings/getListingsPerPage?page=${page}&limit=8`
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

  const handleNext = () => {
    if (page < 40) setPage(page + 1);
  };
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
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
        <div className="">
          <div className="hero-container">
           
            <div className="hero-text">
              <h1>
                One stop for{" "}
                <RoughNotation show={true} brackets={true}>
                  renting
                </RoughNotation>{" "}
                a perfect property
              </h1>

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
                renderInput={(params) => (
                  <TextField {...params} label="Cities" />
                )}
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
        </div>
        <div className="circle"></div>
        <div className="recent-properties">
          <div className="row container-head">
            <div className="circle"></div>
            <button onClick={handlePrevious} className="arrow-btn">
              <GiPreviousButton />
            </button>
            <RoughNotation
              type="highlight"
              show={true}
              color="rgba(166, 205, 237, 0.4)"
            >
              <h1>
                <i>Recently Added</i>
              </h1>
            </RoughNotation>
            <button onClick={handleNext} className="arrow-btn">
              <GiNextButton />
            </button>
          </div>
          <div className="cards-container">
            {listings.map((listing) => (
              <div key={listing._id} className="card">
                <div className="">
                  <img
                    className="listing-img"
                    src={listing.image}
                    alt="Property"
                  />
                  <div className="row ">
                    <h3>{listing.title}</h3>
                    <h4>${listing.price}</h4>
                  </div>
                  <div className=" listing-details">
                    <div className="row">
                      <p>
                        <span>{listing.type}</span>
                      </p>
                      <p>
                        <span>
                          {listing.area} m<sup>2</sup>
                        </span>
                      </p>
                    </div>
                    <div className="row">
                      <p>
                        <span>
                          {listing.bedrooms} <IoBed />
                        </span>
                      </p>
                      <p>
                        <span>
                          {listing.bathrooms} <FaBath />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <p className="listing-amenities">
                    {listing.amenities.map((amenity, index) => {
                      if (amenity === "swimmingPool")
                        return <FaSwimmingPool key={index} />;
                      if (amenity === "wifi") return <FaWifi key={index} />;
                      if (amenity === "garden") return <PiPlant key={index} />;
                      if (amenity === "parking") return <FaCar key={index} />;
                      if (amenity === "lift") return <MdElevator key={index} />;
                      return null;
                    })}
                  </p>
                  <button
                    className="like-button"
                    onClick={() => storeLike(listing._id)}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
        
        <CityCategoriesComp/>
        <AboutComp/>
        <FooterComp/>
      </div>
    </div>
  );
};

export default HomePage;
