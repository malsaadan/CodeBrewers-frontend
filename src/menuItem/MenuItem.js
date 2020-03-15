import React, { Component } from "react";

class MenuItem extends Component {
  //   deleteArticle = event => {
  //     event.preventDefault();
  //     this.props.deleteArticle(this.props.id);
  //   };

  //   addArticles = event => {
  //     event.preventDefault();
  //     this.props.addArticle();
  //   };
  render() {
    return (
      <div>
        {/* title & content & Author */}
        <h2>{this.props.name}</h2>
        <sub>{this.props.description}</sub>
        <p>{this.props.price}</p>
        {/* <a href="#" onClick={this.deleteArticle}>
          DELETE
        </a> */}
        <br />
        {/* <button onClick={this.addArticles}> Add</button> */}
      </div>
    );
  }
}

export default MenuItem;
