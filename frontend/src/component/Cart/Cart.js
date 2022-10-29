import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (quantity, stock) => {
    if (stock <= quantity) return;
    let qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    let qty = quantity - 1;
    setQuantity(qty);
  };

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cartItems"));
    setCartItem(cart);
  }, []);

  return (
    <Row>
      <Col md={8} className="px-3">
        <div className="table-responsive">
          <table className="table table-hover text-center">
            <tbody>
              <tr className="">
                <th>Item</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
              {cartItems &&
                cartItems?.map((cart) => (
                  <tr key={cart.product} className="">
                    <td>
                      <img
                        className="cartImage"
                        src={cart.image}
                        alt="cartItem"
                      />
                    </td>
                    <td className="text-nowrap">{cart.name}</td>
                    <td>{cart.price} Tk</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          onClick={decreaseQuantity}
                          className="card bg-light border p-2"
                        >
                          <GrFormSubtract />
                        </Button>
                        <input
                          className="text-center mx-2 stockInput p-1 fw-bold"
                          value={quantity}
                          disabled
                        />
                        <Button
                          onClick={() =>
                            increaseQuantity(cart.quantity, cart.stock)
                          }
                          className="card bg-light border p-2"
                        >
                          <IoMdAdd className="text-dark" />
                        </Button>
                      </div>
                    </td>
                    <td>{cart.quantity * cart.price} Tk</td>
                    <td>
                      <MdDeleteForever className="fs-2 text-danger delete" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
};

export default Cart;
