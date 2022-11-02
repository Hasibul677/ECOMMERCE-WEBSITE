import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaCity, FaGlobeAfrica, FaHome } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import MetaDeta from "../layout/MetaDeta";
import CheckOutSteps from "./CheckOutSteps";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import { useNavigate } from "react-router-dom";
const address = require("@bangladeshi/bangladesh-address");

const Shipping = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    upazila: "",
    postCode: "",
    phone: "",
    country: "Bangladesh",
  });

  const [upazila, setUpazila] = useState([]);
  const district = address.allDistict();

  useEffect(() => {
    let upo = address.upazilasOf(shippingInfo?.city);
    setUpazila(upo);
  }, [shippingInfo]);

  const handleChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (shippingInfo?.phone?.length < 11 || shippingInfo?.phone?.length > 11) {
      alert.error("Number should be 11 digit");
      return;
    }
    dispatch(saveShippingInfo(shippingInfo));
    navigate("/order/confirm");
  };

  return (
    <Row className="gx-0">
      <MetaDeta title={"Shipping Page"} />
      <CheckOutSteps activeStep={0} />
      <Col md={4}></Col>
      <Col md={5} className="px-3">
        <h5
          className="text-center formWidth fw-bold my-5"
          style={{ fontFamily: "cursive" }}
        >
          Shipping Details
        </h5>
        <Form className="formWidth" onSubmit={handleSubmit}>
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
              <Form.Select
                className="ps-5"
                required
                name="city"
                onChange={handleChange}
              >
                <option value="">Select District</option>
                {district.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
              <FaCity className="inputchild" />
            </div>
          </Form.Group>

          <Form.Group className="mb-2">
            <div className="inputparent">
              <Form.Select
                className="ps-5"
                required
                name="upazila"
                onChange={handleChange}
              >
                <option value="">Select Upazila</option>
                {upazila &&
                  upazila.map((item, i) => (
                    <option key={i} value={item.upazila}>
                      {item.upazila}
                    </option>
                  ))}
              </Form.Select>
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
