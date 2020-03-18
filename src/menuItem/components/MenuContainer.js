import React from "react";
import MenuItem from "../components/MenuItem";
import { getAllMenuItems, addNewMenuItem } from "../api";
import { Grid } from "@material-ui/core";

import "./MenuItem.css";

// import add menu Item
import AddMenuItem from "./AddMenuItem";
class MenuItemContainer extends React.Component {
  componentDidMount() {
    getAllMenuItems()
      .then(response => {
        this.props.setMenuItems(response.data.menuItems);
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  }
  // Make an API call to add function
  addMenuItem = menuItem => {
    // Make an axios request
    addNewMenuItem(menuItem)
      .then(response => {
        console.log(`The item ${menuItem.name} has been added successfully.`);

        // Save the array that was passed as props in a variable
        const menuItems = this.props.menuItems;
        // add/push the new item to the the menuItems array
        menuItems.push(menuItem);
        // Update the array in the parent state
        this.props.setMenuItems(menuItems);
      })
      .catch(error => {
        console.log("API ERROR: ", error);
      });
  };

  render() {
    let allMenuItems = <h4>No items!</h4>;

    if (this.props.menuItems.length > 0) {
      console.log("length");
      allMenuItems = this.props.menuItems.map((menuItem, index) => {
        return (
          // add the grid to each item

          // <Grid item xs={4} sm={4}>

          <MenuItem
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
            picture={menuItem.picture}
            category={menuItem.category}
            id={menuItem._id}
            // deleteArticle={this.deleteArticle}
            // addArticle={this.addArticles}
            key={index}
          />

          // </Grid>

          //
        );
      });
    }

    return (
      <div>
        <AddMenuItem className="addItem" addMenuItem={this.addMenuItem} />

        <h3>CodeBrewers Menu</h3>
        <Grid container spacing={1}>
          {allMenuItems}
        </Grid>
        {/* <Button color="secondary" variant="outlined" className="btnMI">
          This is a test for using the famous library Material UI{" "}
        </Button> */}
      </div>
    );
  }
}

export default MenuItemContainer;
