import * as React from 'react';

import {
  Container,
  BookTitle,
  BookAuthor,
  Cover,
  BookCode,
  PubDate
} from "./BookDetailed.styled";

import testCover from "../img/cover_example.jpg";

/*
type BookDetailedProps = {
  title: string;
  author: string | string[];
  bookCode: string;
  cover?: string;
  pubDate?: number;
};
*/

const BookDetailed = () => (
    <Container>
      <BookTitle>Долгие сказание о зиме и прочих неприятностях народа</BookTitle>
      <BookAuthor>Авторство: Иван Дорн, Кристофер Нолан</BookAuthor>
      <Cover src={testCover} alt="cover" />
      <BookCode>ISBN: 978-3-16-148410-0</BookCode>

      <PubDate>Год выпуска: 1955</PubDate>
    </Container>
);

export { BookDetailed };
