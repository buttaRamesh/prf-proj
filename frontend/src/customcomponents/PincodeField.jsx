import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import React, { useState } from "react";
import CityField from "./CityFIeld";
import FormikMuiTextField from "../components/formik/FormikMuiTextField";

const fetchPinCodeData = async (code) => {
  const url = "http://127.0.0.1:8000/api/pincode?code=" + code;
  const opts = { method: "GET", mode: "no-cors" };
  const response = await fetch(url);
  const cityInfo = await response.json();
  console.log("pincode data ", cityInfo);
  return cityInfo;
};
const PincodeField = ({ name, label, fields, setCityOptions, ...props }) => {
  const [field, meta, helper] = useField(name);
  const formik = useFormikContext();

  const { onBlur, ...fieldProps } = field;
  const handleBlur = async (e) => {
    // onBlur(e);
    formik.setFieldTouched(name, true);

    const value = e.target.value;
    if (value.length != 6) {
      return;
    }
    const cityInfo = await fetchPinCodeData(value);
    // console.log(cityInfo);
    // console.log(fields);
    if (cityInfo) {
      formik.setFieldValue(fields["state"], cityInfo[0].state);
      formik.setFieldValue(fields["country"], "India");

      console.log("name", name);
      formik.setFieldTouched(fields["state"], true);
      formik.setFieldTouched(fields["country"], true);
    }
    if (cityInfo.length == 1) {
      formik.setFieldValue(fields["city"], cityInfo[0].city);
      setCityOptions([]);
    } else if (cityInfo.length > 1) {
      formik.setFieldValue(fields["city"], "");
      const cities = cityInfo.map((obj) => obj.city);
      setCityOptions(cities);
    }
  };

  return (
    <TextField
      name={name}
      label={label}
      {...fieldProps}
      {...props}
      onBlur={handleBlur}
    />
  );
};

export default PincodeField;
