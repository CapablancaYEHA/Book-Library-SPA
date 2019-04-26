import * as React from "react";

import { BookInput } from "../BookInput";
import { getIsbnBoolean, getPubdateBoolean, getTitleBoolean } from "../../utils";
import {regexAuthors} from "../../constants";

import {
  FormContainer,
  SubmitButton
} from "./BookForm.styled";

type BookFormState = {
  IsbnHasError?: boolean;
  PubdateHasError?: boolean;
  TitleHasError?: boolean;
  AuthorHasError?: boolean;
}

class BookForm extends React.Component<BookFormState> {
  state = {
    IsbnHasError: false,
    PubdateHasError: false,
    TitleHasError: false,
    AuthorHasError: false,
    title: "",
    author:  "",
    cover: "",
    isbn: "",
    pubdate: ""
  };

  onBlurISBN = () => {
    this.setState({ IsbnHasError: !getIsbnBoolean(this.state.isbn) });
  };

  onBlurPubdate = () => {
    this.setState({ PubdateHasError: !getPubdateBoolean(this.state.pubdate) });
  };

  onBlurTitle = () => {
    this.setState({ TitleHasError: !getTitleBoolean(this.state.title) });
  }

  onBlurAuthor = () => {
    this.setState({ AuthorHasError: !regexAuthors.test(this.state.author) });
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>):any => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    return (
      <FormContainer>
        <BookInput name="title" label="Название книги" placeholder="Название" error="название книги не может быть пустым" value={this.state.title} onChange={this.onChange} onBlur={this.onBlurTitle} showError={this.state.TitleHasError} />
        <BookInput name="author" label="Автор(ы)" placeholder="В библиотеке еще нет авторов" error="минимум один автор" value={this.state.author} onChange={this.onChange} onBlur={this.onBlurAuthor} showError={this.state.AuthorHasError} />
        <BookInput name="cover" label="Обложка" placeholder="URL изображения" value={this.state.cover} onChange={this.onChange} />
        <BookInput name="isbn" label="ISBN книги" placeholder="Например, 2-266-11156-6" error="невалидный ISBN" value={this.state.isbn} onChange={this.onChange} onBlur={this.onBlurISBN} showError={this.state.IsbnHasError} />
        <BookInput name="pubdate" label="Год публикации" placeholder="Например, 2019" error="неверный год публикации" value={this.state.pubdate} onChange={this.onChange} onBlur={this.onBlurPubdate} showError={this.state.PubdateHasError} />
        <SubmitButton type="submit">Добавить книгу</SubmitButton>
      </FormContainer>
    );
  }
};

export { BookForm };
