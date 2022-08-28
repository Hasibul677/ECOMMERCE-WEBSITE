import React from "react";
import "./ProductReview.css";
import ReactStars from "react-rating-stars-component";
import avatar from "../../images/avatar/avatar.png";

const ProductReview = ({ review }) => {
  const options = {
    edit: false,
    size: 21,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#ffd700",
    value: review.rating,
    isHalf: true,
  };

  return (
    <div className="card text-center p-2 m-2 shadow">
      <div>
        <img className="rounded-circle reviewImage" src={avatar} alt="" />
      </div>
      <div className="">
        <p className="fw-bold my-2"> {review?.name}</p>
        <div className="d-flex align-items-center justify-content-center">
          <ReactStars {...options} /> <span>({review?.rating})</span>
        </div>
        <span>{review?.comment}</span>
      </div>
    </div>
  );
};

export default ProductReview;
