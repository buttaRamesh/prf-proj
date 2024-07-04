import { Box, TextField } from "@mui/material";
import { useField } from "formik";
import FormStepper from "./FormStepper";
import FormStep from "./FormStep";
import * as yup from "yup";

const FormikTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      label={label}
      {...field}
      {...props}
      size="small"
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

const TestStep1 = () => (
  <Box
    // width={600}
    // height={400}
    display={"flex"}
    flexDirection={"column"}
    alignItems={"center"}
    // justifyContent={"space-between"}
    p={2}
    gap={2}
  >
    <FormikTextField label={"name"} name="name" id="name" />
    <FormikTextField label={"email"} name="email" id="email" />
  </Box>
);

const TestStep2 = () => (
  <Box
    display={"flex"}
    flexDirection={"column"}
    alignItems={"center"}
    justifyContent={"space-between"}
    p={2}
  >
    <FormikTextField label={"city"} fullWidth name="city" />
    <FormikTextField label={"state"} fullWidth name="state" />
  </Box>
);
const initialValues = { name: "" };
let personSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
});
let locationSchema = yup.object({
  city: yup.string().required(),
  state: yup.string().required(),
});

export const TestStepper = () => (
  <FormStepper initialValues={initialValues}>
    <FormStep stepName="personal" validationSchema={personSchema}>
      <TestStep1 />
    </FormStep>
    <FormStep stepName="location" validationSchema={locationSchema}>
      <TestStep2 />
    </FormStep>
  </FormStepper>
);
