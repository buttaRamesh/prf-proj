import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AuthRoute = () => {
  const { isLogin } = useAuth();
  const navigate = useNavigate();
  if (!isLogin) navigate("/login");
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
