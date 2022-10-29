import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { SiAmazonpay } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const CartItemCard = ({ cartItems }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [payment, setPayment] = useState(0);
  let shippCost = 100;

  useEffect(() => {
    setAmount(
      cartItems.reduce((acc, obj) => acc + obj.quantity * obj.price, 0)
    );
    setPayment(amount + shippCost - handleDiscount(amount + shippCost));
  }, [cartItems, amount, shippCost]);

  const handleDiscount = (total) => {
    return ((5 / 100) * total).toFixed(2);
  };

  const handleCheckOut = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Row className="gx-0 mt-4">
      <Col md={12} className="card shadow p-4">
        <div className="text-center">
          <h4>Checkout Summary</h4>
          <hr className="text-secondary" />
        </div>
        <div className="d-flex justify-content-between">
          <h6> Amount</h6>
          <h6>{amount.toFixed(2)} Tk</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Shipping</h6>
          <h6>{shippCost.toFixed(2)} Tk</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Total</h6>
          <h6>{(amount + shippCost).toFixed(2)} Tk</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Discount (5%)</h6>
          <h6>{handleDiscount(amount + shippCost)} Tk</h6>
        </div>
        <hr className="text-secondary" />
        <div className="d-flex justify-content-between">
          <h6>Payment</h6>
          <h6>{amount + shippCost - handleDiscount(amount + shippCost)} Tk</h6>
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
