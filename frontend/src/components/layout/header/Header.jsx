import { MenuRounded } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useAuth } from "../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLogin, doLogin, doLogout } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    doLogout();
    navigate("");
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start">
            <MenuRounded />
          </IconButton>
          <Typography variant={"h6"} component={"div"}>
            Farmers Society
          </Typography>

          <Button
            variant="contained"
            color="success"
            className="tempclass"
            onClick={isLogin ? handleLogout : handleLogin}
            sx={{
              marginLeft: "auto",
            }}
          >
            {isLogin ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
