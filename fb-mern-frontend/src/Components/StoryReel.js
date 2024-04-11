import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div>
      <div className="storyReel">
        <Story
          image="https://i.pinimg.com/originals/6a/37/09/6a370954f819187a84800dcfe095477f.jpg"
          profileSrc="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/The-Wolf-of-Wall-Street.jpg"
          title="Jordan"
        />

        <Story
          image="https://aesthesy.com/cdn/shop/files/custom_resized_68c94ae9-cfa2-449f-92bc-a4e70518b131.jpg?v=1697724767&width=1500"
          profileSrc="https://lastfm.freetls.fastly.net/i/u/avatar170s/5ccd7bdce625c0eb50dac8cbe9ae05b1"
          title="Sidhu"
        />

        <Story
          image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85e0cef3-c3fb-4597-b3f8-9390782738ec/dfqegkq-b3711a29-f864-4305-8c2e-0af65dfe6691.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1ZTBjZWYzLWMzZmItNDU5Ny1iM2Y4LTkzOTA3ODI3MzhlY1wvZGZxZWdrcS1iMzcxMWEyOS1mODY0LTQzMDUtOGMyZS0wYWY2NWRmZTY2OTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zvRrmGofPBzp7Sczsony4I4yX7Hg2XRdNqSh39BBvFk"
          profileSrc="https://images.moneycontrol.com/static-mcnews/2022/08/Andrew-tate-770x435.jpg?impolicy=website&width=1600&height=900"
          title="Tate"
        />
          <Story
          image="https://desiwall.com/wp-content/uploads/2024/01/51.png"
          profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
          title="Elon"
        />
            <Story
          image="https://m.media-amazon.com/images/I/61S-KS9NQoL._AC_UF1000,1000_QL80_.jpg"
          profileSrc="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
          title="Mr Trump"
        />
      </div>
    </div>
  );
};

export default StoryReel;
