import React from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";

interface AuthorizedRouteProps {
  authorized: boolean;
  redirectTo: string;
  path: string;
  element: React.ReactNode;
}

const AuthorizedRoute: React.FC<AuthorizedRouteProps> = ({
  authorized,
  redirectTo,
  path,
  element,
}) => {
  const navigate = useNavigate();

  if (!authorized) {
    navigate(redirectTo);
    return null;
  }

  return <Route;
};

export default AuthorizedRoute;
