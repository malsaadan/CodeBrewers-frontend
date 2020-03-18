// Import react component
import React, { Component } from "react";

// Import the child component
import "./MenuItem.css";

// Import Material UI
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";

class MenuItem extends React.Component {
  render() {
    return (
      // put the Grid for the layout
      <Grid item xs={6} sm={4}>
        {/* initiate the card component for each item  */}
        <Card>
          <CardContent
            // embedded style for cardContent
            style={{
              color: "#4c6873",
              backgroundColor: "#d9d4cc",
              padding: "2%"
            }}
            // execute the function once item is clicked
            onClick={() => {
              console.log("test");
              // pass the name of the item
              alert(`${this.props.name} Added`);
            }}
          >
            <Typography>
              <h4>{this.props.name}</h4>
              {/* use CardMedia to put the img  */}
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
      </Grid>
    );
  }
}

export default MenuItem;
