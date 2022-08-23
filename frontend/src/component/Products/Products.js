import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearError, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useAlert } from "react-alert";
import { Col, Row } from "react-bootstrap";
import SearchProduct from "./SearchProduct";

const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { products, loading, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-4">
          <h3 className="title-text text-center text-md-start my-4">
            All Products
          </h3>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <SearchProduct />
            </Col>
            <Col md={3}></Col>

            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Products;
