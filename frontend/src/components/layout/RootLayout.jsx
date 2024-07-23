import { CssBaseline, Stack } from "@mui/material";
import React from "react";
import Header from "./header/Header";
import AuthProvider from "../auth/AuthProvider";
import { Outlet } from "react-router-dom";
import RootOutlet from "./RootOutlet";

const RootLayout = () => {
  console.log("rendering root outlet");

  return (
    <>
      <Stack
        // border={2}
        // bgcolor={"lightgray"}
        minHeight={"100vh"}
      >
        <CssBaseline />
        <Header />
        <RootOutlet />
      </Stack>
    </>
  );
};

export default RootLayout;
