import * as React from "react";

import {
  ErrorCallToAction,
  ErrorMessage as StyledErrorMessage
} from "./ErrorMessage.styled";

type ErrorMessageProps = {
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
  /** Ошибка */
  error?: string;
};

class ErrorMessage extends React.Component<ErrorMessageProps> {
  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (this.props.actionOnError) {
      this.props.actionOnError.onClick();
    }
  };

  render() {
    const { actionOnError, error } = this.props;

    return (
      <>
        <StyledErrorMessage>{error}</StyledErrorMessage>

        {actionOnError && actionOnError.conditionalError === error && (
          <>
            &nbsp;
            <ErrorCallToAction
              onClick={this.handleClick}
              data-testid="input-error-call-to-action"
            >
              {actionOnError.callToAction}
            </ErrorCallToAction>
            <StyledErrorMessage>
              {actionOnError.messageAfterAction || null}
            </StyledErrorMessage>
          </>
        )}
      </>
    );
  }
}

export { ErrorMessage };
