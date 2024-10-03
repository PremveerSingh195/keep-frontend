import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

type ChildrenProp = { children: ReactNode };

const PrivateRoute = ({ children }: ChildrenProp) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
