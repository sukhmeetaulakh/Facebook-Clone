import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";


const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {/* Static posts */}
      <Post
        key={1}
        profilePic="https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode400/38992297/38992297-1694591016907-5d72a6a3f2b32.jpg"
        message="Canadians now will pay 66.7% tax on CG! "
        timestamp="Wed, 18 Apr 2024"
        username="Luke Belmar"
      />
       <Post
        key={2}
        profilePic="https://t4.ftcdn.net/jpg/05/72/40/07/360_F_572400733_1RRhjWLJjEJTI73Ikd1nEdAC29S9ntwZ.jpg"
        message="Who is excited for Glitch meetup in Dubai!"
        timestamp="Wed, 15 Apr 2024"
        username="RichTeen"
      />
      <Post
        key={2}
        profilePic="https://previews.123rf.com/images/nolonely/nolonely1303/nolonely130300001/18380694-beautiful-young-girl-square-image.jpg"
        message="Hello There!"
        timestamp="Wed, 12 Apr 2024"
        username="Jorgiana"
      />
      {/* Add more static posts as needed */}
    </div>
  );
};

export default Feed;


// This was the code for dynmic posts 


// import React, { useState, useEffect } from "react";
// import StoryReel from "./StoryReel";
// import MessageSender from "./MessageSender";
// import Post from "./Post";
// import axios from "../axios"; // Import your axios instance

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get("/retrieve/posts"); // Make sure axios is using the correct base URL
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <StoryReel />
//       <MessageSender />
     
//         <Post
//           key={1}
//           profilePic="https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode400/38992297/38992297-1694591016907-5d72a6a3f2b32.jpg"
//           message="How are people not noticing the theft?"
//           timestamp={Date.now()}
//           imgName="https://i.postimg.cc/cLB0k5Bb/image.png"
//           username="LukeBelmar"
//         />
    
//     </div>
//   );
// };

// export default Feed;
