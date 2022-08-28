import React from "react";
import "./SearchProduct.css";
import { Form } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";

const SearchProduct = ({ handleSubmit, setKeywords }) => {
  return (
    <div>
      <Form className="searchParent" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            className="searchInput bg-light"
            type="text"
            placeholder="Product Name"
            onChange={(e) => setKeywords(e.target.value)}
          />
        </Form.Group>
        <button type="submit" className="searchIcon fs-3 border rounded">
          <FcSearch />
        </button>
      </Form>
    </div>
  );
};

export default SearchProduct;
