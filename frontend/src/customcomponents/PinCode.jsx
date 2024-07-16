import { Box, Button, TextField } from "@mui/material";
import { Field, Form, Formik, useField, useFormikContext } from "formik";
import { TextField as TextFieldF } from "formik-mui";
import React, { useState } from "react";

const pinCodes = {
  100: { state: "TG", city: "HYD" },
  200: { state: "TG", city: "ADB" },
  300: { state: "TG", city: "WGL" },
};

const CustomTextField = ({ field, form, label, ...props }) => {
  console.log("field");
  // console.log(field);
  console.log(form.touched);
  return <TextField label={label} {...props} {...field} />;
};

const PinCode = ({ label, ...props }) => {
  const formikContext = useFormikContext();
  const [field, meta] = useField(props);
  const { onBlur, ...fp } = field;
  // console.log(formikContext);
  //   console.log("field");
  //   console.log(field);
  //   console.log("meta");
  //   console.log(meta);
  const handleBlur = (e) => {
    const pc = e.target.value;
    console.log("handle blur", pc);
    if (pinCodes[pc]) {
      const { state, city } = pinCodes[pc];
      console.log(state, city);
      formikContext.setFieldValue("city", city);
      formikContext.setFieldValue("state", state);
      formikContext.setFieldTouched("city", true);
      formikContext.setFieldTouched("state", true);
    }
    field.onBlur(e);
  };
  return <TextField label={label} {...fp} onBlur={handleBlur} />;
};

export default PinCode;

export const PinCodeDemo = () => {
  //   const [pinCode, setPinCode] = useState();
  //   const [cityv, setCity] = useState("");
  //   const [statev, setState] = useState("");

  const initialData = {
    pinCode: "22",
    city: "",
    state: "",
    test: "",
  };

  const handlePinCode = (e) => {
    console.log("pin code :", e.target.value);
  };
  const handleSubmit = (values, helpers) => {
    console.log("form submited");
    console.log(values);
  };
  return (
    <Formik initialValues={initialData} onSubmit={handleSubmit}>
      <Form>
        <Box
          width="60%"
          padding={5}
          margin={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <PinCode name="pinCode" label="Pin Code" />
          <Field name="city" label="City" component={TextFieldF} />
          <Field name="test" label="Test" component={CustomTextField} />
          <Field name="state" label="State" component={TextFieldF} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};
