import * as React from 'react';

import { Container } from "../layout-components/Container";
import { BookPreview } from "./BookPreview";
import { BookDetailed } from "./BookDetailed";
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

const BookTracker = () => (
  <>
  <Container>
    <SwitchContainer>
      <LangButton type="button" onClick={() => ({})} />
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
        <BookDetailed />
      </DetailContainer>

      <ModalWindow />
    </TrackerLayout>
  </Container>
  </>
);

export { BookTracker };
