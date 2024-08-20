import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useState } from "react";

export default function Settings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState(""); // To display success or error message

  const handleUpdatePassword = () => {
    if (currentPassword === "" || newPassword === "" || confirmNewPassword === "") {
      setMessage("Please fill in all fields.");
    } else if (newPassword !== confirmNewPassword) {
      setMessage("New passwords do not match.");
    } else {
      // Perform password update logic here
      // You can make an API call to your backend to update the password

      // Assuming a successful update
      setMessage("Password updated successfully.");
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Current Password</label>
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <label>New Password</label>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label>Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit" onClick={handleUpdatePassword}>
            Update
          </button>
          {message && <div className="settingsMessage">{message}</div>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
