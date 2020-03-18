import React from 'react';
import EditOrder from './editOrder';
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";


class Order extends React.Component {
    deleteOrder = (e)=>{
        e.preventDefault();
        this.props.deleteOrder(this.props.id)
    }
    render() { 
        return ( 
            <div>
            <h2>Total Price : {this.props.totalPrice}</h2>
            <h6>Discount : {this.props.discount}</h6>
            <h6>Tax : {this.props.tax}</h6>

            <EditOrder
            id={this.props.id} 
            editOrder={this.props.editOrder} 
            discount={this.props.discount} 
            />

            <Button 
            variant="contained"
            color="secondary" 
            style={{"text-transform":"capitalize"}}
            startIcon={<DeleteIcon />}
            onClick={this.deleteOrder}>Delete 
            </Button>  
            </div>
         );
    }
}
export default Order;
