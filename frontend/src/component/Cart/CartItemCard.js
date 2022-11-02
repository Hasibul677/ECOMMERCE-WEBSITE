import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { SiAmazonpay } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const CartItemCard = ({ cartItems }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setAmount(
      cartItems.reduce((acc, obj) => acc + obj.quantity * obj.price, 0)
    );
    setQuantity(cartItems.reduce((acc, obj) => acc + obj.quantity, 0));
  }, [cartItems]);

  // router problem not fixed
  const handleCheckOut = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <Row className="gx-0">
      <div className="text-center bg-info text-white py-2">
        <h5 className="text-uppercase fw-bold ">Checkout Summary</h5>
      </div>
      <Col md={12} className="bg-light py-5 px-4">
        <div className="d-flex justify-content-between">
          <h6>Items</h6>
          <h6>{cartItems.length}</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Quantity</h6>
          <h6>{quantity}</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6> Amount</h6>
          <h6>{amount.toFixed(2)} Tk</h6>
        </div>
        <Button
          onClick={handleCheckOut}
          className="ms-auto rounded-pill p-1 px-3 d-flex align-items-center my-3"
        >
          <SiAmazonpay className="fs-5" /> <div className="ms-1">CHECK OUT</div>
        </Button>
      </Col>
    </Row>
  );
};

export default CartItemCard;
