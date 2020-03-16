import React from 'react';
import Order from './order';
// import {getAllOrders , deleteArticleByID} from '../api'
class OrderList extends React.Component {
//     componentDidMount(){
//         getAllOrders()
//         .then((res)=> {
//        this.props.setOrders(res.data.orders)
//         })
//         .catch((err)=>{
//             console.log('API ERROR:',err);
//         })
//     }
//  // Make an API call to Delete an Article
//      deleteOrder = (id)=>{
//          console.log("The Order ID to Delete ", id)
//          deleteOrderByID(id)
//          .then((res) => {
//  console.log(`The Order with the ID ${id} has been deleted .`)
 
//  const newOrderList = this.props.orders.filter((order)=>{
//      return order._id !== id ;
//  })
//  this.props.setOrders(newOrderList);
//          })
//          .catch((err)=> {
//  console.log('API ERROR :',err)
//          })
 
//      }
    render() { 
        return <Order/>
    }
}
export default OrderList;