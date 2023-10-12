import React from 'react'

export default function Cart({cartItems, handleAddProduct}) {
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
                <button className='add-btn' onClick={()=>handleAddProduct(item)}>+</button>
                <button className='remove-btn'onClick={()=>handleremoveProduct(item)}> - </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
