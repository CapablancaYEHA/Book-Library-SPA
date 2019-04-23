import * as React from 'react';

import {
  Container,
  BookTitle,
  // BookAuthor,
  // Cover,
  // BookCode,
  // PubDate
} from "./BookDetailed.styled";

import { BookParamsTypes } from "../types/BookParamsTypes";

type BookDetailedProps = {
  book: BookParamsTypes[];
};

const BookDetailed = ({ book }: BookDetailedProps) => (

  {book.map((item: any, i: number) => (
    <Container key={i}>
      <BookTitle>{item.title}</BookTitle>
      {/*
      <BookAuthor>Авторство: {item.author}</BookAuthor>
      <Cover src={item.cover} alt="cover" />
      <BookCode>ISBN: {item.bookCode}</BookCode>
      <PubDate>Год выпуска: {item.pubDate}</PubDate>
      */
      }
    </Container>
  ))}
);

export { BookDetailed };
