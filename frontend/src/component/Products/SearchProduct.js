import React, { useState } from "react";
import "./SearchProduct.css";
import { Form } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SearchProduct = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate(`/products/${keyword}`);
    }
  };

  return (
    <div>
      <Form className="searchParent" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            className="searchInput bg-light"
            type="text"
            placeholder="Product Name"
            onChange={(e) => setKeyword(e.target.value)}
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
