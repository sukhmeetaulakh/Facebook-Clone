import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config"; // Import the auth object from your config file
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage"; // Import storage methods from Firebase Storage
import "./MessageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import axios from "axios";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [avatarSrc, setAvatarSrc] = useState("");
  const [user] = useAuthState(auth); // Get the user object from Firebase Auth

  useEffect(() => {
    const getUserProfilePicture = async () => {
      if (user && user.photoURL) {
        setAvatarSrc(user.photoURL); // If user has a photoURL set, use it as the avatar
      } else if (user) {
        // If user does not have a photoURL set, check if there's an uploaded profile picture in storage
        const storage = getStorage(); // Initialize Firebase Storage
        const storageRef = ref(storage, `profile_photos/${user.uid}`);
        try {
          const url = await getDownloadURL(storageRef);
          setAvatarSrc(url);
        } catch (error) {
          console.error("Error getting profile picture:", error.message);
        }
      }
    };

    getUserProfilePicture();
  }, [user]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!input.trim()) return;

      let imageUrl = null;
      if (image) {
        // Upload image to server
        const formData = new FormData();
        formData.append("image", image);
        const response = await axios.post("/upload/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        imageUrl = response.data.imageUrl;
      }

      // Create post object
      const postData = {
        text: input,
        imageUrl,
      };

      // Send post data to server
      await axios.post("/upload/post", postData);

      setInput("");
      setImage(null);
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  return (
    <div>
      <div className="messageSender">
        <div className="messageSender_top">
          <Avatar src={avatarSrc} />

          <form>
            <input
              type="text"
              className="messageSender__input"
              placeholder="What's on Your Mind?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Input
              type="file"
              className="messageSender__fileSelector"
              onChange={handleChange}
            />
            <button onClick={handleSubmit} type="button">
              Hidden Submit
            </button>
          </form>
        </div>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} /> <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} /> <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <EmojiEmotionsIcon Icon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
