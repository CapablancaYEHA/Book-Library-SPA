import styled from "styled-components";

import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:active, &:visited {
    color: inherit;
    text-decoration: none;
  }
`;



export {
  StyledLink as Link
};
