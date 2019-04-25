import * as React from "react";

import { ErrorWrapper } from "./ErrorWrapper";

import {
  Input as StyledInput,
  InputContainer,
  InputLabel
} from "./Form.styled";

type FormProps = {
  /** Ошибка, в которую можно поместить кликабельный элемент */
  actionOnError?: {
    /** Ошибка, совпадение с которой покажет кликабельную ошибку */
    conditionalError: string;
    /** Кликабельный элемент в виде строки */
    callToAction: string;
    /** Текс ошибки после кликабельного элемента */
    messageAfterAction?: string;
    /** Колбэк, срабатывающий по нажатию на кликабельный элемент */
    onClick: () => void;
  };
  /**
   * Стоит ли в поле фокус
   * @default false
   */
  active?: boolean;

  error?: string;
  /** Уникальный идентификатор */
  id?: string;
  /** Лейбл */
  label: string;
  /** Имя */
  name: string;
  /** Колбэк срабатывающий при потере фокуса */
  onBlur: <T>(event?: React.FocusEvent<T>) => void;
  /** Колбэк срабатывающий при изменении значения в поле */
  onChange: <T>(event: React.ChangeEvent<T> | any) => void;
  /** Колбэк срабатывающий при установке фокуса */
  onFocus: <T>(event?: React.FocusEvent<T>) => void;
  /**
   * Плейсхолдер
   * @default ""
   */
  placeholder?: string;
  /** Показывать ли ошибку */
  showError?: boolean;
  /** Значение поля */
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
