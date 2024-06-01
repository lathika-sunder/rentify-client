import React, { useState } from "react";
import "./SellProperty.css";
import {
  FaSwimmingPool,
  FaParking,
  FaWifi,
  FaCouch,
  FaTree,
} from "react-icons/fa";
import banner from "../../assets/images/banner2.jpg";
import axios from "axios";
import { MdElevator } from "react-icons/md";

const SellProperty = () => {
  const [propertyData, setPropertyData] = useState({
    title: "",
    type: "villa",
    image: null,
    area: "",
    bedrooms: "",
    bathrooms: "",
    amenities: {
      swimmingPool: false,
      parking: false,
      wifi: false,
      furnished: false,
      garden: false,
      lift: false,
    },
    description: "",
    price:"",
    contactNumber: "",
    contactPerson: "",
  });

  const handleTitleChange = (event) => {
    setPropertyData({ ...propertyData, title: event.target.value });
  };

  const handleTypeChange = (event) => {
    setPropertyData({ ...propertyData, type: event.target.value });
  };

  const handleImageChange = (event) => {
    setPropertyData({ ...propertyData, image: event.target.files[0] });
  };

  const handleAreaChange = (event) => {
    setPropertyData({ ...propertyData, area: event.target.value });
  };

  const handleBedroomsChange = (event) => {
    setPropertyData({ ...propertyData, bedrooms: event.target.value });
  };

  const handleBathroomsChange = (event) => {
    setPropertyData({ ...propertyData, bathrooms: event.target.value });
  };
  const handleAddressChange=(event)=>{
    setPropertyData({...propertyData,address:event.target.value})
  }
  const handleAmenitiesChange = (event) => {
    const { name, checked } = event.target;
    setPropertyData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        [name]: checked,
      },
    }));
  };

  const handleDescriptionChange = (event) => {
    setPropertyData({ ...propertyData, description: event.target.value });
  };

  const handleContactNumberChange = (event) => {
    setPropertyData({ ...propertyData, contactNumber: event.target.value });
  };

  const handleContactPersonChange = (event) => {
    setPropertyData({ ...propertyData, contactPerson: event.target.value });
  };

  const handlePriceChange=(event)=>{
    setPropertyData({ ...propertyData, price: event.target.value });
  }

  

  const handleSubmit = async (event) => {
    console.log(formData)
    event.preventDefault();

    const formData = {
      title:propertyData.title,
      type:propertyData.type,
      area:propertyData.area,
      address:propertyData.address,
      bedrooms:propertyData.bedrooms,
      bathrooms:propertyData.bathrooms,
      amenities:propertyData.amenities[0],
      description:propertyData.description,
      price:propertyData.price,
      contactNumber:propertyData.contactNumber,
      contact:propertyData.contactPerson,
    }
  
    console.log(formData)
    try {
      const response = await axios.post(
        "http://localhost:4040/api/v1/rentify/listings/postListing",
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          },
        }
      );

      // Handle success (redirect, toast message, etc.)
      console.log("Listing submitted successfully!", response.data);

      alert("Listng submission succesful")
      setPropertyData({
        title: "",
        type: "villa",
        image: null,
        area: "",
        address:"",
        bedrooms: "",
        bathrooms: "",
        price:"",
        amenities: {
          swimmingPool: false,
          parking: false,
          wifi: false,
          garden: false,
          lift: false,
        },
        description: "",
        contactNumber: "",
        contactPerson: "",
      });
    } catch (error) {
      console.error("Error submitting listing:",error.response.data.error);
      // Handle error (toast message, etc.)
    }
  };

  return (
    <div className="sell-property">
      <div className="sell-property-container">
        <div className="hero-content">
          <img className="hero-img" src={banner} alt="Banner" />
        </div>
        <form className="sell-property-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group">
              <div className="column">
                <label>
                  <p>Property Title</p>
                </label>
                <input
                  type="text"
                  name="title"
                  value={propertyData.title}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <p>Property Type</p>
                </label>
                <select
                  name="type"
                  value={propertyData.type}
                  onChange={handleTypeChange}
                >
                  <option value="villa">Villa</option>
                  <option value="residential">Residential</option>
                  <option value="gated-community">Gated Community</option>
                  <option value="individual-house">Individual House</option>
                  <option value="flats">Flats</option>
                  <option value="flats">Commercial</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  <p>Image</p>
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <p>Area (sqm)</p>
                </label>
                <input
                  type="number"
                  name="area"
                  value={propertyData.area}
                  onChange={handleAreaChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <p>Address</p>
                </label>
                <input
                  type="text"
                  name="area"
                  value={propertyData.address}
                  onChange={handleAddressChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <p>No of Bedrooms</p>
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value={propertyData.bedrooms}
                  onChange={handleBedroomsChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <p>No of Bathrooms</p>
                </label>
                <input
                  type="number"
                  name="bathrooms"
                  value={propertyData.bathrooms}
                  onChange={handleBathroomsChange}
                />
              </div>
            </div>
            <div className="column">
              <div className="form-group">
                <label>
                  <p>Amenities</p>
                </label>
                <div className="amenities">
                  <label>
                    <input
                      type="checkbox"
                      name="swimmingPool"
                      checked={propertyData.amenities.swimmingPool}
                      onChange={handleAmenitiesChange}
                    />
                    <FaSwimmingPool /> Swimming Pool
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="parking"
                      checked={propertyData.amenities.parking}
                      onChange={handleAmenitiesChange}
                    />
                    <FaParking /> Parking
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="wifi"
                      checked={propertyData.amenities.wifi}
                      onChange={handleAmenitiesChange}
                    />
                    <FaWifi /> Wi-Fi
                  </label>
                 
                  <label>
                    <input
                      type="checkbox"
                      name="garden"
                      checked={propertyData.amenities.garden}
                      onChange={handleAmenitiesChange}
                    />
                    <FaTree /> Garden
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="lift"
                      checked={propertyData.amenities.lift}
                      onChange={handleAmenitiesChange}
                    />
                    <MdElevator /> Lift
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>
                  <p>House Description</p>
                </label>
                <textarea
                  rows="6.8"
                  style={{height:"17.5vh"}}
                  
                  name="description"
                  value={propertyData.description}
                  onChange={handleDescriptionChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label>
                  <p>Price</p>
                </label>
                <input
                  type="number"
                  name="area"
                  value={propertyData.price}
                  onChange={handlePriceChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <p>Contact Number</p>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={propertyData.contactNumber}
                  onChange={handleContactNumberChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <p>Contact Person</p>
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={propertyData.contactPerson}
                  onChange={handleContactPersonChange}
                />
              </div>
            </div>
          </div>
          <div className="btn">
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellProperty;
