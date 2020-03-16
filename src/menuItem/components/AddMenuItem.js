import React from "react";

export class AddMenuItem extends React.Component {
  // add constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      picture: "",
      category: ""
    };
  }

  // A function to pass the new menu item to the parent component
  addMenuItem = () => {
    // add an object with that holds the state values
    const menuItem = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      picture: this.state.picture,
      category: this.state.category
    };

    // reset text boxes values
    this.setState({
      name: "",
      description: "",
      price: "",
      picture: "",
      category: ""
    });

    // Pass the menu item object to the parent
    this.props.addMenuItem(menuItem);
  };

  // add Handler the input boxes' values
  handleInputBox = event => {
    const input = event.target;
    console.log(event);

    // If conditions to know which input value has been changed based on class names and set new value in the state
    if (input.className === "name") {
      this.setState({
        name: input.value
      });
    } else if (input.className === "description") {
      this.setState({
        description: input.value
      });
    } else if (input.className === "price") {
      this.setState({
        price: input.value
      });
    } else if (input.className === "picture") {
      this.setState({
        picture: input.value
      });
    } else {
      this.setState({
        category: input.value
      });
    }
  };

  render() {
    return (
      <div>
        <h3>Add a New Item</h3>
        <label>Name:</label>
        <input
          className="name"
          onChange={this.handleInputBox}
          value={this.state.name}
        />
        <br />
        {/* // Description input */}
        <label>Description:</label>
        <input
          className="description"
          onChange={this.handleInputBox}
          value={this.state.description}
        />
        <br />
        {/* // Price input */}
        <label>Price:</label>
        <input
          className="price"
          onChange={this.handleInputBox}
          value={this.state.price}
        />
        <br />
        {/* // Picture input */}
        <label>Picture:</label>
        <input
          className="picture"
          onChange={this.handleInputBox}
          value={this.state.picture}
        />
        <br />
        {/* Category input */}
        <label>Category:</label>
        <input
          className="category"
          onChange={this.handleInputBox}
          value={this.state.category}
        />
        <br />
        <button onClick={this.addMenuItem}>Add New Item</button>
        <hr />
      </div>
    );
  }
}

export default AddMenuItem;
