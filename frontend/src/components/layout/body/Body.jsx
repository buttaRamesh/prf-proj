import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import SideNav from "../sidenav/SideNav";
import Main from "../main/Main";

const Body = () => {
  return (
    <Box border={1} flexGrow={1} borderColor={"red"} display={"flex"}>
      <SideNav />
      <Main />
    </Box>
  );
};

export default Body;
