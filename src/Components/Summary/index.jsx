import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart";

export const Summary = () => {
  const { cartList } = useContext(CartContext);

  const totalValue = cartList.reduce((acc, cart) => acc + (cart.price * cart.count), 0);

  const totalAmount = cartList.reduce((acc, cart) => acc + cart.count, 0);

  return (
    <div>
      <div>
        <h3>Resumo de Compra</h3>
      </div>
      <div>
        <p>Valor Total: R${totalValue.toFixed(2)}</p>
        <p>Quantidade de Itens:{totalAmount}</p>
      </div>
    </div>
  );
};
