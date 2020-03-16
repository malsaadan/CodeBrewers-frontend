import React from "react";
import MenuItem from "../components/MenuItem";
import { getAllMenuItems } from "../api";
import { Button } from "@material-ui/core";
import "../style.css";
// import { MenuItem } from "react-bootstrap";

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
  //   // Make an aPI call to add
  //   addMenuItems = () => {
  //     console.log("The Menu Item to Add");

  //     addMenuItem()
  //       .then(response => {
  //         console.log(`The item has been added.`);
  //       })

  //       .catch(error => {
  //         console.log(`API ERROR `, error);
  //       });
  //   };

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
        );
      });
    }

    return (
      <>
        <h3>All Articles</h3>
        {allMenuItems}
        <p>test p</p>
        {/* <Button color="secondary" variant="outlined" className="btnMI">
          This is a test for using the famous library Material UI{" "}
        </Button> */}
      </>
    );
  }
}

export default MenuItemContainer;
