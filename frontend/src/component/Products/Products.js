import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearError, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useAlert } from "react-alert";
import { Col, Row } from "react-bootstrap";
import SearchProduct from "./SearchProduct";
import { useParams } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import ProductsPriceSlider from "./ProductsPriceSlider";
import categories from "../../json/categories.json";
import { useNavigate } from "react-router-dom";
import MetaDeta from "../layout/MetaDeta";

const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const {
    products,
    loading,
    error,
    prodctsCount,
    resultPerPage,
    filteredProductCount,
  } = useSelector((state) => state.products);
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [keywords, setKeywords] = useState("");
  const [price, setPrice] = useState([0, 5000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const handlePrice = (event, newPrice) => {
    setPage(1);
    setPrice(newPrice);
  };
  const handleRating = (event, newRating) => {
    setPage(1);
    setRatings(newRating);
  };
  const handleCategories = (category) => {
    setPage(1);
    setCategory(category);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setCategory("");
    if (keywords.trim()) {
      navigate(`/products/${keywords}`);
    } else {
      navigate(`/products/${keywords}`);
    }
  };

  let count = filteredProductCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct(keyword, page, price, category, ratings));
  }, [dispatch, error, alert, keyword, page, price, category, ratings]);

  return (
    <div className="mx-4">
      <MetaDeta title="PRODUCTS SHOPPING 1416"/>
      <Row className="d-block d-md-flex justify-content-center">
        <Col md={2} className="mt-4">
          <ProductsPriceSlider
            price={price}
            handlePrice={handlePrice}
            categories={categories}
            handleCategories={handleCategories}
            ratings={ratings}
            handleRating={handleRating}
          />
        </Col>
        <Col md={10}>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div className="d-flex justify-content-center mt-3">
                <div className="w-50">
                  <SearchProduct
                    handleSubmit={handleSubmit}
                    setKeywords={setKeywords}
                  />
                </div>
              </div>

              <h3 className="title-text text-center my-2">All Products</h3>
              <Row className="g-0 d-md-flex justify-content-center">
                {products &&
                  products?.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                {prodctsCount > resultPerPage && count > resultPerPage && (
                  <div className="d-flex justify-content-center">
                    <Pagination
                      count={Math.ceil(count / 8)}
                      page={page}
                      color="secondary"
                      variant="outlined"
                      shape="rounded"
                      onChange={(e, value) => setPage(value)}
                    />
                  </div>
                )}
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Products;
