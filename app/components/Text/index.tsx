import { FC, isValidElement } from "react";
import { styled } from "styled-system/jsx";

type Props = {
  component: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small',
  children: string,
  weight?: 'bold' | 'semibold' | 'normal' | 'light',
  size?: string,
  color?: string
}

export const Text: FC<Props> = ({
  component,
  children,
  weight,
  size,
  color
}) => {
  if (isValidElement(component)) {
    const StyledComponent = styled(component, {
      base: {
        fontWeight: weight || 'normal',
        fontSize: size || '16px',
        color: color || '#000'
      }
    });

    return <StyledComponent>{children}</StyledComponent>
  }

  return null;
}