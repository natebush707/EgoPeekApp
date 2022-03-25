import React from "react";
import { useState } from "react";
import "./AccountSettings.css";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import Dropdown from "./Dropdown";
import useFetch from "../../hooks/useFetch";
import { TextInputStandard } from "../Misc/Input/TextFields";

const UserSettings = () => {
  const userID = window.localStorage.getItem("userID");
  const { data, isPending, error } = useFetch(`/api/v1/profiles/${userID}`);

  const SetBio = () => {};

  const [Game1, setGame1] = useState("Game1");
  const [Game2, setGame2] = useState("Game2");
  const [Game3, setGame3] = useState("Game3");

  const handleGame1Change = (event) => {
    setGame1(event.target.value);
  };

  const handleGame2Change = (event) => {
    setGame2(event.target.value);
  };

  const handleGame3Change = (event) => {
    setGame3(event.target.value);
  };

  return (
    <div className="usersettings">
      {/* where avatar and bio are rendered */}
      <div className="settings-left">
        <div className="avatar-container">
          <div className="avatar">{/* img src = x; */}</div>
          <div className="editavatar-btn">
            <EditIcon />
          </div>
        </div>
        <div className="edit-bio">
          <h2>Bio</h2>
          <div className="settings-bio">
            <TextInputStandard
              onChange={(props) => {
                SetBio(props.target.value);
              }}
              style={{ width: "100%" }}
              label="Enter Bio"
              multiline
              maxRows={8}
            />
          </div>
        </div>
      </div>
      {/* Where everything outside of avatar and bio is rendered */}
      <div className="settings-main">
        {/* top container with user info */}
        <div className="settings-info">
          <p>Name: {isPending ? "..." : data.user.username}</p>
          <p>Email: {isPending ? "..." : data.user.email}</p>
          <p>Change Password</p>
        </div>
        {/* favorites container */}
        <div className="edit-favorites">
          <h2>Edit Favorites</h2>
          <div className="select-favorites">
            <Dropdown
              options={[
                { id: 1, label: "Rocket League", value: "Rocket League" },
                { id: 2, label: "Valorant", value: "Valorant" },
                { id: 3, label: "CS:GO", value: "CS:GO" },
              ]}
              value={Game1}
              onChange={handleGame1Change}
            />
            <Dropdown
              options={[
                { id: 1, label: "Rocket League", value: "Rocket League" },
                { id: 2, label: "Valorant", value: "Valorant" },
                { id: 3, label: "CS:GO", value: "CS:GO" },
              ]}
              value={Game2}
              onChange={handleGame2Change}
            />
            <Dropdown
              options={[
                { id: 1, label: "Rocket League", value: "Rocket League" },
                { id: 2, label: "Valorant", value: "Valorant" },
                { id: 3, label: "CS:GO", value: "CS:GO" },
              ]}
              value={Game3}
              onChange={handleGame3Change}
            />
          </div>
        </div>
        <div className="settings-socials">
          <h2>Other Socials</h2>
          <div className="socials-spacing">
            <p>Instagram:</p>
            <p>Twitter:</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserSettings;
