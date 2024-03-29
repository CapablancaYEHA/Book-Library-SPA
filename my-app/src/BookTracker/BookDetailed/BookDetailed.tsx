import * as React from 'react';

import {
  Container,
  BookTitle,
  BookAuthor,
  Cover,
  BookCode,
  Pubdate
} from "./BookDetailed.styled";

import { BookParamsTypes } from "../types/BookParamsTypes";

type BookDetailedProps = {
  book: BookParamsTypes;
};

const BookDetailed = ({book}: BookDetailedProps) => (
    <Container>
      <BookTitle>{book.title}</BookTitle>
      <BookAuthor>Авторство: {book.author}</BookAuthor>
      {book.cover && <Cover src={book.cover} alt={`cover${book.id}`} />}
      <BookCode>ISBN: {book.bookCode}</BookCode>
      {book.pubDate && <Pubdate>Год выпуска: {book.pubDate}</Pubdate>}
    </Container>
);

export { BookDetailed };
