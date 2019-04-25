import styled from "styled-components";

const Input = styled.input<{
  hasError?: boolean;
  active: boolean;
  isPlaceholderVisible: boolean;
}>`
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  padding: 24px 23px 8px;
  color: #4f4f4f;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 18px;
  line-height: 22px;
  font-family: "Roboto", sans-serif;
  border-color: #e0e0e0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 1;
    color: transparent;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:disabled {
    background-color: #f2f3f4;
    border-color: #f2f3f4;
    cursor: default;
  }

  ${props =>
    props.isPlaceholderVisible &&
    `
      &::placeholder {
        opacity: 1;
        color: #999;
      }
    `};

  ${props =>
    props.hasError &&
    `
    border-color: #eb5757;
  `};
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputLabel = styled.label<{
  isInTopPosition: boolean;
}>`
  position: absolute;
  top: 17px;
  padding-left: 24px;
  color: #828282;
  cursor: text;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 18px;
  font-family: "Roboto", sans-serif;

  ${props =>
    props.isInTopPosition &&
    `
    top: 6px;
    font-size: 12px;
  `};

`;

export { Input, InputContainer, InputLabel };
