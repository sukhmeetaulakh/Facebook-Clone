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
        <div className="sidebarRow__item" >
        <i class="fa-solid fa-earth-americas"></i>
         <a href="https://www.facebook.com/climatescienceinfo/" target="_blank"><p>Climate Sci-Center</p></a>
        </div>
        <div className="sidebarRow__item">
          <i className="fa-solid fa-flag"></i>
          <a href="https://www.facebook.com/pages/" target="_blank"><p>Pages</p></a>
        </div>
        <div className="sidebarRow__item">
        <i class="fa-solid fa-gamepad"></i>
        <a href="https://www.facebook.com/gaming/play/" target="_blank"><p>Games</p></a>
        </div>
        <div className="sidebarRow__item">
        <i class="fa-solid fa-video"></i>
        <a href="https://www.facebook.com/gaming/" target="_blank"><p>Live </p></a>
     
        </div>
        <div className="sidebarRow__item">
          <i className="fa-solid fa-store"></i>
          <a href="https://www.facebook.com/marketplace/" target="_blank"><p>Marketplace</p></a>
        </div>
        <div className="sidebarRow__item">
        <i class="fa-solid fa-filter-circle-dollar"></i>
        <a href="https://www.facebook.com/fundraisers/explore/" target="_blank"><p>Fundraiser</p></a>
        </div>
      </div>
    </div>
  );
};

export default SidebarRow;
