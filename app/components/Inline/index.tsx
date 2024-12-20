import { CSSProperties, FC, ReactNode } from "react";
import { styled } from "styled-system/jsx";

type InlineProps = {
  children: ReactNode;
  distribute?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  padding?: CSSProperties["padding"];
  paddingBlock?: CSSProperties["paddingBlock"];
  paddingInline?: CSSProperties["paddingInline"];
};

export const Inline: FC<InlineProps> = ({
  children,
  distribute = "flex-start",
  align = "center",
  gap = "4px",
  height = "auto",
  width = "auto",
  padding = "4px",
  paddingBlock,
  paddingInline,
}) => (
  <Container
    gap={gap}
    justifyContent={distribute}
    alignItems={align}
    height={height}
    width={width}
    padding={padding}
    paddingBlock={paddingBlock}
    paddingInline={paddingInline}
  >
    {children}
  </Container>
);

const Container = styled("div", {
  base: {
    display: "flex",
  },
  variants: {
    justifyContent: {
      "flex-start": { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      "flex-end": { justifyContent: "flex-end" },
      "space-between": { justifyContent: "space-between" },
      "space-around": { justifyContent: "space-around" },
      "space-evenly": { justifyContent: "space-evenly" },
    },
  },
});
