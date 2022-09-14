import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Button, Col, Form, Row } from "react-bootstrap";
import { TbLock } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearError, loadUser, updatePassword } from "../../actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstant";
import Loader from "../layout/Loader/Loader";
import "./ChangePassword.css";
const ChangePassword = () => {
  const { error, isUpdated, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const pass = { ...password };
    pass[e.target.name] = e.target.value;
    setPassword(pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePassword(password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (isUpdated) {
      alert.success("Password Updated!");
      dispatch(loadUser());
      navigate("/profile");
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [alert, navigate, dispatch, error, isUpdated]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="changePass">
          <Row className="g-0 d-flex align-items-center justify-content-center px-2 px-md-0">
            <Col md={4} className="card p-4 changePassTop shadow-lg ">
              <Form onSubmit={handleSubmit}>
                <h4 className="text-style mb-4">Change Your Password</h4>
                <div className="inputparent mt-2">
                  <Form.Control
                    className="ps-5"
                    required
                    type="password"
                    name="oldPassword"
                    onChange={handleChange}
                    placeholder="Old Password"
                  />
                  <TbLock className="inputchild" />
                </div>
                <div className="inputparent mt-2">
                  <Form.Control
                    className="ps-5"
                    required
                    type="password"
                    name="newPassword"
                    onChange={handleChange}
                    placeholder="New Password"
                  />
                  <TbLock className="inputchild" />
                </div>
                <div className="inputparent my-2">
                  <Form.Control
                    className="ps-5"
                    required
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                  <TbLock className="inputchild" />
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

export default ChangePassword;
