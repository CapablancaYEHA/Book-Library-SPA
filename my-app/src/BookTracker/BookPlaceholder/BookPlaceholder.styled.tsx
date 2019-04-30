import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 100px;
  height: auto;
  flex-flow: column wrap;
  align-items: flex-start;
`;

const TitlePlaceholder = styled.div`
  max-width: 80%;
  height: 40px;
  margin-bottom: 16px;
  border-radius: 5px;
  background-color: #C6C6C6;
`;

const AuthorPlaceholder= styled.div`
  max-width: 40%;
  height: 20px;
  margin-bottom: 16px;
  border-radius: 5px;
  background-color: #C6C6C6;
`;

const CoverPlaceholder = styled.div`
  width: 320px;
  height: 480px;
  margin-bottom: 16px;
  text-align: center;
  vertical-align: middle;
  line-height: 480px;
  font-size: 24px;
  background-color: #C6C6C6;
  color: #919191;
  border-radius: 5px;
`;

const CodePlaceholder = styled.div`
  max-width: 40%;
  height: 15px;
  border-radius: 5px;
  background-color: #C6C6C6;
  margin-bottom: 16px;
`;

const PubdatePlaceholder = styled.div`
  max-width: 30%;
  height: 10px;
  border-radius: 5px;
  background-color: #C6C6C6;
`;

export {
  Container,
  TitlePlaceholder,
  AuthorPlaceholder,
  CoverPlaceholder,
  CodePlaceholder,
  PubdatePlaceholder
};
