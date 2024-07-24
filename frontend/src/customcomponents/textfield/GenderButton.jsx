import {
  Box,
  Divider,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Man3Icon from "@mui/icons-material/Man3";
import Woman2Icon from "@mui/icons-material/Woman2";
import { blue, blueGrey, grey, lightGreen, red } from "@mui/material/colors";

const GenderButton = ({ name, value, setValue }) => {
  const handleChange = (ev, value) => {
    setValue(value);
  };

  return (
    <>
      <Box display={"flex"} gap={2}>
        <Typography alignSelf={"center"}>Gender</Typography>
        <Box
          borderRadius={"10px"}
          bgcolor={blue[100]}
          width={"150px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <ToggleButtonGroup
            name={name}
            color="secondary"
            exclusive
            sx={{
              // padding: "10px 20px",
              "& .MuiToggleButton-root": {
                padding: "5px",
              },
              "& .MuiToggleButtonGroup-grouped": {
                bgcolor: blueGrey["A200"],
                "&.Mui-selected": {
                  // bgcolor: lightGreen[500],
                  "& .MuiPaper-root": {
                    bgcolor: lightGreen[500],
                  },
                },
                "&:hovered": {
                  bgcolor: red[500],
                },
              },
            }}
            value={value}
            onChange={handleChange}
          >
            <ToggleButton
              value="male"
              sx={{
                borderRadius: "10px",
                width: "75px",
              }}
            >
              <Paper
                elevation={value == "male" ? 20 : 2}
                sx={{
                  padding: "1px",
                  borderRadius: "20px",
                  bgcolor: blueGrey["A200"],
                }}
              >
                <Man3Icon color="inherit" sx={{ fontSize: "40px" }} />
              </Paper>
            </ToggleButton>
            <ToggleButton
              value="female"
              sx={{
                borderRadius: "10px",
                width: "75px",
              }}
            >
              <Paper
                elevation={value == "female" ? 20 : 2}
                sx={{
                  padding: "1px",
                  borderRadius: "20px",
                  bgcolor: blueGrey["A200"],
                }}
              >
                <Woman2Icon color="inherit" sx={{ fontSize: "40px" }} />
              </Paper>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
    </>
  );
};

export default GenderButton;
