import apiUrl from '../apiConfig';
import axios from 'axios';
// INDEX, SHOW, CREATE, UPDATE, DESTROY
// Get All Orders
const getAllOrders = () => {
  return axios.get(`${apiUrl}/api/orders`);
};
// Delete Orders by ID
const deleteOrderByID = (id) => {
  return axios.delete(`${apiUrl}/api/orders/${id}`);
}
export { getAllOrders, deleteOrderByID};