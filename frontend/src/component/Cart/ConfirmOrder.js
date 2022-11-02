import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { SiAmazonpay } from "react-icons/si";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MetaDeta from "../layout/MetaDeta";
import CheckOutSteps from "./CheckOutSteps";

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  let shippCost = 100;

  useEffect(() => {
    setAmount(
      cartItems.reduce((acc, obj) => acc + obj.quantity * obj.price, 0)
    );
  }, [cartItems]);

  const handleDiscount = (total) => {
    return ((5 / 100) * total).toFixed(2);
  };

  const handleCheckOut = () => {
    // navigate("/login?redirect=/shipping");
  };

  return (
    <Fragment>
      <MetaDeta title="Confirm Order" />
      <CheckOutSteps activeStep={1} />
      <Row className="gx-0 px-3 px-md-5">
        {cartItems && (
          <Col md={8} className="px-3">
            <div className="table-responsive">
              <h4 className="text-uppercase fs-5 fw-bold text-primary">Your Cart Items:</h4>
              <table className="table table-hover text-center">
                <tbody>
                  <tr className="">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                  {cartItems &&
                    cartItems?.map((cart) => (
                      <tr key={cart.product} className="">
                        <td>
                          <a href={`/product/${cart.product}`}>
                            <img
                              className="cartImage"
                              src={cart.image}
                              alt="cartItem"
                            />
                          </a>
                        </td>
                        <td className="text-nowrap">{cart.name}</td>
                        <td className="text-nowrap">{cart.price} Tk</td>
                        <td className="text-nowrap">{cart.quantity}</td>

                        <td className="text-nowrap">
                          {cart.quantity * cart.price} Tk
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </Col>
        )}
        <Col md={4} className="card shadow py-5 px-4 mt-4">
          <div className="text-center">
            <h4>Order Summary</h4>
            <hr className="text-secondary" />
          </div>
          <div className="d-flex justify-content-between">
            <h6>Items</h6>
            <h6>( {cartItems.length} )</h6>
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
            <h6>Discount (5%)</h6>
            <h6>{handleDiscount(amount + shippCost)} Tk</h6>
          </div>
          <hr className="text-secondary" />
          <div className="d-flex justify-content-between">
            <h6>Payment</h6>
            <h6>
              {amount + shippCost - handleDiscount(amount + shippCost)} Tk
            </h6>
          </div>
          <Button
            onClick={handleCheckOut}
            className="ms-auto rounded-pill p-1 px-3 d-flex align-items-center my-3"
          >
            <SiAmazonpay className="fs-5" />{" "}
            <div className="ms-1">CHECK OUT</div>
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ConfirmOrder;
