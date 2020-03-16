import apiUrl from '../apiConfig';
import axios from 'axios';
// INDEX, SHOW, CREATE, UPDATE, DESTROY
// Get All Articles
const getAllOrders = () => {
    return axios.get(`${apiUrl}/articles`);
  };
// Delete Article by ID
const deleteOrderByID = (id) => {
  return axios.delete(`${apiUrl}/order/${id}`);
}
export { getAllOrders,deleteOrderByID};