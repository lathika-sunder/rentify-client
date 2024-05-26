import React from "react";
import "./SellerDashboard.css";
import { FaBath, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaNoteSticky } from "react-icons/fa6";

const SellerDashboard = () => {
  const enquiries = [
    {
      id: 1,
      propertyTitle: "Luxury Villa",
      buyerName: "John Doe",
      message: "Interested in more details about the villa.",
      contact: "john@example.com",
    },
    {
      id: 2,
      propertyTitle: "Residential Apartment",
      buyerName: "Jane Smith",
      message: "What is the final price?",
      contact: "jane@example.com",
    },
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
    <div className="seller-dashboard">
      <div className="title row">
        <h1>
          Welcome, <span>Lathika</span>
        </h1>
        <div className="btn">
          <Link to="/sell-property">
            {" "}
            <button className="btn-secondary"> Sell Now</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="property-enquiries">
            <div className="row box-heading">
              <h2>Enquiries</h2>
              <FaHeart />
            </div>
            {enquiries.map((enquiry) => (
              <div key={enquiry.id} className="property-enquiry-item">
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
              <FaNoteSticky />
            </div>
            {listings.map((listing) => (
              <div key={listing.id} className="my-listing-item">
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

export default SellerDashboard;
