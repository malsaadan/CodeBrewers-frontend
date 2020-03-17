import React from 'react';
import  { getAllOrders , createOrder  } from '../api'

// continer for the ordersList ,, 

class OrdersList extends React.Component { 

// here making the api calls form the database ... 
// ADD  (submit)
componentDidMount() {
    getAllOrders()
      .then((response) => {
        this.props.setOrders(response.data.orders);
      })
      .catch((error) => {
        console.log('API ERROR:', error);
      });

      
  }
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



//
    render() {


        // mapping the props for the componants .. : 


        // create order .. for adding one order 
        return
    }
}

export default OrdersList ;