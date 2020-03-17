import apiUrl from '../apiConfig';
import axios from 'axios';
// Get All Orders
const getAllOrders = () => {
  return axios.get(`${apiUrl}/api/orders`);
};

// Edit Orders by ID
const editOrderByID = (id, order) => {
  return axios.patch(`${apiUrl}/api/orders/${id}`,{order});
};


// Delete Orders by ID
const deleteOrderByID = (id) => {
  return axios.delete(`${apiUrl}/api/orders/${id}`);
}
export { getAllOrders, deleteOrderByID , editOrderByID};