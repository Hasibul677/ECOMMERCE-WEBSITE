import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearError, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useAlert } from "react-alert";
import { Col, Row } from "react-bootstrap";
import SearchProduct from "./SearchProduct";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { products, loading, error, productsCount } = useSelector(
    (state) => state.products
  );

  const { keyword } = useParams();
console.log(keyword);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct(keyword));
  }, [dispatch, error, alert, keyword]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-4">
          <Row className="d-block d-md-flex justify-content-center">
            <Col md={3}></Col>
            <Col md={6} className="mt-3">
              <SearchProduct />
            </Col>
            <Col md={3}></Col>
            <h3 className="title-text text-center my-2">
             {keyword === undefined ? "All Products" : <span className="fs-5">Search Result:  <span className="text-success">{keyword}</span></span>}
            </h3>
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
