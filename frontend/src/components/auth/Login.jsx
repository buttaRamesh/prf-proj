import { Button } from "@mui/material";
import React from "react";
import { useAuth } from "./AuthProvider";

const Login = () => {
  const { doLogin } = useAuth();

  return (
    <div>
      <Button variant="contained" color="success" onClick={doLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
