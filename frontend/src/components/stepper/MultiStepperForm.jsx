import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { Form, Formik } from "formik";
import React, { createContext, useState } from "react";
import NavigationPanel from "./NavigationPanel";
import { BorderLeft } from "@mui/icons-material";

const stepStyle = {
  boxShadow: 2,
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
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

export const NavContext = createContext();
const MultiStepperForm = ({ children, initialValues }) => {
  const [activeStep, navigateTo] = useState(2);
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
      // validationSchema={personalDetailsSchema}
      validationSchema={currentStep.props.validationSchema}
    >
      {(formik) => (
        <Form>
          <NavContext.Provider value={{ activeStep, navigateTo, isLastStep }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              sx={{
                minHeight: 400,
              }}
            >
              <Box
                mt={2}
                flexGrow={1}
                // borderColor={"orange"}
                border={2}
                borderRadius={"20px"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Stepper
                  activeStep={activeStep}
                  alternativeLabel
                  sx={stepStyle}
                >
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <StepLabel>{step.props.stepName}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {currentStep}
              </Box>

              <NavigationPanel />
            </Box>
          </NavContext.Provider>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepperForm;
