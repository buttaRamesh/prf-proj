import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const CityField = ({ form, field, label, ...props }) => {
  const { name } = field;
  return (
    <Autocomplete
      {...props}
      {...field}
      onChange={(e, value) => {
        form.setFieldValue(name, value);
      }}
      onBlur={() => form.setFieldTouched(name, true)}
      getOptionLabel={(option) => {
        return option;
      }}
      freeSolo
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          size="small"
          variant="standard"
          fullWidth
          onChange={(e) => {
            form.setFieldValue(name, e.target.value);
          }}
        />
      )}
    />
  );
};

export default CityField;

export const CityFieldDemo = () => {
  const [options, setOptions] = useState([]);
  const optionsData = ["One", "Two", "Three", "Four"];
  const updateOptions = (e) => {
    setOptions(optionsData);
  };
  return (
    <Box padding={5}>
      <Formik initialValues={{ city: null }}>
        <Form>
          <Field name="city" component={CityField} options={options} />
          <Button variant="contained" onClick={updateOptions} mt={3}>
            Change Options
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};
