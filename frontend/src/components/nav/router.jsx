import { createBrowserRouter } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import LandingPage from "../layout/LandingPage";
import AuthRoute from "../auth/AuthRoute";
import Login from "../auth/Login";
import CustomerRegistration from "../customer/CustomerRegistration";
import CustomerList from "../customer/CustomerList";
import RootLayout from "../layout/RootLayout";
import AppLayout from "../layout/ApLayout";
import Page3 from "./Page3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "page3",
        element: <Page3 />,
      },
      {
        element: <AuthRoute />,
        children: [
          {
            path: "/app",
            element: <AppLayout />,
            children: [
              {
                path: "page1",
                element: <Page1 />,
              },
              {
                path: "page2",
                element: <Page2 />,
              },
              {
                path: "customer",
                children: [
                  {
                    index: true,
                    path: "list",
                    element: <CustomerList />,
                  },
                  {
                    path: "new",
                    element: <CustomerRegistration />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
