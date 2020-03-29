import React, { Component } from "react";

class Resources extends Component {
  state = {
    gold: ""
  };

  // componentDidMount = () => {
  //   fetch("https://current-precious-metal-price.p.rapidapi.com/metals/v1/0", {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "current-precious-metal-price.p.rapidapi.com",
  //       "x-rapidapi-key": "5cca9ead13mshea08d07b8faee70p107493jsnc4838177f4b2"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {this.setState({gold: data})})
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  render() {
    return (
      <div>
        {/* <h1>{this.state.gold}</h1> */}
       <h1> gold </h1>
      </div>
    );
  }
}

export default Resources;
