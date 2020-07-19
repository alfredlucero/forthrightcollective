import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import BusinessesPage from "./pages/Businesses";

import "./App.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <PrivateRoute path="/businesses" component={BusinessesPage} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
