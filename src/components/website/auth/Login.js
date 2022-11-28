import React, { Component, Fragment } from "react";
import LoginPage from "./Login";
import { baseURL } from "../../configs/utils";
import history from "../../configs/history";
class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
    isLoading: false,
    failed: false,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const url = `${baseURL}authenticate`;
    const { username, password } = this.state;
    const data = { username, password };
    if (!username) {
      const error = { username: "Don't forget to type your username" };
      this.setState({ errors: error });
    } else {
      this.setState({ isLoading: true, errors: {} });
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            this.setState({ isLoading: false });
            localStorage.setItem("token", data.token);
            history.push("/dashboard");
          } else {
            this.setState({ failed: true, isLoading: false });
          }
        });
    }
  };
  render() {
    return (
      <Fragment>
        <LoginPage
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          state={this.state}
        />
      </Fragment>
    );
  }
}
export default Login;
