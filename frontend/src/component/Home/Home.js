import React, { Fragment, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Home.css";
import home from "../../images/home.png";
import ProductCard from "./ProductCard";
import { MdOutlineDirectionsRun } from "react-icons/md";
import MetaDeta from "../layout/MetaDeta";
import { useSelector, useDispatch } from "react-redux";
import { clearError, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaDeta title="SHOPPING 1416" />
      <Row className="banner d-flex align-items-center justify-content-center g-0 min-padding">
        <Col md={6} className="pt-5 text-center">
          <h4>
            Welcome to{" "}
            <span className="fw-bold " style={{ fontFamily: "cursive" }}>
              Shopping 1416
            </span>
          </h4>
          <h3 className="mt-3">FIND AMAZING PRODUCTS BELOW</h3>
          <a href="#product">
            <Button
              style={{ fontFamily: "cursive" }}
              className="bg-light text-dark fw-bold mt-4"
            >
              SHOPPING NOW <MdOutlineDirectionsRun className="fs-4" />
            </Button>
          </a>
        </Col>
        <Col md={5}>
          <img className="img-fluid" src={home} alt="" />
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : (
        <div className="mt-5" id="product">
          <h3 className="title-text text-center">Featured Products</h3>
          <Row className="g-0 px-3">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </Row>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
