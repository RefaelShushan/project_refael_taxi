import styled from "styled-components";

interface DivBoxType {
  width?: string;
  height?: string;
  align?: string;
  way?: string;
  space?: string;
  wrap?: string;
  gap?: string;
  margin?: string;
  min_height?: string;
}

export const DivBox = styled.div<DivBoxType>`
  display: flex;
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  text-align: center;
  align-items: ${({ align }) => align || "unset"};
  flex-direction: ${({ way }) => way || "row"};
  flex-direction: ${({ way }) => way || "row"};
  flex-wrap: ${({ wrap }) => wrap || "noWrap"};
  gap: ${({ gap }) => gap || "0"};
  margin: ${({ margin }) => margin || "0"};
  justify-content: ${({ space }) => space || "unset"};
  min-height: ${({ min_height }) => min_height || "auto"};
`;


