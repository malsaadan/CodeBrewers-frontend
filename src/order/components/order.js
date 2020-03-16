import React from 'react';
class Order extends React.Component {
    deleteOrder = (e)=>{
        e.preventDefault();
        this.props.deleteOrder(this.props.id)
    }
    render() { 
        return ( 
            <div>
        <h2>items</h2>
                <a href="#" onClick={this.deleteOrder}>Delete</a>
            </div>
         );
    }
}
export default Order;