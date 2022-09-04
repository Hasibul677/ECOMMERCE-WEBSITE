import React, { useState } from "react";
import "./Header.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../../images/logo.png";
import { GiShoppingCart } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FcBusinessman, FcExpand } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../layout/Loader/Loader";
import { useDispatch } from "react-redux";
import {useAlert} from "react-alert"
import {useNavigate} from "react-router-dom"
import { logout } from "../../../actions/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const alert = useAlert()
  const navigate = useNavigate()
  const { loading, user, isAuthenticated } = useSelector((state) => state.user);
  const [show, setShow] = useState("d-none");

  const handleLogout = () => {
    dispatch(logout());
    alert.success("Logout!")
    navigate("/")
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Navbar
          bg="light"
          expand="lg"
          className="px-2 px-md-5 fs-6 fw-bold d-flex p-0"
        >
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt=""
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="container-fluid">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link
                  to="/home"
                  className="text-dark text-decoration-none me-3 menu-text"
                >
                  HOME
                </Link>
                <Link
                  to="/products"
                  className="text-dark text-decoration-none me-3 menu-text"
                >
                  PRODUCTS
                </Link>
                <Link
                  to="/contact"
                  className="text-dark text-decoration-none me-3 menu-text"
                >
                  CONTACT
                </Link>
                <Link
                  to="/about"
                  className="text-dark text-decoration-none me-3 menu-text"
                >
                  ABOUT
                </Link>
              </Nav>
              <Nav className="ms-auto">
                {isAuthenticated && (
                  <div
                    className="icon-parent"
                    onClick={() =>
                      setShow(show === "d-none" ? "d-block" : "d-none")
                    }
                  >
                    <img className="logo" src={user?.avatar?.url} alt="Img" /><FcExpand />
                    <div className={`${show} icon-div mt-3 text-center`}>
                      <div className="card menu-parent my-2">
                        <Link to="/profile">
                          <FcBusinessman className="fs-3 text-dark" />
                          <span className="menu-child bg-white text-dark px-2 rounded">{user.role === "admin"? "Admin": "Profile"}</span>
                        </Link>
                      </div>
                      <div className="card menu-parent my-2">
                        <Link to="/profile">
                          <GiShoppingCart className="fs-3 text-dark" />
                          <span className="menu-child bg-white text-dark px-2 rounded">Order</span>
                        </Link>
                      </div>
                      <div className="card menu-parent my-1">
                        <div onClick={handleLogout}>
                          <BiLogOut className="fs-3" />
                          <span className="menu-child bg-white text-dark px-2 rounded">Logout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!isAuthenticated && (
                  <Link className="mt-3 mb-1" to="/login">
                    <Button className="bg-light text-dark fw-bold">
                      Login
                    </Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      )}
    </div>
  );
};

export default Header;
