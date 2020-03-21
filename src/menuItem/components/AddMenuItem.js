// Import React component
import React from "react";

// Import he child component
import RadioButtonsGroup from "./radio";

// Import Material UI components
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
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

  // handle open event method
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  // handle change event method for the radio buttons
  handleChange = event => {
    this.setState({ category: event.target.value });
  };

  // handle change event method for the radio buttons
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
    console.log("Item has been added!")
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
            // embedded style for the "Add Item" button
            style={{
              color: "#4c6873",
              backgroundColor: "#d9d4cc",
              margin: "2%",
              fontFamily: "Ubuntu",
              fontWeight: "bold",
              "text-transform": "capitalize"
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
                    <InputAdornment position="end">SAR</InputAdornment>
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
