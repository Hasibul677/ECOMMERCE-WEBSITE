import React, { useState } from "react";
import "./LoginSignUp.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import login from "../../images/avatar/login.png";
import { Link } from "react-router-dom";

const Registration = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Row className="minHeight d-md-flex align-items-center">
        <Col md={4}>
          <img className="img-login" src={login} alt="" />
        </Col>
        <Col md={6}>
          <h5
            className="text-center formWidth fw-bold"
            style={{ fontFamily: "cursive" }}
          >
            SIGN-UP
          </h5>
          <Form className="formWidth" onSubmit={handleLogin}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label style={{ fontFamily: "cursive" }}>Email</Form.Label>
              <Form.Control type="email" placeholder="youremail@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label style={{ fontFamily: "cursive" }}>
                Password
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Text
                style={{ fontFamily: "cursive" }}
                className="text-muted fs-6"
              >
                Already Registerd?{" "}
                <Link className="text-decoration-none" to="/login">
                Sign-In !
                </Link>
              </Form.Text>
            </Form.Group>

            <Button
              className="ms-auto bg-light text-dark fw-bold py-1 border btnText"
              type="submit"
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
