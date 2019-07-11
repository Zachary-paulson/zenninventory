import React, { Component } from "react";
import "./style.css";

class GoogleLogin extends Component {
  render() {
    let googleAuthRoute = "/auth/google";
    return (
      <div className="form-group">
        <a className="btn btn-warning btn-block my-1" href={googleAuthRoute}>
          <span>
            {" "}
            <i className="fab fa-google" /> Sign in with Google
          </span>
        </a>
      </div>
    );
  }
}

export default GoogleLogin;







