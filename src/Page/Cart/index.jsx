import React from "react";
import { Cart } from "../../Components/Cart";
import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { Container, ContentContainer } from "./style";

export const CartPage = () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Cart />
        <Summary />
      </ContentContainer>
    </Container>
  );
};
