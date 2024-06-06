import React, { useState } from "react";
import "./SellProperty.css";
import {
  FaSwimmingPool,
  FaParking,
  FaWifi,
  FaCouch,
  FaTree,
} from "react-icons/fa";
import banner from "../../assets/images/client.png";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { MdElevator } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { RoughNotation } from "react-rough-notation";

const SellProperty = () => {
  const [propertyData, setPropertyData] = useState({
    title: "",
    type: "villa",
    image: null,
    area: "",
    address: "",
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
    price: "",
    contactNumber: "",
    contactPerson: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setPropertyData((prevData) => ({
        ...prevData,
        amenities: {
          ...prevData.amenities,
          [name]: checked,
        },
      }));
    } else {
      setPropertyData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (event) => {
    setPropertyData({ ...propertyData, image: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", propertyData.title);
    formData.append("type", propertyData.type);
    formData.append("area", propertyData.area);
    formData.append("address", propertyData.address);
    formData.append("bedrooms", propertyData.bedrooms);
    formData.append("bathrooms", propertyData.bathrooms);
    formData.append("amenities", propertyData.amenities);
    formData.append("image", propertyData.image);
    formData.append("description", propertyData.description);
    formData.append("price", propertyData.price);
    formData.append("contact", propertyData.contactPerson);
    formData.append("contactNumber", propertyData.contactNumber);

    try {
      const response = await axios.post(
        "http://localhost:4040/api/v1/rentify/listings/postListing",
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Listing submitted successfully!", response.data);

      toast.success("Listing submission successful");
    } catch (error) {
      console.error("Error submitting listing:", error.response.data.error);
    }
  };

  return (
    <div className="sell-property">
      <ToastContainer />
      <div className="title">
      <h1>Sell <RoughNotation show={true} ><span style={{color:"var(--secondary-color)"}}>Now</span></RoughNotation></h1>
      </div>
      <div className="sell-property-container">
        
        <div className="hero-content">

          <img className="hero-img" src={banner} alt="Banner" />
        </div>
        <form className="sell-property-form" onSubmit={handleSubmit}>
          <div className="row">
          <div className="column">
            <div className="form-group">
             
                <label>
                  <p>Property Title</p>
                </label>
                <input
                  type="text"
                  name="title"
                  value={propertyData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <p>Property Type</p>
                </label>
                <select
                  name="type"
                  value={propertyData.type}
                  onChange={handleChange}
                >
                  <option value="villa">Villa</option>
                  <option value="residential">Residential</option>
                  <option value="gated-community">Gated Community</option>
                  <option value="individual-house">Individual House</option>
                  <option value="flats">Flats</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  <p>Address</p>
                </label>
                <input
                  type="text"
                  name="address"
                  value={propertyData.address}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <p>Price</p>
                </label>
                <input
                  type="number"
                  name="price"
                  value={propertyData.price}
                  onChange={handleChange}
                />
              </div>
             </div>
             <div className="column">
             
              <div className="form-group">
                <label>
                  <p>No of Bedrooms</p>
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value={propertyData.bedrooms}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
            
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
                      onChange={handleChange}
                    />
                    <FaSwimmingPool /> Swimming Pool
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="parking"
                      checked={propertyData.amenities.parking}
                      onChange={handleChange}
                    />
                    <FaParking /> Parking
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="wifi"
                      checked={propertyData.amenities.wifi}
                      onChange={handleChange}
                    />
                    <FaWifi /> Wi-Fi
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="garden"
                      checked={propertyData.amenities.garden}
                      onChange={handleChange}
                    />
                    <FaTree /> Garden
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="lift"
                      checked={propertyData.amenities.lift}
                      onChange={handleChange}
                    />
                    <MdElevator /> Lift
                  </label>
                </div>
                
              </div>
              <div className="form-group">
                <label>
                  <p>Contact Person</p>
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={propertyData.contactPerson}
                  onChange={handleChange}
                />
              </div>
             </div>
             <div className="column">
              <div className="form-group">
                <label>
                  <p>House Description</p>
                </label>
                <textarea
                  rows="6.8"
                  style={{ height: "17.5vh" }}
                  name="description"
                  value={propertyData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              
             
              <div className="form-group">
                <label>
                  <p>Contact Number</p>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={propertyData.contactNumber}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label>
                  <p>Image</p>
                </label>
                <span></span>
                <input
                className="img-input"
                  type="file"
                  name="image"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
          <div className="button">
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
