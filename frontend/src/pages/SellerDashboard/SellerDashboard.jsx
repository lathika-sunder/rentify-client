import React from "react";
import "./SellerDashboard.css";
import { FaBath, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { FaRegNoteSticky } from "react-icons/fa6";
import PreLoader from "../../components/PreLoader/PreLoader";

const SellerDashboard = () => {
  const fetchListings = async () => {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:4040/api/v1/rentify/listings/getSellerListings",
      {
        headers: {
          Authorization: token
        },
      }
    );
    return response.data;
  };

  const fetchEnquiries = async () => {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:4040/api/v1/rentify/listings/getEnquiries",
      {
        headers: {
          Authorization: token
        },
      }
    );
    return response.data;
  };

  const { data: listings, isLoading: listingsLoading, isError: listingsError } = useQuery("sellerListings", fetchListings);
  const { data: enquiries, isLoading: enquiriesLoading, isError: enquiriesError } = useQuery("enquiries", fetchEnquiries);

  if (listingsLoading || enquiriesLoading) return <PreLoader/>
  if (listingsError || enquiriesError) return <p>Error fetching data...</p>;

  return (
    <div className="seller-dashboard">
      <div className="title row">
        <h1>
          Welcome, <span>Lathika</span>
        </h1>
        {/* <div className="btn">
          <Link to="/sell-property">
            <button className="btn-secondary">Sell Now</button>
          </Link>
        </div> */}
      </div>
      <div className="row">
        <div className="column">
          <div className="property-enquiries">
            <div className="row box-heading">
              <h2>Enquiries</h2>
              <FaHeart />
            </div>
            {enquiries.map((enquiry) => (
              <div key={enquiry.propertyId} className="property-enquiry-item">
                <h3>{enquiry.propertyTitle}</h3>
                <div className="row">
                  <p>{enquiry.buyerName}</p>
                  <p>{enquiry.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="column">
          <div className="my-listings">
            <div className="row box-heading">
              <h2>My Listings</h2>
              <FaRegNoteSticky />
            </div>
            {listings.map((listing) => (
              <div key={listing.id} className="my-listing-item">
                <h3>{listing.title}</h3>
                <div className="row">
                  <p><span>{listing.type}</span></p>
                  <p><span>{listing.area} sqm</span></p>
                  <p><span>{listing.bedrooms}bhk</span></p>
                  <p><span>{listing.bathrooms} <FaBath /></span></p>
                </div>
                <p>{listing.amenities.join(" | ")}</p>
                <div className="row">
                  <p>{listing.contact}</p>
                  <p>{listing.contactNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
