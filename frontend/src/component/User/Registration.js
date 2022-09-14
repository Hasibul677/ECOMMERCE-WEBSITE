import React, { useEffect, useState } from "react";
import "./LoginSignUp.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginImg from "../../images/avatar/login.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbLock } from "react-icons/tb";
import profile from "../../images/avatar/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { register, clearError } from "../../actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../../component/layout/Loader/Loader";
import swal from "sweetalert";

const Registration = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const alert = useAlert();
  const [avatar, setAvatar] = useState(profile);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      if (e.target.files[0].size <= 2097152) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatar(reader.result);
            let info = { ...registerInfo };
            info[e.target.name] = reader.result;
            setRegisterInfo(info);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      } else {
        swal("File size should be less or equal 2MB!");
      }
    } else {
      let info = { ...registerInfo };
      info[e.target.name] = e.target.value;
      setRegisterInfo(info);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(registerInfo));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, alert]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Container className="marginTop">
          <Row className="d-md-flex align-items-center">
            <Col md={4}>
              <img className="img-login" src={loginImg} alt="img" />
            </Col>
            <Col md={6}>
              <h5
                className="text-center formWidth fw-bold"
                style={{ fontFamily: "cursive" }}
              >
                SIGN-UP
              </h5>
              <Form className="formWidth" onSubmit={handleRegister}>
                <div className="text-center mt-3">
                  <img className="profile" src={avatar} alt="profile" />
                </div>
                <Form.Group className="mb-2">
                  <Form.Label style={{ fontFamily: "cursive" }}>
                    Name
                  </Form.Label>
                  <div className="inputparent">
                    <Form.Control
                      className="ps-5"
                      required
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      onChange={handleChange}
                    />
                    <FaRegUser className="inputchild" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-2">
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

                <Form.Group className="mb-2">
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
                <Form.Group className="mb-4">
                  <Form.Label style={{ fontFamily: "cursive" }}>
                    Profile Image
                  </Form.Label>
                  <Form.Control
                    type="file"
                    required
                    name="avatar"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Text
                    style={{ fontFamily: "cursive" }}
                    className="text-muted fs-6"
                  >
                    Already Registerd?{" "}
                    <Link className="text-decoration-none" to="/login">
                      Sign-In
                    </Link>
                  </Form.Text>
                </Form.Group>

                <div className="d-flex justify-content-end">
                  <Button
                    className="rounded-pill px-4 ms-auto bg-light text-dark fw-bold py-1 border btnText"
                    type="submit"
                  >
                    Register
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Registration;
