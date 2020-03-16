import React from 'react';
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
            
                <a href="#" onClick={this.deleteOrder}>Delete</a>
            </div>
         );
    }
}
export default Order;