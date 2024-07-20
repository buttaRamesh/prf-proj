import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Box
      pl={1}
      pt={2}
      height={"100%"}
      flexGrow={1}
      sx={{
        background: `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)`,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Main;
