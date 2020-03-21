// Import react component
import React, { Component } from "react";
import Button from "@material-ui/core/Button";

// Import the child component
import "./MenuItem.css";
import EditItem from "./editMenuItem";

// Import Material UI
import Card from "@material-ui/core/Card";
import DeleteIcon from "@material-ui/icons/Delete";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";

class MenuItem extends React.Component {
  // Handle on click event and pass the id of the current menu item to the parent's function to delete this specific menu item
  deleteMenuItem = event => {
    this.props.deleteMenuItem(this.props.id);
  };

  // handler for the add an item to the order
  addToOrder = event => {
    this.props.addItemToOrder(this.props.id);
  };
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
            onClick={this.addToOrder}
            // execute the function once item is clicked
            // onClick={() => {
            //   console.log("test");
            //   // pass the name of the item
            //   {
            //     this.addToOrder;
            //   }
            //   alert(`${this.props.name} Added`);
            // }}
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

          <div>
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
              startIcon={<DeleteIcon />}
              style={{
                "text-transform": "capitalize",
                backgroundColor: "#732727",
                margin: "2%"
              }}
              variant="contained"
              color="secondary"
              onClick={this.deleteMenuItem}
            >
              Delete
            </Button>
          </div>
        </Card>
      </Grid>
    );
  }
}

export default MenuItem;
