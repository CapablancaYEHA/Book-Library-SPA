import * as React from "react";

import { ErrorContainer, ErrorMessageContainer } from "./ErrorWrapper.styled";

import { ErrorMessage } from "../ErrorMessage";

type ErrorWrapperType = {
  actionOnError?: {
    conditionalError: string;
    callToAction: string;
    messageAfterAction?: string;
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
