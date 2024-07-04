import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";

const FormStepper = ({ children, initialValues }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = React.Children.toArray(children);
  const currentStep = steps[activeStep];

  const isLastStep = () => activeStep === steps.length - 1;
  const handleSubmit = (values, helpers) => {
    console.log("submited values");
    console.log(values);
  };
  const handleNext = () => {
    setActiveStep((curr) => curr + 1);
  };
  const handleBack = () => {
    setActiveStep((curr) => curr - 1);
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
            width={600}
            height={400}
            p={2}
            margin={"auto"}
            bgcolor={"lightgrey"}
          >
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((step, index) => (
                <Step>
                  <StepLabel>{step.props.stepName}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {currentStep}
            {isLastStep() ? (
              <Button type="submit" onClick={formik.handleSubmit}>
                {" "}
                Submit
              </Button>
            ) : (
              <Button onClick={handleNext}> Next</Button>
            )}
            <Button onClick={handleBack}>Back</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default FormStepper;

// return (
//     <Box width={600} height={400} p={2} margin={"auto"} bgcolor={"lightgrey"}>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {["One", "Two", "Three", "Four"].map((label, index) => (
//           <Step>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <Button onClick={handleNext}> Next</Button>
//       <Button onClick={handleBack}>Back</Button>
//     </Box>
//   );
