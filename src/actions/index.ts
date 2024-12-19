import { loginUser, logout, registerUser } from './auth';
import { getProductByPage } from './products/get-products-by-page-action';

export const server = {
  // Auth
  loginUser,
  logout,
  registerUser,

  // Products
  getProductByPage
};
