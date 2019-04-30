import * as React from 'react';

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
  deleteBook: (id: number | undefined) => void;
}

const BookPreview = ({ book, deleteBook }: BookPreviewProps) => (
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
      <DeleteButton onClick={() => deleteBook(book.id)} type="submit" />
    </Container>
  </Link>
);

export { BookPreview };
