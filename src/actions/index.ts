import { loginUser, logout, registerUser } from './auth';
import { loadProductsFromCart } from './cart/load-products-from-cart';
import { getProductBySlug } from './products/get-product-by-slug-action';
import { getProductByPage } from './products/get-products-by-page-action';

export const server = {
  // Auth
  loginUser,
  logout,
  registerUser,

  // Products
  getProductByPage,
  getProductBySlug,


  //cart
  loadProductsFromCart


};
