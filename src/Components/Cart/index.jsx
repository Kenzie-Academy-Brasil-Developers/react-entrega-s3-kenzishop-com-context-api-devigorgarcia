import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/cart";
import { CartProduct } from "../ProductCart";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartList } = useContext(CartContext);
  
  return (
    <div>
      <div>
        <h2>Carrinho de Compras</h2>
      </div>
      <div>
        {cartList.map((book, index) => {
          return <CartProduct key={index} book={book} />;
        })}
      </div>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>
  );
};
