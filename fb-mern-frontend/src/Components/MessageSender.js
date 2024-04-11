import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import "./MessageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

// import UploadIcon from '@mui/icons-material/Upload';

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handelChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handelSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div>
      <div className="messageSender">
        <div className="messageSender_top">
          <Avatar src="https://i.postimg.cc/bYbkxrCv/325969602-486892903645177-3488390653583921065-n.jpg" />

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
              onChange={handelChange}
            />
            <button onClick={handelSubmit} type="submit">
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
