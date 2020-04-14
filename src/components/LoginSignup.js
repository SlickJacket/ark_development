import React from "react";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";

export default function LoginSignup() {

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route
          exact
          path={"/admin/signup"}
          render={routerProps => <Signup {...routerProps} />}
        />
        <Route
          exact
          path={"/admin/login"}
          render={routerProps => <Login {...routerProps} />}
        />
      </Switch>
    </ThemeProvider>
  );
}
