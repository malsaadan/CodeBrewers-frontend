import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemPrice: this.props.itemPrice,
      itemID: this.props.itemID,
      // orderList: [this.props.orderList],
      totalPrice: 0
    };
  }

  //    totalPrice = () =>{
  //        if (this.props.itemID === this.props.itemID) {
  //         const n=this.props.price
  //         var total = 0;
  //           for(var i = 0; i < n.length; i++){
  //             total += i;
  //           }
  //           return total;
  //        }

  //     }
  deleteOrder = e => {
    e.preventDefault();
    this.props.handleRemoveEvent(this.props.id);
  };
  render() {
    return (
      <div>
        {/* <h2>================================ </h2> */}
        <h2>{this.props.itemName}</h2>
        <Button
          variant="contained"
          color="secondary"
          style={{
            "text-transform": "capitalize",
            backgroundColor: "#732727",
            margin: "2%"
          }}
          startIcon={<DeleteIcon />}
          onClick={this.deleteOrder}
        >
          Delete
        </Button>
        <p> TOTAL :: {this.props.totalPrice} </p>
      </div>
    );
  }
}
export default Order;
