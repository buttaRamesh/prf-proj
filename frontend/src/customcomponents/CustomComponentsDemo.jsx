import { Box, Container, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import RTrextField from "./textfield/RTrextField";
import GenderButton from "./textfield/GenderButton";

const CustomComponentsDemo = () => {
  const [gender, setGender] = useState("");

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box p={5} border={2} borderColor={"green"} height={"100vh"}>
          {/* <RTrextField /> */}
          <GenderButton gender={gender} setGender={setGender} />
        </Box>
      </Container>
    </>
  );
};

export default CustomComponentsDemo;
