import styled from "styled-components";

import { Button } from "../../base-components/Button";

const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: none;
  position: absolute;
  max-width: 640px;
  width: 100%;
  padding: 45px 20px 16px 20px;
  height: auto;
  min-height: 320px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 12px;
  z-index: 2;

  ${props => props.isOpen && `
    display: block;
  `};
`;

const Title = styled.div`
  margin: 0 auto;
  padding: 8px 0px 16px 0px;
  text-align: center;
  font-size: 20px;
  color: #333333;
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
  Title,
  CloseButton
};
