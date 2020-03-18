// Import the API configuration and axios
import apiUrl from "../apiConfig";
import axios from "axios";

//Get All menu items
export const getAllMenuItems = () => {
  return axios.get(`${apiUrl}/api/menu-items`);
};

export const getMenuItemsByID = (id) => {
  return axios.get(`${apiUrl}/api/menu-items/${id}`);
};

// Delete MenuItem By ID
export const deleteMenuItemByID = id => {
  // return a promise so that I can catch the error & display it in the UI
  return axios.delete(`${apiUrl}/api/menu-items/${id}`);
};

// Edit MenuItem by ID
export const editMenuItemByID = (id, menuItem) => {
  // return a promise so that I can catch the error & display it in the UI
  // Add the id in the params to edit a specific article and pass the new article as object
  return axios.patch(`${apiUrl}/api/menu-items/${id}`, { menuItem });
};
