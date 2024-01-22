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
  padding?: string;
  backgroundcolor?: string;
  color?: string;
  text_align?: "right" | "left";
  radius?: string;
  box_shadow?: string;
}

export const DivBox = styled.div<DivBoxType>`
  display: flex;
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  text-align: ${({ text_align }) => text_align || "center"};
  align-items: ${({ align }) => align || "unset"};
  flex-direction: ${({ way }) => way || "row"};
  flex-wrap: ${({ wrap }) => wrap || "noWrap"};
  gap: ${({ gap }) => gap || "0"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  justify-content: ${({ space }) => space || "unset"};
  min-height: ${({ min_height }) => min_height || "auto"};
  background-color: ${({ backgroundcolor }) => backgroundcolor || "rait"};
  color: ${({ color }) => color || "rait"};
  border-radius: ${({ radius }) => radius || ""};
  box-shadow: ${({ box_shadow }) => box_shadow || ""};
`;
