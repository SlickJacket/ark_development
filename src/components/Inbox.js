import React, { Component } from "react";

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const permDrawerWidth = 240;
    return (
      <div
        style={{
          width: `calc(100% - ${permDrawerWidth}px)`,
          marginLeft: `${permDrawerWidth}px`
        }}
      >
        Inbox
      </div>
    );
  }
}

export default AdminHome;
