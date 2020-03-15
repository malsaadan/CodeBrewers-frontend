//Get All menu items
export const getAllMenuItems = () => {
  return axios.get(`${apiUrl}/menu-items`).then();
};
