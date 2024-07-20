import React from "react";
import Header from "./header/Header";
import SideNav from "./sidenav/SideNav";
import Main from "./main/Main";
import { Box, CssBaseline, Divider, Grid, Stack } from "@mui/material";
import Body from "./body/Body";
import { useAuth } from "../auth/AuthProvider";
import LandingPage from "./LandingPage";

const ScreenLayout = () => {
  const { isLogin } = useAuth();
  console.log("loading SL");
  return (
    <>
      <Box
        height={"100vh"}
        padding={"3px"}
        border={2}
        display={"flex"}
        flexDirection={"column"}
      >
        <CssBaseline />
        <Header />
        {/* {isLogin ? <Body /> : <LandingPage />} */}
        <Body />
      </Box>
    </>
  );
};

export default ScreenLayout;
