import React from "react";
import MenuItem from "../components/MenuItem";
import {
  getAllMenuItems,
  addNewMenuItem,
  editMenuItemByID,
  deleteMenuItemByID
} from "../api";
import { Grid } from "@material-ui/core";

import "./MenuItem.css";

// import add menu Item
import AddMenuItem from "./AddMenuItem";
class MenuItemContainer extends React.Component {
  // Make an API Call to Delete an Article
  deleteMenuItem = id => {
    console.log("The MenuItem ID to Delete", id);

    // Make axios delete request
    deleteMenuItemByID(id)
      .then(response => {
        console.log(`The MenuItem with the ID ${id} has been deleted.`);

        // Filter the array to remove the deleted items
        const newMenuItemsList = this.props.menuItems.filter(item => {
          return item._id !== id;
        });

        // Update the item list in the parent's state
        this.props.setMenuItems(newMenuItemsList);
      })

      .catch(error => {
        console.log("API ERROR:", error);
      });
  };

  editMenuItem = (id, updatedItem) => {
    console.log(`Edit the menu item with ID ${id}`);

    // Make axios request
    editMenuItemByID(id, updatedItem)
      .then(response => {
        console.log(
          `The menu item with the ID ${id} has been updated successfully.`
        );

        // To update the list in the UI, I searched for the updated item in the menu items list and then update its properties
        const menuItems = this.props.menuItems;

        menuItems.forEach((item, index) => {
          if (item._id === id) {
            menuItems[index].name = updatedItem.name;
            menuItems[index].description = updatedItem.description;
            menuItems[index].price = updatedItem.price;
            menuItems[index].picture = updatedItem.picture;
            menuItems[index].category = updatedItem.category;
          }
        });

        // Update the menu items list in the parent to the new list we have just edited
        this.props.setMenuItems(menuItems);
      })
      .catch(error => {
        console.log(error);
      });
  };

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
            deleteMenuItem={this.deleteMenuItem}
            editItem={this.editMenuItem}
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
