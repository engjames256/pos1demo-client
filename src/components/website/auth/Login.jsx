import React from "react";

const Home = ({
  handleSubmit,
  handleInputChange,
  state: { username, password, isLoading, errors, failed }
}) => {
  return (
    <div className="bg-white h-100-vh p-t-0">
      <div className="p-b-50 d-block d-lg-none"></div>

      <div className="container h-100-vh">
        <div className="row align-items-md-center h-100-vh">
          <div className="col-lg-6 d-none d-lg-block">
            <img
              className="img-fluid"
              src="https://eagle.co.ug/wp-content/uploads/2018/02/fresh-family.png"
              alt="..."
            />
          </div>
          <div className="col-lg-4 offset-lg-1">
            <p>
              <center>Sign in to continue.</center>
            </p>
            <form action="#">
              <div className="form-group mb-4">
                <input
                  type="text"
                  className={
                    errors.username
                      ? "form-control form-control-lg error"
                      : "form-control form-control-lg"
                  }
                  id="exampleInputEmail1"
                  autofocus
                  placeholder="Username"
                  name="username"
                  onChange={handleInputChange}
                  value={username}
                />
                {errors.username && (
                  <span className="text-danger">{errors.username}</span>
                )}
              </div>
              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  value={password}
                />
              </div>
              {failed && (
                <span className="text-danger h5 text-center">
                  Invalid Credentials
                </span>
              )}
              <button
                className="btn btn-primary btn-lg btn-block btn-uppercase mb-4"
                onClick={handleSubmit}
              >
                {isLoading ? (
                  <div>
                    <span className="spinner-border spinner-border-sm" />
                    &nbsp; Validating...
                  </div>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
