// Import the API configuration and axios
import apiUrl from "../apiConfig";
import axios from "axios";

//Get All menu items
export const getAllMenuItems = () => {
  // return a promise
  return axios.get(`${apiUrl}/api/menu-items`);
};

// Add Menu Item
export const addMenuItem = menuItem => {
  // return a promise
  return axios.post(`${apiUrl}/api/menu-items`, { menuItem });
};
