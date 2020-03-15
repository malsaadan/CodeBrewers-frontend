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
        <sub>{this.props.de}</sub>
        <p>{this.props.content}</p>
        <a href="#" onClick={this.deleteArticle}>
          DELETE
        </a>
        <br />
        <button onClick={this.addArticles}> Add</button>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                // value={this.state.value}
                // onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default MenuItem;
