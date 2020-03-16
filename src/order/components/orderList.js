import React from 'react';
import Order from './order';
import {getAllOrders , deleteOrderByID} from '../api'
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

 // Make an API call to Delete an Order
     deleteOrder = (id)=>{
         console.log("The Order ID to Delete ", id)
         deleteOrderByID(id)
         .then((res) => {
 console.log(`The Order with the ID ${id} has been deleted .`)
 
 const newOrderList = this.props.orders.filter((order)=>{
     return order._id !== id ;
 })
 this.props.setOrders(newOrderList);
         })
         .catch((err)=> {
 console.log('API ERROR :',err)
         })
 
     }
     render() { 
        let AllOrders = <h4>No Orders!</h4>;

      if(this.props.orders.length > 0){
        AllOrders = this.props.orders.map((order,index)=>{
        return <Order  id = {order._id}
                        totalPrice = {order.totalPrice}
                        discount = {order.discount}
                        tax = {order.tax}
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