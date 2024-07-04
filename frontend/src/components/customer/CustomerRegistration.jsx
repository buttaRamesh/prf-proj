import React from "react";
import { formSteps, customerFormData } from "./CustomerFormSteps";
import { Box, Container } from "@mui/material";
import MultiStepperForm from "../stepper/MultiStepperForm";
import FormStep from "../stepper/FormStep";

const CustomerRegistration = () => {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: "lightskyblue" }}>
      <MultiStepperForm initialValues={customerFormData}>
        {formSteps.map((formStep) => (
          <FormStep
            key={formStep.name}
            stepName={formStep.name}
            validationSchema={formStep.schema}
          >
            {formStep.component}
          </FormStep>
        ))}
      </MultiStepperForm>
    </Container>
  );
};

export default CustomerRegistration;
