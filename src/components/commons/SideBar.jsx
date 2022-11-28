import React from "react";
import {
  LineStyle,
  Storefront,
  DynamicFeed,
  ChatBubbleOutline,
  CardGiftcard,
  Receipt,
  PeopleOutline,
  AccountCircle,
  EventAvailable,
  RateReviewOutlined,
  ForumOutlined,
  ExitToAppOutlined,
  LockOutlined,
  
} from "@material-ui/icons";

import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';

import { Link } from "react-router-dom";
import "../../components/commons/SideBar.css";
import { useNavigate } from "react-router-dom";

let user = JSON.parse(localStorage.getItem("user"));

export default function Sidebar() {
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {user && user.user.role == "Manager" ? (
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/dashboard" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
            </ul>
          </div>
        ) : null}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
              <li className="sidebarListItem">
                <PointOfSaleOutlinedIcon className="sidebarIcon" />
                POS
              </li>
            </Link>
            {user && user.user.role == "Manager" ? (
            <Link to="/sales" className="link">
              <li className="sidebarListItem">
                <Receipt className="sidebarIcon" />
                Sales
              </li>
            </Link>
            ) : null}
            {user && user.user.role == "Manager" ? (
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PeopleOutline className="sidebarIcon" />
                  Users
                </li>
              </Link>
            ) : null}
            {user && user.user.role == "Manager" ? (
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            ) : null}
            {/* <Link to="/coupons" className="link">
              <li className="sidebarListItem">
                <CardGiftcard className="sidebarIcon" />
                Coupons
              </li>
            </Link> */}
            {/* <Link to="/newsletters" className="link">
              <li className="sidebarListItem">
                <RateReviewOutlined className="sidebarIcon" />
                Newsletters
              </li>
            </Link> */}
            {/* <Link to="/testimonials" className="link">
              <li className="sidebarListItem">
                <ForumOutlined className="sidebarIcon" />
                Testimonials
              </li>
            </Link> */}
          </ul>
        </div>

        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="/feedbacks" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
                <span className="topIconBadge"> 2</span>
              </li>
            </Link>
            <Link to="/messages" className="link">
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
                <span className="topIconBadge"> 2</span>
              </li>
            </Link>
            <Link to="/reservations" className="link">
              <li className="sidebarListItem">
                <EventAvailable className="sidebarIcon" />
                Reservations
                <span className="topIconBadge">2</span>
              </li>
            </Link>
          </ul>
        </div> */}

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Account</h3>
          <ul className="sidebarList">
            <Link to="/user/:userId" className="link">
              <li className="sidebarListItem">
                <AccountCircle className="sidebarIcon" />
                Profile
              </li>
            </Link>
            {/* <Link to="/dashboard" className="link">
              <li className="sidebarListItem">
                <LockOutlined className="sidebarIcon" />
                Lock
              </li>
            </Link> */}
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <ExitToAppOutlined className="sidebarIcon" />
                <span onClick={logOut}>Logout</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
