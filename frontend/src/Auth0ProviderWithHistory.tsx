import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "./config";

interface Auth0ProviderWithHistoryProps {
  children: React.ReactNode;
}

const Auth0ProviderWithHistory: React.FC<Auth0ProviderWithHistoryProps> = ({
  children,
}) => {
  const domain = config.REACT_APP_AUTH0_DOMAIN;
  const clientId = config.REACT_APP_AUTH0_CLIENT_ID;
  const audience = config.REACT_APP_AUTH0_AUDIENCE;
  const history = useHistory();

  const onRedirectCallback = (appState: { returnTo?: string }) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
