import React, { Component } from "react";
import "./MenuItem.css";
import Coffee from "./coffee.png";

import EditItem from "./editMenuItem";

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
  // Handle on click event and pass the id of the current menu item to the parent's function to delete this specific menu item
  deleteMenuItem = event => {
    this.props.deleteMenuItem(this.props.id);
  };

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
          <CardActionArea>
            <CardMedia
              onClick={() => {
                console.log("test");
                alert("Item Added");
              }}
              component="img"
              alt="Coffee"
              height="140"
              src={this.props.picture}
              title={this.props.category}
            />
          </CardActionArea>
          <EditItem
            id={this.props.id}
            editItem={this.props.editItem}
            name={this.props.name}
            description={this.props.description}
            price={this.props.price}
            picture={this.props.picture}
            category={this.props.category}
          />
          <Button
            style={{ "text-transform": "capitalize" }}
            variant="outlined"
            color="secondary"
            onClick={this.deleteMenuItem}
          >
            Delete
          </Button>
        </Card>
      </Grid>
    );
  }
}

export default MenuItem;
