import * as React from 'react';

import {
  Container,
  ItemBody,
  EditButton,
  DeleteButton,
  BookTitle,
  BookAuthor
} from "./BookPreview.styled";

type BookPreviewProps = {
  onClick: () => void;
}

const BookPreview = ({ onClick}: BookPreviewProps) => (
    <Container>
      <ItemBody>
        <BookTitle>
          Долгие сказание о зиме и прочих неприятностях народа
        </BookTitle>

        <BookAuthor>
          Иван Дорн, Кристофер Нолан
        </BookAuthor>

      </ItemBody>
      <EditButton onClick={onClick} type="submit" />
      <DeleteButton onClick={onClick} type="submit" />
    </Container>
);

export { BookPreview };
