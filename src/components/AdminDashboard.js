import React from "react";
import Header from "./header/Header";
import Inbox from "./pages/inbox/Inbox";
import Profile from "./pages/profile/Profile";
import Videos from "./pages/videos/Videos";
import Gallery from "./pages/gallery/Gallery";
import Resources from "./pages/resources/Resources";
import Stones from "./pages/stones/Stones";
import Notes from "./pages/notes/Notes";
import Analytics from "./pages/analytics/Analytics";
import Settings from "./pages/settings/Settings";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";

export default function AdminDashboard() {
  const renderHeader = () => {
    if (
      window.location.href.indexOf("signup") === -1 &&
      window.location.href.indexOf("login") === -1
    ) {
      return <Header />;
    } else {
      return <Header style={{ display: "none" }} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {renderHeader()}
      <Switch>
        <Route
          exact
          path={"/admin/inbox"}
          render={routerProps => <Inbox {...routerProps} />}
        />
        <Route
          exact
          path={"/admin/profile"}
          render={routerProps => <Profile {...routerProps} />}
        />
        <Route
          exact
          path={"/admin/videos"}
          render={routerProps => <Videos {...routerProps} />}
        />
        <Route
          exact
          path={"/admin/gallery"}
          render={routerProps => <Gallery {...routerProps} />}
        />
        <Route
          exact
          path={"/admin/resources"}
          render={routerProps => <Resources {...routerProps} />}
        />
        <Route
          exact
          path={"/admin/stones"}
          render={routerProps => <Stones {...routerProps} />}
        />
        <Route
          exact
          path={"/admin/notes"}
          render={routerProps => <Notes {...routerProps} />}
        />
        <Route
          exact
          path={"/admin/metal-calculator"}
          render={routerProps => <Resources {...routerProps} />}
        />
        <Route
          exact
          path={"/admin/analytics"}
          render={routerProps => <Analytics {...routerProps} />}
        />
        <Route
          exact
          path={"/admin/settings"}
          render={routerProps => <Settings {...routerProps} />}
        />
      </Switch>
    </ThemeProvider>
  );
}
