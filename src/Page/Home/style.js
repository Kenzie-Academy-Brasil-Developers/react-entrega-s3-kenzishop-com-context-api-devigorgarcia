import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-body);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    height: 100%;
  }
`