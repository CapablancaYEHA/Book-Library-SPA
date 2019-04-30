import * as React from 'react';

import {
  Container,
  TitlePlaceholder,
  AuthorPlaceholder,
  CoverPlaceholder,
  CodePlaceholder,
  PubdatePlaceholder
} from "./BookPlaceholder.styled";

const BookPlaceholder = () => (
    <Container>
      <TitlePlaceholder/>
      <AuthorPlaceholder/>
      <CoverPlaceholder>Img 320 x Auto</CoverPlaceholder>
      <CodePlaceholder/>
      <PubdatePlaceholder/>
    </Container>
);

export { BookPlaceholder };
