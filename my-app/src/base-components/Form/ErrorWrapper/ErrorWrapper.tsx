import * as React from "react";

import { ErrorContainer, ErrorMessageContainer } from "./ErrorWrapper.styled";

import { ErrorMessage } from "../ErrorMessage";

type ErrorWrapperType = {
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
  children: React.ReactNode;
  error?: string;
  showError?: boolean;
};

const ErrorWrapper: React.SFC<ErrorWrapperType> = ({
  actionOnError,
  children,
  error,
  showError
}) => (
  <ErrorContainer>
    {children}

    {!!showError && (
      <ErrorMessageContainer>
        <ErrorMessage actionOnError={actionOnError} error={error} />
      </ErrorMessageContainer>
    )}
  </ErrorContainer>
);

export { ErrorWrapper };
