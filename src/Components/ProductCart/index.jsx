import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart";
import {
  AmountContainer,
  ButtonsContainer,
  Container,
  ContentContainer,
  ImagemContainer,
} from "./style";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export const CartProduct = ({ book }) => {
  const { name, img, count, price } = book;
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      <ImagemContainer>
        <img src={img} alt="" />
      </ImagemContainer>
      <ContentContainer>
        <h2>{name}</h2>
        <p className="price">
          Valor: <span>R$ {price.toFixed(2)}</span>
        </p>
      <AmountContainer>
        <p>Quantidade:</p>
        <ButtonsContainer>
          <button onClick={() => removeFromCart(book)}>
            <AiFillMinusCircle size={30} />
          </button>
          <span>{count}</span>
          <button onClick={() => addToCart(book)}>
            <AiFillPlusCircle size={30} />
          </button>
        </ButtonsContainer>
      </AmountContainer>
      </ContentContainer>
    </Container>
  );
};
