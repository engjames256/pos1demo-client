import React from "react";
import "./Newsletters.css";

export default function Newsletters() {
  return (
    <div className="newsletter">
      <span className="subscribe">Subscribe to our</span>
      <br></br>
      <div className="newsl">NEWSLETTER</div>
      <br></br>
      <div className="recieve">
        Subscribe to our newsletter and recieve latest updates from us
      </div>
      <form className="">
        <input type="text" placeholder="YOUR@MAIL.COM" />
        <button className="">SUBSCRIBE</button>
      </form>
    </div>
  );
}
