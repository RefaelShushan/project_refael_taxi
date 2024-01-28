import styled from "styled-components";

interface ButtonType {
  background?: string;
  backgroundHover?: string;
  color?: string;
  border?: string;
  radius?: string;
  font?: string;
  size?: string;
  padding?: string;
  hoverTextDisplay?: string;
}

export const ButtonStyle = styled.button<ButtonType>`
  background-color: ${({ background }) => background || "#3498db"};
  color: ${({ color }) => color || "#fff"};
  border: ${({ border }) => border || "black"};
  border-radius: ${({ radius }) => radius || "4px"};
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => size || "16px"};
  padding: ${({ padding }) => padding || "10px 15px"};
  &:hover {
    background-color: ${({ backgroundHover }) => backgroundHover || "#2980b9"};
  }
  .hover-text {
    display: ${({ hoverTextDisplay }) => hoverTextDisplay || "#inline"};
  }

  &:active {
    transform: scale(0.99);
  }
`;
