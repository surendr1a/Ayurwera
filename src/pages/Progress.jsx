import React from "react";
import { LinearProgress, Stepper, Step, StepLabel } from "@mui/material";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const stepNames = [
    "Personal Details",
    "Identification Details",
    "Address & Contact Information",
    "Professional Details",
  ];

  return (
    <div className="mb-6">
      <Stepper activeStep={currentStep - 1} alternativeLabel>
        {stepNames.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="mt-4">
        <LinearProgress
          variant="determinate"
          value={(currentStep / totalSteps) * 100}
          className="h-2 rounded"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
