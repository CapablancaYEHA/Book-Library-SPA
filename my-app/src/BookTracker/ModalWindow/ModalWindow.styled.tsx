import styled from "styled-components";

import { Button } from "../../base-components/Button";

const ModalContainer = styled.div`
  position: absolute;
  max-width: 640px;
  width: 100%;
  padding: 40px 16px 16px 16px;
  height: auto;
  min-height: 5px;
  height: 320px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 5px;
  background-color: #ffffff;
  opacity: 0.5;
  z-index: 2;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 5px;
  right: 16px;
  background-color: red;
  border: 1px solid grey;
  z-index: 3;

  &:after {
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 21px;
    content: 'X';
  }
`;


export {
  ModalContainer,
  CloseButton
};
