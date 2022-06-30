import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--brown);
  border: 2px solid var(--brown);
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  max-height: 200px;
`;

export const ImagemContainer = styled.div`
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  h2 {
    font-size: 18px;
  }
`;

export const AmountContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

` 

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 0.5rem;
`;
