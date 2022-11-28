import React, { useState } from "react";

let user = JSON.parse(localStorage.getItem("user"));

export default function NewNewsletter() {
  const [newsletter, setNewsletter] = useState("");

  async function newsletters() {
    let item = { newsletter, username: user.user.name, image: user.user.image };

    let result = await fetch("http://localhost:5000/api/v1/newsletters", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
  }
  function newsletterHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="newUser">
      <form className="newUserForm" onSubmit={newsletterHandler}>
        <textarea
          value={newsletter}
          onChange={(e) => setNewsletter(e.target.value)}
          type="text"
          placeholder="Newsletter here ..."
          style={{
            borderRadius: "10px",
            border: "1px solid grey",
            height: "30px",
            width: "910px",
            paddingLeft: "10px",
            paddingTop: "10px",
          }}
        ></textarea>

        <button className="newUserButton" onClick={newsletters}>
          Create
        </button>
      </form>
    </div>
  );
}
