import React, { useEffect, useState } from "react";
import "./LoginSignUp.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginImg from "../../images/avatar/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { TbLock } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../../actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader";

const SignIn = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useAlert();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  let { email, password } = loginInfo;

  const handleChange = (e) => {
    let info = { ...loginInfo };
    info[e.target.name] = e.target.value;
    setLoginInfo(info);
  };

  const redirect = location.search ? location.search.split("=")[1] : "/profile"

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, error, alert, isAuthenticated, navigate, redirect]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="d-flex align-items-center justify-content-center marginTop">
          <Container>
            <Row className="d-md-flex align-items-center">
              <Col md={4}>
                <img className="img-login" src={loginImg} alt="" />
              </Col>
              <Col md={6}>
                <h5
                  className="text-center formWidth fw-bold"
                  style={{ fontFamily: "cursive" }}
                >
                  SIGN-IN
                </h5>
                <Form className="formWidth" onSubmit={handleLogin}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label style={{ fontFamily: "cursive" }}>
                      Email
                    </Form.Label>
                    <div className="inputparent">
                      <Form.Control
                        className="ps-5"
                        required
                        type="email"
                        name="email"
                        placeholder="youremail@gmail.com"
                        onChange={handleChange}
                      />
                      <HiOutlineMail className="inputchild" />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label style={{ fontFamily: "cursive" }}>
                      Password
                    </Form.Label>
                    <div className="inputparent">
                      <Form.Control
                        className="ps-5"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                      <TbLock className="inputchild" />
                    </div>
                  </Form.Group>
                  <Form.Group
                    className="mb-4 d-flex justify-content-between"
                    controlId="formBasicPassword"
                  >
                    <Form.Text
                      style={{ fontFamily: "cursive" }}
                      className="text-muted fs-6"
                    >
                      Are You New?{" "}
                      <Link className="text-decoration-none" to="/registration">
                        Sign-Up
                      </Link>
                    </Form.Text>
                    <Form.Text
                      style={{ fontFamily: "cursive" }}
                      className="text-muted fs-6"
                    >
                      <Link
                        className="text-decoration-none"
                        to="/password/forgot"
                      >
                        Forgot Password ?
                      </Link>
                    </Form.Text>
                  </Form.Group>

                  <div className="d-flex justify-content-end">
                    <Button
                      className="rounded-pill px-4 ms-auto bg-light text-dark fw-bold py-1 border btnText"
                      type="submit"
                    >
                      Login
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default SignIn;
