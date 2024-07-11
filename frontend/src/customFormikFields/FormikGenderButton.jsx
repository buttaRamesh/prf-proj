import React from "react";
import GenderButton from "../customcomponents/textfield/GenderButton";
import { useField, useFormikContext } from "formik";

const FormikGenderButton = (props) => {
  const [{ name, value }, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const setValue = (value) => {
    console.log("truth gender ", value ? value : "other");
    setFieldValue(name, value ? value : "other");
  };

  return (
    <>
      <GenderButton name={name} value={value} setValue={setValue} />
    </>
  );
};

export default FormikGenderButton;
