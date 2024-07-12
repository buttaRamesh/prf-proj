import { TextField } from "@mui/material";
import React from "react";

const PinCode = ({ name, label, ...props }) => {
  return <TextField label={label} {...props} />;
};

export default PinCode;
