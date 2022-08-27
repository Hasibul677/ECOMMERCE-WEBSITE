import React from "react";
import { Slider, Typography } from "@material-ui/core";

const ProductsPriceSlider = ({
  price,
  handlePrice,
  categories,
  handleCategories,
  handleRating,
  ratings,
}) => {
  return (
    <div>
      <Typography className="fw-bold">Price</Typography>
      <Slider
        value={price}
        onChange={handlePrice}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={5000}
      />
      {/* Categories  */}
      <div>
        <Typography className="fw-bold mt-2">Categories</Typography>
        <div className="text-center border rounded bg-light">
          {categories &&
            categories.map((category) => (
              <li
                className="category-link text-secondary border rounded"
                key={category}
                onClick={() => handleCategories(category)}
              >
                {category}
              </li>
            ))}
        </div>
      </div>
      {/* Rating  */}
      <fieldset className="mt-2">
        <Typography className="fw-bold">Rating</Typography>
        <Slider
          value={ratings}
          onChange={handleRating}
          valueLabelDisplay="auto"
          aria-labelledby="continuous-slider"
          min={0}
          max={5}
        />
      </fieldset>
    </div>
  );
};

export default ProductsPriceSlider;
