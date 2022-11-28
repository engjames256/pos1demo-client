import "./Register.css";
import Login from "../login/Login";
import Modal from "react-modal";
import { AccountCircle } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

export default function Register() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  async function register() {
    let item = { name, phone, email, password };
    let result = await fetch("https://pos1demo.cyclic.app/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));

    if (user && user.token) {
      // history.go("/");
      navigate("/");
    }
  }

  function registerHandler(e) {
    e.preventDefault();
  }

  return (
    <section id="form">
      <div id="toggle-forms" style={{ color: "white", marginRight: "36%" }}>
        <AccountCircle style={{ fontSize: "50px", border: "none" }} />
      </div>
      <form className="col s12" onSubmit={registerHandler}>
        <div className="row" id="login">
          <div className="input-field">
            <input
              id="name"
              type="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="phone"
              type="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="repeatPassword"
              type="password"
              placeholder="Repeat Password"
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <button
            onClick={register}
            className="btn waves-effect waves-light "
            style={{
              backgroundColor: "dodgerblue",
              marginRight: "50px",
              width: "180px",
              marginBottom: "10px",
            }}
          >
            Register
          </button>

          <div className="row">
            <Modal
              className="col s12"
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
            >
              <Login />
            </Modal>
          </div>

          <div
            className="forgot"
            style={{ marginTop: "5px" }}
            onClick={() => setModalIsOpen(true)}
          >
            Login
          </div>
        </div>

        {user && user.msg != "" ? (
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
