// Import react component
import React, { Component } from "react";
import EditItem from './editMenuItem';
import Button from "@material-ui/core/Button";
class MenuItem extends Component {
  // Handle on click event and pass the id of the current menu item to the parent's function to delete this specific menu item
  deleteMenuItem = event => {
    this.props.deleteMenuItem(this.props.id);
  };
  addToOrder = event => {
    this.props.addItemToOrder(this.props.id);
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
        <Button style={{"text-transform":"capitalize"}}  variant="outlined" color="secondary" onClick={this.addToOrder}> Add to Order </Button>
      </div>
    );
  }
}
export default MenuItem;