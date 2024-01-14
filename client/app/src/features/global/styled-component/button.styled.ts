import styled from "styled-components";

interface ButtonProps {
    bg?: string;
  }

export const ButtonStyled = styled.button<ButtonProps>`

  background-color: ${({bg})=> bg ||'#3498db'};
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
  .hover-text {
      display: inline; 
    }
`;

interface ButtonType {
  background?: string;
  backgroundHover?: string;
  color?: string;
  border?: string;
  radius?: string;
  font?: string;
  size?: string;
}


export const ButtonStyle = styled.button<ButtonType>`
  background-color: ${({ background }) => background || "white"};
  color: ${({ color }) => color || "black"};
  border: ${({ border }) => border || "black"};
  border-radius: ${({ radius }) => radius || "0"};
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => size};
  &:hover {
    background-color: ${({ backgroundHover }) => backgroundHover || "white"};
  }
`;