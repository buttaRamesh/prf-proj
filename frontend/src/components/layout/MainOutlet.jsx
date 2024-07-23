import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const MainOutlet = () => {
  console.log("main comp");

  return (
    <Box
      border={2}
      borderColor={"yellow"}
      pl={1}
      pt={2}
      // height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      flexGrow={1}
      gap={4}
      sx={{
        background: `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)`,
      }}
      padding={"40px 40px 40px 150px"}
    >
      <Outlet />
    </Box>
  );
};

export default MainOutlet;
