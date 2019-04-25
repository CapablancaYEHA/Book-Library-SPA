import styled from "styled-components";

import { Button } from "../../../base-components/Button";

const FormContainer = styled.form`
  display: block;
  max-width: 100%;
  margin: 0 auto;

  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`;

const SubmitButton = styled(Button)`
  margin: 0 auto;
  display: block;
  width: 200px;
  height: 40px;
  text-align: center;
  background-color: blue;
  color: #ffffff;

  &:after {
    display: none;
  }
`;

export {
  FormContainer,
  SubmitButton
};
