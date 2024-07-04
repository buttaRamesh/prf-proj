import { Box, Button } from "@mui/material";
import React from "react";

const NavigationPanel = ({ handleBack, handleNext, isLastStep }) => {
  return (
    <Box mt={2} mb={2} pl={1}>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginRight: 2 }}
        onClick={handleBack}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="secondary"
        // onClick={handleNext}
        type="submit"
      >
        {isLastStep() ? "Review" : "Next"}
      </Button>
    </Box>
  );
};

export default NavigationPanel;
