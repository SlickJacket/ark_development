import React, { Component, Fragment } from "react";
import AdminDashoard from "./AdminDashboard";
import ClientView from "./ClientView";
import LoginSignup from "./LoginSignup"
import "./App.css";

class App extends Component {
  renderView = () => {
    if (
      window.location.href.indexOf("admin") > -1 &&
      window.location.href.indexOf("signup") === -1 &&
      window.location.href.indexOf("login") === -1
    ) {
      return <AdminDashoard />;
    } else if (
      window.location.href.indexOf("signup") > -1 ||
      window.location.href.indexOf("login") > -1
    ) {
      return <LoginSignup />;
    } else {
      return <ClientView />;
    }
  };

  render() {
    return <Fragment>{this.renderView()}</Fragment>;
  }
}

export default App;
