import React from 'react'
import './product.css';
// import products from '../data/Data';


export default function Product({productItems,handleAddProduct}) {
  return (
    <>
      <div className="container">
        {productItems.map((productItem,index)=>(
          <div className='card' key={index}>
            <div>
            <img className='product-image' src={productItem.image} alt="" />
            </div>
            <div className='product-name'>
              <h3>{productItem.name}</h3>
          </div>
          <div className='product-price'>
              <p>{productItem.price}</p>
          </div>

          <div className='addcart'>
            <button onClick={()=> handleAddProduct(productItem)}>Add to cart</button>
          </div>
          </div>
        ))}
      </div>
    </>
  )
}
