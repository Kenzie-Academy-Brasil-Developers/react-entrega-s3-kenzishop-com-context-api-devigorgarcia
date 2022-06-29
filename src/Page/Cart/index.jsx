import React from 'react'
import { Cart } from '../../Components/Cart'
import { Header } from '../../Components/Header'
import { Summary } from '../../Components/Summary'

export const CartPage = () => {
  return (
    <div>
      <Header/>
      <Cart/>
      <Summary/>
    </div>
  )
}
