import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Button, Col, Form, Row } from "react-bootstrap";
import { TbLock } from "react-icons/tb";
import { HiLockOpen } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearError, loadUser, resetPassword } from "../../actions/userAction";
import Loader from "../layout/Loader/Loader";
import "./ChangePassword.css";
import MetaDeta from "../layout/MetaDeta";

const ResetPassword = () => {
    const { error, success, loading } = useSelector((state) => state.forgotPassword);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token} = useParams();
    const alert = useAlert();
    const [passwords, setPassword] = useState({
      password: "",
      confirmPassword: "",
    });
  
    const handleChange = (e) => {
      const pass = { ...passwords };
      pass[e.target.name] = e.target.value;
      setPassword(pass);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(resetPassword(token ,passwords));
    };
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearError());
      }
      if (success) {
        alert.success("Password Updated Succesfully!");
        dispatch(loadUser());
        navigate("/login");
      }
    }, [alert, navigate, dispatch, error, success]);

console.log(passwords);
    return (
        <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="changePass">
            <MetaDeta title={`Change Password`} />
            <Row className="g-0 d-flex align-items-center justify-content-center px-2 px-md-0">
              <Col md={4} className="card p-4 changePassTop shadow-lg ">
                <Form onSubmit={handleSubmit}>
                  <h4 className="text-style mb-4">Change Your Password</h4>
                  
                  <div className="inputparent mt-2">
                    <Form.Control
                      className="ps-5 text-style"
                      required
                      type="password"
                      name="password"
                      onChange={handleChange}
                      placeholder="New Password"
                    />
                    <TbLock className="inputchild" />
                  </div>
                  <div className="inputparent my-2">
                    <Form.Control
                      className="ps-5 text-style"
                      required
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                      placeholder="Confirm Password"
                    />
                    <HiLockOpen className="inputchild" />
                  </div>
                  <div className="d-flex justify-content-end">
                    <Button
                      className="rounded-pill px-4 ms-auto bg-light text-dark fw-bold py-1 border btnText"
                      type="submit"
                    >
                      Change
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
};

export default ResetPassword;