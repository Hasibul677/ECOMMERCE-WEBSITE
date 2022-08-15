import React from "react";
import "./Product.css";
import { Card, Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const options = {
    edit: false,
    size: 21,
    color: "rgba(20,20,20,0.1)",
    activeColor: "gold",
    value: 3.5,
    isHalf: true,
  };
  return (
    <Row className="g-0 px-3">
      <Col md={3} className="p-2 product-card">
        <Link className="text-decoration-none text-dark" to={product._id}>
          <Card>
            <Card.Img
              variant="top"
              src={product?.images[0].url}
              alt={product.name}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <div>{product.name}</div>
                <div className="d-flex align-items-center">
                  <ReactStars {...options} />{" "}
                  <small className="fs-6 fw-bold">({options.value})</small>
                </div>
              </Card.Title>
              <Card.Text className="text-danger fs-5 fw-bold">
                {product.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col md={3} className="p-2 product-card">
        <Link className="text-decoration-none text-dark" to={product._id}>
          <Card>
            <Card.Img
              variant="top"
              src={product?.images[0].url}
              alt={product.name}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <div>{product.name}</div>
                <div className="d-flex align-items-center">
                  <ReactStars {...options} />{" "}
                  <small className="fs-6 fw-bold">({options.value})</small>
                </div>
              </Card.Title>
              <Card.Text className="text-danger fs-5 fw-bold">
                {product.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  );
};

export default Product;
