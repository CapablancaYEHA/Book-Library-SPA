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

import {db} from "../IndexedDB";

type BookTrackerProps = {
  books: BookParamsTypes[];
};

type BookTrackerState = {
  isModalOpen: boolean;
  books: BookParamsTypes[];
};

class BookTracker extends React.Component<BookTrackerProps, BookTrackerState> {
  state = {
    isModalOpen: false,
    books: []
  }

  componentDidMount() {
    db.table('books').toArray().then((books) => {
        this.setState({ books });
      });
  }

  addBook = (book: BookParamsTypes):void => {
    const bookItem = {
      title: book.title,
      author: book.author,
      cover: book.cover,
      isbn: book.bookCode,
      pubdate: book.pubDate,
      done: false,
    };
    db.table('books')
      .add(bookItem)
      .then((id) => {
        const newList = [...this.state.books, Object.assign({}, book, { id })];
        this.setState({ books: newList });
      });
  }

  render() {
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
              {this.state.books.map((book, i: number) => (
                <BookPreview key={i} book={book} />
              ))}
            </>
          </MasterContainer>

          <DetailContainer>
            {this.state.books.map((book, j: number) => (
              <Route key={j} path={`/book${j+1}`} render={props => <BookDetailed book={book} match={j+1} {...props}/>}/>
            ))}
          </DetailContainer>

          <ModalWindow isOpen={this.state.isModalOpen} operateModal={toggleModal} addBook={this.addBook}/>
        </TrackerLayout>
      </Container>
    )
  }
};

export { BookTracker };
