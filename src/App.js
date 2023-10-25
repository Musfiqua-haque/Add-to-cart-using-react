/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
// import Pages from "./components/pages/Pages";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import Cart from './components/cart/Cart';
import productItems from './components/data/Data';
import{BrowserRouter as Router, Route,Routes} from 'react-router-dom';


function App() {

  const [cartItems, setCartItems] = useState([])

  const handleAddProduct=(product)=>{
      const exitProduct = cartItems.find((item)=> item.id === product.id);
      if(exitProduct){
        setCartItems(cartItems.map((item)=> item.id === product.id ? {...exitProduct, quantity:exitProduct.quantity+1}: item))
      }
      else{
        setCartItems([...cartItems, {...product, quantity:1}])
      }
  }

  const handleRemoveProduct=(product)=>{
    const exitProduct = cartItems.find((item)=> item.id === product.id);
    if(product.quantity === 1){
      setCartItems(cartItems.filter((item)=> item.id !== product.id));
    }
    else{
      cartItems.map((item)=> item.id === product.id)?{...exitProduct,quantity: exitProduct.quantity-1}: item;
    }
   
  }

  return (
    <div>
      <Router>
        <Navbar />
        {/* <Pages productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}/> */}
        <Routes>
          <Route path="/product" element={<Product productItems = {productItems} handleAddProduct={handleAddProduct}/>}/>

          <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct = {handleRemoveProduct} />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
