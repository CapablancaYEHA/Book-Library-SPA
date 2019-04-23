import * as React from 'react';

import { Container } from "../layout-components/Container";
import { BookPreview } from "./BookPreview";
// import { BookDetailed } from "./BookDetailed";
import { ModalWindow } from "./ModalWindow";

import {
  TrackerLayout,
  MasterContainer,
  DetailContainer,
  AddButtonContainer,
  AddButton,
  SwitchContainer,
  LangButton,
  LangSign
} from "./BookTracker.styled";

import { BookParamsTypes } from "./types/BookParamsTypes";

type BookTrackerProps = {
  book: BookParamsTypes[];
};

const BookTracker = ({ book }: BookTrackerProps) => (
  <Container>
    <SwitchContainer>
      <LangButton type="button" onClick={() => ({ })} />
      <LangSign>English</LangSign>
    </SwitchContainer>
    <TrackerLayout>
      <MasterContainer>
        <AddButtonContainer>
          <AddButton onClick={() => ({})}/>
        </AddButtonContainer>
        <BookPreview onClick={() => ({})}/>
      </MasterContainer>

      <DetailContainer>
        {/*
          <BookDetailed book={book}/>
          */}
      </DetailContainer>

      <ModalWindow />
    </TrackerLayout>
  </Container>
);

export { BookTracker };
