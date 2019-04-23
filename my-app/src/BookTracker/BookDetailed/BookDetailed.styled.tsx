import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 100%;
  height: 100%;
  flex-flow: column wrap;
  align-items: flex-start;
`;

const BookTitle = styled.div`
  font-size: 24px;
  line-height: 1.33;
  font-weight: 700;
  margin-bottom: 16px;
`;

const BookAuthor = styled.div`
  font-size: 14px;
  line-height: 1.33;
  margin-bottom: 16px;
`;

const Cover = styled.img`
  max-width: 320px;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const BookCode = styled.div`
  font-size: 14px;
  line-height: 1.33;
  margin-bottom: 16px;
`;

const PubDate = styled.div`
  font-size: 14px;
  line-height: 1.33;
`;

export {
  Container,
  BookTitle,
  BookAuthor,
  Cover,
  BookCode,
  PubDate
};
