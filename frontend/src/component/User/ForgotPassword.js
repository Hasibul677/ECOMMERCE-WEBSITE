import React, { useEffect, useState } from "react";
import "./ForgotPassword.css";
import MetaDeta from "../layout/MetaDeta";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearError, forgotPassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader";

const ForgotPassword = () => {
  const { error, loading, message } = useSelector(state => state.forgotPassword);
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const [email, setEmail] = useState({ email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      dispatch(forgotPassword(email));
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    alert.success(message);
    navigate("/login");
  }, [alert, error, dispatch])

  return (
    <div>{loading ? <Loader /> : <div className="bg-dark">
      <MetaDeta title={`FORGOT PASSWORD`} />
      <div className="container-center">
        <Form className="forgotForm" onSubmit={handleSubmit}>
          <h4 className="text-style mb-3 text-center">
            Don't Worry!
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
    </div>}</div>
  );
};

export default ForgotPassword;
