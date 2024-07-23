import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { doLogin } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    doLogin();
    navigate("/app/customer");
  };
  return (
    <Box
      border={1}
      width={"50%"}
      sx={{ height: "400px" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"lightskyblue"}
    >
      {/* <TextField label={"User"} /> */}
      <Button variant="contained" color="success" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
