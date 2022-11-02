import React, { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever, MdRemoveShoppingCart } from "react-icons/md";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemToCart } from "../../actions/cartAction";
import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    let newQty = quantity + 1;
    if (stock <= quantity) return;
    dispatch(addItemToCart(id, newQty));
  };
  const decreaseQuantity = (id, quantity) => {
    let newQty = quantity - 1;
    if (1 >= quantity) return;
    dispatch(addItemToCart(id, newQty));
  };

  const removeItem = (id) => {
    dispatch(removeItemToCart(id));
  };

  return (
    <Fragment>
      {cartItems.length !== 0 ? (
        <Row className="gx-0 mt-4 px-3 px-md-5">
          <Col md={9}>
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
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              onClick={() =>
                                decreaseQuantity(cart.product, cart.quantity)
                              }
                              className="card bg-light border p-2"
                            >
                              <GrFormSubtract />
                            </Button>
                            <input
                              className="text-center mx-2 stockInput p-1 fw-bold"
                              value={cart.quantity}
                              disabled
                            />
                            <Button
                              onClick={() =>
                                increaseQuantity(
                                  cart.product,
                                  cart.quantity,
                                  cart.stock
                                )
                              }
                              className="card bg-light border p-2"
                            >
                              <IoMdAdd className="text-dark" />
                            </Button>
                          </div>
                        </td>
                        <td className="text-nowrap">
                          {cart.quantity * cart.price} Tk
                        </td>
                        <td onClick={() => removeItem(cart.product)}>
                          <MdDeleteForever className="fs-2 text-danger delete" />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </Col>
          <Col md={3} className="ps-md-2">
            <CartItemCard cartItems={cartItems} />
          </Col>
        </Row>
      ) : (
        <div className="minHeight d-flex align-items-center justify-content-center">
          <div className="text-center">
            <MdRemoveShoppingCart className="display-2 text-danger" />
            <h3>No Product In Your Cart</h3>
            <Link className="linkpage text-style" to="/products">
              View Product
            </Link>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
