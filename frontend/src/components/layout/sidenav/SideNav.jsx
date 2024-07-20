import { Box, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

const SideNav = () => {
  const { isLogin } = useAuth();
  return (
    <Box
      pl={1}
      pt={2}
      height={"100%"}
      minWidth={"250px"}
      sx={{
        // background: `linear-gradient(to top, #30cfd0 0%, #330867 50%, #30cfd0 100%)`,
        // background: "#1d1919",
        background: isLogin
          ? "#1d1919"
          : `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)`,

        // #f8b739
      }}
    >
      {isLogin && (
        <List sx={{ color: "whitesmoke" }}>
          <ListItem>
            <ListItemButton
              component={Link}
              to="page1"
              sx={{
                "&:hover": {
                  bgcolor: "green",
                },
              }}
            >
              Page1
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="page2">
              Page2
            </ListItemButton>
          </ListItem>
        </List>
      )}
      {/* <List sx={{ color: "whitesmoke" }}>
        <ListItem>
          <ListItemButton
            component={Link}
            to="page1"
            sx={{
              "&:hover": {
                bgcolor: "green",
              },
            }}
          >
            Page1
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="page2">
            Page2
          </ListItemButton>
        </ListItem>
      </List> */}
    </Box>
  );
};

export default SideNav;

// background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
