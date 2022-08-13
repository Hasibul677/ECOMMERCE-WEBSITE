import React from "react";
import "./Header.css";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-2 px-md-5 fs-5 fw-bold d-flex">
      <Navbar.Brand>
        <Link to="/">
        <img
          src={logo}
          width="70"
          height="70"
          class="d-inline-block align-top"
          alt=""
        /></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div className="container-fluid">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="text-dark text-decoration-none me-3">Home</Link>
            <Link to="/product" className="text-dark text-decoration-none me-3">Product</Link>
            <Link to="/contact" className="text-dark text-decoration-none me-3">Contact</Link>
            <Link to="/about" className="text-dark text-decoration-none me-3">About</Link>
          </Nav>
          <Nav className="ms-auto me-4">
            <Nav.Link className="mt-2" href="#home">
              <Button className="bg-light text-dark fw-bold">Login</Button>
            </Nav.Link>
            <Nav.Link className="mt-2" href="#link">
              <Button className="bg-light text-dark fw-bold">Register</Button>
            </Nav.Link>
            <NavDropdown
              title={
                <img
                  className="logo"
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                  alt="Img"
                />
              }
            >
              <NavDropdown.Item>
                <CgProfile /> Profile
              </NavDropdown.Item>
              <NavDropdown.Item>
                <BiLogOut /> Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
