import * as React from "react";

import { ErrorWrapper } from "./ErrorWrapper";

import {
  Input as StyledInput,
  InputContainer,
  InputLabel
} from "./Form.styled";

type FormProps = {
  actionOnError?: {
    conditionalError: string;
    callToAction: string;
    messageAfterAction?: string;
    onClick: () => void;
  };
  active?: boolean;
  error?: string;
  id?: string;
  label: string;
  name: string;
  onBlur: <T>(event?: React.FocusEvent<T>) => void;
  onChange: <T>(event: React.ChangeEvent<T> | any) => void;
  onFocus: <T>(event?: React.FocusEvent<T>) => void;
  placeholder?: string;
  showError?: boolean;
  value: string;
};

const Form: React.SFC<FormProps> = ({
  actionOnError,
  active = false,
  error,
  id,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  showError,
  value
}) => {
  const isLabelInTopPosition = active || !!value;
  const isPlaceholderVisible = active && !value;

  return (
    <ErrorWrapper
      actionOnError={actionOnError}
      error={error}
      showError={showError}
    >
      <InputContainer>
        <InputLabel
          htmlFor={name}
          isInTopPosition={isLabelInTopPosition}
        >
          {label}
        </InputLabel>

        <StyledInput
          active={active}
          data-testid="styled-input"
          hasError={showError}
          id={id || name}
          isPlaceholderVisible={isPlaceholderVisible}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          type="text"
          value={value}
        />
      </InputContainer>
    </ErrorWrapper>
  );
};

export { Form };
