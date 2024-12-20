import { Link } from "@remix-run/react";
import { styled } from "styled-system/jsx";

export const Brand = styled("h3", {
  base: {
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "10px",
  },
});

export const MenuItem = styled(Link, {
  base: {
    paddingInline: "16px",
    color: "rgba(0,0,0,0.6)",
    _hover: {
      color: "rgba(0,0,0,0.9)",
    },
  },
});
