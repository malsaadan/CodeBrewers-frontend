import React from "react";
import RadioButtonsGroup from "./radio";

// Material UI
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import AddBoxIcon from "@material-ui/icons/AddBox";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
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
  handleChange = event => {
    this.setState({ category: event.target.value });
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

    // close the pop-up window after adding the order
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

  // callback for the category
  callbackFunction = childData => {
    console.log(childData);
    this.setState({ category: childData });
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

  theme = createMuiTheme({
    primary: {
      main: "#d9d4cc"
    }
  });

  render() {
    return (
      <div>
        {/* The pop-up window to add an item  */}
        <div>
          <Button
            variant="contained"
            startIcon={<PlaylistAddIcon />}
            // color="primary"
            onClick={this.handleClickOpen}
            style={{
              color: "#4c6873",
              backgroundColor: "#d9d4cc",
              margin: "2%",
              fontFamily: "Ubuntu"
            }}
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
              {/* // Name input */}
              <TextField
                autoFocus
                margin="dense"
                label="Name"
                id="name"
                fullWidth
                onChange={this.handleTextField}
                value={this.state.name}
              />
              {/* // Description input */}
              <TextField
                autoFocus
                margin="dense"
                label="Description"
                id="description"
                fullWidth
                onChange={this.handleTextField}
                value={this.state.description}
              />
              {/* // Price input */}
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
              {/* // Picture input */}
              <TextField
                autoFocus
                margin="dense"
                label="PictureURL"
                id="picture"
                fullWidth
                onChange={this.handleTextField}
                value={this.state.picture}
              />

              {/* The radio buttons for the category  */}
              <RadioButtonsGroup
                id="category"
                value={this.state.category}
                handleChange={this.handleChange}
                // parentCallback={this.callbackFunction}
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
