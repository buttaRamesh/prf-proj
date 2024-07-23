import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const RootOutlet = () => {
  console.log("rendering root outlet");

  return (
    <Box
      // border={3}
      // borderColor={"green"}
      flexGrow={1}
      display={"flex"}
      justifyContent={"center"}
    >
      <Outlet />
    </Box>
  );
};

export default RootOutlet;
