import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config"; // Import the auth object from your config file
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Import storage methods from Firebase Storage
import "./SidebarRow.css";

const SidebarRow = () => {
  const [userName, setUserName] = useState("");
  const [user] = useAuthState(auth); // Get the user object from Firebase Auth
  const [profilePic, setProfilePic] = useState("");
  const storage = getStorage(); // Initialize Firebase Storage

  useEffect(() => {
    if (user) {
      // Set the user's name if available
      setUserName(user.displayName || "Name Here!");
      // Load the user's profile picture
      getUserProfilePicture();
    }
  }, [user]);

  const getUserProfilePicture = async () => {
    if (user && user.photoURL) {
      // If user has a photoURL set, use it directly
      setProfilePic(user.photoURL);
    } else if (user) {
      // If user does not have a photoURL set, check if there's an uploaded profile picture in storage
      const storageRef = ref(storage, `profile_photos/${user.uid}`);
      try {
        const url = await getDownloadURL(storageRef);
        setProfilePic(url);
      } catch (error) {
        console.error("Error getting profile picture:", error.message);
      }
    }
  };

  return (
    <div className="main">
      <div className="sidebarRow">
        <div className="sidebarRow__item">
          <img src={profilePic} alt="Profile" />
          <p>{userName}</p>
        </div>
        <div className="sidebarRow__item">
          <i className="fa-solid fa-hospital"></i>
          <p>Covid 19 Info Center</p>
        </div>
        <div className="sidebarRow__item">
          <i className="fa-solid fa-flag"></i>
          <p>Pages</p>
        </div>
        <div className="sidebarRow__item">
          <i className="fa-solid fa-user-group"></i>
          <p>Friends</p>
        </div>
        <div className="sidebarRow__item">
          <i className="fa-brands fa-facebook-messenger"></i>
          <p>Messenger</p>
        </div>
        <div className="sidebarRow__item">
          <i className="fa-solid fa-store"></i>
          <p>Marketplace</p>
        </div>
        <div className="sidebarRow__item">
          <i className="fa-solid fa-video"></i>
          <p>Videos</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarRow;
