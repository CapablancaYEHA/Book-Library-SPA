import * as React from 'react';

import { BookForm } from "./BookForm";

import {
  ModalContainer,
  Title,
  CloseButton
} from "./ModalWindow.styled";

import { BookParamsTypes } from "../types/BookParamsTypes";

type ModalWindowProps = {
  isOpen: boolean;
  operateModal: (e: React.MouseEvent<HTMLButtonElement> ) => void;
  addBook: (book: BookParamsTypes) => void;
}

const ModalWindow = ({isOpen, operateModal, addBook}: ModalWindowProps) => (
  <ModalContainer isOpen={isOpen}>
    <CloseButton type="button" onClick={operateModal}/>
    <Title>Добавление новой книги</Title>
    <BookForm addBook={addBook} />
  </ModalContainer>
);

export { ModalWindow };
