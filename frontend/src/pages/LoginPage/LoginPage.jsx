import React, { useState } from "react";
import "./LoginPage.css";
import LoginComp from "../../components/LoginComp/LoginComp";
import banner from "../../assets/images/signup-login-banner.jpeg";
import SignupComp from "../../components/SignUpComp/SignupComp";
const LoginPage = () => {
  const [signup, setSignup] = useState(false);
  return (
    <div className="form-container">
      <div className="form-content">
        <img classname="form-img" height={"60vh"} src={banner}></img>
        <div className="form">
          {!signup ? (
            <div className="">
              <div className="form-headers">
              <h2>Login</h2>
              <span onClick={(()=>setSignup(true))}> 
                <h2>Sign Up</h2>
              </span>
              </div>
              <LoginComp />
            </div>
          ) : (
            <div className="">
              <div className="form-headers">
              <span onClick={(()=>{setSignup(false)})}>
                <h2>Login</h2>
              </span>
              <h2>Sign Up</h2>
              
              </div>
              <SignupComp />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
