import styled from "styled-components";

interface TextType {
  size: string;
  font?: string;
}

export const Text = styled.p<TextType>`
  text-align: center;
  font-size: ${({ size }) => size};
  font-family: ${({ font }) => font};
  margin: 1vh;
`;
