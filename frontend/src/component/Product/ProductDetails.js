import React, { Fragment, useEffect } from "react";
import "./ProductDetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Loader from "../layout/Loader/Loader";
import ReactStars from "react-rating-stars-component";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const options = {
    edit: false,
    size: 21,
    color: "rgba(20,20,20,0.1)",
    activeColor: "gold",
    value: product.ratings,
    isHalf: true,
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Row className="productDetails g-0 p-5">
            <Col md={6} className="text-center">
              <Carousel
                showDots={true}
                swipeable={true}
                responsive={responsive}
                customTransition="all .5"
                transitionDuration={500}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              >
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="img-fluid"
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </Col>
            <Col md={6}>
              <h3>{product.name}</h3>
              <div>
                <div className="d-flex align-items-center">
                  <ReactStars {...options} />{" "}
                  <small className="fs-6">
                    ({product.ratings})
                  </small>
                </div>
                <span>({product.numOfReviews}) Reviewer</span>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Fragment>
  );
};

export default ProductDetails;
