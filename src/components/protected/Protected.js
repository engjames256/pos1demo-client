import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
  let component = props.component;

  let user = JSON.parse(localStorage.getItem("user"));

  // const history = useHistory();
  let navigate = useNavigate();

  //   useEffect(() => {
  if (
    // (user && user.msg == null) ||
    user &&
    user.token == null &&
    user &&
    user.user.role == "Customer"
  ) {
    // history.go("/");
    navigate("/");
  }
  //   }, []);

  return (
    <div>
      <component />
    </div>
  );
}
