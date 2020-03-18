import React from "react";
import MenuItem from "../components/MenuItem";
import { getAllMenuItems, addNewMenuItem } from "../api";
import { Grid } from "@material-ui/core";

import "./MenuItem.css";
// import { MenuItem } from "react-bootstrap";

// import add menu Item
import AddMenuItem from "./AddMenuItem";
class MenuItemContainer extends React.Component {
  componentDidMount() {
    getAllMenuItems()
      .then(response => {

      import MenuItem from "./MenuItem";
import { getAllMenuItems, deleteMenuItemByID, editMenuItemByID } from "../api";

class MenuItemContainer extends React.Component {
  componentDidMount() {
    // Axios request to display all menu items
    getAllMenuItems()
      .then(response => {
        // Save the menu items in the parent's state
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
  // Make an aPI call to delete
  //   deleteArticle = id => {
  //     console.log("The Article ID to Delete", id);

  //     deleteArticleByID(id)
  //       .then(response => {
  //         console.log(`The article with the ID ${id} has been deleted.`);

  //         const newArticlesList = this.props.articles.filter(article => {
  //           return article._id !== id;
  //         });

  //         this.props.setArticles(newArticlesList);
  //       })

  //       .catch(error => {
  //         console.log(`API ERROR `, error);
  //       });
  //   };
  render() {
    let allMenuItems = <h4>No items!</h4>;

=======

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

  render() {
    // If there are no items
    let allMenuItems = <h4>No items!</h4>;

    // If there are items in the list then display them
    if (this.props.menuItems.length > 0) {
      console.log("length");
      allMenuItems = this.props.menuItems.map((menuItem, index) => {
        return (
          // add the grid to each item

          // <Grid item xs={4} sm={4}>

=======
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
=======
            deleteMenuItem={this.deleteMenuItem}
            editItem = {this.editMenuItem}
            key={index}
          />
        );
      });
    }

    return (
      <div className="menuCont">
        <AddMenuItem addMenuItem={this.addMenuItem} />
        <h3>The Menu</h3>
        <Grid container spacing={1}>
          {allMenuItems}
        </Grid>
        {/* <Button color="secondary" variant="outlined" className="btnMI">
          This is a test for using the famous library Material UI{" "}
        </Button> */}
      </div>

      <>
        <h3>All Menu Items</h3>
        {allMenuItems}
      </>
    );
  }
}

export default MenuItemContainer;
