import { TextField, styled } from "@mui/material";
import { useField } from "formik";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "20px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "12px",
  },
  "& .MuiFormHelperText-root": {
    fontSize: "0.65rem",
  },
});

const FormikMuiInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <CustomTextField
      variant="standard"
      label={label}
      {...field}
      {...props}
      size="small"
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export const FormikMuiDateField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker label={label} {...field} {...props} />
    </LocalizationProvider>
  );
};

export default FormikMuiInput;
