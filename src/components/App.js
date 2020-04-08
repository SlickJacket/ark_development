import React, { Component, Fragment } from "react";
import AdminDashoard from "./AdminDashboard";
import ClientView from "./ClientView"
import "./App.css";

class App extends Component {
  renderView = () => {
    if (window.location.href.indexOf("admin") > -1) {
      return <AdminDashoard/>;
    } else {
      return <ClientView/>;
    }
  };

  render() {
    return (<Fragment>{this.renderView()}</Fragment>);
  }
}

export default App;
