import React from "react";
import {
  formSteps,
  customerFormData,
  initialCustomerFormData,
} from "./CustomerFormSteps";
import { Box, Container, Typography } from "@mui/material";
import MultiStepperForm from "../stepper/MultiStepperForm";
import FormStep from "../stepper/FormStep";

const CustomerRegistration = () => {
  const onSubmit = async (values, actions) => {
    console.log("posting data to URL");

    const api = "http://localhost:8000/api/cust/";
    const resp = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await resp.json();
    console.log("response data ", data);
  };
  return (
    <>
      <Box pl={2} color={"brown"}>
        <Typography variant="h6">Customer Registration</Typography>
      </Box>
      <MultiStepperForm
        initialValues={initialCustomerFormData}
        onSubmit={onSubmit}
      >
        {formSteps.map((formStep) => (
          <FormStep
            key={formStep.name}
            stepName={formStep.name}
            validationSchema={formStep.schema}
          >
            {formStep.getComponent({ "test prop": formStep.name })}
          </FormStep>
        ))}
      </MultiStepperForm>
    </>
  );
};

export default CustomerRegistration;
