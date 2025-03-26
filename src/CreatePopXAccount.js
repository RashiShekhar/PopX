import React, { useState } from "react";
import "./CreatePopXAccount.css";
import { useNavigate } from "react-router-dom";

const CreatePopXAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "Marry Deo",
    email: "marry@gmail.com",
    phone: "09867342516",
    password: "marry",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account Created:", formData);
  };

  return (
    <div className="account-container">
      <h2>
        Create Your <br />
        PopX Account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label style={{ color: "#8B5CF6" }}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="input-container">
          <label style={{ color: "#8B5CF6" }}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="input-container">
          <label style={{ color: "#8B5CF6" }}>Email address </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-container">
          <label style={{ color: "#8B5CF6" }}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter a strong password"
            required
          />
        </div>

        <div className="input-container">
          <label>Are you an Agency?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="submit-button"
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreatePopXAccount;
