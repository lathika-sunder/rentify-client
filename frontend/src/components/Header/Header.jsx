import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthHelper/Authprovider";

const Header = () => {
  const [isSeller, setIsSeller] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    if (userRole === "seller") {
      setIsSeller(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const iconStyle = {
    fontSize: "3vh",
    color: "#1E1E1EC8",
    marginRight:"5vh"
  };

  return (
    <div className="header">
      <img className="logo-img" src={logo} alt="Logo" />
      <div className="header-content">
        <ul>
          <li>
            {isSeller ? (
              <div>
                <Link to="/dashboard/seller">
                  <FaHome style={iconStyle} />
                </Link>
                <Link to="/sell-property">
                  <button className="btn-secondary">Sell Property</button>
                </Link>
              </div>
            ) : (
              <Link to="/">
                <FaHome style={iconStyle} />
              </Link>
            )}
          </li>
          <li>
            {isLoggedIn ? (
              <button className="btn-primary" onClick={handleLogout}>
                Log Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn-primary">Login</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
