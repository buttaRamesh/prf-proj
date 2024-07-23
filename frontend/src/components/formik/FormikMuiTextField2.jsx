import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

const FormikMuiTextField2 = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const form = useFormikContext();
  console.log("field");
  console.log(field);
  console.log(form);
  const handleBlur = (e) => {
    const name = e.target.name;
  };
  return <TextField name={name} {...props} {...field} />;
};

export default FormikMuiTextField2;
