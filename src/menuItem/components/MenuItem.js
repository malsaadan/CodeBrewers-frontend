import React, { Component } from "react";
import "./MenuItem.css";
import Coffee from "./coffee.png";

// Import Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

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
    return (
      <Grid item xs={6} sm={4}>
        {/* <div className="menuItem"> */}
        {/* title & content & Author */}
        <Card>
          <CardMedia image="./coffee.png" title="Paella dish" />
          <CardContent>
            <Typography>
              <h4>{this.props.name}</h4>

              <sub>{this.props.description}</sub>
              <p>{this.props.price}</p>
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button
              size="small"
              color="primary"
              onClick={() => {
                console.log("test");
                alert("Item Added");
              }}
            >
              Add
            </Button> */}
          </CardActions>

          <CardActionArea>
            <CardMedia
              onClick={() => {
                console.log("test");
                alert("Item Added");
              }}
              component="img"
              alt="Coffee"
              height="140"
              src="data:image/jpeg;base64,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"
              title="Coffee"
            />
          </CardActionArea>
        </Card>
        {/* <img className="img" src={Coffee} /> */}
        {/* <a href="#" onClick={this.deleteArticle}>
          DELETE
        </a> */}
        {/* <button onClick={this.addArticles}> Add</button> */}
        {/* </div> */}
        {/* <Card variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
          </CardContent>
        </Card> */}
      </Grid>
=======
import EditItem from './editMenuItem';
import Button from "@material-ui/core/Button";

class MenuItem extends Component {

  // Handle on click event and pass the id of the current menu item to the parent's function to delete this specific menu item
  deleteMenuItem = event => {
    this.props.deleteMenuItem(this.props.id);
  };

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <sub>{this.props.description}</sub>
        <p>{this.props.price}</p>
        <EditItem id={this.props.id} editItem={this.props.editItem} name={this.props.name} description={this.props.description} price={this.props.price} picture={this.props.picture} category={this.props.category}/>
        <Button style={{"text-transform":"capitalize"}} variant="outlined" color="secondary" onClick={this.deleteMenuItem}>
          Delete
        </Button>
      </div>
    );
  }
}

export default MenuItem;
