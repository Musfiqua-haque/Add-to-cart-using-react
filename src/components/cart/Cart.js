import React from 'react'
import './cart.css';

export default function Cart({cartItems, handleAddProduct, handleRemoveProduct}) {

const totalprice = cartItems.reduce((price,item)=>price +item.quantity * item.price,0)

  return (
    <>
      <div className="cart-items">
        <div className="cart-items-header">Cart Items</div>
        {cartItems.length === 0 && (<div className='cart-item-empty'>No Items are added</div>)}

        <div>
          {cartItems.map((cartItem)=>(
            <div key={cartItem.id} className='cart-item-list'>
              <img className='cart-item-image' src={cartItem.image} alt={cartItem.name} />
              <div className='card-item-name'>{cartItem.name}</div>
              <div className='card-item-price'>

                <button className='add-btn' onClick={()=>handleAddProduct(cartItem)}>+</button>

                <button className='remove-btn'onClick={()=>handleRemoveProduct(cartItem)}> - </button>
              </div>

              <div className='cart-item price'>{cartItem.quantity}*{cartItem.price}
              </div>
            </div>
          ))}
        </div>
        <div className='total-price-section'>
          Total Price
          <div className="cart-item-total-price">
            ${totalprice}
            </div>
          </div>
      </div>
    </>
  )
}
