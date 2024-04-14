import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config"; // Import the auth object from your config file
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Import storage methods from Firebase Storage

import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth); // Get the user object from Firebase Auth
  const [userName, setUserName] = useState("");
  const [userPhotoURL, setUserPhotoURL] = useState("");

  useEffect(() => {
    if (user) {
      // Set the user's name if available
      setUserName(user.displayName || "Name here!");
      // Fetch the user's profile picture
      getUserProfilePicture();
    } else {
      // Reset user data when not authenticated
      setUserName("");
      setUserPhotoURL("");
    }
  }, [user]);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const storage = getStorage(); // Initialize Firebase Storage

  const getUserProfilePicture = async () => {
    if (user && user.photoURL) {
      setUserPhotoURL(user.photoURL); // If user has a photoURL set, use it directly
    } else if (user) {
      // If user does not have a photoURL set, check if there's an uploaded profile picture in storage
      const storageRef = ref(storage, `profile_photos/${user.uid}`);
      try {
        const url = await getDownloadURL(storageRef);
        setUserPhotoURL(url);
      } catch (error) {
        console.error("Error getting profile picture:", error.message);
        setUserPhotoURL(""); // Set an empty string as the photo URL in case of error
      }
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/50px-2023_Facebook_icon.svg.png" />
      </div>
      <div className="header__input">
        <i
          className="fas fa-search"
          style={{ marginRight: "8px", marginLeft: "8px" }}
        ></i>
        <input placeholder="Search Facebook" type="text" />
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <i className="fa-solid fa-house"></i>
        </div>
        <div className="header__option">
          <i className="fa-solid fa-flag"></i>
        </div>
        <div className="header__option">
          <i className="fa-solid fa-clapperboard"></i>
        </div>
        <div className="header__option">
          <i className="fa-solid fa-store"></i>
        </div>
        <div className="header__option">
          <i className="fa-solid fa-user-group"></i>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info"></div>
        {/* <Avatar/>  */}
        {user && (
          <div className="header__option">
            <img
              src={userPhotoURL}
              alt="Profile"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </div>
        )}

        <h4>{userName}</h4>
        <div className="header__option">
          <i className="fas fa-plus"></i>
        </div>
        <div className="header__option">
          <i className="fa-brands fa-facebook-messenger"></i>
        </div>
        <div className="header__option">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="header__option">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className="header__option">
          <button onClick={logout}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
