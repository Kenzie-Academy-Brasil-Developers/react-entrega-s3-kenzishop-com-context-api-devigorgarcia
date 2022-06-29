import { createContext, useState } from "react";
import booksList from "../data/db";

export const ProductListContext = createContext([]);

export const ProductListProvider = ({ children }) => {
  const [list, setList] = useState(booksList);
  const [input, setInput] = useState("");

  return (
    <ProductListContext.Provider value={{ list, input, setInput, setList }}>
      {children}
    </ProductListContext.Provider>
  );
};
