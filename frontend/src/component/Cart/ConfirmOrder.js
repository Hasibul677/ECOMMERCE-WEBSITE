import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import MetaDeta from "../layout/MetaDeta";
import CheckOutSteps from "./CheckOutSteps";

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  return (
    <Fragment>
      <MetaDeta title="Confirm Order" />
      <CheckOutSteps activeStep={1} />
      <div>
        hello
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
