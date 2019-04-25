import styled from "styled-components";

import { Button } from "../../base-components/Button";

import editIcon from "../img/edit_icon.svg";
import deleteIcon from "../img/delete_icon.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  margin-bottom: 16px;
  flex-flow: row nowrap;
  justify-content: space-between;
  min-width: 0;
  max-width: 100%;
  min-height: 5px;
  padding: 8px 8px;
  border-radius: 5px;
  border: 1px solid white;
`;

const ItemBody = styled.div`
  display: flex;
  min-width: 0;
  padding: 4px;
  flex: 0 1 80%;
  flex-flow: column wrap;
  margin-right: 8px;
`;

const BookTitle = styled.div`
  max-width: 100%;
  min-width: 0;
  margin-bottom: 8px;
  width: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
`;

const BookAuthor = styled.p`
  max-width: 100%;
  width: auto;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 10px;
  font-style: italic;
`;

const EditButton = styled(Button)`
  background-color: yellow;
  border: 1px solid grey;
  margin-right: 8px;

  &:after {
    background-image: url(${editIcon});
    background-size: 60%;
  }
`;

const DeleteButton = styled(Button)`
  background-color: red;
  border: 1px solid grey;

  &:after {
    background-image: url(${deleteIcon});
    background-size: 60%;
  }
`;

export {
  Container,
  ItemBody,
  EditButton,
  DeleteButton,
  BookTitle,
  BookAuthor
};
