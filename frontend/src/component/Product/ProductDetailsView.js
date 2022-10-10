import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { BsCart4 } from "react-icons/bs";
import { Button, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { addItemToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";

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

const ProductDetailsView = ({ product }) => {
  const options = {
    size: 21,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#ffd700",
    value: product?.ratings,
    isHalf: true,
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;
    let qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    let qty = quantity - 1;
    setQuantity(qty);
  };
  const addToCartHandler = () => {
    dispatch(addItemToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  return (
    <Row className="productDetails g-0 p-3 p-md-5 text-center text-md-start">
      <Col md={6} className="text-center">
        <Carousel
          showDots={true}
          swipeable={true}
          responsive={responsive}
          customTransition="all .5"
          transitionDuration={500}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          {product?.images &&
            product?.images.map((item, i) => (
              <img
                className="imageDetails"
                key={item?.url}
                src={item?.url}
                alt={`${i} Slide`}
              />
            ))}
        </Carousel>
      </Col>
      <Col md={6} className="ps-md-4 mt-4 mt-md-0 bg-color p-2 rounded">
        <h3>{product?.name}</h3>

        <div className="rating-div">
          <div className="rating py-3">
            {<ReactStars {...options} />}{" "}
            <small className="ms-3 fs-6">
              ({product?.numOfReviews}) Reviews
            </small>
          </div>
        </div>

        <div className="mt-4">
          <h4>{product?.price} Tk</h4>
          <div className="rating py-4">
            <Button
              onClick={decreaseQuantity}
              className="card bg-light border p-2"
            >
              <GrFormSubtract />
            </Button>
            <input
              className="text-center mx-2 stockInput p-1 fw-bold"
              value={quantity}
              disabled
            />
            <Button
              onClick={increaseQuantity}
              className="card bg-light border p-2"
            >
              <IoMdAdd className="text-dark" />
            </Button>

            <Button
              onClick={addToCartHandler}
              className="ms-4 rounded-pill fw-bold cartBtn p-1 px-3 d-flex align-items-center"
            >
              <BsCart4 className="fs-5" /> <div className="ms-1">Cart</div>
            </Button>
          </div>
        </div>

        <div className="rating-div mt-3">
          <div className="py-3 fw-bold">
            Status:{" "}
            <small
              className={`ms-2 fs-6 ${
                product?.stock >= 1 ? "text-success" : "text-danger"
              }`}
            >
              {product?.stock >= 1 ? "InStock" : " StockOut"}
            </small>
          </div>
        </div>

        <div className="mt-3">
          <h6 className="fw-bold"> Description</h6>
          <p className="fs-6">{product?.description}</p>
        </div>
        <Button className="rounded fw-bold cartBtn p-1 px-2 mt-4">
          Submit Review
        </Button>
      </Col>
    </Row>
  );
};

export default ProductDetailsView;
