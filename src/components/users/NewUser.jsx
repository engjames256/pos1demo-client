import React, { useState } from "react";
import "../users/NewUser.css";

export default function NewUser() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [nin, setNin] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  async function register() {
    let item = {
      name,
      phone,
      email,
      gender,
      address,
      nin,
      role,
      image,
      password,
    };
    let result = await fetch("https://omara.cyclic.app/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
  }

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const selectedFile = async (e) => {
    const result = await convertImageToBase64(e.target.files[0]);
    setImage(result);
  };

  function registerHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="newUser">
      <form className="newUserForm" onSubmit={registerHandler}>
        <div style={{ display: "flex" }}>
          <div className="newUserItem">
            <input
              id="name"
              type="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="newUserItem">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="newUserItem">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="newUserItem">
            <input
              type="role"
              placeholder="Role (Manager, Cashier)"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <input id="image" type="file" onChange={(e) => selectedFile(e)} />
          </div>
        </div>

        <div className="newUserItem">
          <input
            id="phone"
            type="phone"
            placeholder="+256 123 456 789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div className="newUserItem">
            <input
              id="gender"
              type="gender"
              placeholder="Gender (Male or Female)"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <div className="newUserItem">
            <input
              id="address"
              type="address"
              placeholder="Current Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="newUserItem">
            <input
              id="nin"
              type="nin"
              placeholder="NIN"
              value={nin}
              onChange={(e) => setNin(e.target.value)}
            />
          </div>
          <button className="newUserButton" onClick={register}>
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
