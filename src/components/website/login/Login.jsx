import "./Login.css";
import Register from "../register/Register";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal";
import { AccountCircle } from "@material-ui/icons";

import React, { useState } from "react";

export default function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  async function login(e) {
    let item = { email, password };
    let result = await fetch("https://pos1demo.cyclic.app/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    console.log("before", result);

    if (result.user.role == "Customer") {
      console.log("inside", result);
      navigate("/");
    } else {
      console.log("outside", result);
      navigate("/dashboard");
    }
  }

  function loginHandler(e) {
    e.preventDefault();
  }

  return (
    <section id="form">
      <div id="toggle-forms" style={{ color: "white", marginRight: "36%" }}>
        <AccountCircle style={{ fontSize: "50px", border: "none" }} />
      </div>
      <form className="col s12" id="loginForm" onSubmit={loginHandler}>
        <div className="row" id="login">
          <div className="input-field">
            <input
              id="email"
              type="text"
              defaultValue=""
              required
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="password"
              type="password"
              defaultValue=""
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <button
            onClick={login}
            className="btn waves-effect waves-light "
            style={{
              backgroundColor: "dodgerblue",
              marginRight: "50px",
              width: "180px",
              type: "submit",
            }}
          >
            Login
          </button>

          <div className="row">
            <Modal
              className="col s12"
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                overlay: {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Register />
            </Modal>
          </div>

          <div
            className="forgot"
            style={{ marginTop: "5px" }}
            onClick={() => setModalIsOpen(true)}
          >
            {/* Sign Up */}
          </div>
        </div>
        {user && user.msg != null ? (
          <span
            style={{
              color: "whitesmoke",
              padding: "0px 5px",
              marginTop: "5px",
              backgroundColor: "red",
              borderRadius: "5px",
              width: "300px",
            }}
          >
            {user && user.msg}
          </span>
        ) : null}

        <ul className="animate">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </form>
      <form className="col s12"></form>
    </section>
  );
}
