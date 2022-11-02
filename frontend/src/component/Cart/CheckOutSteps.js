import React, { Fragment } from "react";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { MdLocalShipping } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";

const CheckOutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Shipping</Typography>,
      icon: <MdLocalShipping />,
    },
    {
      label: <Typography>Confirm</Typography>,
      icon: <BsShieldFillCheck />,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <GiMoneyStack />,
    },
  ];
  const stepStyle = {
    boxSizing: "border-box",
  };
  return (
    <Fragment>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyle}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              className={`fs-4 ${activeStep >= index ? "text-success" : ""}`}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
};

export default CheckOutSteps;
