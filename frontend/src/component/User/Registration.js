import React, { useState } from "react";
import "./LoginSignUp.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import login from "../../images/avatar/login.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbLock } from "react-icons/tb";
import profile from "../../images/avatar/avatar.png";

const Registration = () => {
  const [avatar, setAvatar] = useState(profile);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
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
      let info = { ...registerInfo };
      info[e.target.name] = e.target.value;
      setRegisterInfo(info);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="marginTop">
      <Row className="d-md-flex align-items-center">
        <Col md={4}>
          <img className="img-login" src={login} alt="img" />
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
              <Form.Label style={{ fontFamily: "cursive" }}>Name</Form.Label>
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
              <Form.Label style={{ fontFamily: "cursive" }}>Email</Form.Label>
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
  );
};

export default Registration;
