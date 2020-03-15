// Import the API configration and axios
import apiUrl from "../apiConfig";
import axios from "axios";

//Get All menu items
export const getAllMenuItems = () => {
  return axios.get(`${apiUrl}/api/menu-items`);
};
