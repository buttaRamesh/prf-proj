import { createBrowserRouter } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import ScreenLayout from "../layout/ScreenLayout";
import LandingPage from "../layout/LandingPage";
import AuthRoute from "../auth/AuthRoute";
import Login from "../auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenLayout />,
    // children: [
    //   {
    //     path: "/",
    //     element: <LandingPage />,
    //   },
    //   {
    //     path: "/page1",
    //     element: <Page1 />,
    //   },
    //   {
    //     path: "/page2",
    //     element: <Page2 />,
    //   },
    // ],
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        // path: "/",
        element: <AuthRoute />,
        children: [
          {
            path: "/page1",
            element: <Page1 />,
          },
          {
            path: "/page2",
            element: <Page2 />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
