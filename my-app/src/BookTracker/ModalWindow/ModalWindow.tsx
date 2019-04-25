import * as React from 'react';

import { BookForm } from "./BookForm";

import {
  ModalContainer,
  Title,
  CloseButton
} from "./ModalWindow.styled";


type ModalWindowProps = {
  isOpen: boolean;
  operateModal: (e: React.MouseEvent<HTMLButtonElement> ) => void;
}

const ModalWindow = ({isOpen, operateModal}: ModalWindowProps) => (
  <ModalContainer isOpen={isOpen}>
    <CloseButton type="button" onClick={operateModal}/>
    <Title>Добавление новой книги</Title>
    <BookForm />
  </ModalContainer>
);

export { ModalWindow };
