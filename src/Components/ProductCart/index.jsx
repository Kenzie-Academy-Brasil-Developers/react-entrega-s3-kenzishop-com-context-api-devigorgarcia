import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Contexts/cart'

export const CartProduct = ({book}) => {
  const {name, genere, img, count, price} = book
  const {addToCart, removeFromCart} = useContext(CartContext)

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt="" />
      <p>Genero: {genere}</p>
      <p>Valor: {price}</p>  
      <div>
      <button onClick={()=>removeFromCart(book)}>-</button>
      <p>Quantidade: {count}</p>
      <button onClick={()=>addToCart(book)}>+</button>
      </div>
      
    </div>
  )
}
