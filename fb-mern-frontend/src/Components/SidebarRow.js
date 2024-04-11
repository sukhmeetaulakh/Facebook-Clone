import React from "react";

import "./SidebarRow.css";

const SidebarRow = () => {
  return (
    <div className="main">
      <div className="sidebarRow">
      <div className="sidebarRow__item">
          <img src="https://i.postimg.cc/bYbkxrCv/325969602-486892903645177-3488390653583921065-n.jpg"/>
          <p>Sukhmeet Aulakh</p>
        </div>
       
        <div className="sidebarRow__item">
          <i className="fa-solid fa-hospital"></i>
          <p>Covid 19 Info Center</p>
        </div>
        <div className="sidebarRow__item">
        <i class="fa-solid fa-flag"></i>
          <p>Pages</p>
        </div>
        <div className="sidebarRow__item">
          <i class="fa-solid fa-user-group"></i>
          <p>Friends</p>
        </div>
        <div className="sidebarRow__item">
        <i class="fa-brands fa-facebook-messenger"></i>
          <p>Messenger</p>
        </div>
        <div className="sidebarRow__item">
        <i class="fa-solid fa-store"></i>
          <p>Marketplace</p>
        </div>
        <div className="sidebarRow__item">
        <i class="fa-solid fa-video"></i>
          <p>Videos</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarRow;
