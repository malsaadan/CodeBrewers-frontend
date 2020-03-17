import axios from 'axios';
import apiUrl from '../apiConfig';

const getAllOrders = () => {
    return axios.get(`${apiUrl}/api/orders`);
  };

const createOrder = () => { 
    return axios.post(`${apiUrl}/api/orders`)
}



export { getAllOrders , createOrder }