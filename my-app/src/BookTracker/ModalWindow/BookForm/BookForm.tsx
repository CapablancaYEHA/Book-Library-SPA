import * as React from "react";

import { BookInput } from "../BookInput";
import { getIsbnBoolean } from "../../utils";

import {
  FormContainer,
  SubmitButton
} from "./BookForm.styled";

type BookFormState = {
  hasError?: boolean;
}

class BookForm extends React.Component<BookFormState> {
  state = {
    hasError: false,
    title: "",
    author:  "",
    cover: "",
    isbn: "",
    pubdate: ""
  };

  onBlurISBN = () => {
    this.setState({ hasError: !getIsbnBoolean(this.state.isbn) });
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>):any => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    return (
      <FormContainer>
        <BookInput name="title" label="Название книги" placeholder="название" value={this.state.title} onChange={this.onChange}/>
        <BookInput name="author" label="Автор(ы)" placeholder="В библиотеке еще нет авторов" value={this.state.author} onChange={this.onChange}/>
        <BookInput name="cover" label="Обложка" placeholder="URL изображения" value={this.state.cover} onChange={this.onChange} />
        <BookInput name="isbn" label="ISBN книги" placeholder="Например, 2-266-11156-6" error="невалидный ISBN" value={this.state.isbn} onChange={this.onChange} onBlur={this.onBlurISBN} showError={this.state.hasError}/>
        <BookInput name="pubdate" label="Год публикации" placeholder="2019" value={this.state.pubdate} onChange={this.onChange}/>
        <SubmitButton type="submit">Добавить книгу</SubmitButton>
      </FormContainer>
    );
  }
};

export { BookForm };
