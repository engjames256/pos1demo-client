import React, { useState } from "react";

let user = JSON.parse(localStorage.getItem("user"));

export default function Testimonial() {
  const [testimonial, setTestimonial] = useState("");

  async function testimonials() {
    let item = {
      testimonial,
      username: user.user.name,
      image: user.user.image,
    };

    let result = await fetch("http://localhost:5000/api/v1/testimonials", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
  }
  function testimonialHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="newUser">
      <form className="newUserForm" onSubmit={testimonialHandler}>
        <textarea
          value={testimonial}
          onChange={(e) => setTestimonial(e.target.value)}
          type="text"
          placeholder="Testimonial here ..."
          style={{
            borderRadius: "10px",
            border: "1px solid grey",
            height: "30px",
            width: "910px",
            paddingLeft: "10px",
            paddingTop: "10px",
          }}
        ></textarea>

        <button className="newUserButton" onClick={testimonials}>
          Create
        </button>
      </form>
    </div>
  );
}
