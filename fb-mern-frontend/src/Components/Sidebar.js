import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
// import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
// import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
// import PeopleIcon from "@material-ui/icons/People";
// import ChatIcon from "@material-ui/icons/Chat";
// import StorefrontIcon from "@material-ui/icons/Storefront";
// import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
// import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src={
          "https://i.postimg.cc/bYbkxrCv/325969602-486892903645177-3488390653583921065-n.jpg"
        }
        title={"Sukhmeet"}
      />
      <SidebarRow
        Icon={<i className="fa-solid fa-hospital"></i>}
        title={"COVID 19"}
      />
    </div>
  );
};

export default Sidebar;
