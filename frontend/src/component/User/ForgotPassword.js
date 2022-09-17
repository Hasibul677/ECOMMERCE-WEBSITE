import React, { useState } from "react";
import "./ForgotPassword.css";
import MetaDeta from "../layout/MetaDeta";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../actions/userAction";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      dispatch(forgotPassword(email));
    }
  };
  
  return (
    <div className="bg-dark">
      <MetaDeta title={`FORGOT PASSWORD`} />
      <div className="container-center">
        <Form className="forgotForm" onSubmit={handleSubmit}>
          <h4 className="text-style mb-3 text-center">
            Forgot Password? Don't Worry!
          </h4>
          <Form.Group className="forgotGroup">
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail({ email: e.target.value })}
            />
            <label className="mailLavel" htmlFor="email">
              <br />
              Email
            </label>
            <span className="mailText">provide your email</span>
          </Form.Group>

          <button id="login-btn" className="fw-bold text-style">
            Next
          </button>
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
