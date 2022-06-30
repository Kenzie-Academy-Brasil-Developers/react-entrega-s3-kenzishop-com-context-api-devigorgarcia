import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;


`;

export const SectionContainer = styled.section``;

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  width: 95vw;
  overflow-x: auto;
  background-color: var(--bg);
  padding: 1rem;
  border-radius: 1rem;
  
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  span {
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    flex-wrap: wrap;  
    justify-content: center;
  
  }
`;
