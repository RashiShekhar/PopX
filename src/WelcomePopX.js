import React from "react";
import { useNavigate } from "react-router-dom";
import "./Assets/Style/WelcomePopX.css";

const WelcomePopX = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="welcome-card">
        <h1>Welcome to PopX</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
        <div className="button-container">
          <button className="start-button" onClick={() => navigate("/signup")}>
            <b>Create Account</b>
          </button>
          <button className="login-button1" onClick={() => navigate("/login")}>
            <b>Already Registered?Login</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopX;
