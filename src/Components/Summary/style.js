import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;

export const HeaderSummary = styled.div`
  h2 {
    text-align: center;
    color: var(--brown);
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
  }
`;

export const ContentSummary = styled.div`
  background-color: var(--bg);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  border-radius: 1rem;
  border: 4px solid var(--brown);

  p {
    color: var(--brown);
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    span {
      font-weight: 700;
    }
  }
`;
