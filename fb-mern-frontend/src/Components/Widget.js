import React from "react";

const Widget = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkhalsacollegeamritsarofficialfb&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=277053248822584"
        width="340"
        height="1500"
        style={{ border: "none", overflow: "hidden" ,fontFamily:"Poppins" }}
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widget;
