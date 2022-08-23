import React from "react";
import "./SearchProduct.css"
import { Form } from "react-bootstrap";
import {FcSearch} from "react-icons/fc"

const SearchProduct = () => {
  return (
    <div>
      <Form className="searchParent">
        <Form.Group className="mb-3">
          <Form.Control className="searchInput bg-light" type="text" placeholder="Product Name" />
        </Form.Group>
        <button className="searchIcon fs-3 border rounded">
        <FcSearch/>
        </button>
      </Form>
    </div>
  );
};

export default SearchProduct;
