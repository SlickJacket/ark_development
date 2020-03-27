import React, { Component } from "react";

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{width: "100%", height: "578px"}}>
        <iframe
          src="https://gold-feed.com/charts/goldfeed29v9234ltlvl234l66l324/chart.php"
          scrolling="no"
          height="100%"
          width="100%"
          frameborder="0"
        ></iframe>
      </div>
    );
  }
}

export default Resources;
