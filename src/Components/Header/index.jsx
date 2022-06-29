import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, LogoContainer, ButtonsContainer } from "./style.js";
import logo from "../../assets/BookSithStore.png";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { CartContext } from "../../Contexts/cart.js";

export const Header = () => {
  const navigate = useNavigate();
  const { cartList } = useContext(CartContext);

  const totalAmount = cartList.reduce((acc, cart)=>acc + cart.count,0)
  

  const userNavigate = (path) => {
    return navigate(path);
  };

  return (
    <HeaderContainer>
      <LogoContainer >
        <img src={logo} alt="Book Sith Store" onClick={()=>userNavigate('/')}/>
      </LogoContainer>
      <ButtonsContainer>
        <button onClick={() => userNavigate("/cart")}>
          <FiShoppingCart size={18} />
          {
            totalAmount !== 0 && <span>{totalAmount}</span>
          }
          Carrinho
        </button>
        <button>
          <FiLogIn size={18} />
          Login
        </button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
