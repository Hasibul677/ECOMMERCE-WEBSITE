import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaCity, FaGlobeAfrica, FaHome } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import MetaDeta from "../layout/MetaDeta";

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    postCode: "",
    phone: "",
    country: "Bangladesh",
  });
  const handleChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  console.log(shippingInfo);
  return (
    <Row className="gx-0">
      <MetaDeta title={"Shipping Page"} />
      <Col md={4}></Col>
      <Col md={5} className="px-3">
        <h5
          className="text-center formWidth fw-bold my-5"
          style={{ fontFamily: "cursive" }}
        >
          Shipping Details
        </h5>
        <Form className="formWidth">
          <Form.Group className="mb-2">
            <div className="inputparent">
              <Form.Control
                className="ps-5"
                required
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
              />
              <FaHome className="inputchild" />
            </div>
          </Form.Group>

          <Form.Group className="mb-2">
            <div className="inputparent">
              <Form.Control
                className="ps-5"
                required
                type="text"
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
              <FaCity className="inputchild" />
            </div>
          </Form.Group>

          <Form.Group className="mb-2">
            <div className="inputparent">
              <Form.Control
                className="ps-5"
                required
                type="text"
                name="postCode"
                placeholder="Post Code"
                onChange={handleChange}
              />
              <GoLocation className="inputchild" />
            </div>
          </Form.Group>

          <Form.Group className="mb-2">
            <div className="inputparent">
              <Form.Control
                className="ps-5"
                required
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <BsPhone className="inputchild" />
            </div>
          </Form.Group>

          <Form.Group className="mb-2">
            <div className="inputparent">
              <Form.Select
                className="ps-5"
                required
                name="country"
                onChange={handleChange}
              >
                <option value="Bangladesh">Bangladesh</option>
              </Form.Select>
              <FaGlobeAfrica className="inputchild" />
            </div>
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button
              className="rounded-pill px-4 ms-auto bg-primary text-white fw-bold py-1 border btnText"
              type="submit"
            >
              Continue
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Shipping;
