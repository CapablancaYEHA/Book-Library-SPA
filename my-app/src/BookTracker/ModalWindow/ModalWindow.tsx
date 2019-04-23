import * as React from 'react';

import {
  ModalContainer,
  CloseButton
} from "./ModalWindow.styled";

const ModalWindow = () => (
  <ModalContainer>
    <CloseButton type="button" onClick={() => ({})}/>
    Модалка, для добавления книги через заполнение полей.



  </ModalContainer>
);

export { ModalWindow };
