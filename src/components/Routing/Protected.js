import React from "react";
import { Navigate, Outlet } from "react-router";
// <Outlet> element is used as a placeholder
// Outlet - A component that renders the next match in a set of matches.

const Protected = () => {
  const isAuth = window.localStorage.getItem("Token");
  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
};

export default Protected;
