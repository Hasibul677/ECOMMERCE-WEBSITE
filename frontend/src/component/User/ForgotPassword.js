import React from "react";
import "./ForgotPassword.css";
import MetaDeta from "../layout/MetaDeta";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="bg-dark">
      <MetaDeta title={`Forgot Password`} />
      <div className="container-center">
        <center>
          <img
            className="forgotImg rounded"
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="50%"
            alt=""
          />
        </center>
        <h2 className="titleText">Don't Worry!</h2>
        <Form className="forgotForm">
          <h4>
            Just provide your emails
          </h4>
          <Form.Group className="forgotGroup">
            <input type="email" name="email" />
            <label className="mailLavel" htmlFor="email">
              <br />
              Email
            </label>
            <span className="mailText">enter your email</span>
          </Form.Group>

          <button id="login-btn">Next</button>
        </Form>

        <p className="text-style text-center">
          Did you remember?{" "}
          <Link to="/login" className="text-decoration-none">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
