import React from 'react'
import Product from '../product/Product'
import Cart from '../cart/Cart';
import { Route,Routes } from 'react-router-dom';

export default function Pages({productItems,cartItems,handleAddProduct}) {
  return (
    <div>
        <Routes>
          <Route path="/product" element={<Product productItems = {productItems} handleAddProduct={handleAddProduct}/>}/>
          
          <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />}/>
        </Routes>

    </div>
  )
}
