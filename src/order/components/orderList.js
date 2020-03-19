import React from "react";
import Order from "./order";
import { getAllOrders } from "../api";
import { getAllMenuItems } from "../../menuItem/api";
import EditOrder from "./editOrder";
class OrderList extends React.Component {
  componentDidMount() {
    getAllMenuItems()
      .then(res => {
        this.props.setMenuItems(res.data.menuItems);
      })
      .catch(err => {
        console.log("API ERROR:", err);
      });
  }

  // to edit an Order
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
    });
    // .catch(error => {
    //   console.log(error);
    // });
  };

  handleRemoveEvent = event => {
    const itemIndex = this.props.orders.indexOf(event);
    const OrderList = this.props.orders.splice(itemIndex, 1);
    console.log(`Removing`);
    this.props.setOrders(OrderList);
    // console.log(orders)
  };

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
    //for the orders
    let AllOrders = <h4>No Orders!</h4>;

    if (this.props.orders.length > 0) {
      AllOrders = this.props.orders.map((order, index) => {
        return (
          <Order
            id={order._id}
            totalPrice={order.price}
            itemName={order.name}
            key={index}
            handleRemoveEvent={this.handleRemoveEvent}
          />
        );
      });
    }

    let price = 0;
    const total = this.props.orders.map((order, index) => {
      const num = parseFloat(order.price);
      price = price + num;
      return price;
    });

    return (
      <div style={{ margin: "3%" }}>
        <h3>All Orders</h3>
        {AllOrders}

        <EditOrder
          id={this.props.id}
          editOrder={this.editOrder}
          discount={this.props.discount}
        />
        <h2>Total : {price} </h2>
      </div>
    );
  }
}
export default OrderList;
