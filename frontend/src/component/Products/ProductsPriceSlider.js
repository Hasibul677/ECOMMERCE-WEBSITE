import React from "react";
import { Slider, Typography } from "@material-ui/core";

const ProductsPriceSlider = ({
  price,
  handlePrice,
  categories,
  handleCategories,
}) => {

  return (
    <div>
      <Typography className="fw-bold">Price Range</Typography>
      <Slider
        value={price}
        onChange={handlePrice}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={5000}
      />

      <div >
        <Typography className="fw-bold mt-3">Categories</Typography>
        <div>
          { categories && categories.map((category) => (
            <li
              className="category-link text-secondary"
              key={category}
              onClick={() => handleCategories(category)}
            >
              {category}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPriceSlider;
