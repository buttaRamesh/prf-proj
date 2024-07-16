import { Box, Button, TextField } from "@mui/material";
import { Field, Form, Formik, useField, useFormikContext } from "formik";
import { TextField as TextFieldF, Autocomplete } from "formik-mui";
import React, { useState } from "react";
import CityField from "./CityFIeld";

const fetchPinCodeData = async (code) => {
  const url = "http://127.0.0.1:8000/api/pincode?code=" + code;
  const opts = { method: "GET", mode: "no-cors" };
  const response = await fetch(url);
  const cityInfo = await response.json();
  console.log("pincode data ", cityInfo);
  return cityInfo;
};
const PincodeAutoCompletion = ({
  field,
  form,
  label,
  fields,
  setCityOptions,
  ...props
}) => {
  const { onBlur, ...fieldProps } = field;
  const handleBlur = async (e) => {
    onBlur(e);
    const value = e.target.value;
    if (value.length != 6) {
      return;
    }
    const cityInfo = await fetchPinCodeData(value);
    console.log(cityInfo);
    console.log(fields);
    if (cityInfo) {
      form.setFieldValue(fields["state"], cityInfo[0].state);
      form.setFieldValue(fields["country"], "India");

      form.setFieldTouched(fields["state"], true);
      form.setFieldTouched(fields["country"], true);
    }
    if (cityInfo.length == 1) {
      form.setFieldValue(fields["city"], cityInfo[0].city);
      setCityOptions([]);
    } else if (cityInfo.length > 1) {
      form.setFieldValue(fields["city"], "");
      const cities = cityInfo.map((obj) => obj.city);
      setCityOptions(cities);
    }
  };
  // console.log("form");
  // console.log(form);
  return (
    // <TextFieldF label={label} onBlur={handleBlur} {...fieldProps} {...props} />
    <Field
      name="district"
      label={label}
      onBlur={handleBlur}
      {...fieldProps}
      component={TextFieldF}
      {...props}
    />
  );
};

export default PincodeAutoCompletion;

export const PincodeAutoCompletionDemo = () => {
  const [cityOptions, setCityOptions] = useState([]);

  return (
    <Formik
      initialValues={{ pinCode: "", city: null, district: "", state: "" }}
      onSubmit={(values, actions) => {
        console.log("submited values");
        console.log(values);
      }}
    >
      <Form>
        <Box
          width="60%"
          padding={5}
          margin={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <Field
            name="pinCode"
            label="Pin Code"
            options={cityOptions}
            setCityOptions={setCityOptions}
            fields={["state,district"]}
            component={PincodeAutoCompletion}
          />
          <Field
            name="city"
            component={CityField}
            options={cityOptions}
            label="City/Village/Colony"
          />
          <Field name="district" label="District" component={TextFieldF} />
          <Field name="state" label="State" component={TextFieldF} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};
