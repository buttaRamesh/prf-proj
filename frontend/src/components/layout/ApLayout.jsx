import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import SideNav from "./sidenav/SideNav";
import MainOutlet from "./MainOutlet";

const AppLayout = () => {
  console.log("rendering AppLayout");
  return (
    <Box
      // border={1}
      // borderColor={"red"}
      flexGrow={1}
      display={"flex"}
    >
      <SideNav />
      <MainOutlet />
    </Box>
  );
};

export default AppLayout;
