import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

const PinCode = ({ name, label, pinCode, handlePinCode, ...props }) => {
  return (
    <TextField
      label={label}
      onBlur={handlePinCode}
      {...props}
      value={pinCode}
      onChange={(e) => console.log(e.value)}
    />
  );
};

export default PinCode;

export const PinCodeDemo = () => {
  const [pinCode, setPinCode] = useState();
  const [cityv, setCity] = useState("");
  const [statev, setState] = useState("");
  const pinCodes = {
    100: { state: "TG", city: "HYD" },
    200: { state: "TG", city: "ADB" },
    300: { state: "TG", city: "WGL" },
  };
  const handlePinCode = (e) => {
    console.log("pin code :", e.target.value);
    const { state, city } = pinCodes[e.target.value];
    console.log(state, city);
    setCity(city);
    setState(state);
  };
  return (
    <Box
      width="60%"
      padding={5}
      margin={"auto"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
    >
      <PinCode
        name="pinCode"
        label="Pin Code"
        pinCode={pinCode}
        handlePinCode={handlePinCode}
      />
      <TextField
        name="city"
        label="City"
        value={cityv}
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        name="state"
        label="State"
        value={statev}
        onChange={(e) => setState(e.target.value)}
      />
    </Box>
  );
};
