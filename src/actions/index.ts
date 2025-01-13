import { loginUser, logout, registerUser } from './auth';
import { loadProductsFromCart } from './cart/load-products-from-cart';
import { createUpdateProduct } from './products/create-update-product.action';
import { deleteProductImg } from './products/delete-product-img.action';
import { getProductBySlug } from './products/get-product-by-slug-action';
import { getProductByPage } from './products/get-products-by-page-action';

export const server = {
  /**--- Auth ---*/
  loginUser,
  logout,
  registerUser,

  /**--- Products ---*/
  getProductByPage,
  getProductBySlug,


  /**--- Cart ---*/
  loadProductsFromCart,

  /**--- Admin ---*/
  // Products
  createUpdateProduct,
  deleteProductImg

};
