import React from "react";
import MenuItem from "./MenuItem";
import { getAllMenuItems } from "../api";

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

  render() {
    let allMenuItems = <h4>No items!</h4>;

    if (this.props.menuItems.length > 0) {
      console.log("length");
      allMenuItems = this.props.menuItems.map((menuItem, index) => {
        return (
          <MenuItem
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
            picture={menuItem.picture}
            category={menuItem.category}
            id={menuItem._id}
            key={index}
          />
        );
      });
    }

    return (
      <>
        <h3>All Menu Items</h3>
        {allMenuItems}
      </>
    );
  }
}

export default MenuItemContainer;
