import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../actions/cartAction";

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

  return (
    <Row className="gx-0">
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
