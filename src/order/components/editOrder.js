import React from "react";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export  class EditLOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    discount: 0 ,
      open: false
    };
  }
  // A method that is responsible for opening the modal
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };
  // A method that is responsible for closing the modal
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  // Handle the text fields' values
  handleTextField = event => {
    const input = event.target;
    // If conditions to know which field's value has been changed based on id and set new value in the state
    if (input.id === "discount") {
      this.setState({
        discount: input.value
      });
    }
  };
   // A function to trigger the parent's function to edit the item once the save button clicked
   editOrder = event => {
    this.handleClose();
    // Create a new item object with the updated values
    const order = {
      discount: this.state.discount,
    };
    // Pass the id and the Order to the grand parent
    this.props.editOrder(this.props.id, order);
  };
  render() {
    return (
      <div>
        <Button
           variant="contained"
           color="primary"
           startIcon={<EditIcon/>}
          onClick={this.handleClickOpen}
        >
          Edit
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit the order</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Discount"
              id="discount"
              fullWidth
              onChange={this.handleTextField}
              value={this.state.discount}
            />
          </DialogContent>

          <DialogActions>
            <Button 
            onClick={this.handleClose} 
            color="primary">
              Cancel
            </Button>

            <Button 
            onClick={this.editOrder} 
            color="primary">
              Save
            </Button>
           
          </DialogActions>
        </Dialog>
        <h3>Discount : {this.state.discount}</h3>
      </div>
    );
  }
}



export default EditLOrder;