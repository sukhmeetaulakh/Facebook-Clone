import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://i.postimg.cc/bYbkxrCv/325969602-486892903645177-3488390653583921065-n.jpg"
        message="Yoo this is Me"
        timestap="1601493943737"
        imgName="imgName"
        username="Sukhmeet"
      />

      {/* {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))} */}
    </div>
  );
};

export default Feed;
