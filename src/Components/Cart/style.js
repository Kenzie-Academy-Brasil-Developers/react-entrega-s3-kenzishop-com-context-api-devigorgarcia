import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;

  button {
    width: 30%;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: transparent;
    border: none;
    color: var(--brown);
    font-weight: 900;

    &:hover {
      filter: brightness(1.5);
    }
  }
`;

export const HeaderCartContainer = styled.div`
  h2 {
    text-align: center;
    color: var(--brown);
    font-size: 28px;
    font-weight: 900;
    text-transform: uppercase;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  width: 95%;
  height: 50vh;
  overflow-y: auto;
  background-color: var(--bg);
  padding: 1rem;
  border-radius: 1rem;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  span {
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    width: 60vw;
    height: 75vh;
    
  }
`;

export const EmptyCart = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`;

