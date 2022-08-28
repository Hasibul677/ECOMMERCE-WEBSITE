import React, { Fragment, useEffect } from "react";
import "./ProductDetails.css";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { clearError, getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import ProductReview from "./ProductReview";
import ProductDetailsView from "./ProductDetailsView";
import Carousel from "react-multi-carousel";
import { useAlert } from "react-alert";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
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
  const alert = useAlert();
  const { id } = useParams();

  const { product, loading, error } = useSelector(
    (state) => state?.productDetails
  );

  console.log(product.reviews);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ProductDetailsView product={product} />

          <div className="mt-5">
            <h3 className="title-text text-center text-md-start ps-md-2">
              Customer Reviews
            </h3>
            {product && product?.reviews?.length > 0 ? (
              <Carousel
                autoPlay={true}
                swipeable={true}
                infinite={true}
                slidesToSlide={1}
                responsive={responsive}
                customTransition="all 1s"
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "desktop"]}
              >
                {product?.reviews &&
                  product?.reviews.map((review) => (
                    <ProductReview key={review._id} review={review} />
                  ))}
              </Carousel>
            ) : (
              <div className="p-2">
                <strong>Design will be coming soon</strong>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductDetails;
