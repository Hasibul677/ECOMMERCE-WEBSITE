import React from "react";
import { Slider, Typography } from "@material-ui/core";

const ProductsPriceSlider = ({price, handlePrice}) => {
  
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
    </div>
  );
};

export default ProductsPriceSlider;
