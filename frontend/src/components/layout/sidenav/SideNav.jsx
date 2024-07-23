import { Box, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import routes from "./sideNavData";

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
          {routes.map((route, index) =>
            route.child ? (
              <RouteList parent={route} key={index} />
            ) : (
              <RouteItem route={route} key={index} />
            )
          )}
        </List>
      )}
    </Box>
  );
};

export default SideNav;

const RouteItem = ({ route }) => {
  return (
    <ListItem sx={{ paddingLeft: "5px" }}>
      <ListItemButton
        component={!route.child ? NavLink : null}
        // style={({ isActive }) =>
        //   isActive
        //     ? {
        //         backgroundColor: "orange",
        //       }
        //     : null
        // }
        to={route.path}
        sx={{
          color: "white",
          "&:hover": {
            bgcolor: "warning.main",
          },
        }}
      >
        {route.text}
      </ListItemButton>
    </ListItem>
  );
};

const RouteList = ({ parent }) => {
  console.log("parent", parent);
  return (
    <>
      <RouteItem route={parent} />
      <List sx={{ paddingLeft: "20px" }}>
        {parent.child.map((route, index) =>
          route.child ? (
            <RouteList parent={route} key={index} />
          ) : (
            <RouteItem route={route} key={index} />
          )
        )}
      </List>
    </>
  );
};

// background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

// {isLogin && (
//   <List sx={{ color: "whitesmoke" }}>
//     {routes.map((route, index) => (
//       <ListItem>
//         <ListItemButton
//           component={NavLink}
//           style={({ isActive }) =>
//             isActive
//               ? {
//                   backgroundColor: "orange",
//                 }
//               : null
//           }
//           to={route.path}
//           sx={{
//             "&:hover": {
//               bgcolor: "warning.main",
//             },
//           }}
//         >
//           {route.text}
//         </ListItemButton>
//       </ListItem>
//     ))}
//   </List>
// )}
