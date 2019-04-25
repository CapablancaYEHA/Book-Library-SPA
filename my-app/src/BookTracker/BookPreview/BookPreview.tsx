import * as React from 'react';

// import { Link } from 'react-router-dom';

import {Link} from "../../base-components/Link";

import {
  Container,
  ItemBody,
  EditButton,
  DeleteButton,
  BookTitle,
  BookAuthor
} from "./BookPreview.styled";

import { BookParamsTypes } from "../types/BookParamsTypes";

type BookPreviewProps = {
  book: BookParamsTypes;
}

const BookPreview = ({ book }: BookPreviewProps) => (
  <Link to={`/book${book.id}`}>
    <Container>
      <ItemBody>
        <BookTitle>
          {book.title}
        </BookTitle>
        <BookAuthor>
          {book.author}
        </BookAuthor>
      </ItemBody>
      <EditButton onClick={() => ({})} type="submit" />
      <DeleteButton onClick={() => ({})} type="submit" />
    </Container>
  </Link>
);

export { BookPreview };
