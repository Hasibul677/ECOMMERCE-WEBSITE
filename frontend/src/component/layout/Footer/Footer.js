import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-5">
      <Row className="gy-4">
        <Col md={4}>
          <h2 style={{ fontFamily: "cursive" }} className="text-danger fw-bold">
            SHOPPING 1416
          </h2>
          <p>High Quality is our first priority</p>
          <p>Copyrights 2022 &copy; MdHasibulHasan</p>
        </Col>
        <Col md={3} className="d-flex justify-content-between">
            <div>
                <Link to="/" className="text-white text-decoration-none fs-5 footer_menu">About Us</Link><br/>
                <Link to="/" className="text-white text-decoration-none fs-5 footer_menu">FAQ</Link><br/>
                <Link to="/" className="text-white text-decoration-none fs-5 footer_menu">Contact</Link>
            </div>
            <div >
                <Link to="/" className="text-white text-decoration-none fs-5 footer_menu">Privacy Policy</Link><br/>
                <Link to="/" className="text-white text-decoration-none fs-5 footer_menu">Refund Policy</Link><br/>
                <Link to="/" className="text-white text-decoration-none fs-5 footer_menu">Terms & Conditions</Link>
            </div>
        </Col>
        <Col md={1}/>
        <Col md={4} >
          <h4 style={{ fontFamily: "cursive" }} className="fw-bold">Follow Us</h4>
          <div className="d-flex">
            <a
              href="https://www.facebook.com/"
              target="blank"
              className="text-decoration-none text-white btn w-50 bg-info"
            >
              <FaFacebookF className="fs-3 me-1" /> Facebook
            </a>

            <a
              href="https://www.youtube.com/"
              target="blank"
              className="text-decoration-none text-white btn w-50 ms-2 bg-danger"
            >
              <FiYoutube className="fs-3 me-1" /> YouTube
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
