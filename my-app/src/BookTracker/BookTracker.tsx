import * as React from 'react';
import { Route } from 'react-router-dom';

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

import { BookParamsTypes } from "./types/BookParamsTypes";

type BookTrackerProps = {
  books: BookParamsTypes[];
};

type BookTrackerState = {
  isModalOpen: boolean;
};

class BookTracker extends React.Component<BookTrackerProps, BookTrackerState> {
  state = {
    isModalOpen: false
  }

  render() {
    const books = this.props.books;

    const toggleModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      this.setState({
        isModalOpen: !this.state.isModalOpen
      })
    }

    return (
      <Container>
        <SwitchContainer onClick={() => ({ })}>
          <LangButton type="button" />
          <LangSign>English</LangSign>
        </SwitchContainer>
        <TrackerLayout>
          <MasterContainer>
            <AddButtonContainer>
              <AddButton onClick={toggleModal}/>
            </AddButtonContainer>
            <>
              {books.map((book, i: number) => (
                <BookPreview key={i} book={book} />
              ))}
            </>
          </MasterContainer>

          <DetailContainer>
            {books.map((book, j: number) => (
              <Route key={j} path={`/book${book.id}`} render={props => <BookDetailed book={book} match={book.id} {...props}/>}/>
            ))}
          </DetailContainer>

          <ModalWindow isOpen={this.state.isModalOpen} operateModal={toggleModal}/>
        </TrackerLayout>
      </Container>
    )
  }

};

export { BookTracker };
