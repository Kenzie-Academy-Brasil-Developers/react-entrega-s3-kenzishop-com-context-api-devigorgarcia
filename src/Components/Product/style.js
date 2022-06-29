import styled from "styled-components";

export const ProductContainer = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 1rem;
color: var(--brown);
border: 2px solid var(--brown);
padding: 1rem;
border-radius: 1rem;
height: 500px;

@media (min-width: 1024px) {
    width: 350px;
    
  }


h3 {
  text-align: center;
}
`

export const ProductContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 36px;
    height: 36px;
    background-color: var(--brown);
    border: none;
    border-radius: 50%;
    transition: .3s;
  
    &:hover {
      background-color: var(--bg-body);
      border: 2px solid var(--bg-body);
      color: var(--black);
    }
  }

 
`