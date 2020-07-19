import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

interface PrivateRouteProps {
  component: React.ComponentType;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  path,
  ...args
}) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    path={path}
    {...args}
  />
);

export default PrivateRoute;
