import React from "react";
import "./SellProperty.css";
import {
  FaSwimmingPool,
  FaParking,
  FaWifi,
  FaCouch,
  FaTree,
} from "react-icons/fa";
import banner from "../../assets/images/banner2.jpg";
import { FaElevator } from "react-icons/fa6";

const SellProperty = () => {
  return (
    <div className="sell-property">
      <div className="sell-property-container">
        <div className="hero-content">
          <img className="hero-img" src={banner} alt="Banner" />
        </div>
        <form className="sell-property-form">
          <div className="row">
            <div className="form-group">
              <div className="column">
                <label>
                  <p>Property Title</p>
                </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>
                  <p>Property Type</p>
                </label>
                <select>
                  <option value="villa">Villa</option>
                  <option value="residential">Residential</option>
                  <option value="gated-community">Gated Community</option>
                  <option value="individual-house">Individual House</option>
                  <option value="flats">Flats</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  <p>Image</p>
                </label>
                <input type="file" />
              </div>
              <div className="form-group">
                <label>
                  <p>Area (sqm)</p>
                </label>
                <input type="number" />
              </div>
              <div className="form-group">
                <label>
                  <p>No of Bedrooms</p>
                </label>
                <input type="number" />
              </div>
              <div className="form-group">
                <label>
                  <p>No of Bathrooms</p>
                </label>
                <input type="number" />
              </div>
            </div>
            <div className="column">
              <div className="form-group">
                <label>
                  <p>Amenities</p>
                </label>
                <div className="amenities">
                  <label>
                    <input type="checkbox" />
                    <FaSwimmingPool /> Swimming Pool
                  </label>
                  <label>
                    <input type="checkbox" />
                    <FaParking /> Parking
                  </label>
                  <label>
                    <input type="checkbox" />
                    <FaWifi /> Wi-Fi
                  </label>
                  <label>
                    <input type="checkbox" />
                    <FaCouch /> Furnished
                  </label>
                  <label>
                    <input type="checkbox" />
                    <FaTree /> Garden
                  </label>
                  <label>
                    <input type="checkbox" />
                    <FaElevator />  Lift
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>
                  <p>House Description</p>
                </label>
                <textarea rows="5"></textarea>
              </div>
              <div className="form-group">
                <label>
                  <p>Contact Number</p>
                </label>
                <input type="tel" />
              </div>
              <div className="form-group">
                <label>
                  <p>Contact Person</p>
                </label>
                <input type="text" />
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
