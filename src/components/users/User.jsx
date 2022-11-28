import React from "react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  WcOutlined,
  SubtitlesOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../../components/users/User.css";
import TopBar from "../../components/commons/TopBar";
import SideBar from "../../components/commons/SideBar";

let user = JSON.parse(localStorage.getItem("user"));

export default function User() {
  return (
    <div>
      <TopBar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="user">
          <div className="userTitleContainer">
            {/* <h1 className="userTitle">Edit User</h1> */}
            {/* <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link> */}
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img src={user.user.image} alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">
                    {user && user.user.name}
                  </span>
                  <span className="userShowUserTitle">
                    {user && user.user.role}
                  </span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user && user.user.name}
                  </span>
                </div>
                {/* <div className="userShowInfo">
                  <CalendarToday className="userShowIcon" />
                  <span className="userShowInfoTitle">10.12.1999</span>
                </div> */}
                <div className="userShowInfo">
                  <WcOutlined className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user && user.user.gender}
                  </span>
                </div>
                <div className="userShowInfo">
                  <SubtitlesOutlined className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user && user.user.nin}
                  </span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user && user.user.phone}
                  </span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user && user.user.email}
                  </span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user && user.user.address}
                  </span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  {/* <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder={user.user.name}
                      className="userUpdateInput"
                    />
                  </div> */}
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder={user && user.user.name}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder={user && user.user.email}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder={user && user.user.phone}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder={user && user.user.address}
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src={user && user.user.image}
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
