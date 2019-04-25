import styled from "styled-components";


const ErrorContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ErrorMessageContainer = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: 100%;
`;

export { ErrorContainer, ErrorMessageContainer };
