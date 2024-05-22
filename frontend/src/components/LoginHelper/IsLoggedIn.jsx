import React from "react";
import { useAuth } from "./Authprovider.jsx";

const IsLoggedIn = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <button className="btn-primary">Log out</button>
      ) : (
        <button className="btn-primary">Login</button>
      )}
    </div>
  );
};

export default IsLoggedIn;
