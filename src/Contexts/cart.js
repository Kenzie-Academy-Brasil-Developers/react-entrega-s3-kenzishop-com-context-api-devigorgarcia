import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const localCart = localStorage.getItem("@CART/ADD");
  const initialState = () => {
    if (localCart) {
      return JSON.parse(localCart);
    } else {
      return [];
    }
  };

  const [cartList, setCartList] = useState(initialState());

  const addToCart = (product) => {
    const selectedProduct = cartList?.find(({ id }) => id === product.id);

    let newList;

    if (selectedProduct) {
      newList = [...cartList];
      const index = newList.indexOf(selectedProduct);

      newList[index].count += 1;
    } else {
      const newProduct = { ...product, count: 1 };

      newList = [...cartList, newProduct];
    }

    localStorage.setItem("@CART/ADD", JSON.stringify(newList));
    setCartList(newList);
  };

  const removeFromCart = (product) => {
    const selectedProduct = cartList?.find(({ id }) => id === product.id);

    let newList;

    if (selectedProduct.count > 1) {
      newList = [...cartList];
      const index = newList.indexOf(selectedProduct);

      newList[index].count -= 1;
      // eslint-disable-next-line no-restricted-globals
    } else if (confirm("Deseja Excluir esse Produto")) {
      newList = cartList.filter((cartProduct) => cartProduct.id !== product.id);
    }
    if (newList) {
      localStorage.setItem("@CART/ADD", JSON.stringify(newList));
      setCartList(newList);
    }
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, cartList }}>
      {children}
    </CartContext.Provider>
  );
};
