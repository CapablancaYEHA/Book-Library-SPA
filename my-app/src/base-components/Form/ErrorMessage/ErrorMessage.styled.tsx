import styled, { css } from "styled-components";

const errorText = css`
  font-size: 12px;
  line-height: 18px;
  font-family: "Roboto", sans-serif;
`;

const ErrorCallToAction = styled.a`
  ${errorText};
  color: #2085e4;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  ${errorText};
  height: 18px;
  color: #eb5757;
`;

export { ErrorCallToAction, ErrorMessage };
