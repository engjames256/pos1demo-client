import React from "react";
import "../../components/commons/TopBar.css";
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Pos 1 Demo </span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <img src={user && user.user.image} alt="" className="topAvatar" />
          <>{user && user.user.name}</>
        </div>
      </div>
    </div>
  );
}
