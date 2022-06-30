import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/cart";
import { CartProduct } from "../ProductCart";
import {
  Container,
  EmptyCart,
  HeaderCartContainer,
  ListContainer,
} from "./style";
import { BiArrowBack } from "react-icons/bi";
import { BsFillCartXFill } from "react-icons/bs";
export const Cart = () => {
  const navigate = useNavigate();
  const { cartList } = useContext(CartContext);

  return (
    <Container>
      <button onClick={() => navigate("/")}>
        <BiArrowBack size={20} /> Voltar
      </button>
      <HeaderCartContainer>
        <h2>Carrinho de Compras</h2>
      </HeaderCartContainer>
      <ListContainer>
        {cartList.length !== 0 ? (
          cartList.map((book, index) => {
            return <CartProduct key={index} book={book} />;
          })
        ) : (
          <EmptyCart>
            <h2>Carrinho Vazio :(</h2>
            <BsFillCartXFill size={60}/>
          </EmptyCart>
        )}
      </ListContainer>
    </Container>
  );
};
