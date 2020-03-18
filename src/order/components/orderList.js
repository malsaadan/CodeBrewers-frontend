import React from 'react';
import Order from './order';
import {getAllOrders} from '../api'
class OrderList extends React.Component {
    componentDidMount(){
        getAllOrders()
        .then((res)=> {
       this.props.setOrders(res.data.orders)
        })
        .catch((err)=>{
            console.log('API ERROR:',err);
        })
    }
    // Make an API call to edit an Order
    editOrder = (id, updatedOrder) => {
        console.log(`Edit the order`);
    
        // // Make axios request
        // editOrderByID(id, updatedOrder)
        //   .then(response => {
        //     console.log(
        //       `The menu Order with the ID ${id} has been updated successfully.`
        //     );
    
            // To update the list in the UI
            const orders = this.props.orders;
    
            orders.forEach((order, index) => {
              if (order._id === id) {
                orders[index].discount = updatedOrder.discount;
              }
            // });
    
            // Update the Order list in the parent to the new list we have just edited
            this.props.setOrders(orders);
          })
          // .catch(error => {
          //   console.log(error);
          // });
      };



      
// Delete one 
deleteOrder = (id) => {
  console.log("Deleted")
  const newOrderList = this.props.orders.filter((order)=>{
         return order._id !== id ;
     })
// Update the Order list in the parent's state
this.props.setOrders(newOrderList);
            }


//  // Make an API call to Delete an Order
//      deleteOrder = (id)=>{
//          console.log("The Order ID to Delete ", id)
//          deleteOrderByID(id)
//          .then((res) => {
//  console.log(`The Order with the ID ${id} has been deleted .`)
//  // Filter the array to remove the deleted order
//  const newOrderList = this.props.orders.filter((order)=>{
//      return order._id !== id ;
//  })
//   // Update the Order list in the parent's state
//  this.props.setOrders(newOrderList);
//          })
//          .catch((err)=> {
//  console.log('API ERROR :',err)
//          })
 
//      }





     render() { 
        let AllOrders = <h4>No Orders!</h4>;

      if(this.props.orders.length > 0){
        AllOrders = this.props.orders.map((order,index)=>{
        return <Order  id = {order._id}
                        totalPrice = {order.totalPrice}
                        discount = {order.discount}
                        tax = {order.tax}
                        editOrder = {this.editOrder}
                        deleteOrder ={this.deleteOrder}
                        key = {index}/>
        });
    }

        return ( 
            <>
            <h3>All Orders</h3>
   {AllOrders}
            </>
         );
    }
}
export default OrderList;