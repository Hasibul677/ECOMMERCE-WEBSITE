import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { TbLock } from "react-icons/tb";
import "./ChangePassword.css";
const ChangePassword = () => {
  return (
    <div className="changePass">
      <Row className="g-0 d-flex align-items-center justify-content-center px-2 px-md-0">
        <Col md={4} className="card p-4 changePassTop shadow-lg ">
          <Form>
            <h4 className="text-style mb-4">Change Your Password</h4>
            <div className="inputparent mt-2">
              <Form.Control
                className="ps-5"
                required
                type="password"
                name="newPass"
                placeholder="New Password"
              />
              <TbLock className="inputchild" />
            </div>
            <div className="inputparent my-2">
              <Form.Control
                className="ps-5"
                required
                type="password"
                name="conPass"
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
  );
};

export default ChangePassword;
