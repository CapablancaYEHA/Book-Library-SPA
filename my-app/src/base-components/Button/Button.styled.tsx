import styled from "styled-components";

const Button = styled.button.attrs(props => ({ type: props.type || "submit" }))`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  border-radius: 2px
  margin: 0;
  padding: 0;
  color: #fff;
  cursor: pointer;
  outline: none;

  &:after {
    position: absolute;
    content: "";
    width: 25px;
    height: 25px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: transparent;
    background-position: center;
    background-repeat: no-repeat;
  }

    &:disabled {
      background-color: #b7c5d2;
      cursor: default;

      &:hover {
        box-shadow: 0px 0px 9px rgb(137, 0, 0, 0.4);
      }
    }
`;

export { Button as StyledButton};
