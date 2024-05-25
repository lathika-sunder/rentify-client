import React from "react";
import { useAuth } from "./Authprovider.jsx";
import { Link, useNavigate } from "react-router-dom";

const IsNotLoggedIn = ({children}) => {
  const { isLoggedIn } = useAuth();
  const navigate=useNavigate()
  return (
    <div>
      {!isLoggedIn &&(
        children)
      }
    </div>
  );
};

export default IsNotLoggedIn;
