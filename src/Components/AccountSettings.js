import React from "react";
import "../Assets/Style/AccountSettings.css";

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <div className="content">
        <div className="profile">
          <img src="avt.avif" alt="Profile" className="avatar" />
          <div className="user-info">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </p>
          </div>
        </div>
        <div className="dashed-line"></div>

        <div className="spacer"></div>

        <div className="dashed-line"></div>
      </div>
    </div>
  );
};

export default AccountSettings;
