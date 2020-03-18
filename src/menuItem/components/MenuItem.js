import React, { Component } from "react";
import "./MenuItem.css";
import CoffeeLogo from "./coffee.png";

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

import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import DetailsOutlinedIcon from "@material-ui/icons/DetailsOutlined";

class MenuItem extends React.Component {
  render() {
    return (
      <Grid item xs={6} sm={4}>
        <Card>
          <CardContent
            style={{
              color: "#4c6873",
              backgroundColor: "#d9d4cc",
              padding: "2%"
            }}
            onClick={() => {
              console.log("test");
              alert(`${this.props.name} Added`);
            }}
          >
            <Typography>
              <h4>{this.props.name}</h4>
              <CardMedia image="./coffee.png" title="Paella dish" />
              <CardActionArea>
                <CardMedia
                  // onClick={() => {
                  //   console.log("test");
                  //   alert("Item Added");
                  // }}
                  component="img"
                  alt={`Picture of ${this.props.category}`}
                  height="140"
                  src={this.props.picture}
                  title={this.props.category}
                />
              </CardActionArea>
              <p>{this.props.description}</p>
              <sub>
                <LocalOfferOutlinedIcon /> {this.props.price} SAR
              </sub>
            </Typography>
          </CardContent>
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
    );
  }
}

export default MenuItem;
