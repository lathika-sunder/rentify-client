import React from "react";
import { useAuth } from "./Authprovider.jsx";

const IsLoggedIn = ({children}) => {
  const { isLoggedIn } = useAuth();


  return (
    <div>
      {isLoggedIn && (
        children
      )}
    </div>
  );
};

export default IsLoggedIn;
