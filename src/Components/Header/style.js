import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--bg);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LogoContainer = styled.div`
  img {
    width: 100px;
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: transparent;
    border: 0;
    color: var(--brown);
    font-weight: bold;
    transition: 0.3s;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--brown);
      color: white;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: relative;
      top: -10px;
      left: -10px;
    }

    &:hover {
      filter: brightness(1.5);
    }
  }
`;
