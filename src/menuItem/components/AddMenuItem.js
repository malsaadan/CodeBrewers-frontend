import React from "react";
// Material UI
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";

export class AddMenuItem extends React.Component {
  // add constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      picture: "",
      category: "",
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
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

    this.handleClose();

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

  // Handle the text fields' values
  handleTextField = event => {
    const input = event.target;
    // If conditions to know which field's value has been changed based on id and set new value in the state
    if (input.id === "name") {
      this.setState({
        name: input.value
      });
    } else if (input.id === "description") {
      this.setState({
        description: input.value
      });
    } else if (input.id === "price") {
      this.setState({
        price: input.value
      });
    } else if (input.id === "picture") {
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
        {/* <h3>Add a New Item</h3>
        <label>Name:</label>
        <input
          className="name"
          onChange={this.handleInputBox}
          value={this.state.name}
        />
        <br /> */}
        {/* // Description input */}
        {/* <label>Description:</label>
        <input
          className="description"
          onChange={this.handleInputBox}
          value={this.state.description}
        />
        <br /> */}
        {/* // Price input */}
        {/* <label>Price:</label>
        <input
          className="price"
          onChange={this.handleInputBox}
          value={this.state.price}
        />
        <br /> */}
        {/* // Picture input */}
        {/* <label>Picture:</label>
        <input
          className="picture"
          onChange={this.handleInputBox}
          value={this.state.picture}
        />
        <br /> */}
        {/* Category input */}
        {/* <label>Category:</label>
        <input
          className="category"
          onChange={this.handleInputBox}
          value={this.state.category}
        />
        <br /> */}
        {/* <button onClick={this.addMenuItem}>Add New Item</button> */}
        {/* <Button
          onClick={this.addMenuItem}
          variant="contained"
          color="primary"
          component="span"
          startIcon={<SaveIcon />}
          size="small"
        >
          Add New Item
        </Button> */}

        {/* <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Name"
        /> */}
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
            Add Item
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add a new item</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Name"
                id="name"
                fullWidth
                onChange={this.handleTextField}
                value={this.state.name}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Description"
                id="description"
                fullWidth
                onChange={this.handleTextField}
                value={this.state.description}
              />
              <TextField
                autoFocus
                margin="dense"
                type="number"
                label="Price"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">SR</InputAdornment>
                  )
                }}
                id="price"
                fullWidth
                onChange={this.handleTextField}
                value={this.state.price}
              />
              <TextField
                autoFocus
                margin="dense"
                label="PictureURL"
                id="picture"
                fullWidth
                onChange={this.handleTextField}
                value={this.state.picture}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Category"
                id="category"
                fullWidth
                onChange={this.handleTextField}
                value={this.state.category}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.addMenuItem} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <hr />
      </div>
    );
  }
}

export default AddMenuItem;
