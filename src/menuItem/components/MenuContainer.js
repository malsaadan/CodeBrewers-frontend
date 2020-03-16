import React from "react";
import MenuItem from "../components/MenuItem";
import { getAllMenuItems, addNewMenuItem } from "../api";
import { Grid } from "@material-ui/core";
// import { MenuItem } from "react-bootstrap";

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

    if (this.props.menuItems.length > 0) {
      console.log("length");
      allMenuItems = this.props.menuItems.map((menuItem, index) => {
        return (
          // add the grid to each item

          <Grid item xs={12} sm={4}>
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
            {/* 
              <MenuItemj
                name={menuItem.name}
                description={menuItem.description}
                price={menuItem.price}
                picture={menuItem.picture}
                category={menuItem.category}
                id={menuItem._id}
                // deleteArticle={this.deleteArticle}
                // addArticle={this.addArticles}
                key={index}
              /> */}
          </Grid>

          //
        );
      });
    }

    return (
      <>
        <AddMenuItem addMenuItem={this.addMenuItem} />
        <h3>All Articles</h3>
        <Grid container spacing={0}>
          {allMenuItems}
          <p>test p</p>
        </Grid>
        {/* <Button color="secondary" variant="outlined" className="btnMI">
          This is a test for using the famous library Material UI{" "}
        </Button> */}
      </>
    );
  }
}

export default MenuItemContainer;
