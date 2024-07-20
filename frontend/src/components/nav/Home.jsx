import { Box, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../auth/AuthProvider";
import Login from "../auth/Login";

const Home = () => {
  const { isLogin } = useAuth();
  return isLogin ? (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h5">Welcom to Farmer Society</Typography>
    </Box>
  ) : (
    <Login />
  );
};

export default Home;
