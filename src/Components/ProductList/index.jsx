import React from "react";
import { useContext } from "react";
import { ProductListContext } from "../../Contexts/productList";
import { Book } from "../Product";
import { ListContainer, MainContainer, SectionContainer } from "./style";

export const ProductList = () => {
  const { list, input } = useContext(ProductListContext);
  
  return (
    <MainContainer>
      <h2>Lista de Livros</h2>
      <SectionContainer>
        <ListContainer>
          {list.filter((book)=> book.name.toLowerCase().includes(input.toLowerCase())).map((book) => {
            return <Book key={book.id} book={book} />;
          })}
        </ListContainer>
      </SectionContainer>
    </MainContainer>
  );
};
