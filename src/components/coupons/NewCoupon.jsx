import React, { useState } from "react";
import "../../components/coupons/NewCoupon.css";

export default function NewCoupon() {
  const [number, setNumber] = useState("");
  const [value, setValue] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  async function coupon() {
    let item = { number, value, price, type };
    let result = await fetch("http://localhost:5000/api/v1/coupons", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
  }

  function couponHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="newUser">
      <div className="createCoupon">
        <form className="newUserForm" onSubmit={couponHandler}>
          <div style={{ display: "flex" }}>
            <div className="newUserItem">
              <input
                id="number"
                type="text"
                placeholder="Coupon Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <input
                id="value"
                type="text"
                placeholder="Coupon Value (2 BOTTLES OF BEER OR 4 BOTTLES OF SODA)"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="newUserItem">
              <input
                id="type"
                type="text"
                placeholder="Type(VIP or Ordinary)"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <input
                id="price"
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <button className="newUserButton" onClick={coupon}>
              Create Coupon
            </button>
          </div>
        </form>
      </div>
      <div className="verifyCoupon">
        <form className="newUserForm">
          <div className="newUserItem">
            <input type="text" placeholder="Enter Coupon Number" />
          </div>
          <button className="userListEdit">Verify Coupon</button>
        </form>
      </div>
    </div>
  );
}
