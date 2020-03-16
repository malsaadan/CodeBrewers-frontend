import React, { Component } from "react";

class MenuItem extends Component {


  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <sub>{this.props.description}</sub>
        <p>{this.props.price}</p>
      </div>
    );
  }
}

export default MenuItem;
