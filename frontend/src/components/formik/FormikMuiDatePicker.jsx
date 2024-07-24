import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useField, useFormikContext } from "formik";
import { useState } from "react";

const FormikMuiDatePicker = ({ label, name }) => {
  const [field, meta, helpers] = useField(name);
  const form = useFormikContext();
  const onChange = (newValue) => {
    console.log("newValue", newValue);
    form.setFieldValue(name, newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{ width: "500px" }}
        label={label}
        name={name}
        onChange={onChange}
        value={field.value || null}
        onBlur={(e) => form.setFieldTouched(name, true)}
      />
    </LocalizationProvider>
  );
};

export default FormikMuiDatePicker;
