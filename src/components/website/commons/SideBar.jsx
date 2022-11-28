import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div
        className="menu"
        style={{
          backgroundColor: "#e9e9ed",
          justifyContent: "center",
          marginTop: "65px",
          writingMode: "vertical - rl",
          textOrientation: "mixed",
          fontWeight: "600",
          transform: "rotate(90deg)",
          marginBottom: "150px",
        }}
      >
        <center>
          <Link to="">SNACKS</Link>
        </center>
      </div>
      <div
        className="menu"
        style={{
          backgroundColor: "#e9e9ed",
          justifyContent: "center",
          marginTop: "65px",
          writingMode: "vertical - rl",
          textOrientation: "mixed",
          fontWeight: "600",
          transform: "rotate(90deg)",
          marginBottom: "150px",
        }}
      >
        <center>
          <Link to="">DRINKS</Link>
        </center>
      </div>
      <div
        className="menu"
        style={{
          backgroundColor: "#e9e9ed",
          justifyContent: "center",
          marginTop: "65px",
          writingMode: "vertical - rl",
          textOrientation: "mixed",
          fontWeight: "600",
          transform: "rotate(90deg)",
          marginBottom: "150px",
        }}
      >
        <center>
          <Link to="">SNACKS</Link>
        </center>
      </div>

      {/* <div className="menu">
        <Link to="/dashboard">RESTAURANT</Link>
      </div> */}
      {/* <div className="menu">
        <Link to="/dashboard">BAR</Link>
      </div> */}
      {/* <div className="menu">
        <Link to="/dashboard">GYM</Link>
      </div> */}
      {/* <div className="menu">
        <Link to="/dashboard">KIDS PARK</Link>
      </div> */}

      {/* <div className="menu">
        <Link to="/dashboard">FOOTBALL PITCH</Link>
      </div> */}
      {/* <div className="menu">
        <Link to="/dashboard">BASKETBALL PITCH</Link>
      </div> */}
    </div>
  );
}
