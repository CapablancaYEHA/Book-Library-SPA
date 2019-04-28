import * as React from 'react';

import {
  StyledButton
} from "./Button.styled";

import {button} from "../../BookTracker/types";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: button;
  className?: string;
}

const Button = ({ children, className, onClick, type = "submit" }: ButtonProps) => (
  <StyledButton onClick={onClick} type={type} className={className} >
    {children}
  </StyledButton>
);

export { Button };
