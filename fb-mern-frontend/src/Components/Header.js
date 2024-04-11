import React from "react";


import "./Header.css";

const Header = () => {
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
          <i class="fa-solid fa-house"></i>
        </div>
        <div className="header__option">
          <i class="fa-solid fa-flag"></i>
        </div>
        <div className="header__option">
          <i class="fa-solid fa-clapperboard"></i>
        </div>
        <div className="header__option">
          <i class="fa-solid fa-store"></i>
        </div>
        <div className="header__option">
          <i class="fa-solid fa-user-group"></i>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info"></div>
        {/* <Avatar/>  */}
        <div className="header__option">
          <img
            src="https://i.postimg.cc/bYbkxrCv/325969602-486892903645177-3488390653583921065-n.jpg"
            alt="this"
          />
        </div>

        <h4>Sukhmeet</h4>
        <div className="header__option">
          <i className="fas fa-plus"></i>
        </div>
        <div className="header__option">
        <i class="fa-brands fa-facebook-messenger"></i>
        </div>
        <div className="header__option">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div className="header__option">
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
