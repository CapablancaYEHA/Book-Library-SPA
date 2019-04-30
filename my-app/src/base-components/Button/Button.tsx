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
  isDisabled?: boolean;
}

const Button = ({ children, isDisabled, className, onClick, type = "submit" }: ButtonProps) => (
  <StyledButton onClick={onClick} type={type} className={className} disabled={isDisabled}>
    {children}
  </StyledButton>
);

export { Button };
