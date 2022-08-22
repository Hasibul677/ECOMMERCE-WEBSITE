import React from "react";
import "./Product.css";
import { Card, Col} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const options = {
    edit: false,
    size: 21,
    color: "rgba(20,20,20,0.1)",
    activeColor: "gold",
    value: product.ratings,
    isHalf: true,
  };
  return (
    <Col md={6} lg={3} className="p-2 product-card">
      <Link className="text-decoration-none text-dark" to={`/product/${product._id}`}>
        <Card>
          <Card.Img
            className="img-fluid"
            src={product?.images[0].url}
            alt={product.name}
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <div>{product.name}</div>
              <div className="d-flex align-items-center">
                <ReactStars {...options} />{" "}
                <small className="fs-6 fw-bold">({product.numOfReviews})</small>
              </div>
            </Card.Title>
            <Card.Text className="text-danger fs-5 fw-bold">
              {product.price} Tk.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Product;
