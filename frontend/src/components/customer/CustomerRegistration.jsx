import React from "react";
import {
  formSteps,
  customerFormData,
  initialCustomerFormData,
} from "./CustomerFormSteps";
import { Box, Container } from "@mui/material";
import MultiStepperForm from "../stepper/MultiStepperForm";
import FormStep from "../stepper/FormStep";

const CustomerRegistration = () => {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: "lightskyblue" }}>
      <MultiStepperForm initialValues={initialCustomerFormData}>
        {formSteps.map((formStep) => (
          <FormStep
            key={formStep.name}
            stepName={formStep.name}
            validationSchema={formStep.schema}
          >
            {/* {formStep.component} */}
            {formStep.getComponent({ "test prop": formStep.name })}
          </FormStep>
        ))}
      </MultiStepperForm>
    </Container>
  );
};

export default CustomerRegistration;
