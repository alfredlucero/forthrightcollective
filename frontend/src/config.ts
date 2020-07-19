const config = {
  REACT_APP_AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN || "",
  REACT_APP_AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
  REACT_APP_AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_AUDIENCE || "",
  REACT_APP_API_HOST: process.env.REACT_APP_API_HOST || "http://localhost:8000",
};

console.log("config: ", config);

export default config;
