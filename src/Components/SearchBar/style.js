import styled from "styled-components";

export const SearchContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: var(--bg);
  margin: 0 auto;
  border-radius: 2rem;

  &:hover {
    outline: 2px solid var(--brown);
  }

  input {
    background-color: transparent;
    border: 0;
    font-size: 18px;
    color: var(--brown);
    text-align: center;
    outline: none;
  }
`;
