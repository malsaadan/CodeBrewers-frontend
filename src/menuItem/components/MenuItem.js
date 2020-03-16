import React, { Component } from "react";

// Import Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class MenuItem extends React.Component {
  //   deleteArticle = event => {
  //     event.preventDefault();
  //     this.props.deleteArticle(this.props.id);
  //   };

  //   addArticles = event => {
  //     event.preventDefault();
  //     this.props.addArticle();
  //   };

  render() {
    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    return (
      <>
        {/* title & content & Author */}
        <h4>{this.props.name}</h4>
        <sub>{this.props.description}</sub>
        <p>{this.props.price}</p>
        {/* <a href="#" onClick={this.deleteArticle}>
          DELETE
        </a> */}

        {/* <button onClick={this.addArticles}> Add</button> */}
      </>
    );
  }
}

export default MenuItem;
