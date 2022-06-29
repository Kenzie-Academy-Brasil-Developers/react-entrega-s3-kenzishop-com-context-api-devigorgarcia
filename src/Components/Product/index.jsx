import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart";
import { ProductContainer, ProductContent } from "./style";
import {BsCartPlus} from 'react-icons/bs'

export const Book = ({ book }) => {
  const { name, img, genere, price } = book;
  const { addToCart } = useContext(CartContext);

  return (
    <ProductContainer>
      <h3>{name}</h3>
      <p>
        Genero: <span>{genere}</span>
      </p>
      <img src={img} alt={name} />
      <ProductContent>
        <p>Preço: <span>R${price.toFixed(2)}</span></p>
        <button onClick={() => addToCart(book)}><BsCartPlus size={18}/></button>
      </ProductContent>
    </ProductContainer>
  );
};
