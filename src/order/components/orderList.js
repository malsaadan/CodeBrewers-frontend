import React from 'react';
import Order from './order';
import {getAllOrders} from '../api'
import {getAllMenuItems} from '../../menuItem/api'
class OrderList extends React.Component {
      constructor (props) {
          super(props) ; 

          
      }
    componentDidMount(){
      getAllMenuItems()
        .then((res)=> {
       this.props.setMenuItems(res.data.menuItems)
        })
        .catch((err)=>{
            console.log('API ERROR:',err);
        })
    }



render() { 
    


//for the orders 
let AllOrders = <h4>No Orders!</h4>;
if(this.props.orders.length > 0)
{
AllOrders = this.props.orders.map((order,index)=>{
return <Order  id = {order._id}
               totalPrice = {order.price}
               discount = {order.name}
               key = {index}/>
});
}



    let allMenuItemsForOrder = <h4>No order!</h4>;
    // If there are items in the list then display them
    if (this.props.menuItems.length > 0) {
      console.log("length");
      // for the items ... 
      allMenuItemsForOrder = this.props.menuItems.map((menuItem, index) => {
        return (
          <Order
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
            picture={menuItem.picture}
            category={menuItem.category}
            id={menuItem._id}
            deleteMenuItem={this.deleteMenuItem}
            editItem = {this.editMenuItem}
            key={index}
          />
        );
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

// DELETE 



/*** FUNCTIONS ***/

// total 
// sum n amount of numbers .. 
/*** 
 * 
 * var n = 5 ; 
var res = (n * (n+1)) / 2
==========================================
function numberSum(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
} 
=========================================
using for each ... ???

example : 
function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach((entry) => {
    this.sum += entry
    ++this.count
  }, this)
  // ^---- Note
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
// 3 
obj.sum
// 16

=========================================== 

 * 
 * 
 * 
 * ***/
// Edit the amount delete using slice ... 
// 