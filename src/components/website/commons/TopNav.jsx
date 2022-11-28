import "./TopNav.css";
import Login from "../login/Login";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { AccountCircle } from "@material-ui/icons";

export default function TopNav() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    // window.location.reload(true);
    navigate("/");
  }
  return (
    <div className="TopNav">
      <span className="title">Pos 1 Demo</span>
      <ul>
        <Link to="/">
          {/* <li>HOME</li> */}
        </Link>
        <Link to="/">
          {/* <li>ABOUT</li> */}
        </Link>
        <Link to="/">
          {/* <li>EVENTS</li> */}
        </Link>
        <Link to="/">
          {/* <li>CONTACT</li> */}
        </Link>

        <Link to="/dashboard">
          <li
            style={{ backgroundColor: "transparent" }}
            className="reservation"
          ></li>
        </Link>
        <div
          className="login"
          style={{
            border: "1px solid white",
            paddingRight: "10px",
            borderRadius: "5px",
            padding: "2px",
            backgroundColor: "#cd9933",
          }}
        >
          <Link to="" style={{ display: "flex", margin: "auto" }}>
            <div className="row">
              <Modal
                className="col s12"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
              >
                <Login />
              </Modal>
            </div>

            {user && user.token ? (
              // <AccountCircle
              //   className="account"
              //   onClick={() => setModalIsOpen(true)}
              // />
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  marginTop: "3px",
                }}
                src={user && user.user.image}
                alt={
                  <AccountCircle
                    className="account"
                    onClick={() => setModalIsOpen(true)}
                  />
                }
              />
            ) : (
              <AccountCircle
                className="account"
                onClick={() => setModalIsOpen(true)}
              />
            )}

            {user && user.token ? (
              <div className="account" onClick={logOut}>
                Logout
              </div>
            ) : (
              <div className="account" onClick={() => setModalIsOpen(true)}>
                Login
              </div>
            )}
          </Link>
        </div>
      </ul>
    </div>
  );
}
