import * as React from 'react';
import { Route } from 'react-router-dom';

import { Container } from "../layout-components/Container";
import { BookPreview } from "./BookPreview";
import { BookDetailed } from "./BookDetailed";
import { BookPlaceholder } from "./BookPlaceholder";
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
        /* tslint:disable-next-line */
        const newList = [...this.state.books, Object.assign({}, book, { id })];
        this.setState({ books: newList });
      });
  }

  deleteBook = (id: number | undefined):void => {
    db.table('books')
      .delete(id)
      .then(() => {
        const newList = this.state.books.filter((book: BookParamsTypes) => book.id !== id);
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
              {this.state.books.map((book:BookParamsTypes, i: number) => (
                <BookPreview key={i} book={book} deleteBook={this.deleteBook} />
              ))}
            </>
          </MasterContainer>

          {this.state.books[0] ?
            <DetailContainer>
              {this.state.books.map((book: BookParamsTypes, j: number) => (
                <Route key={j} path={`/book:${book.id}`} render={props =><BookDetailed book={book} {...props} />} />
              ))}
            </DetailContainer>
            :
            <DetailContainer>
              <BookPlaceholder/>
            </DetailContainer>
          }

          {/* <Route path="*" component={BookPlaceholder}/> */}

          <ModalWindow isOpen={this.state.isModalOpen} operateModal={toggleModal} addBook={this.addBook} />
        </TrackerLayout>
      </Container>
    )
  }
};

export { BookTracker };
