import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import NavigationPanel from "./NavigationPanel";

const stepStyle = {
  boxShadow: 2,
  // backgroundColor: "rgba(0,0,0,0.1)",
  padding: "4px 0 2px 0",
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "warning.main",
    },
    "& .MuiStepConnector-line": {
      borderColor: "warning.main",
      borderTopWidth: "2px",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "success.main",
    },
    "& .MuiStepConnector-line": {
      borderColor: "success.main",
      borderTopWidth: "2px",
    },
  },
  "& .MuiStepLabel-label": {
    fontSize: "0.6rem",
  },
  "& .MuiStepLabel-alternativeLabel": {
    "&.MuiStepLabel-label": {
      marginTop: "6px",
    },
  },
};

const MultiStepperForm = ({ children, initialValues }) => {
  const [activeStep, navigateTo] = useState(0);
  const steps = React.Children.toArray(children);
  const currentStep = steps[activeStep];

  const isLastStep = () => activeStep === steps.length - 1;
  const handleSubmit = (values, helpers) => {
    console.log("submited values");
    console.log(values);
    if (isLastStep()) {
      console.log("last step");
    } else {
      handleNext();
      helpers.setTouched({});
    }
  };
  const handleNext = () => {
    navigateTo(Math.min(activeStep + 1, steps.length - 1));
  };
  const handleBack = () => {
    navigateTo(Math.max(activeStep - 1, 0));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={currentStep.props.validationSchema}
    >
      {(formik) => (
        <Form>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            border={2}
            sx={{
              minHeight: 400,
            }}
          >
            <Box mt={2}>
              <Stepper activeStep={activeStep} alternativeLabel sx={stepStyle}>
                {steps.map((step, index) => (
                  <Step>
                    <StepLabel>{step.props.stepName}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {currentStep}
            </Box>

            <NavigationPanel
              handleBack={handleBack}
              handleNext={handleNext}
              isLastStep={isLastStep}
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepperForm;

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Padding } from "@mui/icons-material";

// const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: "calc(-50% + 16px)",
//     right: "calc(50% + 16px)",
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));
