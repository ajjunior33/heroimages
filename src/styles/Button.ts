import styled from "styled-components";

export const Button = styled.button`
  padding: 15px 20px;
  border: none;
  background-color: transparent;
  font-family: "GraphikSemiBold", sans-serif;
  transition: 500ms;

  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin: 0 10px;
    font-size: 1.5em;
  }
`;
export const ButtonPrimary = styled(Button)`
  color: #ffffff;
  border-radius: 12px;
  background-image: linear-gradient(to right, #1a21bc, #166e98);
  &:hover {
    filter: brightness(80%);
  }
`;
export const ButtonCircle = styled.button`
  color: #fff;
  width: 43px;
  height: 43px;
  border-radius: 100%;
  border: none;

  display: flex;
  align-items: center;

  justify-content: center;
  background-image: linear-gradient(to right, #ffc700, #ff782d);
  svg {
    font-size: 30px;
  }
`;
