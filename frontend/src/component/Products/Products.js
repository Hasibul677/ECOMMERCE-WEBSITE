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
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState([0, 5000]);
  const [category, setCategory] = useState("");

  const handlePrice = (event, newPrice) => {
    setPrice(newPrice);
  };

  const handleCategories = (category) => {
    setCategory(category);
  };

  let count = filteredProductCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct(keyword, page, price, category));
  }, [dispatch, error, alert, keyword, page, price, category]);

  return (
    <div>
      <div className="mx-4">
        <Row className="d-block d-md-flex justify-content-center">
          <div className="d-flex justify-content-center mt-3">
            <div className="w-50">
              <SearchProduct />
            </div>
          </div>
          <Col md={2} className="mt-4">
            <ProductsPriceSlider
              price={price}
              handlePrice={handlePrice}
              categories={categories}
              handleCategories={handleCategories}
            />
          </Col>
          <Col md={10}>
            {loading ? (
              <Loader />
            ) : (
              <div>
                <h3 className="title-text text-center my-2">
                  {keyword === undefined ? (
                    "All Products"
                  ) : (
                    <span className="fs-5">
                      Search Result:{" "}
                      <span className="text-success">{keyword}</span>
                    </span>
                  )}
                </h3>
                <Row className="g-0">
                  {products &&
                    products.map((product) => (
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
    </div>
  );
};

export default Products;
