import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { NavContext } from "./MultiStepperForm";

const NavigationPanel = () => {
  const { activeStep, navigateTo, isLastStep } = useContext(NavContext);
  const handleBack = () => {
    navigateTo(Math.max(activeStep - 1, 0));
  };
  return (
    <Box mt={2} mb={2} pl={1}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBack}
        sx={{ marginRight: 2, width: "200px" }}
        size="large"
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ width: "200px" }}
        size="large"
        type="submit"
      >
        {isLastStep() ? "Submit" : "Next"}
      </Button>
    </Box>
  );
};

export default NavigationPanel;
