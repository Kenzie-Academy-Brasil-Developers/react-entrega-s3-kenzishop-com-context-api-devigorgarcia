import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart";
import { Container, ContentSummary, HeaderSummary } from "./style";

export const Summary = () => {
  const { cartList } = useContext(CartContext);

  const totalValue = cartList.reduce(
    (acc, cart) => acc + cart.price * cart.count,
    0
  );

  const totalAmount = cartList.reduce((acc, cart) => acc + cart.count, 0);

  return (
    <Container>
      <HeaderSummary>
        <h2>Resumo de Compra</h2>
      </HeaderSummary>
      <ContentSummary>
        <p>Valor Total: <span>R${totalValue.toFixed(2)}</span></p>
        <p>Quantidade: <span>{totalAmount}</span></p>
      </ContentSummary>
    </Container>
  );
};
