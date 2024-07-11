import { Box, TextField } from "@mui/material";
import { brown, green, red, indigo } from "@mui/material/colors";
import React from "react";

const RTrextField = () => {
  const cs = {
    width: "400px",
    "& .MuiInputLabel-standard": {
      paddingLeft: "5px",
      "&.Mui-focused": {
        color: indigo[500],
        fontWeight: "bold",
        "&.Mui-error": {
          color: "orange",
        },
      },
      "&.Mui-error": {
        color: "tomato",
        fontSize: "15px",
      },
    },

    "& .MuiInput-root": {
      paddingLeft: "5px",
      "&:before": {
        borderColor: indigo[700],
        borderWidth: ".12rem",
      },
      "&:after": {
        borderColor: indigo[900],
        borderWidth: ".12rem",
      },
      ":hover:not(.Mui-focused)": {
        "&:before": {
          borderColor: indigo[500],
          borderWidth: ".15rem",
        },
      },
      "&.Mui-error": {
        borderColor: red[500],
        borderWidth: ".5rem",
      },
    },
  };
  const error = true;
  return (
    <>
      <Box p={1} mb={2}>
        <TextField
          size="small"
          variant="standard"
          label="Name"
          error={error}
          sx={cs}
        />
      </Box>
      <Box p={1} mb={2}>
        <TextField variant="standard" label="Name" error={error} />
      </Box>
    </>
  );
};

export default RTrextField;
